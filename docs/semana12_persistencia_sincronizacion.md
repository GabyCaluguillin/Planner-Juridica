# Semana 12 – Persistencia local, almacenamiento seguro y sincronización

## Proyecto: Planner Jurídica

### 1. Introducción

La aplicación móvil Planner Jurídica incorpora mecanismos de persistencia local y sincronización con el servidor para mantener la disponibilidad de información incluso cuando el dispositivo pierde temporalmente la conexión a Internet. La solución implementada utiliza una arquitectura local-first, en la cual la interfaz puede consultar la información almacenada en el dispositivo mientras se intenta mantenerla sincronizada con la API y la base de datos PostgreSQL.

La implementación prioriza la continuidad de uso, el control de operaciones pendientes, la prevención de duplicados, el manejo de errores temporales y la conservación de información local durante períodos sin conectividad.

---

## 2. Tecnologías utilizadas

En la aplicación móvil se utilizan las siguientes tecnologías principales:

- Flutter y Dart para la aplicación móvil.
- Drift sobre SQLite para persistencia local estructurada.
- Flutter Secure Storage para almacenamiento seguro de la sesión.
- Dio para comunicación HTTP con la API.
- Riverpod para administración de estado.
- Connectivity Plus para detectar cambios de conectividad.
- UUID para generar identificadores únicos de operaciones offline.
- PostgreSQL y Prisma en el backend.
- Redis como servicio complementario del backend.

---

## 3. Clasificación de la información almacenada

La información utilizada por la aplicación se clasifica según su nivel de sensibilidad y su finalidad.

| Información | Clasificación | Ubicación | Justificación |
|---|---|---|---|
| Token de acceso | Sensible | Flutter Secure Storage | Permite autenticar solicitudes y no debe almacenarse en texto plano |
| Datos mínimos del usuario autenticado | Interna | Flutter Secure Storage | Permite restaurar la sesión |
| Nombre del cliente | Personal | SQLite local | Necesario para la consulta offline |
| Correo del cliente | Personal | SQLite local | Utilizado para identificar y registrar al cliente |
| Teléfono | Personal | SQLite local | Información necesaria para la gestión jurídica |
| Dirección | Personal | SQLite local | Campo opcional utilizado por el sistema |
| Identificador local | Técnica | SQLite local | Permite trabajar offline |
| Identificador del servidor | Técnica | SQLite local | Relaciona el registro local con PostgreSQL |
| Fecha de última sincronización | Técnica | SQLite local | Permite controlar la vigencia del caché |
| Estado de sincronización | Técnica | SQLite local | Identifica registros pendientes |
| Operación UUID | Técnica | SQLite y servidor | Previene operaciones duplicadas |

La aplicación almacena localmente únicamente los datos necesarios para mantener la funcionalidad de la pantalla de clientes y la sincronización.

---

## 4. Almacenamiento seguro de la sesión

La sesión del usuario se administra mediante Flutter Secure Storage.

El token de acceso no se guarda en SQLite ni en mecanismos de almacenamiento simple como SharedPreferences. Se mantiene dentro del almacenamiento seguro proporcionado por el sistema operativo.

También se conserva información mínima del usuario autenticado para permitir la recuperación de la sesión cuando la aplicación se vuelve a abrir.

La aplicación no almacena la contraseña del usuario.

Cuando se cierra sesión se ejecuta la eliminación del almacenamiento seguro y posteriormente se eliminan los datos locales asociados a la sesión.

---


### 4.1. Access token y refresh token

La autenticación utiliza dos tipos de tokens:

- `accessToken`: se utiliza para autorizar las peticiones protegidas hacia la API y posee una duración configurada de 8 horas.
- `refreshToken`: se utiliza exclusivamente para solicitar nuevos tokens cuando el access token ha expirado y posee una duración mayor.

Ambos tokens se almacenan mediante Flutter Secure Storage y no se guardan en SQLite ni en almacenamiento de texto plano.

El backend dispone del endpoint:

`POST /api/auth/refresh`

Cuando una petición protegida responde con HTTP 401 debido a la expiración del access token, el interceptor de Dio recupera el refresh token desde el almacenamiento seguro, solicita nuevos tokens al servidor y repite una sola vez la petición original.

