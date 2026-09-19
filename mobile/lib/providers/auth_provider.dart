import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../models/usuario.dart';
import '../services/secure_storage_service.dart';
import 'database_provider.dart';

class AuthState {
  const AuthState({
    this.usuario,
    this.token,
    this.cargando = true,
  });

  final Usuario? usuario;
  final String? token;
  final bool cargando;

  bool get autenticado =>
      usuario != null &&
      token != null &&
      token!.isNotEmpty;
}

class AuthNotifier extends Notifier<AuthState> {
  final SecureStorageService _secureStorage =
      SecureStorageService();

  @override
  AuthState build() {
    _recuperarSesion();

    return const AuthState();
  }

  Future<void> _recuperarSesion() async {
    final token = await _secureStorage.obtenerToken();
    final usuario = await _secureStorage.obtenerUsuario();

    if (token != null && usuario != null) {
      state = AuthState(
        usuario: usuario,
        token: token,
        cargando: false,
      );
    } else {
      state = const AuthState(
        cargando: false,
      );
    }
  }

  void iniciarSesion({
    required Usuario usuario,
    required String token,
  }) {
    state = AuthState(
      usuario: usuario,
      token: token,
      cargando: false,
    );
  }

  Future<void> cerrarSesion() async {
    Object? errorLimpieza;
    StackTrace? stackTraceLimpieza;

    try {
      final database = ref.read(databaseProvider);

      await database.limpiarDatosLocales();
    } catch (error, stackTrace) {
      errorLimpieza = error;
      stackTraceLimpieza = stackTrace;
    }

    try {
      await _secureStorage.eliminarSesion();
    } catch (error, stackTrace) {
      errorLimpieza ??= error;
      stackTraceLimpieza ??= stackTrace;
    }

    state = const AuthState(
      cargando: false,
    );

    if (errorLimpieza != null &&
        stackTraceLimpieza != null) {
      Error.throwWithStackTrace(
        errorLimpieza,
        stackTraceLimpieza,
      );
    }
  }
}

final authProvider =
    NotifierProvider<AuthNotifier, AuthState>(
  AuthNotifier.new,
);