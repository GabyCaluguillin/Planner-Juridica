import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../pages/casos_page.dart';
import '../pages/clientes_page.dart';
import '../pages/inicio_page.dart';
import '../pages/login_page.dart';
import '../providers/auth_provider.dart';

final routerProvider = Provider<GoRouter>((ref) {
  final authState = ref.watch(authProvider);

  final router = GoRouter(
    initialLocation: '/login',
    routes: [
      GoRoute(
        path: '/login',
        builder: (context, state) =>
            const LoginPage(),
      ),
      GoRoute(
        path: '/inicio',
        builder: (context, state) =>
            const InicioPage(),
      ),
      GoRoute(
        path: '/clientes',
        builder: (context, state) =>
            const ClientesPage(),
      ),
      GoRoute(
        path: '/casos',
        builder: (context, state) =>
            const CasosPage(),
      ),
    ],
    redirect: (context, state) {
      // Mientras FlutterSecureStorage recupera
      // la sesión, no se toma ninguna decisión
      // de navegación.
      if (authState.cargando) {
        return null;
      }

      final autenticado =
          authState.autenticado;

      final estaEnLogin =
          state.matchedLocation == '/login';

      if (!autenticado &&
          !estaEnLogin) {
        return '/login';
      }

      if (autenticado &&
          estaEnLogin) {
        return '/inicio';
      }

      return null;
    },
  );

  ref.onDispose(router.dispose);

  return router;
});