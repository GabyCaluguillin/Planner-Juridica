class Usuario {
  const Usuario({
    required this.id,
    required this.nombre,
    required this.correo,
    required this.rol,
  });

  final dynamic id;
  final String nombre;
  final String correo;
  final String rol;

  factory Usuario.fromJson(Map<String, dynamic> json) {
    return Usuario(
      id: json['id'],
      nombre: json['nombre']?.toString() ?? '',
      correo: json['correo']?.toString() ?? '',
      rol: json['rol']?.toString() ?? '',
    );
  }
}