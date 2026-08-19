# Planner Jurídica Mobile

Aplicación móvil desarrollada con Flutter para complementar el sistema Planner Jurídica.

El objetivo de esta aplicación es permitir el acceso móvil a funcionalidades del sistema jurídico, comenzando con la autenticación de usuarios mediante la API REST desarrollada en Node.js y Express.

## 1. Framework seleccionado

Se seleccionó Flutter como framework multiplataforma debido a que permite desarrollar aplicaciones móviles utilizando una única base de código en Dart.

Entre sus principales ventajas para este proyecto se encuentran:

- Desarrollo multiplataforma.
- Integración con aplicaciones Android.
- Hot Reload para visualizar cambios rápidamente.
- Amplio ecosistema de paquetes.
- Consumo sencillo de servicios REST mediante HTTP.
- Buena integración con Visual Studio Code y Android Studio.

## 2. Arquitectura utilizada

La aplicación utiliza la siguiente arquitectura de comunicación:

Flutter Mobile
↓
HTTP REST
↓
Node.js + Express
↓
PostgreSQL

El backend también utiliza Redis para funcionalidades de caché y procesamiento asíncrono.

## 3. Versiones del entorno

### Flutter

- Flutter: 3.47.0
- Canal: stable
- Dart: 3.13.0
- DevTools: 2.60.0

### Android

- Android Studio: Quail 3 | 2026.1.3
- Android SDK Platform: 36
- Android: 16
- Android SDK Build-Tools: 36.0.0
- Android Emulator: 37.1.11
- Android SDK Command-line Tools: 22.0
- Arquitectura del emulador: x86_64

### Java

- OpenJDK Runtime Environment: 25.0.2
- JDK incluido con Android Studio

### Editor

- Visual Studio Code: 1.133

### Sistema operativo

- Windows 11
- Versión 25H2

### Herramientas adicionales

- Node.js: v24.18.0
- npm: 11.16.0
- Git: 2.55.0.windows.3
- Docker: 29.5.3, build d1c06ef

## 4. Dispositivo virtual utilizado

Se configuró el siguiente dispositivo virtual para las pruebas:

- Nombre: Medium Phone
- Plataforma: Android 16
- API: 36
- Arquitectura: x86_64
- Servicios: Google Play
- Resolución: 1080 x 2400
- Densidad: 420 dpi

Para verificar los dispositivos disponibles:

```bash
flutter devices