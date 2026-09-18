import 'package:dio/dio.dart';

import 'api_client.dart';

class ClientesApiService {
  ClientesApiService({
    ApiClient? apiClient,
  }) : _apiClient = apiClient ?? ApiClient();

  final ApiClient _apiClient;

  Future<List<Map<String, dynamic>>> listarClientes() async {
    try {
      final response = await _apiClient.dio.get(
        '/clientes',
      );

      final data = response.data;

      if (data is! Map<String, dynamic>) {
        throw Exception(
          'La respuesta del servidor no es válida.',
        );
      }

      final clientes = data['datos'];

      if (clientes is! List) {
        throw Exception(
          'No se recibió correctamente la lista de clientes.',
        );
      }

      return clientes
          .map(
            (cliente) => Map<String, dynamic>.from(
              cliente as Map,
            ),
          )
          .toList();
    } on DioException catch (error) {
      throw Exception(
        _obtenerMensajeError(
          error,
          mensajePredeterminado:
              'No fue posible obtener los clientes.',
        ),
      );
    }
  }

  Future<Map<String, dynamic>> crearCliente({
    required Map<String, dynamic> datos,
    required String idOperacion,
  }) async {
    try {
      final response = await _apiClient.dio.post(
        '/clientes',
        data: datos,
        options: Options(
          headers: {
            'X-Idempotency-Key': idOperacion,
          },
        ),
      );

      final data = response.data;

      if (data is! Map<String, dynamic>) {
        throw Exception(
          'La respuesta del servidor no es válida.',
        );
      }

      final cliente = data['datos'];

      if (cliente is! Map) {
        throw Exception(
          'No se recibió correctamente el cliente creado.',
        );
      }

      return Map<String, dynamic>.from(
        cliente,
      );
    } on DioException catch (error) {
      throw Exception(
        _obtenerMensajeError(
          error,
          mensajePredeterminado:
              'No fue posible crear el cliente.',
        ),
      );
    }
  }

  String _obtenerMensajeError(
    DioException error, {
    required String mensajePredeterminado,
  }) {
    final respuesta = error.response?.data;

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

      default:
        return mensajePredeterminado;
    }
  }
}