La renovación fue comprobada utilizando temporalmente un access token con duración de 30 segundos. Después de su expiración, la aplicación accedió nuevamente al módulo de clientes, renovó la sesión automáticamente y completó la petición sin solicitar nuevamente las credenciales del usuario.

Al finalizar la prueba, la duración normal del access token se restauró a 8 horas.

El cierre de sesión elimina tanto el access token como el refresh token del almacenamiento seguro.

## 5. Base de datos local

Para la persistencia local se utiliza Drift sobre SQLite.

La base local contiene principalmente dos tablas:

### ClientesLocales

Permite conservar temporalmente los clientes obtenidos desde el servidor o creados mientras el dispositivo se encuentra sin conexión.

Entre sus campos se encuentran:

- `idLocal`
- `idServidor`
- `nombre`
- `correo`
- `telefono`
- `direccion`
- `actualizadoEnServidor`
- `ultimaSincronizacion`
- `pendienteSincronizacion`
- `eliminadoLocalmente`

### OperacionesPendientes

Funciona como una cola local de operaciones que todavía no han sido confirmadas por el servidor.

Sus principales campos son:

- `idOperacion`
- `tipo`
- `entidad`
- `idEntidadLocal`
- `datosJson`
- `intentos`
- `estado`
- `creadoEn`

Esta estructura permite separar los datos visibles para el usuario de las operaciones pendientes de envío.

---

## 6. Migraciones de la base local

La base de datos utiliza un número de versión mediante `schemaVersion`.

Actualmente el esquema se encuentra en la versión 2.

La migración realizada permitió incorporar el campo `direccion` sin eliminar la información almacenada anteriormente.

Este mecanismo evita recrear completamente la base de datos cuando se modifica su estructura y permite conservar los registros existentes.

---

## 7. Estrategia local-first

La pantalla de clientes trabaja con una estrategia local-first.

La interfaz observa directamente los registros almacenados en SQLite mediante un `StreamProvider`. Esto permite que los clientes continúen visibles aun cuando el servidor o Internet no estén disponibles.

Cuando existe conexión, la aplicación intenta actualizar la información desde la API.

Cuando no existe conexión, la pantalla conserva y presenta los registros guardados previamente.

Esto evita que la interfaz quede inutilizable únicamente por una pérdida temporal de conectividad.

---

## 8. Creación de clientes sin conexión

Cuando se crea un cliente, primero se genera un identificador local utilizando UUID.

La información se guarda dentro de SQLite y simultáneamente se registra una operación en la cola de operaciones pendientes.

La operación contiene otro UUID denominado `idOperacion`.

El cliente queda marcado mediante:

`pendienteSincronizacion = true`

De esta manera el usuario puede continuar trabajando sin depender de una respuesta inmediata del servidor.

La interfaz muestra el mensaje:

`Pendiente de sincronización`

para identificar visualmente los registros todavía no confirmados.

---

## 9. Cola Outbox

Planner Jurídica implementa el patrón Outbox para las operaciones realizadas sin conexión.

La creación del cliente y la operación pendiente se almacenan dentro de una misma transacción local.

Esto evita que exista un cliente pendiente sin su correspondiente operación de sincronización.

Cuando la conexión está disponible, la aplicación consulta la cola e intenta procesar sus operaciones.

Cuando una operación se confirma correctamente en el servidor:

1. Se elimina el registro temporal identificado mediante UUID local.
2. Se almacena el registro retornado por PostgreSQL.
3. Se registra el identificador real del servidor.
4. Se elimina la operación de la cola pendiente.
5. El cliente deja de mostrarse como pendiente de sincronización.

---

## 10. Idempotencia

Cada operación de creación utiliza un UUID único.

Este identificador se envía al backend utilizando la cabecera:

`X-Idempotency-Key`

El backend almacena este identificador en PostgreSQL mediante el campo `idOperacion`, que posee una restricción de unicidad.

Si la misma solicitud llega nuevamente por una interrupción de conexión o por un reintento, el servidor puede identificar que la operación ya fue procesada y devolver el registro existente.

Esto evita la creación duplicada de clientes.

Durante las pruebas se ejecutó una misma operación dos veces utilizando el mismo UUID y ambas respuestas devolvieron el mismo identificador de cliente, existiendo solamente un registro en PostgreSQL.

---

## 11. Política de reintentos

La sincronización utiliza un máximo de tres intentos para errores considerados temporales.

Se aplica una espera progresiva entre intentos:

