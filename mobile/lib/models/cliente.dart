import 'package:json_annotation/json_annotation.dart';

part 'cliente.g.dart';

@JsonSerializable()
class Cliente {
  const Cliente({
    required this.id,
    required this.nombre,
    required this.correo,
    required this.telefono,
    this.direccion,
    required this.createdAt,
    required this.updatedAt,
  });

  final int id;
  final String nombre;
  final String correo;
  final String telefono;
  final String? direccion;
  final DateTime createdAt;
  final DateTime updatedAt;

  factory Cliente.fromJson(Map<String, dynamic> json) =>
      _$ClienteFromJson(json);

  Map<String, dynamic> toJson() => _$ClienteToJson(this);
}

@JsonSerializable()
class ClienteSolicitud {
  const ClienteSolicitud({
    required this.nombre,
    required this.correo,
    required this.telefono,
    this.direccion,
  });

  final String nombre;
  final String correo;
  final String telefono;
  final String? direccion;

  factory ClienteSolicitud.fromJson(
    Map<String, dynamic> json,
  ) =>
      _$ClienteSolicitudFromJson(json);

  Map<String, dynamic> toJson() =>
      _$ClienteSolicitudToJson(this);
}