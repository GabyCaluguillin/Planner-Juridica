import 'dart:convert';

import 'package:flutter_secure_storage/flutter_secure_storage.dart';

import '../models/usuario.dart';

class SecureStorageService {
  final FlutterSecureStorage _storage =
      const FlutterSecureStorage();

  static const String _accessTokenKey =
      'access_token';

  static const String _refreshTokenKey =
      'refresh_token';

  static const String _usuarioKey =
      'usuario';

  Future<void> guardarSesion({
    required String accessToken,
    required String refreshToken,
    required Usuario usuario,
  }) async {
    await _storage.write(
      key: _accessTokenKey,
      value: accessToken,
    );

    await _storage.write(
      key: _refreshTokenKey,
      value: refreshToken,
    );

    await _storage.write(
      key: _usuarioKey,
      value: jsonEncode({
        'id': usuario.id,
        'nombre': usuario.nombre,
        'correo': usuario.correo,
        'rol': usuario.rol,
      }),
    );
  }

  Future<void> actualizarTokens({
    required String accessToken,
    required String refreshToken,
  }) async {
    await _storage.write(
      key: _accessTokenKey,
      value: accessToken,
    );

    await _storage.write(
      key: _refreshTokenKey,
      value: refreshToken,
    );
  }

  Future<String?> obtenerAccessToken() async {
    return _storage.read(
      key: _accessTokenKey,
    );
  }

  Future<String?> obtenerToken() async {
    return obtenerAccessToken();
  }

  Future<String?> obtenerRefreshToken() async {
    return _storage.read(
      key: _refreshTokenKey,
    );
  }

  Future<Usuario?> obtenerUsuario() async {
    final usuarioJson = await _storage.read(
      key: _usuarioKey,
    );

    if (usuarioJson == null) {
      return null;
    }

    final datos = jsonDecode(usuarioJson);

    if (datos is! Map<String, dynamic>) {
      return null;
    }

    return Usuario.fromJson(datos);
  }

  Future<void> eliminarSesion() async {
    await _storage.delete(
      key: _accessTokenKey,
    );

    await _storage.delete(
      key: _refreshTokenKey,
    );

    await _storage.delete(
      key: _usuarioKey,
    );
  }
}