Primer reintento: 1 segundo.

Segundo reintento: 2 segundos.

Los errores de conexión, timeout, código HTTP 408, código 429 y errores del servidor 5xx se consideran potencialmente recuperables.

Los errores determinísticos del cliente, como un conflicto HTTP 409, no se reintentan repetidamente.

Esta estrategia evita generar solicitudes innecesarias contra el servidor.

---

## 12. Manejo de conflictos

La aplicación diferencia entre errores temporales de comunicación y conflictos de negocio.

Un ejemplo de conflicto es intentar registrar un correo que ya pertenece a otro cliente. El backend responde con HTTP 409 y la operación se identifica como no reintentable.

Para los registros que todavía se encuentran pendientes localmente, la aplicación evita sobrescribirlos mediante una descarga del servidor.

Para los registros ya sincronizados, PostgreSQL funciona como fuente principal de información y el campo `updatedAt` enviado por el servidor se almacena localmente como `actualizadoEnServidor`.

Actualmente la funcionalidad offline implementada sobre clientes está centrada en la creación. La información temporal del servidor ya se conserva para permitir que futuras operaciones de actualización puedan comparar versiones sin depender del reloj local del dispositivo.

---

## 13. Fecha del servidor

La aplicación no utiliza exclusivamente la hora del dispositivo para determinar cuándo fue modificado un registro en el servidor.

La API devuelve el campo:

`updatedAt`

Este valor se conserva localmente como:

`actualizadoEnServidor`

Esto permite disponer de una referencia temporal generada por el servidor y reduce problemas ocasionados por dispositivos con fecha u hora incorrecta.

---

## 14. Caché local y vigencia

La información sincronizada de clientes utiliza una política de vigencia de siete días.

La aplicación almacena la fecha de la última sincronización de cada cliente.

Se implementaron tres estados de caché:

`Sin datos`

`Caché vigente`

`Datos locales desactualizados`

La pantalla informa visualmente al usuario sobre el estado de los datos.

Cuando existen datos con más de siete días, estos pueden considerarse vencidos.

La limpieza únicamente afecta registros sincronizados y nunca elimina clientes que tengan operaciones pendientes.

Además, la aplicación evita eliminar el caché antes de comprobar que el servidor se encuentra disponible. De esta manera una pérdida de Internet no provoca la eliminación de información necesaria para trabajar offline.

---

## 15. Última sincronización

La pantalla de clientes muestra la fecha y hora de la última sincronización realizada correctamente.

Ejemplo:

`Caché vigente. Última sincronización: 19/09/2026 09:42.`

Este indicador permite al usuario conocer la antigüedad de la información almacenada en el dispositivo.

---

## 16. Sincronización automática al recuperar conectividad

Se incorporó `connectivity_plus` para detectar cambios en el estado de conectividad del dispositivo.

Cuando el dispositivo pasa de no tener conexión a disponer nuevamente de Wi-Fi o datos, Riverpod invalida el proceso de sincronización y solicita nuevamente la actualización de clientes.

Por lo tanto, una operación creada offline puede sincronizarse automáticamente cuando regresa la conexión sin necesidad de pulsar manualmente el botón de actualización.

La aplicación mantiene igualmente un botón de actualización manual como mecanismo adicional.

---

## 17. Limpieza al cerrar sesión

El cierre de sesión ejecuta una limpieza completa de los datos asociados a la sesión.

Se eliminan:

- Token y datos mínimos de sesión almacenados en Flutter Secure Storage.
- Clientes almacenados en SQLite.
- Operaciones pendientes almacenadas en la cola local.

Esta medida reduce el riesgo de que otro usuario del mismo dispositivo pueda consultar información perteneciente a una sesión anterior.

---

## 18. Política de minimización y retención

La persistencia local tiene como finalidad permitir continuidad de trabajo y sincronización.

No se almacena la contraseña del usuario.

Los datos locales de clientes se utilizan exclusivamente para consulta offline y sincronización.

El caché sincronizado tiene una vigencia definida de siete días.

Las operaciones pendientes se conservan únicamente mientras sea necesario completar o gestionar la sincronización.

Al cerrar sesión se eliminan los datos locales de clientes y operaciones.

La aplicación evita almacenar información que no sea necesaria para las funcionalidades implementadas.

---

## 19. Pruebas realizadas

Se realizaron pruebas funcionales sobre el flujo local-first y la sincronización.

