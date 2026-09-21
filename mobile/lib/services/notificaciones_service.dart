import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:permission_handler/permission_handler.dart';

import 'resultado_capacidad_nativa.dart';

class NotificacionesService {
  NotificacionesService({FlutterLocalNotificationsPlugin? plugin})
    : _plugin = plugin ?? FlutterLocalNotificationsPlugin();

  final FlutterLocalNotificationsPlugin _plugin;
  bool _inicializado = false;

  static const _canal = AndroidNotificationChannel(
    'clientes_pendientes',
    'Clientes pendientes',
    description: 'Avisos sobre clientes que aún no se han sincronizado.',
    importance: Importance.defaultImportance,
  );

  Future<void> inicializar() async {
    if (_inicializado) {
      return;
    }

    const ajustes = InitializationSettings(
      android: AndroidInitializationSettings('@mipmap/ic_launcher'),
      iOS: DarwinInitializationSettings(
        requestAlertPermission: false,
        requestBadgePermission: false,
        requestSoundPermission: false,
      ),
    );

    await _plugin.initialize(settings: ajustes);

    final android = _plugin
        .resolvePlatformSpecificImplementation<
          AndroidFlutterLocalNotificationsPlugin
        >();

    await android?.createNotificationChannel(_canal);

    _inicializado = true;
  }

  Future<ResultadoCapacidadNativa<void>> notificarClientesPendientes(
    int cantidad,
  ) async {
    final permiso = await _solicitarPermisoNotificaciones();

    if (!permiso.fueConcedida) {
      return permiso;
    }

    try {
      await _plugin.show(
        id: 7001,
        title: 'Planner Jurídica',
        body: cantidad == 1
            ? 'Hay 1 cliente pendiente de sincronización.'
            : 'Hay $cantidad clientes pendientes de sincronización.',
        notificationDetails: const NotificationDetails(
          android: AndroidNotificationDetails(
            'clientes_pendientes',
            'Clientes pendientes',
            channelDescription:
                'Avisos sobre clientes que aún no se han sincronizado.',
            importance: Importance.defaultImportance,
            priority: Priority.defaultPriority,
          ),
          iOS: DarwinNotificationDetails(),
        ),
      );

      return const ResultadoCapacidadNativa(
        estado: EstadoCapacidadNativa.concedida,
        mensaje: 'Aviso local enviado.',
      );
    } catch (_) {
      return const ResultadoCapacidadNativa(
        estado: EstadoCapacidadNativa.error,
        mensaje: 'No fue posible mostrar el aviso local.',
      );
    }
  }

  Future<bool> abrirAjustesAplicacion() {
    return openAppSettings();
  }

  Future<ResultadoCapacidadNativa<void>>
  _solicitarPermisoNotificaciones() async {
    var estado = await Permission.notification.status;

    if (estado.isGranted) {
      return const ResultadoCapacidadNativa(
        estado: EstadoCapacidadNativa.concedida,
        mensaje: 'Permiso de notificaciones concedido.',
      );
    }

    if (estado.isPermanentlyDenied) {
      return const ResultadoCapacidadNativa(
        estado: EstadoCapacidadNativa.denegadaPermanentemente,
        mensaje:
            'Las notificaciones están desactivadas permanentemente. '
            'Puedes activarlas desde los ajustes.',
      );
    }

    if (estado.isRestricted) {
      return const ResultadoCapacidadNativa(
        estado: EstadoCapacidadNativa.noDisponible,
        mensaje: 'Las notificaciones no están disponibles en este dispositivo.',
      );
    }

    estado = await Permission.notification.request();

    if (estado.isGranted) {
      return const ResultadoCapacidadNativa(
        estado: EstadoCapacidadNativa.concedida,
        mensaje: 'Permiso de notificaciones concedido.',
      );
    }

    if (estado.isPermanentlyDenied) {
      return const ResultadoCapacidadNativa(
        estado: EstadoCapacidadNativa.denegadaPermanentemente,
        mensaje:
            'Las notificaciones están desactivadas permanentemente. '
            'Puedes activarlas desde los ajustes.',
      );
    }

    if (estado.isRestricted) {
      return const ResultadoCapacidadNativa(
        estado: EstadoCapacidadNativa.noDisponible,
        mensaje: 'Las notificaciones no están disponibles en este dispositivo.',
      );
    }

    return const ResultadoCapacidadNativa(
      estado: EstadoCapacidadNativa.denegada,
      mensaje:
          'No se concedió permiso para los avisos. '
          'La aplicación seguirá sincronizando normalmente.',
    );
  }
}
