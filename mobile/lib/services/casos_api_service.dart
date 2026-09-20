import 'package:dio/dio.dart';

import '../models/caso.dart';
import 'api_client.dart';

class CasosApiException implements Exception {
  const CasosApiException({
    required this.mensaje,
    required this.reintentable,
    this.statusCode,
  });

  final String mensaje;
  final bool reintentable;
  final int? statusCode;

  @override
  String toString() => mensaje;
}

class CasosApiService {
  CasosApiService(this._apiClient);

  final ApiClient _apiClient;

  Future<List<Caso>> listarCasos({
    CancelToken? cancelToken,
  }) async {
    try {
      final response = await _apiClient.dio.get(
        '/casos',
        cancelToken: cancelToken,
      );

      final data = response.data;

      if (data is! Map) {
        throw const CasosApiException(
          mensaje:
              'La respuesta del servidor no es válida.',
          reintentable: false,
        );
      }

      final casos = data['datos'];

      if (casos is! List) {
        throw const CasosApiException(
          mensaje:
              'No se recibió correctamente la lista de casos.',
          reintentable: false,
        );
      }

      return casos.map((caso) {
        if (caso is! Map) {
          throw const CasosApiException(
            mensaje:
                'Se recibió un caso con formato inválido.',
            reintentable: false,
          );
        }

        return Caso.fromJson(
          Map<String, dynamic>.from(caso),
        );
      }).toList();
    } on CasosApiException {
      rethrow;
    } on DioException catch (error) {
      throw _crearExcepcionApi(
        error,
        mensajePredeterminado:
            'No fue posible obtener los casos.',
      );
    }
  }

  CasosApiException _crearExcepcionApi(
    DioException error, {
    required String mensajePredeterminado,
  }) {
    final statusCode =
        error.response?.statusCode;

    final mensaje = _obtenerMensajeError(
      error,
      mensajePredeterminado:
          mensajePredeterminado,
    );

    return CasosApiException(
      mensaje: mensaje,
      statusCode: statusCode,
      reintentable: _esErrorReintentable(
        error,
        statusCode,
      ),
    );
  }

  bool _esErrorReintentable(
    DioException error,
    int? statusCode,
  ) {
    switch (error.type) {
      case DioExceptionType.connectionTimeout:
      case DioExceptionType.sendTimeout:
      case DioExceptionType.receiveTimeout:
      case DioExceptionType.connectionError:
        return true;

      case DioExceptionType.unknown:
        return error.response == null;

      default:
        break;
    }

    if (statusCode == 408 ||
        statusCode == 429) {
      return true;
    }

    if (statusCode != null &&
        statusCode >= 500) {
      return true;
    }

    return false;
  }

  String _obtenerMensajeError(
    DioException error, {
    required String mensajePredeterminado,
  }) {
    final respuesta =
        error.response?.data;

    if (respuesta is Map &&
        respuesta['mensaje'] is String) {
      return respuesta['mensaje'] as String;
    }

    switch (error.type) {
      case DioExceptionType.connectionTimeout:
      case DioExceptionType.sendTimeout:
      case DioExceptionType.receiveTimeout:
      case DioExceptionType.connectionError:
        return 'No fue posible conectar con el servidor.';

      case DioExceptionType.badCertificate:
        return 'No fue posible validar la conexión segura con el servidor.';

      case DioExceptionType.cancel:
        return 'La solicitud fue cancelada.';

      default:
        return mensajePredeterminado;
    }
  }
}
