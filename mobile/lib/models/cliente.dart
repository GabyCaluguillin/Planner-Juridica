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

  factory Cliente.fromJson(Map<String, dynamic> json) {
    return Cliente(
      id: json['id'] as int,
      nombre: json['nombre'] as String,
      correo: json['correo'] as String,
      telefono: json['telefono'] as String,
      direccion: json['direccion'] as String?,
      createdAt: DateTime.parse(json['createdAt'] as String),
      updatedAt: DateTime.parse(json['updatedAt'] as String),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'nombre': nombre,
      'correo': correo,
      'telefono': telefono,
      'direccion': direccion,
      'createdAt': createdAt.toIso8601String(),
      'updatedAt': updatedAt.toIso8601String(),
    };
  }
}

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

  Map<String, dynamic> toJson() {
    return {
      'nombre': nombre,
      'correo': correo,
      'telefono': telefono,
      'direccion': direccion,
    };
  }
}
