import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../database/app_database.dart';
import '../providers/auth_provider.dart';
import '../providers/database_provider.dart';

class ClientesPage extends ConsumerWidget {
  const ClientesPage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final authState = ref.watch(authProvider);
    final usuario = authState.usuario;

    final clientes = ref.watch(clientesLocalesProvider);
    final sincronizacion =
        ref.watch(sincronizarClientesProvider);

    Future<void> actualizarClientes() {
      return ref.refresh(
        sincronizarClientesProvider.future,
      );
    }

    return Scaffold(
      appBar: AppBar(
        title: const Text('Clientes'),
        actions: [
          IconButton(
            tooltip: 'Actualizar clientes',
            onPressed: sincronizacion.isLoading
                ? null
                : actualizarClientes,
            icon: sincronizacion.isLoading
                ? const SizedBox(
                    width: 20,
                    height: 20,
                    child: CircularProgressIndicator(
                      strokeWidth: 2,
                    ),
                  )
                : const Icon(Icons.refresh),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () {
          _mostrarFormularioCliente(
            context,
            ref,
          );
        },
        icon: const Icon(Icons.person_add_alt_1),
        label: const Text('Nuevo cliente'),
      ),
      body: clientes.when(
        loading: () => const Center(
          child: CircularProgressIndicator(),
        ),
        error: (error, _) => Center(
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Text(
              'No fue posible leer los datos locales: $error',
              textAlign: TextAlign.center,
            ),
          ),
        ),
        data: (lista) {
          return RefreshIndicator(
            onRefresh: actualizarClientes,
            child: ListView(
              physics:
                  const AlwaysScrollableScrollPhysics(),
              padding: const EdgeInsets.fromLTRB(
                24,
                24,
                24,
                100,
              ),
              children: [
                const Text(
                  'Gestión de clientes',
                  style: TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 8),
                const Text(
                  'Los clientes guardados en el dispositivo '
                  'pueden consultarse incluso cuando no hay '
                  'conexión con el servidor.',
                ),
                const SizedBox(height: 16),
                _EstadoSincronizacion(
                  clientes: lista,
                  sincronizando:
                      sincronizacion.isLoading,
                  sinConexion:
                      sincronizacion.hasError,
                ),
                const SizedBox(height: 20),
                Card(
                  child: ListTile(
                    leading: const Icon(
                      Icons.account_circle_outlined,
                    ),
                    title: const Text(
                      'Sesión activa',
                    ),
                    subtitle: Text(
                      usuario != null
                          ? '${usuario.nombre} - ${usuario.rol}'
                          : 'Usuario no disponible',
                    ),
                  ),
                ),
                const SizedBox(height: 24),
                Text(
                  'Clientes (${lista.length})',
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 12),
                if (lista.isEmpty)
                  const Padding(
                    padding: EdgeInsets.only(
                      top: 48,
                      bottom: 48,
                    ),
                    child: Center(
                      child: Column(
                        children: [
                          Icon(
                            Icons.people_outline,
                            size: 60,
                            color: Colors.grey,
                          ),
                          SizedBox(height: 16),
                          Text(
                            'No hay clientes guardados '
                            'en este dispositivo.',
                            textAlign: TextAlign.center,
                          ),
                        ],
                      ),
                    ),
                  )
                else
                  ...lista.map(
                    (cliente) => _ClienteTile(
                      cliente: cliente,
                    ),
                  ),
              ],
            ),
          );
        },
      ),
    );
  }
}

Future<void> _mostrarFormularioCliente(
  BuildContext context,
  WidgetRef ref,
) async {
  final formKey = GlobalKey<FormState>();

  final nombreController =
      TextEditingController();

  final correoController =
      TextEditingController();

  final telefonoController =
      TextEditingController();

  final direccionController =
      TextEditingController();

  final resultado = await showDialog<bool>(
    context: context,
    builder: (dialogContext) {
      return AlertDialog(
        title: const Text(
          'Nuevo cliente',
        ),
        content: SingleChildScrollView(
          child: Form(
            key: formKey,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                TextFormField(
                  controller: nombreController,
                  textCapitalization:
                      TextCapitalization.words,
                  decoration:
                      const InputDecoration(
                    labelText: 'Nombre',
                    prefixIcon:
                        Icon(Icons.person_outline),
                  ),
                  validator: (valor) {
                    if (valor == null ||
                        valor.trim().isEmpty) {
                      return 'Ingrese el nombre.';
                    }

                    return null;
                  },
                ),
                const SizedBox(height: 12),
                TextFormField(
                  controller: correoController,
                  keyboardType:
                      TextInputType.emailAddress,
                  decoration:
                      const InputDecoration(
                    labelText: 'Correo',
                    prefixIcon:
                        Icon(Icons.email_outlined),
                  ),
                  validator: (valor) {
                    final correo =
                        valor?.trim() ?? '';

                    if (correo.isEmpty) {
                      return 'Ingrese el correo.';
                    }

                    final expresion = RegExp(
                      r'^[^@\s]+@[^@\s]+\.[^@\s]+$',
                    );

                    if (!expresion
                        .hasMatch(correo)) {
                      return 'Ingrese un correo válido.';
                    }

                    return null;
                  },
                ),
                const SizedBox(height: 12),
                TextFormField(
                  controller: telefonoController,
                  keyboardType:
                      TextInputType.phone,
                  decoration:
                      const InputDecoration(
                    labelText: 'Teléfono',
                    prefixIcon:
                        Icon(Icons.phone_outlined),
                  ),
                  validator: (valor) {
                    if (valor == null ||
                        valor.trim().isEmpty) {
                      return 'Ingrese el teléfono.';
                    }

                    return null;
                  },
                ),
                const SizedBox(height: 12),
                TextFormField(
                  controller:
                      direccionController,
                  decoration:
                      const InputDecoration(
                    labelText:
                        'Dirección (opcional)',
                    prefixIcon:
                        Icon(Icons.location_on_outlined),
                  ),
                ),
              ],
            ),
          ),
        ),
        actions: [
          TextButton(
            onPressed: () {
              Navigator.of(dialogContext)
                  .pop(false);
            },
            child: const Text('Cancelar'),
          ),
          FilledButton(
            onPressed: () async {
              if (!formKey.currentState!
                  .validate()) {
                return;
              }

              await ref
                  .read(
                    clientesRepositoryProvider,
                  )
                  .crearClienteOffline(
                    nombre:
                        nombreController.text,
                    correo:
                        correoController.text,
                    telefono:
                        telefonoController.text,
                    direccion:
                        direccionController.text,
                  );

              if (!dialogContext.mounted) {
                return;
              }

              Navigator.of(dialogContext)
                  .pop(true);
            },
            child: const Text('Guardar'),
          ),
        ],
      );
    },
  );

  nombreController.dispose();
  correoController.dispose();
  telefonoController.dispose();
  direccionController.dispose();

  if (resultado == true &&
      context.mounted) {
    ScaffoldMessenger.of(context)
        .showSnackBar(
      const SnackBar(
        content: Text(
          'Cliente guardado localmente. '
          'Quedó pendiente de sincronización.',
        ),
      ),
    );
  }
}

