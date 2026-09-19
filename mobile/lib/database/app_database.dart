import 'dart:io';

import 'package:drift/drift.dart';
import 'package:drift/native.dart';
import 'package:path/path.dart' as p;
import 'package:path_provider/path_provider.dart';
import 'package:sqlite3/sqlite3.dart';

part 'app_database.g.dart';

class ClientesLocales extends Table {
  TextColumn get idLocal => text()();

  IntColumn get idServidor => integer().nullable()();

  TextColumn get nombre => text()();

  TextColumn get correo => text()();

  TextColumn get telefono => text()();

  TextColumn get direccion => text().nullable()();

  DateTimeColumn get actualizadoEnServidor =>
      dateTime().nullable()();

  DateTimeColumn get ultimaSincronizacion =>
      dateTime().nullable()();

  BoolColumn get pendienteSincronizacion =>
      boolean().withDefault(const Constant(false))();

  BoolColumn get eliminadoLocalmente =>
      boolean().withDefault(const Constant(false))();

  @override
  Set<Column> get primaryKey => {idLocal};
}

class OperacionesPendientes extends Table {
  TextColumn get idOperacion => text()();

  TextColumn get tipo => text()();

  TextColumn get entidad => text()();

  TextColumn get idEntidadLocal => text()();

  TextColumn get datosJson => text()();

  IntColumn get intentos =>
      integer().withDefault(const Constant(0))();

  TextColumn get estado =>
      text().withDefault(const Constant('pendiente'))();

  DateTimeColumn get creadoEn =>
      dateTime().withDefault(currentDateAndTime)();

  @override
  Set<Column> get primaryKey => {idOperacion};
}

@DriftDatabase(
  tables: [
    ClientesLocales,
    OperacionesPendientes,
  ],
)
class AppDatabase extends _$AppDatabase {
  AppDatabase() : super(_abrirConexion());

  static const Duration vigenciaCacheClientes =
      Duration(days: 7);

  @override
  int get schemaVersion => 2;

  @override
  MigrationStrategy get migration {
    return MigrationStrategy(
      onCreate: (m) async {
        await m.createAll();
      },
      onUpgrade: (m, desde, hasta) async {
        if (desde < 2) {
          await m.addColumn(
            clientesLocales,
            clientesLocales.direccion,
          );
        }
      },
    );
  }

  // ============================================================
  // CLIENTES LOCALES
  // ============================================================

  Future<List<ClientesLocale>> obtenerClientesLocales() {
    return (select(clientesLocales)
          ..where(
            (cliente) =>
                cliente.eliminadoLocalmente.equals(false),
          )
          ..orderBy([
            (cliente) =>
                OrderingTerm.asc(cliente.nombre),
          ]))
        .get();
  }

  Future<List<ClientesLocale>>
      obtenerTodosClientesLocales() {
    return select(clientesLocales).get();
  }

  Stream<List<ClientesLocale>>
      observarClientesLocales() {
    return (select(clientesLocales)
          ..where(
            (cliente) =>
                cliente.eliminadoLocalmente.equals(false),
          )
          ..orderBy([
            (cliente) =>
                OrderingTerm.asc(cliente.nombre),
          ]))
        .watch();
  }

  Future<void> guardarClienteLocal(
    ClientesLocalesCompanion cliente,
  ) async {
    await into(clientesLocales).insertOnConflictUpdate(
      cliente,
    );
  }

  Future<void> guardarClientesLocales(
    List<ClientesLocalesCompanion> clientes,
  ) async {
    await batch((batch) {
      batch.insertAllOnConflictUpdate(
        clientesLocales,
        clientes,
      );
    });
  }

  Future<void> marcarClienteEliminado(
    String idLocal,
  ) async {
    await (update(clientesLocales)
          ..where(
            (cliente) =>
                cliente.idLocal.equals(idLocal),
          ))
        .write(
      const ClientesLocalesCompanion(
        eliminadoLocalmente: Value(true),
        pendienteSincronizacion: Value(true),
      ),
    );
  }

  Future<void> eliminarClienteDefinitivamente(
    String idLocal,
  ) async {
    await (delete(clientesLocales)
          ..where(
            (cliente) =>
                cliente.idLocal.equals(idLocal),
          ))
        .go();
  }

  // ============================================================
  // CONTROL DE CACHÉ
  // ============================================================

  Future<DateTime?>
      obtenerUltimaSincronizacionClientes() async {
    final consulta = select(clientesLocales)
      ..where(
        (cliente) =>
            cliente.ultimaSincronizacion.isNotNull(),
      )
      ..orderBy([
        (cliente) => OrderingTerm.desc(
              cliente.ultimaSincronizacion,
            ),
      ])
      ..limit(1);

    final resultado =
        await consulta.getSingleOrNull();

    return resultado?.ultimaSincronizacion;
  }

