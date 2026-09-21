enum EstadoCapacidadNativa {
  concedida,
  denegada,
  denegadaPermanentemente,
  noDisponible,
  cancelada,
  error,
}

class ResultadoCapacidadNativa<T> {
  const ResultadoCapacidadNativa({
    required this.estado,
    required this.mensaje,
    this.valor,
  });

  final EstadoCapacidadNativa estado;
  final String mensaje;
  final T? valor;

  bool get fueConcedida =>
      estado == EstadoCapacidadNativa.concedida;

  bool get requiereAjustes =>
      estado == EstadoCapacidadNativa.denegadaPermanentemente;
}