class _EstadoSincronizacion
    extends StatelessWidget {
  const _EstadoSincronizacion({
    required this.clientes,
    required this.sincronizando,
    required this.sinConexion,
  });

  final List<ClientesLocale> clientes;
  final bool sincronizando;
  final bool sinConexion;

  @override
  Widget build(BuildContext context) {
    final ultimaSincronizacion = clientes
        .map(
          (cliente) =>
              cliente.ultimaSincronizacion,
        )
        .whereType<DateTime>()
        .fold<DateTime?>(
      null,
      (actual, fecha) {
        if (actual == null ||
            fecha.isAfter(actual)) {
          return fecha;
        }

        return actual;
      },
    );

    late final IconData icono;
    late final String mensaje;

    if (sincronizando) {
      icono = Icons.sync;
      mensaje =
          'Actualizando clientes...';
    } else if (sinConexion) {
      icono = Icons.cloud_off_outlined;

      if (clientes.isEmpty) {
        mensaje =
            'No fue posible conectarse al servidor '
            'y todavía no existen datos locales.';
      } else {
        mensaje =
            'Sin conexión con el servidor. '
            'Se muestran los datos guardados '
            'en el dispositivo.';
      }
    } else if (ultimaSincronizacion ==
        null) {
      icono = Icons.info_outline;
      mensaje =
          'Aún no hay una sincronización registrada.';
    } else {
      icono = Icons.cloud_done_outlined;
      mensaje =
          'Última sincronización: '
          '${_fechaCorta(ultimaSincronizacion)}';
    }

    return Card(
      child: Padding(
        padding:
            const EdgeInsets.all(16),
        child: Row(
          crossAxisAlignment:
              CrossAxisAlignment.start,
          children: [
            Icon(
              icono,
              color: sinConexion
                  ? Colors.orange.shade800
                  : const Color(0xFF512DA8),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Text(
                mensaje,
                style: TextStyle(
                  color: sinConexion
                      ? Colors.orange.shade800
                      : Colors.black87,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _ClienteTile
    extends StatelessWidget {
  const _ClienteTile({
    required this.cliente,
  });

  final ClientesLocale cliente;

  @override
  Widget build(BuildContext context) {
    final direccion =
        cliente.direccion?.trim();

    return Card(
      margin:
          const EdgeInsets.only(bottom: 12),
      child: ListTile(
        leading: const CircleAvatar(
          child: Icon(
            Icons.person_outline,
          ),
        ),
        title: Text(
          cliente.nombre,
          style: const TextStyle(
            fontWeight: FontWeight.w600,
          ),
        ),
        subtitle: Padding(
          padding:
              const EdgeInsets.only(top: 6),
          child: Column(
            crossAxisAlignment:
                CrossAxisAlignment.start,
            children: [
              Text(cliente.correo),
              Text(cliente.telefono),
              if (direccion != null &&
                  direccion.isNotEmpty)
                Text(direccion),
              if (cliente
                  .pendienteSincronizacion)
                const Padding(
                  padding:
                      EdgeInsets.only(top: 6),
                  child: Row(
                    children: [
                      Icon(
                        Icons.schedule,
                        size: 16,
                      ),
                      SizedBox(width: 4),
                      Expanded(
                        child: Text(
                          'Pendiente de sincronización',
                        ),
                      ),
                    ],
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }
}

String _fechaCorta(DateTime fecha) {
  final local = fecha.toLocal();

  final dia =
      local.day.toString().padLeft(2, '0');

  final mes =
      local.month.toString().padLeft(2, '0');

  final hora =
      local.hour.toString().padLeft(2, '0');

  final minuto =
      local.minute.toString().padLeft(2, '0');

  return '$dia/$mes/${local.year} '
      '$hora:$minuto';
}