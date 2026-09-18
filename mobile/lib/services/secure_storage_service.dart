import 'dart:convert';

import 'package:flutter_secure_storage/flutter_secure_storage.dart';

import '../models/usuario.dart';

class SecureStorageService {
  final FlutterSecureStorage _storage =
      const FlutterSecureStorage();

  static const String _tokenKey = 'access_token';
  static const String _usuarioKey = 'usuario';

  Future<void> guardarSesion({
    required String token,
    required Usuario usuario,
  }) async {
    await _storage.write(
      key: _tokenKey,
      value: token,
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

  Future<String?> obtenerToken() async {
    return await _storage.read(
      key: _tokenKey,
    );
  }

  Future<Usuario?> obtenerUsuario() async {
    final usuarioJson = await _storage.read(
      key: _usuarioKey,
    );

    if (usuarioJson == null) {
      return null;
    }

    return Usuario.fromJson(
      jsonDecode(usuarioJson),
    );
  }

  Future<void> eliminarSesion() async {
    await _storage.delete(
      key: _tokenKey,
    );

    await _storage.delete(
      key: _usuarioKey,
    );
  }
}