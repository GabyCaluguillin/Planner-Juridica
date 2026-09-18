import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../database/app_database.dart';

final databaseProvider = Provider<AppDatabase>((ref) {
  final database = AppDatabase();

  ref.onDispose(() async {
    await database.close();
  });

  return database;
});

final clientesLocalesProvider =
    StreamProvider<List<ClientesLocale>>((ref) {
  final database = ref.watch(databaseProvider);

  return database.observarClientesLocales();
});