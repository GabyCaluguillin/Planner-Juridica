import 'dart:convert';

import 'package:http/http.dart' as http;

import '../config/api_config.dart';

class AuthService {
  Future<Map<String, dynamic>> login({
    required String correo,
    required String clave,
  }) async {
    final url = Uri.parse('${ApiConfig.baseUrl}/auth/login');

    final response = await http
        .post(
          url,
          headers: {
            'Content-Type': 'application/json',
          },
          body: jsonEncode({
            'correo': correo,
            'clave': clave,
          }),
        )
        .timeout(const Duration(seconds: 10));

    final Map<String, dynamic> data = response.body.isNotEmpty
        ? jsonDecode(response.body)
        : {};

    if (response.statusCode >= 200 && response.statusCode < 300) {
      return data;
    }

    throw Exception(
      data['mensaje'] ?? 'No fue posible iniciar sesión',
    );
  }
}
