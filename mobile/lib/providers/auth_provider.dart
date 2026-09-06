import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../models/usuario.dart';

class AuthState {
  const AuthState({
    this.usuario,
    this.token,
  });

  final Usuario? usuario;
  final String? token;

  bool get autenticado =>
      usuario != null && token != null && token!.isNotEmpty;
}

class AuthNotifier extends Notifier<AuthState> {
  @override
  AuthState build() {
    return const AuthState();
  }

  void iniciarSesion({
    required Usuario usuario,
    required String token,
  }) {
    state = AuthState(
      usuario: usuario,
      token: token,
    );
  }

  void cerrarSesion() {
    state = const AuthState();
  }
}

final authProvider = NotifierProvider<AuthNotifier, AuthState>(
  AuthNotifier.new,
);