import 'package:drift/drift.dart';

import '../database/app_database.dart';
import '../services/clientes_api_service.dart';

class ClientesRepository {
  ClientesRepository(
    this._database, {
    ClientesApiService? apiService,
  }) : _apiService = apiService ?? ClientesApiService();

  final AppDatabase _database;
  final ClientesApiService _apiService;

  Stream<List<ClientesLocale>> observarClientes() {
    return _database.observarClientesLocales();
  }

  Future<List<ClientesLocale>> obtenerClientesLocales() {
    return _database.obtenerClientesLocales();
  }

  Future<void> sincronizarClientes() async {
    final clientesServidor =
        await _apiService.listarClientes();

    final ahora = DateTime.now();

    final clientesLocales =
        clientesServidor.map((cliente) {
      final idServidor = cliente['id'];

      if (idServidor is! int) {
        throw Exception(
          'Se recibió un cliente con identificador inválido.',
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
    }).toList();

    await _database.guardarClientesLocales(
      clientesLocales,
    );
  }
}