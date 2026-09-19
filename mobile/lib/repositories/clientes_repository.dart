import 'dart:async';
import 'dart:convert';

import 'package:drift/drift.dart';
import 'package:uuid/uuid.dart';

import '../database/app_database.dart';
import '../services/clientes_api_service.dart';

class ClientesRepository {
  ClientesRepository(
    this._database, {
    ClientesApiService? apiService,
  }) : _apiService =
            apiService ?? ClientesApiService();

  final AppDatabase _database;
  final ClientesApiService _apiService;

  static const Uuid _uuid = Uuid();

  static const int _maximoIntentos = 3;

  Stream<List<ClientesLocale>> observarClientes() {
    return _database.observarClientesLocales();
  }

  Future<List<ClientesLocale>> obtenerClientesLocales() {
    return _database.obtenerClientesLocales();
  }

  Future<void> sincronizarClientes() async {
    await _procesarOperacionesPendientes();

    final clientesServidor =
        await _apiService.listarClientes();

    final ahora = DateTime.now();

    final clientesLocales =
        clientesServidor.map((cliente) {
      return _crearClienteServidorCompanion(
        cliente,
        ahora,
      );
    }).toList();

    await _database.guardarClientesLocales(
      clientesLocales,
    );
  }

  Future<String> crearClienteOffline({
    required String nombre,
    required String correo,
    required String telefono,
    String? direccion,
  }) async {
    final idLocal = _uuid.v4();
    final idOperacion = _uuid.v4();

    final nombreLimpio = nombre.trim();

    final correoLimpio =
        correo.trim().toLowerCase();

    final telefonoLimpio =
        telefono.trim();

    final direccionLimpia =
        direccion?.trim();

    final direccionFinal =
        direccionLimpia == null ||
                direccionLimpia.isEmpty
            ? null
            : direccionLimpia;

    final cliente =
        ClientesLocalesCompanion(
      idLocal: Value(idLocal),
      nombre: Value(nombreLimpio),
      correo: Value(correoLimpio),
      telefono: Value(telefonoLimpio),
      direccion: Value(direccionFinal),
      pendienteSincronizacion:
          const Value(true),
      eliminadoLocalmente:
          const Value(false),
    );

    final datosOperacion = jsonEncode({
      'nombre': nombreLimpio,
      'correo': correoLimpio,
      'telefono': telefonoLimpio,
      'direccion': direccionFinal,
    });

    final operacion =
        OperacionesPendientesCompanion(
      idOperacion: Value(idOperacion),
      tipo: const Value('CREAR'),
      entidad: const Value('CLIENTE'),
      idEntidadLocal: Value(idLocal),
      datosJson: Value(datosOperacion),
      intentos: const Value(0),
      estado: const Value('pendiente'),
    );

    await _database.guardarClienteConOperacion(
      cliente: cliente,
      operacion: operacion,
    );

    return idLocal;
  }

  Future<void> _procesarOperacionesPendientes() async {
    final operaciones =
        await _database.obtenerOperacionesPendientes();

    for (final operacion in operaciones) {
      if (operacion.entidad != 'CLIENTE' ||
          operacion.tipo != 'CREAR') {
        continue;
      }

      await _procesarCreacionPendiente(
        operacion,
      );
    }
  }

  Future<void> _procesarCreacionPendiente(
    OperacionesPendiente operacion,
  ) async {
    final datosDecodificados =
        jsonDecode(operacion.datosJson);

    if (datosDecodificados is! Map) {
      throw Exception(
        'Los datos de la operación pendiente '
        'no tienen un formato válido.',
      );
    }

    final datos =
        Map<String, dynamic>.from(
      datosDecodificados,
    );

    var intentoActual = operacion.intentos;

    while (intentoActual < _maximoIntentos) {
      try {
        if (intentoActual > 0) {
          final segundosEspera =
              _calcularBackoff(
            intentoActual,
          );

          await Future<void>.delayed(
            Duration(
              seconds: segundosEspera,
            ),
          );
        }

        final clienteServidor =
            await _apiService.crearCliente(
          datos: datos,
          idOperacion:
              operacion.idOperacion,
        );

        final ahora = DateTime.now();

        final clienteCompanion =
            _crearClienteServidorCompanion(
          clienteServidor,
          ahora,
        );

        await _database.confirmarCreacionCliente(
          idLocal:
              operacion.idEntidadLocal,
          idOperacion:
              operacion.idOperacion,
          clienteServidor:
              clienteCompanion,
        );

        return;
      } catch (_) {
        intentoActual++;

        final agotada =
            intentoActual >= _maximoIntentos;

        await _database.registrarIntentoOperacion(
          idOperacion:
              operacion.idOperacion,
          intentos: intentoActual,
          agotada: agotada,
        );

        if (agotada) {
          rethrow;
        }
      }
    }
  }

  int _calcularBackoff(int intentoAnterior) {
    switch (intentoAnterior) {
      case 1:
        return 1;
      case 2:
        return 2;
      default:
        return 4;
    }
  }

  ClientesLocalesCompanion
      _crearClienteServidorCompanion(
    Map<String, dynamic> cliente,
    DateTime ahora,
  ) {
    final idServidor = cliente['id'];

    if (idServidor is! int) {
      throw Exception(
        'Se recibió un cliente con '
        'identificador inválido.',
      );
    }

    final updatedAt =
        cliente['updatedAt']?.toString();

    return ClientesLocalesCompanion(
      idLocal: Value(
        'servidor_$idServidor',
      ),
      idServidor: Value(idServidor),
      nombre: Value(
        cliente['nombre']?.toString() ?? '',
      ),
      correo: Value(
        cliente['correo']?.toString() ?? '',
      ),
      telefono: Value(
        cliente['telefono']?.toString() ?? '',
      ),
      direccion: Value(
        cliente['direccion']?.toString(),
      ),
      actualizadoEnServidor: Value(
        updatedAt != null
            ? DateTime.tryParse(updatedAt)
            : null,
      ),
      ultimaSincronizacion: Value(ahora),
      pendienteSincronizacion:
          const Value(false),
      eliminadoLocalmente:
          const Value(false),
    );
  }
}