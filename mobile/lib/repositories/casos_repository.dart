import 'package:dio/dio.dart';

import '../models/caso.dart';
import '../services/casos_api_service.dart';

class CasosRepository {
  CasosRepository({
    required this.apiService,
  });

  final CasosApiService apiService;

  Future<List<Caso>> listarCasos({
    CancelToken? cancelToken,
  }) {
    return apiService.listarCasos(
      cancelToken: cancelToken,
    );
  }
}