| Prueba | Resultado |
|---|---|
| Consulta de clientes con servidor disponible | Correcto |
| Consulta de clientes con servidor detenido | Correcto |
| Persistencia después de cerrar y volver a abrir la app sin servidor | Correcto |
| Creación de cliente sin conexión | Correcto |
| Visualización de estado pendiente | Correcto |
| Reconexión y sincronización con PostgreSQL | Correcto |
| Idempotencia utilizando UUID | Correcto |
| Prevención de duplicados por operación | Correcto |
| Limpieza de SQLite al cerrar sesión | Correcto |
| Visualización de última sincronización | Correcto |
| Indicador de caché vigente | Correcto |
| Detección de modo sin conexión | Correcto |
| Sincronización automática al recuperar conectividad | Correcto |
| Manejo diferenciado de errores temporales y conflictos HTTP | Correcto |

---

## 20. Prueba en modo avión

Para comprobar el comportamiento offline se realizó una prueba utilizando el modo avión del emulador Android.

Primero se sincronizaron los clientes con el servidor disponible.

Posteriormente se activó el modo avión y se creó un nuevo cliente.

El registro apareció inmediatamente en la lista utilizando la base SQLite y fue identificado mediante el mensaje:

`Pendiente de sincronización`

Después se desactivó el modo avión sin utilizar el botón manual de actualización.

La aplicación detectó automáticamente la recuperación de conectividad y ejecutó la sincronización.

El estado pendiente desapareció y se actualizó la fecha de última sincronización.

Esta prueba permitió comprobar el funcionamiento conjunto de SQLite, Outbox, UUID, Dio, Connectivity Plus y PostgreSQL.

---

## 21. Evidencias obtenidas

Durante el desarrollo se conservaron capturas que demuestran los siguientes escenarios:

- Clientes sincronizados correctamente con el servidor.
- Consulta de datos locales con el backend detenido.
- Persistencia de información después de reiniciar la aplicación sin servidor.
- Creación de un cliente estando offline.
- Visualización del estado pendiente de sincronización.
- Sincronización posterior con PostgreSQL.
- Limpieza completa de los datos locales después del cierre de sesión.
- Visualización de caché vigente y última sincronización.
- Creación durante modo avión.
- Sincronización automática después de desactivar el modo avión.

Estas evidencias pueden incorporarse posteriormente en el informe académico de la actividad.

---

## 22. Uso de inteligencia artificial durante el desarrollo

Durante el desarrollo se utilizó inteligencia artificial como herramienta de apoyo técnico.

Su utilización se orientó principalmente a:

- Revisión de código Flutter y Dart.
- Organización de la arquitectura de persistencia local.
- Análisis de errores de compilación.
- Orientación para implementar Drift y SQLite.
- Diseño de la cola Outbox.
- Implementación de UUID e idempotencia.
- Revisión del flujo de sincronización.
- Configuración de Connectivity Plus.
- Organización de pruebas offline.
- Revisión de políticas de caché.
- Apoyo para documentar técnicamente las decisiones tomadas.

Las propuestas generadas fueron verificadas mediante ejecución directa del proyecto, `flutter analyze`, pruebas sobre el emulador Android, consultas a PostgreSQL y validación del comportamiento real de la aplicación.

La inteligencia artificial se utilizó como apoyo durante el proceso, mientras que las decisiones finales fueron comprobadas mediante pruebas prácticas sobre Planner Jurídica.

---

## 23. Conclusión

La implementación desarrollada permite que Planner Jurídica mantenga disponible la información necesaria aun cuando exista una pérdida temporal de conectividad. La combinación de Drift, SQLite, Flutter Secure Storage, Dio, Riverpod, UUID y Connectivity Plus permite gestionar datos locales, operaciones pendientes, reintentos e idempotencia de manera organizada.

El enfoque local-first evita que una interrupción de Internet inutilice completamente la aplicación. Además, el control de vigencia del caché, la identificación de operaciones pendientes, la sincronización automática, el uso de marcas temporales del servidor y la limpieza de información durante el cierre de sesión fortalecen la consistencia y seguridad del almacenamiento móvil.

Las pruebas realizadas demostraron que los datos pueden consultarse y crearse offline, mantenerse después de reiniciar la aplicación y sincronizarse posteriormente con PostgreSQL cuando se recupera la conexión.