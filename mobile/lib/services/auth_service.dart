import 'package:dio/dio.dart';

import 'api_client.dart';

class AuthService {
  AuthService(this._apiClient);

  final ApiClient _apiClient;

  Future<Map<String, dynamic>> login({
    required String correo,
    required String clave,
  }) async {
    try {
      final response = await _apiClient.dio.post(
        '/auth/login',
        data: {
          'correo': correo,
          'clave': clave,
        },
      );

      final data = response.data;

      if (data is Map<String, dynamic>) {
        return data;
      }

      if (data is Map) {
        return Map<String, dynamic>.from(data);
      }

      throw Exception(
        'La respuesta del servidor no es válida.',
      );
    } on DioException catch (error) {
      final data = error.response?.data;

      if (data is Map && data['mensaje'] != null) {
        throw Exception(
          data['mensaje'].toString(),
        );
      }

      switch (error.type) {
        case DioExceptionType.connectionTimeout:
        case DioExceptionType.sendTimeout:
        case DioExceptionType.receiveTimeout:
          throw Exception(
            'El servidor tardó demasiado en responder.',
          );

        case DioExceptionType.connectionError:
          throw Exception(
            'No fue posible conectarse con el servidor.',
          );

        case DioExceptionType.badCertificate:
          throw Exception(
            'No fue posible validar la conexión segura con el servidor.',
          );

        case DioExceptionType.cancel:
          throw Exception(
            'La solicitud fue cancelada.',
          );

        default:
          throw Exception(
            'No fue posible iniciar sesión.',
          );
      }
    }
  }
}