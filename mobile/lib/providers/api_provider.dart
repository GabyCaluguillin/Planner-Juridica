import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../services/api_client.dart';
import '../services/auth_service.dart';
import '../services/casos_api_service.dart';
import '../services/clientes_api_service.dart';

final apiClientProvider = Provider<ApiClient>((ref) {
  return ApiClient();
});

final authServiceProvider =
    Provider<AuthService>((ref) {
  final apiClient = ref.watch(apiClientProvider);

  return AuthService(apiClient);
});

final clientesApiServiceProvider =
    Provider<ClientesApiService>((ref) {
  final apiClient = ref.watch(apiClientProvider);

  return ClientesApiService(apiClient);
});

final casosApiServiceProvider =
    Provider<CasosApiService>((ref) {
  final apiClient = ref.watch(apiClientProvider);

  return CasosApiService(apiClient);
});
