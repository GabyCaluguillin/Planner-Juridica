import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../providers/auth_provider.dart';

class ClientesPage extends ConsumerWidget {
  const ClientesPage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final authState = ref.watch(authProvider);
    final usuario = authState.usuario;

    return Scaffold(
      appBar: AppBar(
        title: const Text('Clientes'),
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Icon(
                Icons.people_outline,
                size: 60,
                color: Color(0xFF512DA8),
              ),
              const SizedBox(height: 20),
              const Text(
                'Gestión de clientes',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 8),
              const Text(
                'Desde esta sección se podrá consultar y administrar la información de los clientes.',
              ),
              const SizedBox(height: 32),
              Card(
                child: ListTile(
                  leading: const Icon(Icons.account_circle_outlined),
                  title: const Text('Sesión activa'),
                  subtitle: Text(
                    usuario != null
                        ? '${usuario.nombre} - ${usuario.rol}'
                        : 'Usuario no disponible',
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}