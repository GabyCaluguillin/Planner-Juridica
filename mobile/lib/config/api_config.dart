class ApiConfig {
  static const String baseUrl = String.fromEnvironment(
    'API_URL',
    defaultValue: 'http://10.0.2.2:3000/api',
  );

  static const bool esProduccion =
      bool.fromEnvironment('dart.vm.product');

  static void validar() {
    final uri = Uri.tryParse(baseUrl);

    if (uri == null ||
        !uri.hasScheme ||
        !uri.hasAuthority) {
      throw StateError(
        'La variable API_URL no contiene una URL válida.',
      );
    }

    if (esProduccion && uri.scheme != 'https') {
      throw StateError(
        'En producción, API_URL debe utilizar HTTPS.',
      );
    }
  }
}