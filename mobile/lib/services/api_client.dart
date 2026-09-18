import 'package:dio/dio.dart';

import '../config/api_config.dart';
import 'secure_storage_service.dart';

class ApiClient {
  ApiClient({
    Dio? dio,
    SecureStorageService? secureStorage,
  })  : _dio = dio ??
            Dio(
              BaseOptions(
                baseUrl: ApiConfig.baseUrl,
                connectTimeout: const Duration(seconds: 10),
                receiveTimeout: const Duration(seconds: 10),
                sendTimeout: const Duration(seconds: 10),
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
              ),
            ),
        _secureStorage =
            secureStorage ?? SecureStorageService() {
    _configurarInterceptores();
  }

  final Dio _dio;
  final SecureStorageService _secureStorage;

  Dio get dio => _dio;

  void _configurarInterceptores() {
    _dio.interceptors.add(
      InterceptorsWrapper(
        onRequest: (
          RequestOptions options,
          RequestInterceptorHandler handler,
        ) async {
          final token =
              await _secureStorage.obtenerToken();

          if (token != null && token.isNotEmpty) {
            options.headers['Authorization'] =
                'Bearer $token';
          }

          handler.next(options);
        },
        onError: (
          DioException error,
          ErrorInterceptorHandler handler,
        ) {
          handler.next(error);
        },
      ),
    );
  }
}