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

    final estadoCache =
        ref.watch(estadoCacheClientesProvider);

    Future<void> actualizarClientes() {
      return ref.refresh(
        sincronizarClientesProvider.future,
      );
    }

    Future<void> crearCliente() async {
      final resultado = await showDialog<bool>(
        context: context,
        builder: (_) => const _NuevoClienteDialog(),
      );

      if (resultado == true && context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text(
              'Cliente guardado localmente. '
              'Quedó pendiente de sincronización.',
            ),
          ),
        );
      }
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
        onPressed: crearCliente,
        icon: const Icon(
          Icons.person_add_alt_1,
        ),
        label: const Text(
          'Nuevo cliente',
        ),
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
                  estadoCache: estadoCache,
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

class _NuevoClienteDialog
    extends ConsumerStatefulWidget {
  const _NuevoClienteDialog();

  @override
  ConsumerState<_NuevoClienteDialog> createState() =>
      _NuevoClienteDialogState();
}

class _NuevoClienteDialogState
    extends ConsumerState<_NuevoClienteDialog> {
  final _formKey = GlobalKey<FormState>();

  final _nombreController =
      TextEditingController();

  final _correoController =
      TextEditingController();

  final _telefonoController =
      TextEditingController();

  final _direccionController =
      TextEditingController();

  bool _guardando = false;

  @override
  void dispose() {
    _nombreController.dispose();
    _correoController.dispose();
    _telefonoController.dispose();
    _direccionController.dispose();
    super.dispose();
  }

  Future<void> _guardar() async {
    if (!_formKey.currentState!.validate()) {
      return;
    }

    setState(() {
      _guardando = true;
    });

    try {
      await ref
          .read(
            clientesRepositoryProvider,
          )
          .crearClienteOffline(
            nombre: _nombreController.text,
            correo: _correoController.text,
            telefono:
                _telefonoController.text,
            direccion:
                _direccionController.text,
          );

      if (!mounted) {
        return;
      }

      Navigator.of(context).pop(true);
    } catch (error) {
      if (!mounted) {
        return;
      }

      setState(() {
        _guardando = false;
      });

      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            'No fue posible guardar el cliente: '
            '$error',
          ),
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text(
        'Nuevo cliente',
      ),
      content: SingleChildScrollView(
        child: Form(
          key: _formKey,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              TextFormField(
                controller: _nombreController,
                textCapitalization:
                    TextCapitalization.words,
                decoration:
                    const InputDecoration(
                  labelText: 'Nombre',
                  prefixIcon: Icon(
                    Icons.person_outline,
                  ),
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
                controller: _correoController,
                keyboardType:
                    TextInputType.emailAddress,
                decoration:
                    const InputDecoration(
                  labelText: 'Correo',
                  prefixIcon: Icon(
                    Icons.email_outlined,
                  ),
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
                controller:
                    _telefonoController,
                keyboardType:
                    TextInputType.phone,
                decoration:
                    const InputDecoration(
                  labelText: 'Teléfono',
                  prefixIcon: Icon(
                    Icons.phone_outlined,
                  ),
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
                    _direccionController,
                decoration:
                    const InputDecoration(
                  labelText:
                      'Dirección (opcional)',
                  prefixIcon: Icon(
                    Icons.location_on_outlined,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
      actions: [
        TextButton(
          onPressed: _guardando
              ? null
              : () {
                  Navigator.of(context)
                      .pop(false);
                },
          child: const Text(
            'Cancelar',
          ),
        ),
        FilledButton(
          onPressed:
              _guardando ? null : _guardar,
          child: _guardando
              ? const SizedBox(
                  width: 20,
                  height: 20,
                  child:
                      CircularProgressIndicator(
                    strokeWidth: 2,
                  ),
                )
              : const Text(
                  'Guardar',
                ),
        ),
      ],
    );
  }
}

class _EstadoSincronizacion
    extends StatelessWidget {
  const _EstadoSincronizacion({
    required this.clientes,
    required this.sincronizando,
    required this.sinConexion,
    required this.estadoCache,
  });

  final List<ClientesLocale> clientes;
  final bool sincronizando;
  final bool sinConexion;
  final AsyncValue<EstadoCacheClientes> estadoCache;

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

    late IconData icono;
    late String mensaje;
    Color color = const Color(0xFF512DA8);

    if (sincronizando) {
      icono = Icons.sync;
      mensaje = 'Actualizando clientes...';
    } else if (sinConexion) {
      icono = Icons.cloud_off_outlined;
      color = Colors.orange.shade800;

      if (clientes.isEmpty) {
        mensaje =
            'No fue posible conectarse al servidor '
            'y todavía no existen datos locales.';
      } else {
        final cache = estadoCache.when(
          data: (estado) => estado,
          loading: () => null,
          error: (_, _) => null,
        );

        if (cache == EstadoCacheClientes.vencido) {
          icono = Icons.warning_amber_rounded;

          mensaje =
              'Sin conexión con el servidor. '
              'Los datos locales están desactualizados '
              'porque la última sincronización supera '
              'los 7 días.'
              '${ultimaSincronizacion != null ? ' '
                  'Última sincronización: '
                  '${_fechaCorta(ultimaSincronizacion)}.' : ''}';
        } else if (cache ==
            EstadoCacheClientes.vigente) {
          mensaje =
              'Sin conexión con el servidor. '
              'Se muestran los datos guardados '
              'en el dispositivo. Caché vigente.'
              '${ultimaSincronizacion != null ? ' '
                  'Última sincronización: '
                  '${_fechaCorta(ultimaSincronizacion)}.' : ''}';
        } else {
          mensaje =
              'Sin conexión con el servidor. '
              'Se muestran los datos guardados '
              'en el dispositivo.';
        }
      }
    } else {
      estadoCache.when(
        loading: () {
          icono = Icons.hourglass_empty;
          mensaje =
              'Verificando estado del caché...';
        },
        error: (_, _) {
          icono = Icons.info_outline;
          mensaje =
              'No fue posible determinar el estado '
              'del caché local.';
        },
        data: (estado) {
          if (estado ==
              EstadoCacheClientes.sinDatos) {
            icono = Icons.info_outline;
            mensaje =
                'Sin datos sincronizados almacenados '
                'en el dispositivo.';
          } else if (estado ==
              EstadoCacheClientes.vencido) {
            icono = Icons.warning_amber_rounded;
            color = Colors.orange.shade800;

            mensaje =
                'Datos locales desactualizados. '
                'La última sincronización supera '
                'los 7 días.'
                '${ultimaSincronizacion != null ? ' '
                    'Última sincronización: '
                    '${_fechaCorta(ultimaSincronizacion)}.' : ''}';
          } else {
            icono = Icons.cloud_done_outlined;

            mensaje =
                'Caché vigente.'
                '${ultimaSincronizacion != null ? ' '
                    'Última sincronización: '
                    '${_fechaCorta(ultimaSincronizacion)}.' : ''}';
          }
        },
      );
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
              color: color,
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Text(
                mensaje,
                style: TextStyle(
                  color: color,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _ClienteTile extends StatelessWidget {
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