  Future<bool> cacheClientesVencida({
    Duration vigencia = vigenciaCacheClientes,
  }) async {
    final ultimaSincronizacion =
        await obtenerUltimaSincronizacionClientes();

    if (ultimaSincronizacion == null) {
      return true;
    }

    final limite =
        DateTime.now().subtract(vigencia);

    return ultimaSincronizacion.isBefore(limite);
  }

  Future<int> limpiarCacheClientesVencida({
    Duration vigencia = vigenciaCacheClientes,
  }) async {
    final limite =
        DateTime.now().subtract(vigencia);

    return (delete(clientesLocales)
          ..where(
            (cliente) =>
                cliente.idServidor.isNotNull() &
                cliente.pendienteSincronizacion
                    .equals(false) &
                cliente.ultimaSincronizacion
                    .isNotNull() &
                cliente.ultimaSincronizacion
                    .isSmallerThanValue(limite),
          ))
        .go();
  }

  // ============================================================
  // COLA DE OPERACIONES PENDIENTES
  // ============================================================

  Future<void> agregarOperacionPendiente(
    OperacionesPendientesCompanion operacion,
  ) async {
    await into(operacionesPendientes)
        .insertOnConflictUpdate(
      operacion,
    );
  }

  Future<List<OperacionesPendiente>>
      obtenerOperacionesPendientes() {
    return (select(operacionesPendientes)
          ..where(
            (operacion) =>
                operacion.estado.equals('pendiente'),
          )
          ..orderBy([
            (operacion) =>
                OrderingTerm.asc(operacion.creadoEn),
          ]))
        .get();
  }

  Future<void> marcarOperacionCompletada(
    String idOperacion,
  ) async {
    await (update(operacionesPendientes)
          ..where(
            (operacion) =>
                operacion.idOperacion.equals(idOperacion),
          ))
        .write(
      const OperacionesPendientesCompanion(
        estado: Value('completada'),
      ),
    );
  }

  Future<void> eliminarOperacionPendiente(
    String idOperacion,
  ) async {
    await (delete(operacionesPendientes)
          ..where(
            (operacion) =>
                operacion.idOperacion.equals(idOperacion),
          ))
        .go();
  }

  Future<void> registrarIntentoOperacion({
    required String idOperacion,
    required int intentos,
    required bool agotada,
  }) async {
    await (update(operacionesPendientes)
          ..where(
            (operacion) =>
                operacion.idOperacion.equals(idOperacion),
          ))
        .write(
      OperacionesPendientesCompanion(
        intentos: Value(intentos),
        estado: Value(
          agotada ? 'fallida' : 'pendiente',
        ),
      ),
    );
  }

  // ============================================================
  // TRANSACCIONES OFFLINE
  // ============================================================

  Future<void> guardarClienteConOperacion({
    required ClientesLocalesCompanion cliente,
    required OperacionesPendientesCompanion operacion,
  }) async {
    await transaction(() async {
      await into(clientesLocales)
          .insertOnConflictUpdate(
        cliente,
      );

      await into(operacionesPendientes)
          .insertOnConflictUpdate(
        operacion,
      );
    });
  }

  Future<void> confirmarCreacionCliente({
    required String idLocal,
    required String idOperacion,
    required ClientesLocalesCompanion clienteServidor,
  }) async {
    await transaction(() async {
      await (delete(clientesLocales)
            ..where(
              (cliente) =>
                  cliente.idLocal.equals(idLocal),
            ))
          .go();

      await into(clientesLocales)
          .insertOnConflictUpdate(
        clienteServidor,
      );

      await (delete(operacionesPendientes)
            ..where(
              (operacion) =>
                  operacion.idOperacion.equals(idOperacion),
            ))
          .go();
    });
  }

  // ============================================================
  // LIMPIEZA LOCAL
  // ============================================================

  Future<void> limpiarDatosLocales() async {
    await transaction(() async {
      await delete(operacionesPendientes).go();
      await delete(clientesLocales).go();
    });
  }
}

LazyDatabase _abrirConexion() {
  return LazyDatabase(() async {
    final directorio =
        await getApplicationDocumentsDirectory();

    final archivo = File(
      p.join(
        directorio.path,
        'planner_juridica.sqlite',
      ),
    );

    final temporal =
        await getTemporaryDirectory();

    sqlite3.tempDirectory = temporal.path;

    return NativeDatabase.createInBackground(
      archivo,
    );
  });
}