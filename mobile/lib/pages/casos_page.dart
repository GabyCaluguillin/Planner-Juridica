import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../providers/auth_provider.dart';
import '../providers/casos_provider.dart';

class CasosPage extends ConsumerWidget {
  const CasosPage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final authState = ref.watch(authProvider);
    final usuario = authState.usuario;
    final casosAsync = ref.watch(casosProvider);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Casos'),
        actions: [
          IconButton(
            tooltip: 'Actualizar casos',
            onPressed: () {
              ref.invalidate(casosProvider);
            },
            icon: const Icon(Icons.refresh),
          ),
        ],
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Icon(
                Icons.folder_open_outlined,
                size: 60,
                color: Color(0xFF512DA8),
              ),
              const SizedBox(height: 20),
              const Text(
                'Gestión de casos jurídicos',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 8),
              const Text(
                'Consulta los casos registrados, sus clientes '
                'y los profesionales responsables.',
              ),
              const SizedBox(height: 20),
              Card(
                child: ListTile(
                  leading: const Icon(
                    Icons.account_circle_outlined,
                  ),
                  title: const Text('Sesión activa'),
                  subtitle: Text(
                    usuario != null
                        ? '${usuario.nombre} - ${usuario.rol}'
                        : 'Usuario no disponible',
                  ),
                ),
              ),
              const SizedBox(height: 16),
              Expanded(
                child: casosAsync.when(
                  loading: () {
                    return const Center(
                      child: CircularProgressIndicator(),
                    );
                  },
                  error: (error, stackTrace) {
                    return Center(
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          const Icon(
                            Icons.error_outline,
                            size: 48,
                          ),
                          const SizedBox(height: 12),
                          const Text(
                            'No fue posible cargar los casos.',
                            textAlign: TextAlign.center,
                          ),
                          const SizedBox(height: 8),
                          Text(
                            error.toString(),
                            textAlign: TextAlign.center,
                          ),
                          const SizedBox(height: 16),
                          ElevatedButton.icon(
                            onPressed: () {
                              ref.invalidate(
                                casosProvider,
                              );
                            },
                            icon: const Icon(
                              Icons.refresh,
                            ),
                            label: const Text(
                              'Reintentar',
                            ),
                          ),
                        ],
                      ),
                    );
                  },
                  data: (casos) {
                    if (casos.isEmpty) {
                      return const Center(
                        child: Text(
                          'No existen casos registrados.',
                        ),
                      );
                    }

                    return RefreshIndicator(
                      onRefresh: () async {
                        ref.invalidate(casosProvider);

                        await ref.read(
                          casosProvider.future,
                        );
                      },
                      child: ListView.separated(
                        physics:
                            const AlwaysScrollableScrollPhysics(),
                        itemCount: casos.length,
                        separatorBuilder:
                            (context, index) {
                          return const SizedBox(
                            height: 12,
                          );
                        },
                        itemBuilder: (context, index) {
                          final caso = casos[index];

                          final responsablesPrincipales =
                              caso.responsables
                                  .where(
                                    (responsable) =>
                                        responsable
                                            .esPrincipal,
                                  )
                                  .toList();

                          final responsables =
                              responsablesPrincipales
                                      .isNotEmpty
                                  ? responsablesPrincipales
                                  : caso.responsables;

                          final nombresResponsables =
                              responsables.isNotEmpty
                                  ? responsables
                                      .map(
                                        (responsable) =>
                                            responsable
                                                .usuario
                                                .nombre,
                                      )
                                      .join(', ')
                                  : caso.usuario.nombre;

                          final fechaInicio = caso
                              .fechaInicio
                              .toLocal()
                              .toString()
                              .split(' ')
                              .first;

                          return Card(
                            child: Padding(
                              padding:
                                  const EdgeInsets.all(8),
                              child: ListTile(
                                leading: CircleAvatar(
                                  child: Text(
                                    '${index + 1}',
                                  ),
                                ),
                                title: Text(
                                  caso.numero,
                                  style: const TextStyle(
                                    fontWeight:
                                        FontWeight.bold,
                                  ),
                                ),
                                subtitle: Padding(
                                  padding:
                                      const EdgeInsets.only(
                                    top: 8,
                                  ),
                                  child: Column(
                                    crossAxisAlignment:
                                        CrossAxisAlignment
                                            .start,
                                    children: [
                                      Text(
                                        caso.asunto,
                                      ),
                                      const SizedBox(
                                        height: 6,
                                      ),
                                      Text(
                                        'Tipo: ${caso.tipo}',
                                      ),
                                      Text(
                                        'Estado: ${caso.estado}',
                                      ),
                                      Text(
                                        'Cliente: ${caso.cliente.nombre}',
                                      ),
                                      Text(
                                        'Responsable: $nombresResponsables',
                                      ),
                                      Text(
                                        'Fecha de inicio: $fechaInicio',
                                      ),
                                    ],
                                  ),
                                ),
                              ),
                            ),
                          );
                        },
                      ),
                    );
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
