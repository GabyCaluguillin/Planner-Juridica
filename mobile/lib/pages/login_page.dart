import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../models/usuario.dart';
import '../providers/api_provider.dart';
import '../providers/auth_provider.dart';
import '../services/secure_storage_service.dart';

class LoginPage extends ConsumerStatefulWidget {
  const LoginPage({super.key});

  @override
  ConsumerState<LoginPage> createState() =>
      _LoginPageState();
}

class _LoginPageState extends ConsumerState<LoginPage> {
  final _formKey = GlobalKey<FormState>();

  final _correoController =
      TextEditingController();

  final _claveController =
      TextEditingController();

  final _secureStorage =
      SecureStorageService();

  bool _cargando = false;
  bool _ocultarClave = true;

  @override
  void dispose() {
    _correoController.dispose();
    _claveController.dispose();
    super.dispose();
  }

  String? _validarCorreo(String? valor) {
    final correo = valor?.trim() ?? '';

    if (correo.isEmpty) {
      return 'El correo electrónico es obligatorio.';
    }

    final expresionCorreo = RegExp(
      r'^[^@\s]+@[^@\s]+\.[^@\s]+$',
    );

    if (!expresionCorreo.hasMatch(correo)) {
      return 'Ingrese un correo electrónico válido.';
    }

    return null;
  }

  String? _validarClave(String? valor) {
    if (valor == null || valor.isEmpty) {
      return 'La contraseña es obligatoria.';
    }

    return null;
  }

  Future<void> _iniciarSesion() async {
    FocusScope.of(context).unfocus();

    if (!_formKey.currentState!.validate()) {
      return;
    }

    setState(() {
      _cargando = true;
    });

    try {
      final authService =
          ref.read(authServiceProvider);

      final respuesta =
          await authService.login(
        correo:
            _correoController.text.trim(),
        clave: _claveController.text,
      );

      final datos = respuesta['datos'];

      if (datos is! Map<String, dynamic>) {
        throw Exception(
          'La respuesta del servidor no es válida.',
        );
      }

      final accessToken =
          datos['accessToken'] ??
              datos['token'];

      final refreshToken =
          datos['refreshToken'];

      final usuarioJson =
          datos['usuario'];

      if (accessToken is! String ||
          accessToken.isEmpty ||
          refreshToken is! String ||
          refreshToken.isEmpty ||
          usuarioJson
              is! Map<String, dynamic>) {
        throw Exception(
          'No se recibió correctamente '
          'la información de la sesión.',
        );
      }

      final usuario =
          Usuario.fromJson(
        usuarioJson,
      );

      await _secureStorage.guardarSesion(
        accessToken: accessToken,
        refreshToken: refreshToken,
        usuario: usuario,
      );

      ref
          .read(authProvider.notifier)
          .iniciarSesion(
            usuario: usuario,
            token: accessToken,
          );

      if (!mounted) {
        return;
      }

      ScaffoldMessenger.of(context)
          .showSnackBar(
        SnackBar(
          content: Text(
            'Bienvenido, ${usuario.nombre}.',
          ),
        ),
      );
    } catch (error) {
      if (!mounted) {
        return;
      }

      ScaffoldMessenger.of(context)
          .showSnackBar(
        SnackBar(
          content: Text(
            error
                .toString()
                .replaceFirst(
                  'Exception: ',
                  '',
                ),
          ),
        ),
      );
    } finally {
      if (mounted) {
        setState(() {
          _cargando = false;
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Center(
          child: SingleChildScrollView(
            padding:
                const EdgeInsets.all(24),
            child: ConstrainedBox(
              constraints:
                  const BoxConstraints(
                maxWidth: 420,
              ),
              child: Form(
                key: _formKey,
                child: Column(
                  mainAxisAlignment:
                      MainAxisAlignment.center,
                  children: [
                    const Icon(
                      Icons.balance,
                      size: 80,
                      color:
                          Color(0xFF512DA8),
                    ),
                    const SizedBox(
                      height: 20,
                    ),
                    const Text(
                      'Planner Jurídica',
                      style: TextStyle(
                        fontSize: 30,
                        fontWeight:
                            FontWeight.bold,
                      ),
                    ),
                    const SizedBox(
                      height: 8,
                    ),
                    const Text(
                      'Gestión jurídica desde tu dispositivo móvil',
                      textAlign:
                          TextAlign.center,
                      style: TextStyle(
                        fontSize: 15,
                        color: Colors.grey,
                      ),
                    ),
                    const SizedBox(
                      height: 36,
                    ),
                    TextFormField(
                      controller:
                          _correoController,
                      keyboardType:
                          TextInputType
                              .emailAddress,
                      textInputAction:
                          TextInputAction.next,
                      validator:
                          _validarCorreo,
                      decoration:
                          const InputDecoration(
                        labelText:
                            'Correo electrónico',
                        prefixIcon: Icon(
                          Icons
                              .email_outlined,
                        ),
                        border:
                            OutlineInputBorder(),
                      ),
                    ),
                    const SizedBox(
                      height: 16,
                    ),
                    TextFormField(
                      controller:
                          _claveController,
                      obscureText:
                          _ocultarClave,
                      validator:
                          _validarClave,
                      onFieldSubmitted: (_) {
                        if (!_cargando) {
                          _iniciarSesion();
                        }
                      },
                      decoration:
                          InputDecoration(
                        labelText:
                            'Contraseña',
                        prefixIcon:
                            const Icon(
                          Icons.lock_outline,
                        ),
                        border:
                            const OutlineInputBorder(),
                        suffixIcon:
                            IconButton(
                          onPressed: () {
                            setState(() {
                              _ocultarClave =
                                  !_ocultarClave;
                            });
                          },
                          icon: Icon(
                            _ocultarClave
                                ? Icons
                                    .visibility_outlined
                                : Icons
                                    .visibility_off_outlined,
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(
                      height: 24,
                    ),
                    SizedBox(
                      width:
                          double.infinity,
                      height: 52,
                      child: FilledButton(
                        onPressed:
                            _cargando
                                ? null
                                : _iniciarSesion,
                        child: _cargando
                            ? const SizedBox(
                                width: 24,
                                height: 24,
                                child:
                                    CircularProgressIndicator(
                                  strokeWidth:
                                      2,
                                ),
                              )
                            : const Text(
                                'Iniciar sesión',
                                style:
                                    TextStyle(
                                  fontSize:
                                      16,
                                ),
                              ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
