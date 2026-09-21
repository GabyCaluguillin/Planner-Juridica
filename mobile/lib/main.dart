import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'router/app_router.dart';
import 'services/notificaciones_service.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await NotificacionesService().inicializar();

  runApp(const ProviderScope(child: PlannerJuridicaApp()));
}

class PlannerJuridicaApp extends ConsumerWidget {
  const PlannerJuridicaApp({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final router = ref.watch(routerProvider);

    return MaterialApp.router(
      debugShowCheckedModeBanner: false,
      title: 'Planner Jurídica',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF512DA8)),
        useMaterial3: true,
      ),
      routerConfig: router,
    );
  }
}
