import 'package:dio/dio.dart';

import 'api_client.dart';

class ClientesApiException implements Exception {
  const ClientesApiException({
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

class ClientesApiService {
  ClientesApiService(this._apiClient);

  final ApiClient _apiClient;

  Future<List<Map<String, dynamic>>> listarClientes({
    CancelToken? cancelToken,
  }) async {
    try {
      final response = await _apiClient.dio.get(
        '/clientes',
        cancelToken: cancelToken,
      );

      final data = response.data;

      if (data is! Map<String, dynamic>) {
        throw const ClientesApiException(
          mensaje: 'La respuesta del servidor no es válida.',
          reintentable: false,
        );
      }

      final clientes = data['datos'];

      if (clientes is! List) {
        throw const ClientesApiException(
          mensaje: 'No se recibió correctamente la lista de clientes.',
          reintentable: false,
        );
      }

      return clientes
          .map((cliente) => Map<String, dynamic>.from(cliente as Map))
          .toList();
    } on ClientesApiException {
      rethrow;
    } on DioException catch (error) {
      throw _crearExcepcionApi(
        error,
        mensajePredeterminado: 'No fue posible obtener los clientes.',
      );
    }
  }

  Future<Map<String, dynamic>> crearCliente({
    required Map<String, dynamic> datos,
    required String idOperacion,
    CancelToken? cancelToken,
  }) async {
    try {
      final response = await _apiClient.dio.post(
        '/clientes',
        data: datos,
        cancelToken: cancelToken,
        options: Options(headers: {'X-Idempotency-Key': idOperacion}),
      );

      final data = response.data;

      if (data is! Map<String, dynamic>) {
        throw const ClientesApiException(
          mensaje: 'La respuesta del servidor no es válida.',
          reintentable: false,
        );
      }

      final cliente = data['datos'];

      if (cliente is! Map) {
        throw const ClientesApiException(
          mensaje: 'No se recibió correctamente el cliente creado.',
          reintentable: false,
        );
      }

      return Map<String, dynamic>.from(cliente);
    } on ClientesApiException {
      rethrow;
    } on DioException catch (error) {
      throw _crearExcepcionApi(
        error,
        mensajePredeterminado: 'No fue posible crear el cliente.',
      );
    }
  }

  ClientesApiException _crearExcepcionApi(
    DioException error, {
    required String mensajePredeterminado,
  }) {
    final statusCode = error.response?.statusCode;

    final mensaje = _obtenerMensajeError(
      error,
      mensajePredeterminado: mensajePredeterminado,
    );

    final reintentable = _esErrorReintentable(error, statusCode);

    return ClientesApiException(
      mensaje: mensaje,
      statusCode: statusCode,
      reintentable: reintentable,
    );
  }

  bool _esErrorReintentable(DioException error, int? statusCode) {
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

    if (statusCode == null) {
      return false;
    }

    if (statusCode == 408 || statusCode == 429) {
      return true;
    }

    if (statusCode >= 500) {
      return true;
    }

    return false;
  }

  String _obtenerMensajeError(
    DioException error, {
    required String mensajePredeterminado,
  }) {
    final respuesta = error.response?.data;

    if (respuesta is Map && respuesta['mensaje'] is String) {
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
