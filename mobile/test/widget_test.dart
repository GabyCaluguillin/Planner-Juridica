import 'package:flutter_test/flutter_test.dart';
import 'package:planner_juridica_mobile/main.dart';

void main() {
  testWidgets('Muestra la pantalla de inicio de sesión',
      (WidgetTester tester) async {
    await tester.pumpWidget(const PlannerJuridicaApp());

    expect(find.text('Planner Jurídica'), findsOneWidget);
    expect(find.text('Correo electrónico'), findsOneWidget);
    expect(find.text('Contraseña'), findsOneWidget);
    expect(find.text('Iniciar sesión'), findsOneWidget);
  });
}