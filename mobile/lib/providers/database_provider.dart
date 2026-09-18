import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../database/app_database.dart';
import '../repositories/clientes_repository.dart';

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