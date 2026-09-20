import 'package:json_annotation/json_annotation.dart';

import 'usuario.dart';

part 'caso.g.dart';

@JsonSerializable()
class Caso {
  const Caso({
    required this.id,
    required this.numero,
    required this.asunto,
    required this.tipo,
    required this.estado,
    required this.fechaInicio,
    this.fechaCierre,
    required this.usuarioId,
    required this.clienteId,
    required this.createdAt,
    required this.updatedAt,
    required this.cliente,
    required this.usuario,
    required this.responsables,
  });

  final int id;
  final String numero;
  final String asunto;
  final String tipo;
  final String estado;
  final DateTime fechaInicio;
  final DateTime? fechaCierre;
  final int usuarioId;
  final int clienteId;
  final DateTime createdAt;
  final DateTime updatedAt;
  final ClienteCasoResumen cliente;
  final Usuario usuario;
  final List<ResponsableCaso> responsables;

  factory Caso.fromJson(
    Map<String, dynamic> json,
  ) =>
      _$CasoFromJson(json);

  Map<String, dynamic> toJson() =>
      _$CasoToJson(this);
}

@JsonSerializable()
class ClienteCasoResumen {
  const ClienteCasoResumen({
    required this.id,
    required this.nombre,
    required this.correo,
    required this.telefono,
  });

  final int id;
  final String nombre;
  final String correo;
  final String telefono;

  factory ClienteCasoResumen.fromJson(
    Map<String, dynamic> json,
  ) =>
      _$ClienteCasoResumenFromJson(json);

  Map<String, dynamic> toJson() =>
      _$ClienteCasoResumenToJson(this);
}

@JsonSerializable()
class ResponsableCaso {
  const ResponsableCaso({
    required this.id,
    required this.usuarioId,
    required this.esPrincipal,
    required this.createdAt,
    required this.usuario,
  });

  final int id;
  final int usuarioId;
  final bool esPrincipal;
  final DateTime createdAt;
  final Usuario usuario;

  factory ResponsableCaso.fromJson(
    Map<String, dynamic> json,
  ) =>
      _$ResponsableCasoFromJson(json);

  Map<String, dynamic> toJson() =>
      _$ResponsableCasoToJson(this);
}
