import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart';

import '../config/api_config.dart';
import 'secure_storage_service.dart';

BaseOptions _crearBaseOptions() {
  ApiConfig.validar();

  return BaseOptions(
    baseUrl: ApiConfig.baseUrl,
    connectTimeout: const Duration(seconds: 10),
    receiveTimeout: const Duration(seconds: 10),
    sendTimeout: const Duration(seconds: 10),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  );
}

class ApiClient {
  ApiClient({
    Dio? dio,
    SecureStorageService? secureStorage,
  })  : _dio = dio ?? Dio(_crearBaseOptions()),
        _refreshDio = Dio(_crearBaseOptions()),
        _secureStorage =
            secureStorage ?? SecureStorageService() {
    _configurarInterceptores();
  }

  final Dio _dio;
  final Dio _refreshDio;
  final SecureStorageService _secureStorage;

  Future<void>? _renovacionEnCurso;

  Dio get dio => _dio;

  void _configurarInterceptores() {
    // 1. Autenticación y renovación de sesión.
    _dio.interceptors.add(
      InterceptorsWrapper(
        onRequest: (
          RequestOptions options,
          RequestInterceptorHandler handler,
        ) async {
          final accessToken =
              await _secureStorage.obtenerAccessToken();

          if (accessToken != null &&
              accessToken.isNotEmpty) {
            options.headers['Authorization'] =
                'Bearer $accessToken';
          }

          handler.next(options);
        },
        onError: (
          DioException error,
          ErrorInterceptorHandler handler,
        ) async {
          final statusCode =
              error.response?.statusCode;

          final yaReintentado =
              error.requestOptions
                      .extra['auth_retry'] ==
                  true;

          if (statusCode != 401 ||
              yaReintentado) {
            handler.next(error);
            return;
          }

          try {
            await _renovarTokensControlado();

            final nuevoAccessToken =
                await _secureStorage
                    .obtenerAccessToken();

            if (nuevoAccessToken == null ||
                nuevoAccessToken.isEmpty) {
              handler.next(error);
              return;
            }

            final opcionesOriginales =
                error.requestOptions;

            opcionesOriginales.extra[
                'auth_retry'] = true;

            opcionesOriginales.headers[
                    'Authorization'] =
                'Bearer $nuevoAccessToken';

            final respuesta =
                await _dio.fetch<dynamic>(
              opcionesOriginales,
            );

            handler.resolve(respuesta);
          } catch (_) {
            handler.next(error);
          }
        },
      ),
    );

    // 2. Registro mínimo únicamente durante desarrollo.
    //
    // No se imprimen encabezados ni cuerpos de petición,
    // por lo que el token Authorization nunca aparece
    // en los registros.
    if (kDebugMode) {
      _dio.interceptors.add(
        InterceptorsWrapper(
          onRequest: (
            RequestOptions options,
            RequestInterceptorHandler handler,
          ) {
            debugPrint(
              '[API] ${options.method} ${options.uri}',
            );

            handler.next(options);
          },
          onResponse: (
            Response<dynamic> response,
            ResponseInterceptorHandler handler,
          ) {
            debugPrint(
              '[API] ${response.statusCode} '
              '${response.requestOptions.method} '
              '${response.requestOptions.uri}',
            );

            handler.next(response);
          },
          onError: (
            DioException error,
            ErrorInterceptorHandler handler,
          ) {
            debugPrint(
              '[API] ERROR '
              '${error.response?.statusCode ?? '-'} '
              '${error.requestOptions.method} '
              '${error.requestOptions.uri}',
            );

            handler.next(error);
          },
        ),
      );
    }
  }

  Future<void>
      _renovarTokensControlado() async {
    final renovacionActual =
        _renovacionEnCurso;

    if (renovacionActual != null) {
      await renovacionActual;
      return;
    }

    final nuevaRenovacion =
        _renovarTokens();

    _renovacionEnCurso =
        nuevaRenovacion;

    try {
      await nuevaRenovacion;
    } finally {
      if (identical(
        _renovacionEnCurso,
        nuevaRenovacion,
      )) {
        _renovacionEnCurso = null;
      }
    }
  }

  Future<void> _renovarTokens() async {
    final refreshToken =
        await _secureStorage
            .obtenerRefreshToken();

    if (refreshToken == null ||
        refreshToken.isEmpty) {
      throw Exception(
        'No existe un refresh token disponible.',
      );
    }

    final response =
        await _refreshDio.post(
      '/auth/refresh',
      data: {
        'refreshToken': refreshToken,
      },
    );

    final respuesta = response.data;

    if (respuesta is! Map) {
      throw Exception(
        'La respuesta de renovación '
        'no es válida.',
      );
    }

    final datos = respuesta['datos'];

    if (datos is! Map) {
      throw Exception(
        'No se recibieron correctamente '
        'los nuevos tokens.',
      );
    }

    final datosSesion =
        Map<String, dynamic>.from(datos);

    final nuevoAccessToken =
        datosSesion['accessToken'] ??
            datosSesion['token'];

    final nuevoRefreshToken =
        datosSesion['refreshToken'];

    if (nuevoAccessToken is! String ||
        nuevoAccessToken.isEmpty ||
        nuevoRefreshToken is! String ||
        nuevoRefreshToken.isEmpty) {
      throw Exception(
        'Los nuevos tokens recibidos '
        'no son válidos.',
      );
    }

    await _secureStorage.actualizarTokens(
      accessToken: nuevoAccessToken,
      refreshToken: nuevoRefreshToken,
    );
  }
}