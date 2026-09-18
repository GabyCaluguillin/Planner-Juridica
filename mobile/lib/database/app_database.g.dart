// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'app_database.dart';

// ignore_for_file: type=lint
class $ClientesLocalesTable extends ClientesLocales
    with TableInfo<$ClientesLocalesTable, ClientesLocale> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  $ClientesLocalesTable(this.attachedDatabase, [this._alias]);
  static const VerificationMeta _idLocalMeta = const VerificationMeta(
    'idLocal',
  );
  @override
  late final GeneratedColumn<String> idLocal = GeneratedColumn<String>(
    'id_local',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _idServidorMeta = const VerificationMeta(
    'idServidor',
  );
  @override
  late final GeneratedColumn<int> idServidor = GeneratedColumn<int>(
    'id_servidor',
    aliasedName,
    true,
    type: DriftSqlType.int,
    requiredDuringInsert: false,
  );
  static const VerificationMeta _nombreMeta = const VerificationMeta('nombre');
  @override
  late final GeneratedColumn<String> nombre = GeneratedColumn<String>(
    'nombre',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _correoMeta = const VerificationMeta('correo');
  @override
  late final GeneratedColumn<String> correo = GeneratedColumn<String>(
    'correo',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _telefonoMeta = const VerificationMeta(
    'telefono',
  );
  @override
  late final GeneratedColumn<String> telefono = GeneratedColumn<String>(
    'telefono',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _direccionMeta = const VerificationMeta(
    'direccion',
  );
  @override
  late final GeneratedColumn<String> direccion = GeneratedColumn<String>(
    'direccion',
    aliasedName,
    true,
    type: DriftSqlType.string,
    requiredDuringInsert: false,
  );
  static const VerificationMeta _actualizadoEnServidorMeta =
      const VerificationMeta('actualizadoEnServidor');
  @override
  late final GeneratedColumn<DateTime> actualizadoEnServidor =
      GeneratedColumn<DateTime>(
        'actualizado_en_servidor',
        aliasedName,
        true,
        type: DriftSqlType.dateTime,
        requiredDuringInsert: false,
      );
  static const VerificationMeta _ultimaSincronizacionMeta =
      const VerificationMeta('ultimaSincronizacion');
  @override
  late final GeneratedColumn<DateTime> ultimaSincronizacion =
      GeneratedColumn<DateTime>(
        'ultima_sincronizacion',
        aliasedName,
        true,
        type: DriftSqlType.dateTime,
        requiredDuringInsert: false,
      );
  static const VerificationMeta _pendienteSincronizacionMeta =
      const VerificationMeta('pendienteSincronizacion');
  @override
  late final GeneratedColumn<bool> pendienteSincronizacion =
      GeneratedColumn<bool>(
        'pendiente_sincronizacion',
        aliasedName,
        false,
        type: DriftSqlType.bool,
        requiredDuringInsert: false,
        defaultConstraints: GeneratedColumn.constraintIsAlways(
          'CHECK ("pendiente_sincronizacion" IN (0, 1))',
        ),
        defaultValue: const Constant(false),
      );
  static const VerificationMeta _eliminadoLocalmenteMeta =
      const VerificationMeta('eliminadoLocalmente');
  @override
  late final GeneratedColumn<bool> eliminadoLocalmente = GeneratedColumn<bool>(
    'eliminado_localmente',
    aliasedName,
    false,
    type: DriftSqlType.bool,
    requiredDuringInsert: false,
    defaultConstraints: GeneratedColumn.constraintIsAlways(
      'CHECK ("eliminado_localmente" IN (0, 1))',
    ),
    defaultValue: const Constant(false),
  );
  @override
  List<GeneratedColumn> get $columns => [
    idLocal,
    idServidor,
    nombre,
    correo,
    telefono,
    direccion,
    actualizadoEnServidor,
    ultimaSincronizacion,
    pendienteSincronizacion,
    eliminadoLocalmente,
  ];
  @override
  String get aliasedName => _alias ?? actualTableName;
  @override
  String get actualTableName => $name;
  static const String $name = 'clientes_locales';
  @override
  VerificationContext validateIntegrity(
    Insertable<ClientesLocale> instance, {
    bool isInserting = false,
  }) {
    final context = VerificationContext();
    final data = instance.toColumns(true);
    if (data.containsKey('id_local')) {
      context.handle(
        _idLocalMeta,
        idLocal.isAcceptableOrUnknown(data['id_local']!, _idLocalMeta),
      );
    } else if (isInserting) {
      context.missing(_idLocalMeta);
    }
    if (data.containsKey('id_servidor')) {
      context.handle(
        _idServidorMeta,
        idServidor.isAcceptableOrUnknown(data['id_servidor']!, _idServidorMeta),
      );
    }
    if (data.containsKey('nombre')) {
      context.handle(
        _nombreMeta,
        nombre.isAcceptableOrUnknown(data['nombre']!, _nombreMeta),
      );
    } else if (isInserting) {
      context.missing(_nombreMeta);
    }
    if (data.containsKey('correo')) {
      context.handle(
        _correoMeta,
        correo.isAcceptableOrUnknown(data['correo']!, _correoMeta),
      );
    } else if (isInserting) {
      context.missing(_correoMeta);
    }
    if (data.containsKey('telefono')) {
      context.handle(
        _telefonoMeta,
        telefono.isAcceptableOrUnknown(data['telefono']!, _telefonoMeta),
      );
    } else if (isInserting) {
      context.missing(_telefonoMeta);
    }
    if (data.containsKey('direccion')) {
      context.handle(
        _direccionMeta,
        direccion.isAcceptableOrUnknown(data['direccion']!, _direccionMeta),
      );
    }
    if (data.containsKey('actualizado_en_servidor')) {
      context.handle(
        _actualizadoEnServidorMeta,
        actualizadoEnServidor.isAcceptableOrUnknown(
          data['actualizado_en_servidor']!,
          _actualizadoEnServidorMeta,
        ),
      );
    }
    if (data.containsKey('ultima_sincronizacion')) {
      context.handle(
        _ultimaSincronizacionMeta,
        ultimaSincronizacion.isAcceptableOrUnknown(
          data['ultima_sincronizacion']!,
          _ultimaSincronizacionMeta,
        ),
      );
    }
    if (data.containsKey('pendiente_sincronizacion')) {
      context.handle(
        _pendienteSincronizacionMeta,
        pendienteSincronizacion.isAcceptableOrUnknown(
          data['pendiente_sincronizacion']!,
          _pendienteSincronizacionMeta,
        ),
      );
    }
    if (data.containsKey('eliminado_localmente')) {
      context.handle(
        _eliminadoLocalmenteMeta,
        eliminadoLocalmente.isAcceptableOrUnknown(
          data['eliminado_localmente']!,
          _eliminadoLocalmenteMeta,
        ),
      );
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {idLocal};
  @override
  ClientesLocale map(Map<String, dynamic> data, {String? tablePrefix}) {
    final effectivePrefix = tablePrefix != null ? '$tablePrefix.' : '';
    return ClientesLocale(
      idLocal: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}id_local'],
      )!,
      idServidor: attachedDatabase.typeMapping.read(
        DriftSqlType.int,
        data['${effectivePrefix}id_servidor'],
      ),
      nombre: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}nombre'],
      )!,
      correo: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}correo'],
      )!,
      telefono: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}telefono'],
      )!,
      direccion: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}direccion'],
      ),
      actualizadoEnServidor: attachedDatabase.typeMapping.read(
        DriftSqlType.dateTime,
        data['${effectivePrefix}actualizado_en_servidor'],
      ),
      ultimaSincronizacion: attachedDatabase.typeMapping.read(
        DriftSqlType.dateTime,
        data['${effectivePrefix}ultima_sincronizacion'],
      ),
      pendienteSincronizacion: attachedDatabase.typeMapping.read(
        DriftSqlType.bool,
        data['${effectivePrefix}pendiente_sincronizacion'],
      )!,
      eliminadoLocalmente: attachedDatabase.typeMapping.read(
        DriftSqlType.bool,
        data['${effectivePrefix}eliminado_localmente'],
      )!,
    );
  }

  @override
  $ClientesLocalesTable createAlias(String alias) {
    return $ClientesLocalesTable(attachedDatabase, alias);
  }
}

