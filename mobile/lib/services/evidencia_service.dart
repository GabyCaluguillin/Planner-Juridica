import 'dart:io';

import 'package:image_picker/image_picker.dart';
import 'package:path/path.dart' as p;
import 'package:path_provider/path_provider.dart';
import 'package:permission_handler/permission_handler.dart';

import 'resultado_capacidad_nativa.dart';

class EvidenciaService {
  EvidenciaService({ImagePicker? imagePicker})
      : _imagePicker = imagePicker ?? ImagePicker();

  final ImagePicker _imagePicker;

  Future<ResultadoCapacidadNativa<String>> tomarFoto() async {
    final permiso = await _solicitarPermisoCamara();

    if (!permiso.fueConcedida) {
      return ResultadoCapacidadNativa(
        estado: permiso.estado,
        mensaje: permiso.mensaje,
      );
    }

    return _seleccionarYGuardar(ImageSource.camera);
  }

  Future<ResultadoCapacidadNativa<String>>
      seleccionarDesdeElDispositivo() {
    // image_picker utiliza el selector del sistema. No se solicita permiso
    // amplio de galería ni se declara READ_MEDIA_IMAGES en Android.
    return _seleccionarYGuardar(ImageSource.gallery);
  }

  Future<bool> abrirAjustesAplicacion() => openAppSettings();

  Future<ResultadoCapacidadNativa<void>>
      _solicitarPermisoCamara() async {
    var estado = await Permission.camera.status;

    if (estado.isGranted) {
      return const ResultadoCapacidadNativa(
        estado: EstadoCapacidadNativa.concedida,
        mensaje: 'Permiso de cámara concedido.',
      );
    }

    if (estado.isPermanentlyDenied) {
      return const ResultadoCapacidadNativa(
        estado: EstadoCapacidadNativa.denegadaPermanentemente,
        mensaje: 'El permiso de cámara fue denegado permanentemente. '
            'Actívalo desde los ajustes para tomar una evidencia.',
      );
    }

    if (estado.isRestricted) {
      return const ResultadoCapacidadNativa(
        estado: EstadoCapacidadNativa.noDisponible,
        mensaje: 'La cámara no está disponible por una restricción del dispositivo.',
      );
    }

    estado = await Permission.camera.request();

    if (estado.isGranted) {
      return const ResultadoCapacidadNativa(
        estado: EstadoCapacidadNativa.concedida,
        mensaje: 'Permiso de cámara concedido.',
      );
    }

    if (estado.isPermanentlyDenied) {
      return const ResultadoCapacidadNativa(
        estado: EstadoCapacidadNativa.denegadaPermanentemente,
        mensaje: 'El permiso de cámara fue denegado permanentemente. '
            'Actívalo desde los ajustes para tomar una evidencia.',
      );
    }

    if (estado.isRestricted) {
      return const ResultadoCapacidadNativa(
        estado: EstadoCapacidadNativa.noDisponible,
        mensaje: 'La cámara no está disponible por una restricción del dispositivo.',
      );
    }

    return const ResultadoCapacidadNativa(
      estado: EstadoCapacidadNativa.denegada,
      mensaje: 'No se concedió acceso a la cámara. Puedes registrar el cliente sin evidencia.',
    );
  }

  Future<ResultadoCapacidadNativa<String>> _seleccionarYGuardar(
    ImageSource source,
  ) async {
    try {
      final imagen = await _imagePicker.pickImage(
        source: source,
        imageQuality: 85,
        requestFullMetadata: false,
      );

      if (imagen == null) {
        return const ResultadoCapacidadNativa(
          estado: EstadoCapacidadNativa.cancelada,
          mensaje: 'No se seleccionó ninguna evidencia.',
        );
      }

      final ruta = await _guardarEnDirectorioPrivado(imagen);

      return ResultadoCapacidadNativa(
        estado: EstadoCapacidadNativa.concedida,
        mensaje: 'Evidencia adjuntada al cliente.',
        valor: ruta,
      );
    } catch (_) {
      return const ResultadoCapacidadNativa(
        estado: EstadoCapacidadNativa.error,
        mensaje: 'No fue posible obtener la evidencia. Puedes continuar sin adjuntarla.',
      );
    }
  }

  Future<String> _guardarEnDirectorioPrivado(XFile imagen) async {
    final directorio = await getApplicationDocumentsDirectory();
    final evidencias = Directory(p.join(directorio.path, 'evidencias'));

    if (!await evidencias.exists()) {
      await evidencias.create(recursive: true);
    }

    final extension = p.extension(imagen.path).isEmpty
        ? '.jpg'
        : p.extension(imagen.path);
    final nombre = 'evidencia_${DateTime.now().microsecondsSinceEpoch}$extension';
    final destino = p.join(evidencias.path, nombre);

    await File(imagen.path).copy(destino);
    return destino;
  }
}
