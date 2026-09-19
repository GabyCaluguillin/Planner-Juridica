import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../database/app_database.dart';
import '../repositories/clientes_repository.dart';

enum EstadoCacheClientes {
  sinDatos,
  vigente,
  vencido,
}

final databaseProvider = Provider<AppDatabase>((ref) {
  final database = AppDatabase();

  ref.onDispose(() {
    database.close();
  });

  return database;
});

final clientesRepositoryProvider =
    Provider<ClientesRepository>((ref) {
  final database = ref.watch(databaseProvider);

  return ClientesRepository(
    database,
  );
});

final clientesLocalesProvider =
    StreamProvider<List<ClientesLocale>>((ref) {
  final repository =
      ref.watch(clientesRepositoryProvider);

  return repository.observarClientes();
});

final sincronizarClientesProvider =
    FutureProvider<void>((ref) async {
  final repository =
      ref.watch(clientesRepositoryProvider);

  await repository.sincronizarClientes();
});

final ultimaSincronizacionClientesProvider =
    FutureProvider<DateTime?>((ref) async {
  ref.watch(sincronizarClientesProvider);

  final repository =
      ref.watch(clientesRepositoryProvider);

  return repository.obtenerUltimaSincronizacion();
});

final estadoCacheClientesProvider =
    FutureProvider<EstadoCacheClientes>((ref) async {
  ref.watch(sincronizarClientesProvider);

  final repository =
      ref.watch(clientesRepositoryProvider);

  final ultimaSincronizacion =
      await repository.obtenerUltimaSincronizacion();

  if (ultimaSincronizacion == null) {
    return EstadoCacheClientes.sinDatos;
  }

  final vencida =
      await repository.cacheClientesVencida();

  if (vencida) {
    return EstadoCacheClientes.vencido;
  }

  return EstadoCacheClientes.vigente;
});