class ClientesLocale extends DataClass implements Insertable<ClientesLocale> {
  final String idLocal;
  final int? idServidor;
  final String nombre;
  final String correo;
  final String telefono;
  final String? direccion;
  final DateTime? actualizadoEnServidor;
  final DateTime? ultimaSincronizacion;
  final bool pendienteSincronizacion;
  final bool eliminadoLocalmente;
  const ClientesLocale({
    required this.idLocal,
    this.idServidor,
    required this.nombre,
    required this.correo,
    required this.telefono,
    this.direccion,
    this.actualizadoEnServidor,
    this.ultimaSincronizacion,
    required this.pendienteSincronizacion,
    required this.eliminadoLocalmente,
  });
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['id_local'] = Variable<String>(idLocal);
    if (!nullToAbsent || idServidor != null) {
      map['id_servidor'] = Variable<int>(idServidor);
    }
    map['nombre'] = Variable<String>(nombre);
    map['correo'] = Variable<String>(correo);
    map['telefono'] = Variable<String>(telefono);
    if (!nullToAbsent || direccion != null) {
      map['direccion'] = Variable<String>(direccion);
    }
    if (!nullToAbsent || actualizadoEnServidor != null) {
      map['actualizado_en_servidor'] = Variable<DateTime>(
        actualizadoEnServidor,
      );
    }
    if (!nullToAbsent || ultimaSincronizacion != null) {
      map['ultima_sincronizacion'] = Variable<DateTime>(ultimaSincronizacion);
    }
    map['pendiente_sincronizacion'] = Variable<bool>(pendienteSincronizacion);
    map['eliminado_localmente'] = Variable<bool>(eliminadoLocalmente);
    return map;
  }

  ClientesLocalesCompanion toCompanion(bool nullToAbsent) {
    return ClientesLocalesCompanion(
      idLocal: Value(idLocal),
      idServidor: idServidor == null && nullToAbsent
          ? const Value.absent()
          : Value(idServidor),
      nombre: Value(nombre),
      correo: Value(correo),
      telefono: Value(telefono),
      direccion: direccion == null && nullToAbsent
          ? const Value.absent()
          : Value(direccion),
      actualizadoEnServidor: actualizadoEnServidor == null && nullToAbsent
          ? const Value.absent()
          : Value(actualizadoEnServidor),
      ultimaSincronizacion: ultimaSincronizacion == null && nullToAbsent
          ? const Value.absent()
          : Value(ultimaSincronizacion),
      pendienteSincronizacion: Value(pendienteSincronizacion),
      eliminadoLocalmente: Value(eliminadoLocalmente),
    );
  }

  factory ClientesLocale.fromJson(
    Map<String, dynamic> json, {
    ValueSerializer? serializer,
  }) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return ClientesLocale(
      idLocal: serializer.fromJson<String>(json['idLocal']),
      idServidor: serializer.fromJson<int?>(json['idServidor']),
      nombre: serializer.fromJson<String>(json['nombre']),
      correo: serializer.fromJson<String>(json['correo']),
      telefono: serializer.fromJson<String>(json['telefono']),
      direccion: serializer.fromJson<String?>(json['direccion']),
      actualizadoEnServidor: serializer.fromJson<DateTime?>(
        json['actualizadoEnServidor'],
      ),
      ultimaSincronizacion: serializer.fromJson<DateTime?>(
        json['ultimaSincronizacion'],
      ),
      pendienteSincronizacion: serializer.fromJson<bool>(
        json['pendienteSincronizacion'],
      ),
      eliminadoLocalmente: serializer.fromJson<bool>(
        json['eliminadoLocalmente'],
      ),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'idLocal': serializer.toJson<String>(idLocal),
      'idServidor': serializer.toJson<int?>(idServidor),
      'nombre': serializer.toJson<String>(nombre),
      'correo': serializer.toJson<String>(correo),
      'telefono': serializer.toJson<String>(telefono),
      'direccion': serializer.toJson<String?>(direccion),
      'actualizadoEnServidor': serializer.toJson<DateTime?>(
        actualizadoEnServidor,
      ),
      'ultimaSincronizacion': serializer.toJson<DateTime?>(
        ultimaSincronizacion,
      ),
      'pendienteSincronizacion': serializer.toJson<bool>(
        pendienteSincronizacion,
      ),
      'eliminadoLocalmente': serializer.toJson<bool>(eliminadoLocalmente),
    };
  }

  ClientesLocale copyWith({
    String? idLocal,
    Value<int?> idServidor = const Value.absent(),
    String? nombre,
    String? correo,
    String? telefono,
    Value<String?> direccion = const Value.absent(),
    Value<DateTime?> actualizadoEnServidor = const Value.absent(),
    Value<DateTime?> ultimaSincronizacion = const Value.absent(),
    bool? pendienteSincronizacion,
    bool? eliminadoLocalmente,
  }) => ClientesLocale(
    idLocal: idLocal ?? this.idLocal,
    idServidor: idServidor.present ? idServidor.value : this.idServidor,
    nombre: nombre ?? this.nombre,
    correo: correo ?? this.correo,
    telefono: telefono ?? this.telefono,
    direccion: direccion.present ? direccion.value : this.direccion,
    actualizadoEnServidor: actualizadoEnServidor.present
        ? actualizadoEnServidor.value
        : this.actualizadoEnServidor,
    ultimaSincronizacion: ultimaSincronizacion.present
        ? ultimaSincronizacion.value
        : this.ultimaSincronizacion,
    pendienteSincronizacion:
        pendienteSincronizacion ?? this.pendienteSincronizacion,
    eliminadoLocalmente: eliminadoLocalmente ?? this.eliminadoLocalmente,
  );
  ClientesLocale copyWithCompanion(ClientesLocalesCompanion data) {
    return ClientesLocale(
      idLocal: data.idLocal.present ? data.idLocal.value : this.idLocal,
      idServidor: data.idServidor.present
          ? data.idServidor.value
          : this.idServidor,
      nombre: data.nombre.present ? data.nombre.value : this.nombre,
      correo: data.correo.present ? data.correo.value : this.correo,
      telefono: data.telefono.present ? data.telefono.value : this.telefono,
      direccion: data.direccion.present ? data.direccion.value : this.direccion,
      actualizadoEnServidor: data.actualizadoEnServidor.present
          ? data.actualizadoEnServidor.value
          : this.actualizadoEnServidor,
      ultimaSincronizacion: data.ultimaSincronizacion.present
          ? data.ultimaSincronizacion.value
          : this.ultimaSincronizacion,
      pendienteSincronizacion: data.pendienteSincronizacion.present
          ? data.pendienteSincronizacion.value
          : this.pendienteSincronizacion,
      eliminadoLocalmente: data.eliminadoLocalmente.present
          ? data.eliminadoLocalmente.value
          : this.eliminadoLocalmente,
    );
  }

  @override
  String toString() {
    return (StringBuffer('ClientesLocale(')
          ..write('idLocal: $idLocal, ')
          ..write('idServidor: $idServidor, ')
          ..write('nombre: $nombre, ')
          ..write('correo: $correo, ')
          ..write('telefono: $telefono, ')
          ..write('direccion: $direccion, ')
          ..write('actualizadoEnServidor: $actualizadoEnServidor, ')
          ..write('ultimaSincronizacion: $ultimaSincronizacion, ')
          ..write('pendienteSincronizacion: $pendienteSincronizacion, ')
          ..write('eliminadoLocalmente: $eliminadoLocalmente')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode => Object.hash(
    idLocal,
    idServidor,
    nombre,
    correo,
    telefono,
    direccion,
    actualizadoEnServidor,
    ultimaSincronizacion,
    pendienteSincronizacion,
    eliminadoLocalmente,
  );
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is ClientesLocale &&
          other.idLocal == this.idLocal &&
          other.idServidor == this.idServidor &&
          other.nombre == this.nombre &&
          other.correo == this.correo &&
          other.telefono == this.telefono &&
          other.direccion == this.direccion &&
          other.actualizadoEnServidor == this.actualizadoEnServidor &&
          other.ultimaSincronizacion == this.ultimaSincronizacion &&
          other.pendienteSincronizacion == this.pendienteSincronizacion &&
          other.eliminadoLocalmente == this.eliminadoLocalmente);
}

