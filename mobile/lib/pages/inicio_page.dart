import 'package:go_router/go_router.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../providers/auth_provider.dart';

class InicioPage extends ConsumerWidget {
  const InicioPage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final authState = ref.watch(authProvider);
    final usuario = authState.usuario;

    return Scaffold(
     appBar: AppBar(
  title: const Text('Planner Jurídica'),
  actions: [
    IconButton(
      tooltip: 'Cerrar sesión',
      onPressed: () {
        ref.read(authProvider.notifier).cerrarSesion();
      },
      icon: const Icon(Icons.logout),
    ),
  ],
),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Bienvenido, ${usuario?.nombre ?? 'Usuario'}',
                style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                      fontWeight: FontWeight.bold,
                    ),
              ),
              const SizedBox(height: 8),
              Text(
                usuario?.correo ?? '',
                style: Theme.of(context).textTheme.bodyLarge,
              ),
              const SizedBox(height: 4),
              Text(
                'Rol: ${usuario?.rol ?? ''}',
                style: Theme.of(context).textTheme.bodyMedium,
              ),
              const SizedBox(height: 32),
              const Text(
                'Módulos principales',
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 16),
              Card(
                child: ListTile(
                  leading: const Icon(Icons.people_outline),
                  title: const Text('Clientes'),
                  subtitle: const Text(
                    'Consulta y gestión de clientes',
                  ),
                  trailing: const Icon(Icons.chevron_right),
                  onTap: () {
                    context.push('/clientes');
                  },
                ),
              ),
              const SizedBox(height: 8),
              Card(
                child: ListTile(
                  leading: const Icon(Icons.folder_open_outlined),
                  title: const Text('Casos'),
                  subtitle: const Text(
                    'Consulta y seguimiento de casos jurídicos',
                  ),
                  trailing: const Icon(Icons.chevron_right),
                  onTap: () {
                    context.push('/casos');
                  },
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}