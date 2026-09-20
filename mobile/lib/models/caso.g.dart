// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'caso.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Caso _$CasoFromJson(Map<String, dynamic> json) => Caso(
  id: (json['id'] as num).toInt(),
  numero: json['numero'] as String,
  asunto: json['asunto'] as String,
  tipo: json['tipo'] as String,
  estado: json['estado'] as String,
  fechaInicio: DateTime.parse(json['fechaInicio'] as String),
  fechaCierre: json['fechaCierre'] == null
      ? null
      : DateTime.parse(json['fechaCierre'] as String),
  usuarioId: (json['usuarioId'] as num).toInt(),
  clienteId: (json['clienteId'] as num).toInt(),
  createdAt: DateTime.parse(json['createdAt'] as String),
  updatedAt: DateTime.parse(json['updatedAt'] as String),
  cliente: ClienteCasoResumen.fromJson(json['cliente'] as Map<String, dynamic>),
  usuario: Usuario.fromJson(json['usuario'] as Map<String, dynamic>),
  responsables: (json['responsables'] as List<dynamic>)
      .map((e) => ResponsableCaso.fromJson(e as Map<String, dynamic>))
      .toList(),
);

Map<String, dynamic> _$CasoToJson(Caso instance) => <String, dynamic>{
  'id': instance.id,
  'numero': instance.numero,
  'asunto': instance.asunto,
  'tipo': instance.tipo,
  'estado': instance.estado,
  'fechaInicio': instance.fechaInicio.toIso8601String(),
  'fechaCierre': instance.fechaCierre?.toIso8601String(),
  'usuarioId': instance.usuarioId,
  'clienteId': instance.clienteId,
  'createdAt': instance.createdAt.toIso8601String(),
  'updatedAt': instance.updatedAt.toIso8601String(),
  'cliente': instance.cliente,
  'usuario': instance.usuario,
  'responsables': instance.responsables,
};

ClienteCasoResumen _$ClienteCasoResumenFromJson(Map<String, dynamic> json) =>
    ClienteCasoResumen(
      id: (json['id'] as num).toInt(),
      nombre: json['nombre'] as String,
      correo: json['correo'] as String,
      telefono: json['telefono'] as String,
    );

Map<String, dynamic> _$ClienteCasoResumenToJson(ClienteCasoResumen instance) =>
    <String, dynamic>{
      'id': instance.id,
      'nombre': instance.nombre,
      'correo': instance.correo,
      'telefono': instance.telefono,
    };

ResponsableCaso _$ResponsableCasoFromJson(Map<String, dynamic> json) =>
    ResponsableCaso(
      id: (json['id'] as num).toInt(),
      usuarioId: (json['usuarioId'] as num).toInt(),
      esPrincipal: json['esPrincipal'] as bool,
      createdAt: DateTime.parse(json['createdAt'] as String),
      usuario: Usuario.fromJson(json['usuario'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$ResponsableCasoToJson(ResponsableCaso instance) =>
    <String, dynamic>{
      'id': instance.id,
      'usuarioId': instance.usuarioId,
      'esPrincipal': instance.esPrincipal,
      'createdAt': instance.createdAt.toIso8601String(),
      'usuario': instance.usuario,
    };