class ClientesLocalesCompanion extends UpdateCompanion<ClientesLocale> {
  final Value<String> idLocal;
  final Value<int?> idServidor;
  final Value<String> nombre;
  final Value<String> correo;
  final Value<String> telefono;
  final Value<String?> direccion;
  final Value<DateTime?> actualizadoEnServidor;
  final Value<DateTime?> ultimaSincronizacion;
  final Value<bool> pendienteSincronizacion;
  final Value<bool> eliminadoLocalmente;
  final Value<int> rowid;
  const ClientesLocalesCompanion({
    this.idLocal = const Value.absent(),
    this.idServidor = const Value.absent(),
    this.nombre = const Value.absent(),
    this.correo = const Value.absent(),
    this.telefono = const Value.absent(),
    this.direccion = const Value.absent(),
    this.actualizadoEnServidor = const Value.absent(),
    this.ultimaSincronizacion = const Value.absent(),
    this.pendienteSincronizacion = const Value.absent(),
    this.eliminadoLocalmente = const Value.absent(),
    this.rowid = const Value.absent(),
  });
  ClientesLocalesCompanion.insert({
    required String idLocal,
    this.idServidor = const Value.absent(),
    required String nombre,
    required String correo,
    required String telefono,
    this.direccion = const Value.absent(),
    this.actualizadoEnServidor = const Value.absent(),
    this.ultimaSincronizacion = const Value.absent(),
    this.pendienteSincronizacion = const Value.absent(),
    this.eliminadoLocalmente = const Value.absent(),
    this.rowid = const Value.absent(),
  }) : idLocal = Value(idLocal),
       nombre = Value(nombre),
       correo = Value(correo),
       telefono = Value(telefono);
  static Insertable<ClientesLocale> custom({
    Expression<String>? idLocal,
    Expression<int>? idServidor,
    Expression<String>? nombre,
    Expression<String>? correo,
    Expression<String>? telefono,
    Expression<String>? direccion,
    Expression<DateTime>? actualizadoEnServidor,
    Expression<DateTime>? ultimaSincronizacion,
    Expression<bool>? pendienteSincronizacion,
    Expression<bool>? eliminadoLocalmente,
    Expression<int>? rowid,
  }) {
    return RawValuesInsertable({
      if (idLocal != null) 'id_local': idLocal,
      if (idServidor != null) 'id_servidor': idServidor,
      if (nombre != null) 'nombre': nombre,
      if (correo != null) 'correo': correo,
      if (telefono != null) 'telefono': telefono,
      if (direccion != null) 'direccion': direccion,
      if (actualizadoEnServidor != null)
        'actualizado_en_servidor': actualizadoEnServidor,
      if (ultimaSincronizacion != null)
        'ultima_sincronizacion': ultimaSincronizacion,
      if (pendienteSincronizacion != null)
        'pendiente_sincronizacion': pendienteSincronizacion,
      if (eliminadoLocalmente != null)
        'eliminado_localmente': eliminadoLocalmente,
      if (rowid != null) 'rowid': rowid,
    });
  }

