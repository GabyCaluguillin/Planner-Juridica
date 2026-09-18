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
      final respuesta = error.response?.data;

      if (respuesta is Map<String, dynamic>) {
        throw Exception(
          respuesta['mensaje'] ??
              'No fue posible obtener los clientes.',
        );
      }

      throw Exception(
        'No fue posible conectar con el servidor.',
      );
    }
  }
}