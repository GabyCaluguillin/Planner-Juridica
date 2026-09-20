import 'package:dio/dio.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../models/caso.dart';
import '../repositories/casos_repository.dart';
import 'api_provider.dart';

final casosRepositoryProvider =
    Provider<CasosRepository>((ref) {
  final apiService =
      ref.watch(casosApiServiceProvider);

  return CasosRepository(
    apiService: apiService,
  );
});

final casosProvider =
    FutureProvider.autoDispose<List<Caso>>((ref) async {
  final cancelToken = CancelToken();

  ref.onDispose(() {
    if (!cancelToken.isCancelled) {
      cancelToken.cancel(
        'La pantalla de casos fue cerrada.',
      );
    }
  });

  final repository =
      ref.watch(casosRepositoryProvider);

  return repository.listarCasos(
    cancelToken: cancelToken,
  );
});