  ClientesLocalesCompanion copyWith({
    Value<String>? idLocal,
    Value<int?>? idServidor,
    Value<String>? nombre,
    Value<String>? correo,
    Value<String>? telefono,
    Value<String?>? direccion,
    Value<DateTime?>? actualizadoEnServidor,
    Value<DateTime?>? ultimaSincronizacion,
    Value<bool>? pendienteSincronizacion,
    Value<bool>? eliminadoLocalmente,
    Value<int>? rowid,
  }) {
    return ClientesLocalesCompanion(
      idLocal: idLocal ?? this.idLocal,
      idServidor: idServidor ?? this.idServidor,
      nombre: nombre ?? this.nombre,
      correo: correo ?? this.correo,
      telefono: telefono ?? this.telefono,
      direccion: direccion ?? this.direccion,
      actualizadoEnServidor:
          actualizadoEnServidor ?? this.actualizadoEnServidor,
      ultimaSincronizacion: ultimaSincronizacion ?? this.ultimaSincronizacion,
      pendienteSincronizacion:
          pendienteSincronizacion ?? this.pendienteSincronizacion,
      eliminadoLocalmente: eliminadoLocalmente ?? this.eliminadoLocalmente,
      rowid: rowid ?? this.rowid,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (idLocal.present) {
      map['id_local'] = Variable<String>(idLocal.value);
    }
    if (idServidor.present) {
      map['id_servidor'] = Variable<int>(idServidor.value);
    }
    if (nombre.present) {
      map['nombre'] = Variable<String>(nombre.value);
    }
    if (correo.present) {
      map['correo'] = Variable<String>(correo.value);
    }
    if (telefono.present) {
      map['telefono'] = Variable<String>(telefono.value);
    }
    if (direccion.present) {
      map['direccion'] = Variable<String>(direccion.value);
    }
    if (actualizadoEnServidor.present) {
      map['actualizado_en_servidor'] = Variable<DateTime>(
        actualizadoEnServidor.value,
      );
    }
    if (ultimaSincronizacion.present) {
      map['ultima_sincronizacion'] = Variable<DateTime>(
        ultimaSincronizacion.value,
      );
    }
    if (pendienteSincronizacion.present) {
      map['pendiente_sincronizacion'] = Variable<bool>(
        pendienteSincronizacion.value,
      );
    }
    if (eliminadoLocalmente.present) {
      map['eliminado_localmente'] = Variable<bool>(eliminadoLocalmente.value);
    }
    if (rowid.present) {
      map['rowid'] = Variable<int>(rowid.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('ClientesLocalesCompanion(')
          ..write('idLocal: $idLocal, ')
          ..write('idServidor: $idServidor, ')
          ..write('nombre: $nombre, ')
          ..write('correo: $correo, ')
          ..write('telefono: $telefono, ')
          ..write('direccion: $direccion, ')
          ..write('actualizadoEnServidor: $actualizadoEnServidor, ')
          ..write('ultimaSincronizacion: $ultimaSincronizacion, ')
          ..write('pendienteSincronizacion: $pendienteSincronizacion, ')
          ..write('eliminadoLocalmente: $eliminadoLocalmente, ')
          ..write('rowid: $rowid')
          ..write(')'))
        .toString();
  }
}

class $OperacionesPendientesTable extends OperacionesPendientes
    with TableInfo<$OperacionesPendientesTable, OperacionesPendiente> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  $OperacionesPendientesTable(this.attachedDatabase, [this._alias]);
  static const VerificationMeta _idOperacionMeta = const VerificationMeta(
    'idOperacion',
  );
  @override
  late final GeneratedColumn<String> idOperacion = GeneratedColumn<String>(
    'id_operacion',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _tipoMeta = const VerificationMeta('tipo');
  @override
  late final GeneratedColumn<String> tipo = GeneratedColumn<String>(
    'tipo',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _entidadMeta = const VerificationMeta(
    'entidad',
  );
  @override
  late final GeneratedColumn<String> entidad = GeneratedColumn<String>(
    'entidad',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _idEntidadLocalMeta = const VerificationMeta(
    'idEntidadLocal',
  );
  @override
  late final GeneratedColumn<String> idEntidadLocal = GeneratedColumn<String>(
    'id_entidad_local',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _datosJsonMeta = const VerificationMeta(
    'datosJson',
  );
  @override
  late final GeneratedColumn<String> datosJson = GeneratedColumn<String>(
    'datos_json',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
  );
  static const VerificationMeta _intentosMeta = const VerificationMeta(
    'intentos',
  );
  @override
  late final GeneratedColumn<int> intentos = GeneratedColumn<int>(
    'intentos',
    aliasedName,
    false,
    type: DriftSqlType.int,
    requiredDuringInsert: false,
    defaultValue: const Constant(0),
  );
  static const VerificationMeta _estadoMeta = const VerificationMeta('estado');
  @override
  late final GeneratedColumn<String> estado = GeneratedColumn<String>(
    'estado',
    aliasedName,
    false,
    type: DriftSqlType.string,
    requiredDuringInsert: false,
    defaultValue: const Constant('pendiente'),
  );
  static const VerificationMeta _creadoEnMeta = const VerificationMeta(
    'creadoEn',
  );
  @override
  late final GeneratedColumn<DateTime> creadoEn = GeneratedColumn<DateTime>(
    'creado_en',
    aliasedName,
    false,
    type: DriftSqlType.dateTime,
    requiredDuringInsert: false,
    defaultValue: currentDateAndTime,
  );
  @override
  List<GeneratedColumn> get $columns => [
    idOperacion,
    tipo,
    entidad,
    idEntidadLocal,
    datosJson,
    intentos,
    estado,
    creadoEn,
  ];
  @override
  String get aliasedName => _alias ?? actualTableName;
  @override
  String get actualTableName => $name;
  static const String $name = 'operaciones_pendientes';
  @override
  VerificationContext validateIntegrity(
    Insertable<OperacionesPendiente> instance, {
    bool isInserting = false,
  }) {
    final context = VerificationContext();
    final data = instance.toColumns(true);
    if (data.containsKey('id_operacion')) {
      context.handle(
        _idOperacionMeta,
        idOperacion.isAcceptableOrUnknown(
          data['id_operacion']!,
          _idOperacionMeta,
        ),
      );
    } else if (isInserting) {
      context.missing(_idOperacionMeta);
    }
    if (data.containsKey('tipo')) {
      context.handle(
        _tipoMeta,
        tipo.isAcceptableOrUnknown(data['tipo']!, _tipoMeta),
      );
    } else if (isInserting) {
      context.missing(_tipoMeta);
    }
    if (data.containsKey('entidad')) {
      context.handle(
        _entidadMeta,
        entidad.isAcceptableOrUnknown(data['entidad']!, _entidadMeta),
      );
    } else if (isInserting) {
      context.missing(_entidadMeta);
    }
    if (data.containsKey('id_entidad_local')) {
      context.handle(
        _idEntidadLocalMeta,
        idEntidadLocal.isAcceptableOrUnknown(
          data['id_entidad_local']!,
          _idEntidadLocalMeta,
        ),
      );
    } else if (isInserting) {
      context.missing(_idEntidadLocalMeta);
    }
    if (data.containsKey('datos_json')) {
      context.handle(
        _datosJsonMeta,
        datosJson.isAcceptableOrUnknown(data['datos_json']!, _datosJsonMeta),
      );
    } else if (isInserting) {
      context.missing(_datosJsonMeta);
    }
    if (data.containsKey('intentos')) {
      context.handle(
        _intentosMeta,
        intentos.isAcceptableOrUnknown(data['intentos']!, _intentosMeta),
      );
    }
    if (data.containsKey('estado')) {
      context.handle(
        _estadoMeta,
        estado.isAcceptableOrUnknown(data['estado']!, _estadoMeta),
      );
    }
    if (data.containsKey('creado_en')) {
      context.handle(
        _creadoEnMeta,
        creadoEn.isAcceptableOrUnknown(data['creado_en']!, _creadoEnMeta),
      );
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {idOperacion};
  @override
  OperacionesPendiente map(Map<String, dynamic> data, {String? tablePrefix}) {
    final effectivePrefix = tablePrefix != null ? '$tablePrefix.' : '';
    return OperacionesPendiente(
      idOperacion: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}id_operacion'],
      )!,
      tipo: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}tipo'],
      )!,
      entidad: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}entidad'],
      )!,
      idEntidadLocal: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}id_entidad_local'],
      )!,
      datosJson: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}datos_json'],
      )!,
      intentos: attachedDatabase.typeMapping.read(
        DriftSqlType.int,
        data['${effectivePrefix}intentos'],
      )!,
      estado: attachedDatabase.typeMapping.read(
        DriftSqlType.string,
        data['${effectivePrefix}estado'],
      )!,
      creadoEn: attachedDatabase.typeMapping.read(
        DriftSqlType.dateTime,
        data['${effectivePrefix}creado_en'],
      )!,
    );
  }

  @override
  $OperacionesPendientesTable createAlias(String alias) {
    return $OperacionesPendientesTable(attachedDatabase, alias);
  }
}

