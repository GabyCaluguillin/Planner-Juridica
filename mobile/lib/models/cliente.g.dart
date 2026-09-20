// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'cliente.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Cliente _$ClienteFromJson(Map<String, dynamic> json) => Cliente(
  id: (json['id'] as num).toInt(),
  nombre: json['nombre'] as String,
  correo: json['correo'] as String,
  telefono: json['telefono'] as String,
  direccion: json['direccion'] as String?,
  createdAt: DateTime.parse(json['createdAt'] as String),
  updatedAt: DateTime.parse(json['updatedAt'] as String),
);

Map<String, dynamic> _$ClienteToJson(Cliente instance) => <String, dynamic>{
  'id': instance.id,
  'nombre': instance.nombre,
  'correo': instance.correo,
  'telefono': instance.telefono,
  'direccion': instance.direccion,
  'createdAt': instance.createdAt.toIso8601String(),
  'updatedAt': instance.updatedAt.toIso8601String(),
};

ClienteSolicitud _$ClienteSolicitudFromJson(Map<String, dynamic> json) =>
    ClienteSolicitud(
      nombre: json['nombre'] as String,
      correo: json['correo'] as String,
      telefono: json['telefono'] as String,
      direccion: json['direccion'] as String?,
    );

Map<String, dynamic> _$ClienteSolicitudToJson(ClienteSolicitud instance) =>
    <String, dynamic>{
      'nombre': instance.nombre,
      'correo': instance.correo,
      'telefono': instance.telefono,
      'direccion': instance.direccion,
    };