class OperacionesPendiente extends DataClass
    implements Insertable<OperacionesPendiente> {
  final String idOperacion;
  final String tipo;
  final String entidad;
  final String idEntidadLocal;
  final String datosJson;
  final int intentos;
  final String estado;
  final DateTime creadoEn;
  const OperacionesPendiente({
    required this.idOperacion,
    required this.tipo,
    required this.entidad,
    required this.idEntidadLocal,
    required this.datosJson,
    required this.intentos,
    required this.estado,
    required this.creadoEn,
  });
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['id_operacion'] = Variable<String>(idOperacion);
    map['tipo'] = Variable<String>(tipo);
    map['entidad'] = Variable<String>(entidad);
    map['id_entidad_local'] = Variable<String>(idEntidadLocal);
    map['datos_json'] = Variable<String>(datosJson);
    map['intentos'] = Variable<int>(intentos);
    map['estado'] = Variable<String>(estado);
    map['creado_en'] = Variable<DateTime>(creadoEn);
    return map;
  }

  OperacionesPendientesCompanion toCompanion(bool nullToAbsent) {
    return OperacionesPendientesCompanion(
      idOperacion: Value(idOperacion),
      tipo: Value(tipo),
      entidad: Value(entidad),
      idEntidadLocal: Value(idEntidadLocal),
      datosJson: Value(datosJson),
      intentos: Value(intentos),
      estado: Value(estado),
      creadoEn: Value(creadoEn),
    );
  }

  factory OperacionesPendiente.fromJson(
    Map<String, dynamic> json, {
    ValueSerializer? serializer,
  }) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return OperacionesPendiente(
      idOperacion: serializer.fromJson<String>(json['idOperacion']),
      tipo: serializer.fromJson<String>(json['tipo']),
      entidad: serializer.fromJson<String>(json['entidad']),
      idEntidadLocal: serializer.fromJson<String>(json['idEntidadLocal']),
      datosJson: serializer.fromJson<String>(json['datosJson']),
      intentos: serializer.fromJson<int>(json['intentos']),
      estado: serializer.fromJson<String>(json['estado']),
      creadoEn: serializer.fromJson<DateTime>(json['creadoEn']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'idOperacion': serializer.toJson<String>(idOperacion),
      'tipo': serializer.toJson<String>(tipo),
      'entidad': serializer.toJson<String>(entidad),
      'idEntidadLocal': serializer.toJson<String>(idEntidadLocal),
      'datosJson': serializer.toJson<String>(datosJson),
      'intentos': serializer.toJson<int>(intentos),
      'estado': serializer.toJson<String>(estado),
      'creadoEn': serializer.toJson<DateTime>(creadoEn),
    };
  }

  OperacionesPendiente copyWith({
    String? idOperacion,
    String? tipo,
    String? entidad,
    String? idEntidadLocal,
    String? datosJson,
    int? intentos,
    String? estado,
    DateTime? creadoEn,
  }) => OperacionesPendiente(
    idOperacion: idOperacion ?? this.idOperacion,
    tipo: tipo ?? this.tipo,
    entidad: entidad ?? this.entidad,
    idEntidadLocal: idEntidadLocal ?? this.idEntidadLocal,
    datosJson: datosJson ?? this.datosJson,
    intentos: intentos ?? this.intentos,
    estado: estado ?? this.estado,
    creadoEn: creadoEn ?? this.creadoEn,
  );
  OperacionesPendiente copyWithCompanion(OperacionesPendientesCompanion data) {
    return OperacionesPendiente(
      idOperacion: data.idOperacion.present
          ? data.idOperacion.value
          : this.idOperacion,
      tipo: data.tipo.present ? data.tipo.value : this.tipo,
      entidad: data.entidad.present ? data.entidad.value : this.entidad,
      idEntidadLocal: data.idEntidadLocal.present
          ? data.idEntidadLocal.value
          : this.idEntidadLocal,
      datosJson: data.datosJson.present ? data.datosJson.value : this.datosJson,
      intentos: data.intentos.present ? data.intentos.value : this.intentos,
      estado: data.estado.present ? data.estado.value : this.estado,
      creadoEn: data.creadoEn.present ? data.creadoEn.value : this.creadoEn,
    );
  }

  @override
  String toString() {
    return (StringBuffer('OperacionesPendiente(')
          ..write('idOperacion: $idOperacion, ')
          ..write('tipo: $tipo, ')
          ..write('entidad: $entidad, ')
          ..write('idEntidadLocal: $idEntidadLocal, ')
          ..write('datosJson: $datosJson, ')
          ..write('intentos: $intentos, ')
          ..write('estado: $estado, ')
          ..write('creadoEn: $creadoEn')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode => Object.hash(
    idOperacion,
    tipo,
    entidad,
    idEntidadLocal,
    datosJson,
    intentos,
    estado,
    creadoEn,
  );
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is OperacionesPendiente &&
          other.idOperacion == this.idOperacion &&
          other.tipo == this.tipo &&
          other.entidad == this.entidad &&
          other.idEntidadLocal == this.idEntidadLocal &&
          other.datosJson == this.datosJson &&
          other.intentos == this.intentos &&
          other.estado == this.estado &&
          other.creadoEn == this.creadoEn);
}

class OperacionesPendientesCompanion
    extends UpdateCompanion<OperacionesPendiente> {
  final Value<String> idOperacion;
  final Value<String> tipo;
  final Value<String> entidad;
  final Value<String> idEntidadLocal;
  final Value<String> datosJson;
  final Value<int> intentos;
  final Value<String> estado;
  final Value<DateTime> creadoEn;
  final Value<int> rowid;
  const OperacionesPendientesCompanion({
    this.idOperacion = const Value.absent(),
    this.tipo = const Value.absent(),
    this.entidad = const Value.absent(),
    this.idEntidadLocal = const Value.absent(),
    this.datosJson = const Value.absent(),
    this.intentos = const Value.absent(),
    this.estado = const Value.absent(),
    this.creadoEn = const Value.absent(),
    this.rowid = const Value.absent(),
  });
  OperacionesPendientesCompanion.insert({
    required String idOperacion,
    required String tipo,
    required String entidad,
    required String idEntidadLocal,
    required String datosJson,
    this.intentos = const Value.absent(),
    this.estado = const Value.absent(),
    this.creadoEn = const Value.absent(),
    this.rowid = const Value.absent(),
  }) : idOperacion = Value(idOperacion),
       tipo = Value(tipo),
       entidad = Value(entidad),
       idEntidadLocal = Value(idEntidadLocal),
       datosJson = Value(datosJson);
  static Insertable<OperacionesPendiente> custom({
    Expression<String>? idOperacion,
    Expression<String>? tipo,
    Expression<String>? entidad,
    Expression<String>? idEntidadLocal,
    Expression<String>? datosJson,
    Expression<int>? intentos,
    Expression<String>? estado,
    Expression<DateTime>? creadoEn,
    Expression<int>? rowid,
  }) {
    return RawValuesInsertable({
      if (idOperacion != null) 'id_operacion': idOperacion,
      if (tipo != null) 'tipo': tipo,
      if (entidad != null) 'entidad': entidad,
      if (idEntidadLocal != null) 'id_entidad_local': idEntidadLocal,
      if (datosJson != null) 'datos_json': datosJson,
      if (intentos != null) 'intentos': intentos,
      if (estado != null) 'estado': estado,
      if (creadoEn != null) 'creado_en': creadoEn,
      if (rowid != null) 'rowid': rowid,
    });
  }

  OperacionesPendientesCompanion copyWith({
    Value<String>? idOperacion,
    Value<String>? tipo,
    Value<String>? entidad,
    Value<String>? idEntidadLocal,
    Value<String>? datosJson,
    Value<int>? intentos,
    Value<String>? estado,
    Value<DateTime>? creadoEn,
    Value<int>? rowid,
  }) {
    return OperacionesPendientesCompanion(
      idOperacion: idOperacion ?? this.idOperacion,
      tipo: tipo ?? this.tipo,
      entidad: entidad ?? this.entidad,
      idEntidadLocal: idEntidadLocal ?? this.idEntidadLocal,
      datosJson: datosJson ?? this.datosJson,
      intentos: intentos ?? this.intentos,
      estado: estado ?? this.estado,
      creadoEn: creadoEn ?? this.creadoEn,
      rowid: rowid ?? this.rowid,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (idOperacion.present) {
      map['id_operacion'] = Variable<String>(idOperacion.value);
    }
    if (tipo.present) {
      map['tipo'] = Variable<String>(tipo.value);
    }
    if (entidad.present) {
      map['entidad'] = Variable<String>(entidad.value);
    }
    if (idEntidadLocal.present) {
      map['id_entidad_local'] = Variable<String>(idEntidadLocal.value);
    }
    if (datosJson.present) {
      map['datos_json'] = Variable<String>(datosJson.value);
    }
    if (intentos.present) {
      map['intentos'] = Variable<int>(intentos.value);
    }
    if (estado.present) {
      map['estado'] = Variable<String>(estado.value);
    }
    if (creadoEn.present) {
      map['creado_en'] = Variable<DateTime>(creadoEn.value);
    }
    if (rowid.present) {
      map['rowid'] = Variable<int>(rowid.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('OperacionesPendientesCompanion(')
          ..write('idOperacion: $idOperacion, ')
          ..write('tipo: $tipo, ')
          ..write('entidad: $entidad, ')
          ..write('idEntidadLocal: $idEntidadLocal, ')
          ..write('datosJson: $datosJson, ')
          ..write('intentos: $intentos, ')
          ..write('estado: $estado, ')
          ..write('creadoEn: $creadoEn, ')
          ..write('rowid: $rowid')
          ..write(')'))
        .toString();
  }
}

abstract class _$AppDatabase extends GeneratedDatabase {
  _$AppDatabase(QueryExecutor e) : super(e);
  $AppDatabaseManager get managers => $AppDatabaseManager(this);
  late final $ClientesLocalesTable clientesLocales = $ClientesLocalesTable(
    this,
  );
  late final $OperacionesPendientesTable operacionesPendientes =
      $OperacionesPendientesTable(this);
  @override
  Iterable<TableInfo<Table, Object?>> get allTables =>
      allSchemaEntities.whereType<TableInfo<Table, Object?>>();
  @override
  List<DatabaseSchemaEntity> get allSchemaEntities => [
    clientesLocales,
    operacionesPendientes,
  ];
}

typedef $$ClientesLocalesTableCreateCompanionBuilder =
    ClientesLocalesCompanion Function({
      required String idLocal,
      Value<int?> idServidor,
      required String nombre,
      required String correo,
      required String telefono,
      Value<String?> direccion,
      Value<DateTime?> actualizadoEnServidor,
      Value<DateTime?> ultimaSincronizacion,
      Value<bool> pendienteSincronizacion,
      Value<bool> eliminadoLocalmente,
      Value<int> rowid,
    });
typedef $$ClientesLocalesTableUpdateCompanionBuilder =
    ClientesLocalesCompanion Function({
      Value<String> idLocal,
      Value<int?> idServidor,
      Value<String> nombre,
      Value<String> correo,
      Value<String> telefono,
      Value<String?> direccion,
      Value<DateTime?> actualizadoEnServidor,
      Value<DateTime?> ultimaSincronizacion,
      Value<bool> pendienteSincronizacion,
      Value<bool> eliminadoLocalmente,
      Value<int> rowid,
    });

class $$ClientesLocalesTableFilterComposer
    extends Composer<_$AppDatabase, $ClientesLocalesTable> {
  $$ClientesLocalesTableFilterComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  ColumnFilters<String> get idLocal => $composableBuilder(
    column: $table.idLocal,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<int> get idServidor => $composableBuilder(
    column: $table.idServidor,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get nombre => $composableBuilder(
    column: $table.nombre,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get correo => $composableBuilder(
    column: $table.correo,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get telefono => $composableBuilder(
    column: $table.telefono,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get direccion => $composableBuilder(
    column: $table.direccion,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<DateTime> get actualizadoEnServidor => $composableBuilder(
    column: $table.actualizadoEnServidor,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<DateTime> get ultimaSincronizacion => $composableBuilder(
    column: $table.ultimaSincronizacion,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<bool> get pendienteSincronizacion => $composableBuilder(
    column: $table.pendienteSincronizacion,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<bool> get eliminadoLocalmente => $composableBuilder(
    column: $table.eliminadoLocalmente,
    builder: (column) => ColumnFilters(column),
  );
}

class $$ClientesLocalesTableOrderingComposer
    extends Composer<_$AppDatabase, $ClientesLocalesTable> {
  $$ClientesLocalesTableOrderingComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  ColumnOrderings<String> get idLocal => $composableBuilder(
    column: $table.idLocal,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<int> get idServidor => $composableBuilder(
    column: $table.idServidor,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get nombre => $composableBuilder(
    column: $table.nombre,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get correo => $composableBuilder(
    column: $table.correo,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get telefono => $composableBuilder(
    column: $table.telefono,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get direccion => $composableBuilder(
    column: $table.direccion,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<DateTime> get actualizadoEnServidor => $composableBuilder(
    column: $table.actualizadoEnServidor,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<DateTime> get ultimaSincronizacion => $composableBuilder(
    column: $table.ultimaSincronizacion,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<bool> get pendienteSincronizacion => $composableBuilder(
    column: $table.pendienteSincronizacion,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<bool> get eliminadoLocalmente => $composableBuilder(
    column: $table.eliminadoLocalmente,
    builder: (column) => ColumnOrderings(column),
  );
}

class $$ClientesLocalesTableAnnotationComposer
    extends Composer<_$AppDatabase, $ClientesLocalesTable> {
  $$ClientesLocalesTableAnnotationComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  GeneratedColumn<String> get idLocal =>
      $composableBuilder(column: $table.idLocal, builder: (column) => column);

  GeneratedColumn<int> get idServidor => $composableBuilder(
    column: $table.idServidor,
    builder: (column) => column,
  );

  GeneratedColumn<String> get nombre =>
      $composableBuilder(column: $table.nombre, builder: (column) => column);

  GeneratedColumn<String> get correo =>
      $composableBuilder(column: $table.correo, builder: (column) => column);

  GeneratedColumn<String> get telefono =>
      $composableBuilder(column: $table.telefono, builder: (column) => column);

  GeneratedColumn<String> get direccion =>
      $composableBuilder(column: $table.direccion, builder: (column) => column);

  GeneratedColumn<DateTime> get actualizadoEnServidor => $composableBuilder(
    column: $table.actualizadoEnServidor,
    builder: (column) => column,
  );

  GeneratedColumn<DateTime> get ultimaSincronizacion => $composableBuilder(
    column: $table.ultimaSincronizacion,
    builder: (column) => column,
  );

  GeneratedColumn<bool> get pendienteSincronizacion => $composableBuilder(
    column: $table.pendienteSincronizacion,
    builder: (column) => column,
  );

  GeneratedColumn<bool> get eliminadoLocalmente => $composableBuilder(
    column: $table.eliminadoLocalmente,
    builder: (column) => column,
  );
}

class $$ClientesLocalesTableTableManager
    extends
        RootTableManager<
          _$AppDatabase,
          $ClientesLocalesTable,
          ClientesLocale,
          $$ClientesLocalesTableFilterComposer,
          $$ClientesLocalesTableOrderingComposer,
          $$ClientesLocalesTableAnnotationComposer,
          $$ClientesLocalesTableCreateCompanionBuilder,
          $$ClientesLocalesTableUpdateCompanionBuilder,
          (
            ClientesLocale,
            BaseReferences<
              _$AppDatabase,
              $ClientesLocalesTable,
              ClientesLocale
            >,
          ),
          ClientesLocale,
          PrefetchHooks Function()
        > {
  $$ClientesLocalesTableTableManager(
    _$AppDatabase db,
    $ClientesLocalesTable table,
  ) : super(
        TableManagerState(
          db: db,
          table: table,
          createFilteringComposer: () =>
              $$ClientesLocalesTableFilterComposer($db: db, $table: table),
          createOrderingComposer: () =>
              $$ClientesLocalesTableOrderingComposer($db: db, $table: table),
          createComputedFieldComposer: () =>
              $$ClientesLocalesTableAnnotationComposer($db: db, $table: table),
          updateCompanionCallback:
              ({
                Value<String> idLocal = const Value.absent(),
                Value<int?> idServidor = const Value.absent(),
                Value<String> nombre = const Value.absent(),
                Value<String> correo = const Value.absent(),
                Value<String> telefono = const Value.absent(),
                Value<String?> direccion = const Value.absent(),
                Value<DateTime?> actualizadoEnServidor = const Value.absent(),
                Value<DateTime?> ultimaSincronizacion = const Value.absent(),
                Value<bool> pendienteSincronizacion = const Value.absent(),
                Value<bool> eliminadoLocalmente = const Value.absent(),
                Value<int> rowid = const Value.absent(),
              }) => ClientesLocalesCompanion(
                idLocal: idLocal,
                idServidor: idServidor,
                nombre: nombre,
                correo: correo,
                telefono: telefono,
                direccion: direccion,
                actualizadoEnServidor: actualizadoEnServidor,
                ultimaSincronizacion: ultimaSincronizacion,
                pendienteSincronizacion: pendienteSincronizacion,
                eliminadoLocalmente: eliminadoLocalmente,
                rowid: rowid,
              ),
          createCompanionCallback:
              ({
                required String idLocal,
                Value<int?> idServidor = const Value.absent(),
                required String nombre,
                required String correo,
                required String telefono,
                Value<String?> direccion = const Value.absent(),
                Value<DateTime?> actualizadoEnServidor = const Value.absent(),
                Value<DateTime?> ultimaSincronizacion = const Value.absent(),
                Value<bool> pendienteSincronizacion = const Value.absent(),
                Value<bool> eliminadoLocalmente = const Value.absent(),
                Value<int> rowid = const Value.absent(),
              }) => ClientesLocalesCompanion.insert(
                idLocal: idLocal,
                idServidor: idServidor,
                nombre: nombre,
                correo: correo,
                telefono: telefono,
                direccion: direccion,
                actualizadoEnServidor: actualizadoEnServidor,
                ultimaSincronizacion: ultimaSincronizacion,
                pendienteSincronizacion: pendienteSincronizacion,
                eliminadoLocalmente: eliminadoLocalmente,
                rowid: rowid,
              ),
          withReferenceMapper: (p0) => p0
              .map(
                (e) => (
                  e.readTable<$ClientesLocalesTable, ClientesLocale>(table),
                  BaseReferences<
                    _$AppDatabase,
                    $ClientesLocalesTable,
                    ClientesLocale
                  >(db, table, e),
                ),
              )
              .toList(),
          prefetchHooksCallback: null,
        ),
      );
}

typedef $$ClientesLocalesTableProcessedTableManager =
    ProcessedTableManager<
      _$AppDatabase,
      $ClientesLocalesTable,
      ClientesLocale,
      $$ClientesLocalesTableFilterComposer,
      $$ClientesLocalesTableOrderingComposer,
      $$ClientesLocalesTableAnnotationComposer,
      $$ClientesLocalesTableCreateCompanionBuilder,
      $$ClientesLocalesTableUpdateCompanionBuilder,
      (
        ClientesLocale,
        BaseReferences<_$AppDatabase, $ClientesLocalesTable, ClientesLocale>,
      ),
      ClientesLocale,
      PrefetchHooks Function()
    >;
typedef $$OperacionesPendientesTableCreateCompanionBuilder =
    OperacionesPendientesCompanion Function({
      required String idOperacion,
      required String tipo,
      required String entidad,
      required String idEntidadLocal,
      required String datosJson,
      Value<int> intentos,
      Value<String> estado,
      Value<DateTime> creadoEn,
      Value<int> rowid,
    });
typedef $$OperacionesPendientesTableUpdateCompanionBuilder =
    OperacionesPendientesCompanion Function({
      Value<String> idOperacion,
      Value<String> tipo,
      Value<String> entidad,
      Value<String> idEntidadLocal,
      Value<String> datosJson,
      Value<int> intentos,
      Value<String> estado,
      Value<DateTime> creadoEn,
      Value<int> rowid,
    });

class $$OperacionesPendientesTableFilterComposer
    extends Composer<_$AppDatabase, $OperacionesPendientesTable> {
  $$OperacionesPendientesTableFilterComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  ColumnFilters<String> get idOperacion => $composableBuilder(
    column: $table.idOperacion,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get tipo => $composableBuilder(
    column: $table.tipo,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get entidad => $composableBuilder(
    column: $table.entidad,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get idEntidadLocal => $composableBuilder(
    column: $table.idEntidadLocal,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get datosJson => $composableBuilder(
    column: $table.datosJson,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<int> get intentos => $composableBuilder(
    column: $table.intentos,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<String> get estado => $composableBuilder(
    column: $table.estado,
    builder: (column) => ColumnFilters(column),
  );

  ColumnFilters<DateTime> get creadoEn => $composableBuilder(
    column: $table.creadoEn,
    builder: (column) => ColumnFilters(column),
  );
}

class $$OperacionesPendientesTableOrderingComposer
    extends Composer<_$AppDatabase, $OperacionesPendientesTable> {
  $$OperacionesPendientesTableOrderingComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  ColumnOrderings<String> get idOperacion => $composableBuilder(
    column: $table.idOperacion,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get tipo => $composableBuilder(
    column: $table.tipo,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get entidad => $composableBuilder(
    column: $table.entidad,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get idEntidadLocal => $composableBuilder(
    column: $table.idEntidadLocal,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get datosJson => $composableBuilder(
    column: $table.datosJson,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<int> get intentos => $composableBuilder(
    column: $table.intentos,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<String> get estado => $composableBuilder(
    column: $table.estado,
    builder: (column) => ColumnOrderings(column),
  );

  ColumnOrderings<DateTime> get creadoEn => $composableBuilder(
    column: $table.creadoEn,
    builder: (column) => ColumnOrderings(column),
  );
}

class $$OperacionesPendientesTableAnnotationComposer
    extends Composer<_$AppDatabase, $OperacionesPendientesTable> {
  $$OperacionesPendientesTableAnnotationComposer({
    required super.$db,
    required super.$table,
    super.joinBuilder,
    super.$addJoinBuilderToRootComposer,
    super.$removeJoinBuilderFromRootComposer,
  });
  GeneratedColumn<String> get idOperacion => $composableBuilder(
    column: $table.idOperacion,
    builder: (column) => column,
  );

  GeneratedColumn<String> get tipo =>
      $composableBuilder(column: $table.tipo, builder: (column) => column);

  GeneratedColumn<String> get entidad =>
      $composableBuilder(column: $table.entidad, builder: (column) => column);

  GeneratedColumn<String> get idEntidadLocal => $composableBuilder(
    column: $table.idEntidadLocal,
    builder: (column) => column,
  );

  GeneratedColumn<String> get datosJson =>
      $composableBuilder(column: $table.datosJson, builder: (column) => column);

  GeneratedColumn<int> get intentos =>
      $composableBuilder(column: $table.intentos, builder: (column) => column);

  GeneratedColumn<String> get estado =>
      $composableBuilder(column: $table.estado, builder: (column) => column);

  GeneratedColumn<DateTime> get creadoEn =>
      $composableBuilder(column: $table.creadoEn, builder: (column) => column);
}

class $$OperacionesPendientesTableTableManager
    extends
        RootTableManager<
          _$AppDatabase,
          $OperacionesPendientesTable,
          OperacionesPendiente,
          $$OperacionesPendientesTableFilterComposer,
          $$OperacionesPendientesTableOrderingComposer,
          $$OperacionesPendientesTableAnnotationComposer,
          $$OperacionesPendientesTableCreateCompanionBuilder,
          $$OperacionesPendientesTableUpdateCompanionBuilder,
          (
            OperacionesPendiente,
            BaseReferences<
              _$AppDatabase,
              $OperacionesPendientesTable,
              OperacionesPendiente
            >,
          ),
          OperacionesPendiente,
          PrefetchHooks Function()
        > {
  $$OperacionesPendientesTableTableManager(
    _$AppDatabase db,
    $OperacionesPendientesTable table,
  ) : super(
        TableManagerState(
          db: db,
          table: table,
          createFilteringComposer: () =>
              $$OperacionesPendientesTableFilterComposer(
                $db: db,
                $table: table,
              ),
          createOrderingComposer: () =>
              $$OperacionesPendientesTableOrderingComposer(
                $db: db,
                $table: table,
              ),
          createComputedFieldComposer: () =>
              $$OperacionesPendientesTableAnnotationComposer(
                $db: db,
                $table: table,
              ),
          updateCompanionCallback:
              ({
                Value<String> idOperacion = const Value.absent(),
                Value<String> tipo = const Value.absent(),
                Value<String> entidad = const Value.absent(),
                Value<String> idEntidadLocal = const Value.absent(),
                Value<String> datosJson = const Value.absent(),
                Value<int> intentos = const Value.absent(),
                Value<String> estado = const Value.absent(),
                Value<DateTime> creadoEn = const Value.absent(),
                Value<int> rowid = const Value.absent(),
              }) => OperacionesPendientesCompanion(
                idOperacion: idOperacion,
                tipo: tipo,
                entidad: entidad,
                idEntidadLocal: idEntidadLocal,
                datosJson: datosJson,
                intentos: intentos,
                estado: estado,
                creadoEn: creadoEn,
                rowid: rowid,
              ),
          createCompanionCallback:
              ({
                required String idOperacion,
                required String tipo,
                required String entidad,
                required String idEntidadLocal,
                required String datosJson,
                Value<int> intentos = const Value.absent(),
                Value<String> estado = const Value.absent(),
                Value<DateTime> creadoEn = const Value.absent(),
                Value<int> rowid = const Value.absent(),
              }) => OperacionesPendientesCompanion.insert(
                idOperacion: idOperacion,
                tipo: tipo,
                entidad: entidad,
                idEntidadLocal: idEntidadLocal,
                datosJson: datosJson,
                intentos: intentos,
                estado: estado,
                creadoEn: creadoEn,
                rowid: rowid,
              ),
          withReferenceMapper: (p0) => p0
              .map(
                (e) => (
                  e.readTable<
                    $OperacionesPendientesTable,
                    OperacionesPendiente
                  >(table),
                  BaseReferences<
                    _$AppDatabase,
                    $OperacionesPendientesTable,
                    OperacionesPendiente
                  >(db, table, e),
                ),
              )
              .toList(),
          prefetchHooksCallback: null,
        ),
      );
}

typedef $$OperacionesPendientesTableProcessedTableManager =
    ProcessedTableManager<
      _$AppDatabase,
      $OperacionesPendientesTable,
      OperacionesPendiente,
      $$OperacionesPendientesTableFilterComposer,
      $$OperacionesPendientesTableOrderingComposer,
      $$OperacionesPendientesTableAnnotationComposer,
      $$OperacionesPendientesTableCreateCompanionBuilder,
      $$OperacionesPendientesTableUpdateCompanionBuilder,
      (
        OperacionesPendiente,
        BaseReferences<
          _$AppDatabase,
          $OperacionesPendientesTable,
          OperacionesPendiente
        >,
      ),
      OperacionesPendiente,
      PrefetchHooks Function()
    >;

class $AppDatabaseManager {
  final _$AppDatabase _db;
  $AppDatabaseManager(this._db);
  $$ClientesLocalesTableTableManager get clientesLocales =>
      $$ClientesLocalesTableTableManager(_db, _db.clientesLocales);
  $$OperacionesPendientesTableTableManager get operacionesPendientes =>
      $$OperacionesPendientesTableTableManager(_db, _db.operacionesPendientes);
}
