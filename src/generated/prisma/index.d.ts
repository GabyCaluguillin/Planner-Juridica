
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Caso
 * 
 */
export type Caso = $Result.DefaultSelection<Prisma.$CasoPayload>
/**
 * Model CasoResponsable
 * 
 */
export type CasoResponsable = $Result.DefaultSelection<Prisma.$CasoResponsablePayload>
/**
 * Model Audiencia
 * 
 */
export type Audiencia = $Result.DefaultSelection<Prisma.$AudienciaPayload>
/**
 * Model Cita
 * 
 */
export type Cita = $Result.DefaultSelection<Prisma.$CitaPayload>
/**
 * Model Recordatorio
 * 
 */
export type Recordatorio = $Result.DefaultSelection<Prisma.$RecordatorioPayload>
/**
 * Model Reunion
 * 
 */
export type Reunion = $Result.DefaultSelection<Prisma.$ReunionPayload>
/**
 * Model ParticipanteReunion
 * 
 */
export type ParticipanteReunion = $Result.DefaultSelection<Prisma.$ParticipanteReunionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RolUsuario: {
  ADMINISTRADOR: 'ADMINISTRADOR',
  ABOGADO: 'ABOGADO',
  ASISTENTE_LEGAL: 'ASISTENTE_LEGAL'
};

export type RolUsuario = (typeof RolUsuario)[keyof typeof RolUsuario]


export const EstadoCaso: {
  TRAMITE: 'TRAMITE',
  EN_PROCESO: 'EN_PROCESO',
  FINALIZADO: 'FINALIZADO',
  ARCHIVADO: 'ARCHIVADO'
};

export type EstadoCaso = (typeof EstadoCaso)[keyof typeof EstadoCaso]


export const EstadoAudiencia: {
  PENDIENTE: 'PENDIENTE',
  REALIZADA: 'REALIZADA',
  CANCELADA: 'CANCELADA'
};

export type EstadoAudiencia = (typeof EstadoAudiencia)[keyof typeof EstadoAudiencia]

}

export type RolUsuario = $Enums.RolUsuario

export const RolUsuario: typeof $Enums.RolUsuario

export type EstadoCaso = $Enums.EstadoCaso

export const EstadoCaso: typeof $Enums.EstadoCaso

export type EstadoAudiencia = $Enums.EstadoAudiencia

export const EstadoAudiencia: typeof $Enums.EstadoAudiencia

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.caso`: Exposes CRUD operations for the **Caso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Casos
    * const casos = await prisma.caso.findMany()
    * ```
    */
  get caso(): Prisma.CasoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.casoResponsable`: Exposes CRUD operations for the **CasoResponsable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CasoResponsables
    * const casoResponsables = await prisma.casoResponsable.findMany()
    * ```
    */
  get casoResponsable(): Prisma.CasoResponsableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.audiencia`: Exposes CRUD operations for the **Audiencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audiencias
    * const audiencias = await prisma.audiencia.findMany()
    * ```
    */
  get audiencia(): Prisma.AudienciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cita`: Exposes CRUD operations for the **Cita** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Citas
    * const citas = await prisma.cita.findMany()
    * ```
    */
  get cita(): Prisma.CitaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recordatorio`: Exposes CRUD operations for the **Recordatorio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recordatorios
    * const recordatorios = await prisma.recordatorio.findMany()
    * ```
    */
  get recordatorio(): Prisma.RecordatorioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reunion`: Exposes CRUD operations for the **Reunion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reunions
    * const reunions = await prisma.reunion.findMany()
    * ```
    */
  get reunion(): Prisma.ReunionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participanteReunion`: Exposes CRUD operations for the **ParticipanteReunion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParticipanteReunions
    * const participanteReunions = await prisma.participanteReunion.findMany()
    * ```
    */
  get participanteReunion(): Prisma.ParticipanteReunionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Cliente: 'Cliente',
    Caso: 'Caso',
    CasoResponsable: 'CasoResponsable',
    Audiencia: 'Audiencia',
    Cita: 'Cita',
    Recordatorio: 'Recordatorio',
    Reunion: 'Reunion',
    ParticipanteReunion: 'ParticipanteReunion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "cliente" | "caso" | "casoResponsable" | "audiencia" | "cita" | "recordatorio" | "reunion" | "participanteReunion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Caso: {
        payload: Prisma.$CasoPayload<ExtArgs>
        fields: Prisma.CasoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CasoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CasoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoPayload>
          }
          findFirst: {
            args: Prisma.CasoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CasoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoPayload>
          }
          findMany: {
            args: Prisma.CasoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoPayload>[]
          }
          create: {
            args: Prisma.CasoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoPayload>
          }
          createMany: {
            args: Prisma.CasoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CasoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoPayload>[]
          }
          delete: {
            args: Prisma.CasoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoPayload>
          }
          update: {
            args: Prisma.CasoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoPayload>
          }
          deleteMany: {
            args: Prisma.CasoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CasoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CasoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoPayload>[]
          }
          upsert: {
            args: Prisma.CasoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoPayload>
          }
          aggregate: {
            args: Prisma.CasoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaso>
          }
          groupBy: {
            args: Prisma.CasoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CasoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CasoCountArgs<ExtArgs>
            result: $Utils.Optional<CasoCountAggregateOutputType> | number
          }
        }
      }
      CasoResponsable: {
        payload: Prisma.$CasoResponsablePayload<ExtArgs>
        fields: Prisma.CasoResponsableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CasoResponsableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoResponsablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CasoResponsableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoResponsablePayload>
          }
          findFirst: {
            args: Prisma.CasoResponsableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoResponsablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CasoResponsableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoResponsablePayload>
          }
          findMany: {
            args: Prisma.CasoResponsableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoResponsablePayload>[]
          }
          create: {
            args: Prisma.CasoResponsableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoResponsablePayload>
          }
          createMany: {
            args: Prisma.CasoResponsableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CasoResponsableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoResponsablePayload>[]
          }
          delete: {
            args: Prisma.CasoResponsableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoResponsablePayload>
          }
          update: {
            args: Prisma.CasoResponsableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoResponsablePayload>
          }
          deleteMany: {
            args: Prisma.CasoResponsableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CasoResponsableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CasoResponsableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoResponsablePayload>[]
          }
          upsert: {
            args: Prisma.CasoResponsableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasoResponsablePayload>
          }
          aggregate: {
            args: Prisma.CasoResponsableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCasoResponsable>
          }
          groupBy: {
            args: Prisma.CasoResponsableGroupByArgs<ExtArgs>
            result: $Utils.Optional<CasoResponsableGroupByOutputType>[]
          }
          count: {
            args: Prisma.CasoResponsableCountArgs<ExtArgs>
            result: $Utils.Optional<CasoResponsableCountAggregateOutputType> | number
          }
        }
      }
      Audiencia: {
        payload: Prisma.$AudienciaPayload<ExtArgs>
        fields: Prisma.AudienciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AudienciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudienciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AudienciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudienciaPayload>
          }
          findFirst: {
            args: Prisma.AudienciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudienciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AudienciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudienciaPayload>
          }
          findMany: {
            args: Prisma.AudienciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudienciaPayload>[]
          }
          create: {
            args: Prisma.AudienciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudienciaPayload>
          }
          createMany: {
            args: Prisma.AudienciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AudienciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudienciaPayload>[]
          }
          delete: {
            args: Prisma.AudienciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudienciaPayload>
          }
          update: {
            args: Prisma.AudienciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudienciaPayload>
          }
          deleteMany: {
            args: Prisma.AudienciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AudienciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AudienciaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudienciaPayload>[]
          }
          upsert: {
            args: Prisma.AudienciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudienciaPayload>
          }
          aggregate: {
            args: Prisma.AudienciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudiencia>
          }
          groupBy: {
            args: Prisma.AudienciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AudienciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AudienciaCountArgs<ExtArgs>
            result: $Utils.Optional<AudienciaCountAggregateOutputType> | number
          }
        }
      }
      Cita: {
        payload: Prisma.$CitaPayload<ExtArgs>
        fields: Prisma.CitaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CitaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CitaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          findFirst: {
            args: Prisma.CitaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CitaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          findMany: {
            args: Prisma.CitaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>[]
          }
          create: {
            args: Prisma.CitaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          createMany: {
            args: Prisma.CitaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CitaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>[]
          }
          delete: {
            args: Prisma.CitaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          update: {
            args: Prisma.CitaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          deleteMany: {
            args: Prisma.CitaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CitaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CitaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>[]
          }
          upsert: {
            args: Prisma.CitaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          aggregate: {
            args: Prisma.CitaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCita>
          }
          groupBy: {
            args: Prisma.CitaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CitaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CitaCountArgs<ExtArgs>
            result: $Utils.Optional<CitaCountAggregateOutputType> | number
          }
        }
      }
      Recordatorio: {
        payload: Prisma.$RecordatorioPayload<ExtArgs>
        fields: Prisma.RecordatorioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecordatorioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordatorioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecordatorioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordatorioPayload>
          }
          findFirst: {
            args: Prisma.RecordatorioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordatorioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecordatorioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordatorioPayload>
          }
          findMany: {
            args: Prisma.RecordatorioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordatorioPayload>[]
          }
          create: {
            args: Prisma.RecordatorioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordatorioPayload>
          }
          createMany: {
            args: Prisma.RecordatorioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecordatorioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordatorioPayload>[]
          }
          delete: {
            args: Prisma.RecordatorioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordatorioPayload>
          }
          update: {
            args: Prisma.RecordatorioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordatorioPayload>
          }
          deleteMany: {
            args: Prisma.RecordatorioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecordatorioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecordatorioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordatorioPayload>[]
          }
          upsert: {
            args: Prisma.RecordatorioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordatorioPayload>
          }
          aggregate: {
            args: Prisma.RecordatorioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecordatorio>
          }
          groupBy: {
            args: Prisma.RecordatorioGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecordatorioGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecordatorioCountArgs<ExtArgs>
            result: $Utils.Optional<RecordatorioCountAggregateOutputType> | number
          }
        }
      }
      Reunion: {
        payload: Prisma.$ReunionPayload<ExtArgs>
        fields: Prisma.ReunionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReunionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReunionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReunionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReunionPayload>
          }
          findFirst: {
            args: Prisma.ReunionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReunionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReunionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReunionPayload>
          }
          findMany: {
            args: Prisma.ReunionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReunionPayload>[]
          }
          create: {
            args: Prisma.ReunionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReunionPayload>
          }
          createMany: {
            args: Prisma.ReunionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReunionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReunionPayload>[]
          }
          delete: {
            args: Prisma.ReunionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReunionPayload>
          }
          update: {
            args: Prisma.ReunionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReunionPayload>
          }
          deleteMany: {
            args: Prisma.ReunionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReunionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReunionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReunionPayload>[]
          }
          upsert: {
            args: Prisma.ReunionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReunionPayload>
          }
          aggregate: {
            args: Prisma.ReunionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReunion>
          }
          groupBy: {
            args: Prisma.ReunionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReunionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReunionCountArgs<ExtArgs>
            result: $Utils.Optional<ReunionCountAggregateOutputType> | number
          }
        }
      }
      ParticipanteReunion: {
        payload: Prisma.$ParticipanteReunionPayload<ExtArgs>
        fields: Prisma.ParticipanteReunionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipanteReunionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipanteReunionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipanteReunionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipanteReunionPayload>
          }
          findFirst: {
            args: Prisma.ParticipanteReunionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipanteReunionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipanteReunionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipanteReunionPayload>
          }
          findMany: {
            args: Prisma.ParticipanteReunionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipanteReunionPayload>[]
          }
          create: {
            args: Prisma.ParticipanteReunionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipanteReunionPayload>
          }
          createMany: {
            args: Prisma.ParticipanteReunionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipanteReunionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipanteReunionPayload>[]
          }
          delete: {
            args: Prisma.ParticipanteReunionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipanteReunionPayload>
          }
          update: {
            args: Prisma.ParticipanteReunionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipanteReunionPayload>
          }
          deleteMany: {
            args: Prisma.ParticipanteReunionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipanteReunionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipanteReunionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipanteReunionPayload>[]
          }
          upsert: {
            args: Prisma.ParticipanteReunionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipanteReunionPayload>
          }
          aggregate: {
            args: Prisma.ParticipanteReunionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipanteReunion>
          }
          groupBy: {
            args: Prisma.ParticipanteReunionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipanteReunionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipanteReunionCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipanteReunionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    cliente?: ClienteOmit
    caso?: CasoOmit
    casoResponsable?: CasoResponsableOmit
    audiencia?: AudienciaOmit
    cita?: CitaOmit
    recordatorio?: RecordatorioOmit
    reunion?: ReunionOmit
    participanteReunion?: ParticipanteReunionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    casos: number
    casosAsignados: number
    audiencias: number
    citas: number
    recordatorios: number
    reunionesCreadas: number
    participacionesReunion: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casos?: boolean | UsuarioCountOutputTypeCountCasosArgs
    casosAsignados?: boolean | UsuarioCountOutputTypeCountCasosAsignadosArgs
    audiencias?: boolean | UsuarioCountOutputTypeCountAudienciasArgs
    citas?: boolean | UsuarioCountOutputTypeCountCitasArgs
    recordatorios?: boolean | UsuarioCountOutputTypeCountRecordatoriosArgs
    reunionesCreadas?: boolean | UsuarioCountOutputTypeCountReunionesCreadasArgs
    participacionesReunion?: boolean | UsuarioCountOutputTypeCountParticipacionesReunionArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCasosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCasosAsignadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasoResponsableWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAudienciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudienciaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountRecordatoriosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordatorioWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountReunionesCreadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReunionWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountParticipacionesReunionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipanteReunionWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    casos: number
    participacionesReunion: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casos?: boolean | ClienteCountOutputTypeCountCasosArgs
    participacionesReunion?: boolean | ClienteCountOutputTypeCountParticipacionesReunionArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountCasosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasoWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountParticipacionesReunionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipanteReunionWhereInput
  }


  /**
   * Count Type CasoCountOutputType
   */

  export type CasoCountOutputType = {
    audiencias: number
    citas: number
    recordatorios: number
    responsables: number
    reuniones: number
  }

  export type CasoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audiencias?: boolean | CasoCountOutputTypeCountAudienciasArgs
    citas?: boolean | CasoCountOutputTypeCountCitasArgs
    recordatorios?: boolean | CasoCountOutputTypeCountRecordatoriosArgs
    responsables?: boolean | CasoCountOutputTypeCountResponsablesArgs
    reuniones?: boolean | CasoCountOutputTypeCountReunionesArgs
  }

  // Custom InputTypes
  /**
   * CasoCountOutputType without action
   */
  export type CasoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasoCountOutputType
     */
    select?: CasoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CasoCountOutputType without action
   */
  export type CasoCountOutputTypeCountAudienciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudienciaWhereInput
  }

  /**
   * CasoCountOutputType without action
   */
  export type CasoCountOutputTypeCountCitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitaWhereInput
  }

  /**
   * CasoCountOutputType without action
   */
  export type CasoCountOutputTypeCountRecordatoriosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordatorioWhereInput
  }

  /**
   * CasoCountOutputType without action
   */
  export type CasoCountOutputTypeCountResponsablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasoResponsableWhereInput
  }

  /**
   * CasoCountOutputType without action
   */
  export type CasoCountOutputTypeCountReunionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReunionWhereInput
  }


  /**
   * Count Type ReunionCountOutputType
   */

  export type ReunionCountOutputType = {
    participantes: number
  }

  export type ReunionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantes?: boolean | ReunionCountOutputTypeCountParticipantesArgs
  }

  // Custom InputTypes
  /**
   * ReunionCountOutputType without action
   */
  export type ReunionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReunionCountOutputType
     */
    select?: ReunionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReunionCountOutputType without action
   */
  export type ReunionCountOutputTypeCountParticipantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipanteReunionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    correo: string | null
    clave: string | null
    rol: $Enums.RolUsuario | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    correo: string | null
    clave: string | null
    rol: $Enums.RolUsuario | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    correo: number
    clave: number
    rol: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    clave?: true
    rol?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    clave?: true
    rol?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    clave?: true
    rol?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    correo: string
    clave: string
    rol: $Enums.RolUsuario
    createdAt: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    clave?: boolean
    rol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    casos?: boolean | Usuario$casosArgs<ExtArgs>
    casosAsignados?: boolean | Usuario$casosAsignadosArgs<ExtArgs>
    audiencias?: boolean | Usuario$audienciasArgs<ExtArgs>
    citas?: boolean | Usuario$citasArgs<ExtArgs>
    recordatorios?: boolean | Usuario$recordatoriosArgs<ExtArgs>
    reunionesCreadas?: boolean | Usuario$reunionesCreadasArgs<ExtArgs>
    participacionesReunion?: boolean | Usuario$participacionesReunionArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    clave?: boolean
    rol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    clave?: boolean
    rol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    correo?: boolean
    clave?: boolean
    rol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "correo" | "clave" | "rol" | "createdAt" | "updatedAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casos?: boolean | Usuario$casosArgs<ExtArgs>
    casosAsignados?: boolean | Usuario$casosAsignadosArgs<ExtArgs>
    audiencias?: boolean | Usuario$audienciasArgs<ExtArgs>
    citas?: boolean | Usuario$citasArgs<ExtArgs>
    recordatorios?: boolean | Usuario$recordatoriosArgs<ExtArgs>
    reunionesCreadas?: boolean | Usuario$reunionesCreadasArgs<ExtArgs>
    participacionesReunion?: boolean | Usuario$participacionesReunionArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      casos: Prisma.$CasoPayload<ExtArgs>[]
      casosAsignados: Prisma.$CasoResponsablePayload<ExtArgs>[]
      audiencias: Prisma.$AudienciaPayload<ExtArgs>[]
      citas: Prisma.$CitaPayload<ExtArgs>[]
      recordatorios: Prisma.$RecordatorioPayload<ExtArgs>[]
      reunionesCreadas: Prisma.$ReunionPayload<ExtArgs>[]
      participacionesReunion: Prisma.$ParticipanteReunionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      correo: string
      clave: string
      rol: $Enums.RolUsuario
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    casos<T extends Usuario$casosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$casosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    casosAsignados<T extends Usuario$casosAsignadosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$casosAsignadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasoResponsablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    audiencias<T extends Usuario$audienciasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$audienciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudienciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    citas<T extends Usuario$citasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$citasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recordatorios<T extends Usuario$recordatoriosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$recordatoriosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordatorioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reunionesCreadas<T extends Usuario$reunionesCreadasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$reunionesCreadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReunionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participacionesReunion<T extends Usuario$participacionesReunionArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$participacionesReunionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipanteReunionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly correo: FieldRef<"Usuario", 'String'>
    readonly clave: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'RolUsuario'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.casos
   */
  export type Usuario$casosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
    where?: CasoWhereInput
    orderBy?: CasoOrderByWithRelationInput | CasoOrderByWithRelationInput[]
    cursor?: CasoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CasoScalarFieldEnum | CasoScalarFieldEnum[]
  }

  /**
   * Usuario.casosAsignados
   */
  export type Usuario$casosAsignadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasoResponsable
     */
    select?: CasoResponsableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasoResponsable
     */
    omit?: CasoResponsableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoResponsableInclude<ExtArgs> | null
    where?: CasoResponsableWhereInput
    orderBy?: CasoResponsableOrderByWithRelationInput | CasoResponsableOrderByWithRelationInput[]
    cursor?: CasoResponsableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CasoResponsableScalarFieldEnum | CasoResponsableScalarFieldEnum[]
  }

  /**
   * Usuario.audiencias
   */
  export type Usuario$audienciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audiencia
     */
    select?: AudienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audiencia
     */
    omit?: AudienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienciaInclude<ExtArgs> | null
    where?: AudienciaWhereInput
    orderBy?: AudienciaOrderByWithRelationInput | AudienciaOrderByWithRelationInput[]
    cursor?: AudienciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AudienciaScalarFieldEnum | AudienciaScalarFieldEnum[]
  }

  /**
   * Usuario.citas
   */
  export type Usuario$citasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    where?: CitaWhereInput
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    cursor?: CitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Usuario.recordatorios
   */
  export type Usuario$recordatoriosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recordatorio
     */
    select?: RecordatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recordatorio
     */
    omit?: RecordatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordatorioInclude<ExtArgs> | null
    where?: RecordatorioWhereInput
    orderBy?: RecordatorioOrderByWithRelationInput | RecordatorioOrderByWithRelationInput[]
    cursor?: RecordatorioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecordatorioScalarFieldEnum | RecordatorioScalarFieldEnum[]
  }

  /**
   * Usuario.reunionesCreadas
   */
  export type Usuario$reunionesCreadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reunion
     */
    select?: ReunionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reunion
     */
    omit?: ReunionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReunionInclude<ExtArgs> | null
    where?: ReunionWhereInput
    orderBy?: ReunionOrderByWithRelationInput | ReunionOrderByWithRelationInput[]
    cursor?: ReunionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReunionScalarFieldEnum | ReunionScalarFieldEnum[]
  }

  /**
   * Usuario.participacionesReunion
   */
  export type Usuario$participacionesReunionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipanteReunion
     */
    select?: ParticipanteReunionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipanteReunion
     */
    omit?: ParticipanteReunionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteReunionInclude<ExtArgs> | null
    where?: ParticipanteReunionWhereInput
    orderBy?: ParticipanteReunionOrderByWithRelationInput | ParticipanteReunionOrderByWithRelationInput[]
    cursor?: ParticipanteReunionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipanteReunionScalarFieldEnum | ParticipanteReunionScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    correo: string | null
    telefono: string | null
    direccion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    correo: string | null
    telefono: string | null
    direccion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nombre: number
    correo: number
    telefono: number
    direccion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    telefono?: true
    direccion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    telefono?: true
    direccion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    telefono?: true
    direccion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    nombre: string
    correo: string
    telefono: string
    direccion: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    telefono?: boolean
    direccion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    casos?: boolean | Cliente$casosArgs<ExtArgs>
    participacionesReunion?: boolean | Cliente$participacionesReunionArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    telefono?: boolean
    direccion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    telefono?: boolean
    direccion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nombre?: boolean
    correo?: boolean
    telefono?: boolean
    direccion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "correo" | "telefono" | "direccion" | "createdAt" | "updatedAt", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    casos?: boolean | Cliente$casosArgs<ExtArgs>
    participacionesReunion?: boolean | Cliente$participacionesReunionArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      casos: Prisma.$CasoPayload<ExtArgs>[]
      participacionesReunion: Prisma.$ParticipanteReunionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      correo: string
      telefono: string
      direccion: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    casos<T extends Cliente$casosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$casosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participacionesReunion<T extends Cliente$participacionesReunionArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$participacionesReunionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipanteReunionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly nombre: FieldRef<"Cliente", 'String'>
    readonly correo: FieldRef<"Cliente", 'String'>
    readonly telefono: FieldRef<"Cliente", 'String'>
    readonly direccion: FieldRef<"Cliente", 'String'>
    readonly createdAt: FieldRef<"Cliente", 'DateTime'>
    readonly updatedAt: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.casos
   */
  export type Cliente$casosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
    where?: CasoWhereInput
    orderBy?: CasoOrderByWithRelationInput | CasoOrderByWithRelationInput[]
    cursor?: CasoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CasoScalarFieldEnum | CasoScalarFieldEnum[]
  }

  /**
   * Cliente.participacionesReunion
   */
  export type Cliente$participacionesReunionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipanteReunion
     */
    select?: ParticipanteReunionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipanteReunion
     */
    omit?: ParticipanteReunionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteReunionInclude<ExtArgs> | null
    where?: ParticipanteReunionWhereInput
    orderBy?: ParticipanteReunionOrderByWithRelationInput | ParticipanteReunionOrderByWithRelationInput[]
    cursor?: ParticipanteReunionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipanteReunionScalarFieldEnum | ParticipanteReunionScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Caso
   */

  export type AggregateCaso = {
    _count: CasoCountAggregateOutputType | null
    _avg: CasoAvgAggregateOutputType | null
    _sum: CasoSumAggregateOutputType | null
    _min: CasoMinAggregateOutputType | null
    _max: CasoMaxAggregateOutputType | null
  }

  export type CasoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    clienteId: number | null
  }

  export type CasoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    clienteId: number | null
  }

  export type CasoMinAggregateOutputType = {
    id: number | null
    numero: string | null
    asunto: string | null
    tipo: string | null
    estado: $Enums.EstadoCaso | null
    fechaInicio: Date | null
    fechaCierre: Date | null
    usuarioId: number | null
    clienteId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CasoMaxAggregateOutputType = {
    id: number | null
    numero: string | null
    asunto: string | null
    tipo: string | null
    estado: $Enums.EstadoCaso | null
    fechaInicio: Date | null
    fechaCierre: Date | null
    usuarioId: number | null
    clienteId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CasoCountAggregateOutputType = {
    id: number
    numero: number
    asunto: number
    tipo: number
    estado: number
    fechaInicio: number
    fechaCierre: number
    usuarioId: number
    clienteId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CasoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    clienteId?: true
  }

  export type CasoSumAggregateInputType = {
    id?: true
    usuarioId?: true
    clienteId?: true
  }

  export type CasoMinAggregateInputType = {
    id?: true
    numero?: true
    asunto?: true
    tipo?: true
    estado?: true
    fechaInicio?: true
    fechaCierre?: true
    usuarioId?: true
    clienteId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CasoMaxAggregateInputType = {
    id?: true
    numero?: true
    asunto?: true
    tipo?: true
    estado?: true
    fechaInicio?: true
    fechaCierre?: true
    usuarioId?: true
    clienteId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CasoCountAggregateInputType = {
    id?: true
    numero?: true
    asunto?: true
    tipo?: true
    estado?: true
    fechaInicio?: true
    fechaCierre?: true
    usuarioId?: true
    clienteId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CasoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Caso to aggregate.
     */
    where?: CasoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casos to fetch.
     */
    orderBy?: CasoOrderByWithRelationInput | CasoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CasoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Casos
    **/
    _count?: true | CasoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CasoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CasoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CasoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CasoMaxAggregateInputType
  }

  export type GetCasoAggregateType<T extends CasoAggregateArgs> = {
        [P in keyof T & keyof AggregateCaso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaso[P]>
      : GetScalarType<T[P], AggregateCaso[P]>
  }




  export type CasoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasoWhereInput
    orderBy?: CasoOrderByWithAggregationInput | CasoOrderByWithAggregationInput[]
    by: CasoScalarFieldEnum[] | CasoScalarFieldEnum
    having?: CasoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CasoCountAggregateInputType | true
    _avg?: CasoAvgAggregateInputType
    _sum?: CasoSumAggregateInputType
    _min?: CasoMinAggregateInputType
    _max?: CasoMaxAggregateInputType
  }

  export type CasoGroupByOutputType = {
    id: number
    numero: string
    asunto: string
    tipo: string
    estado: $Enums.EstadoCaso
    fechaInicio: Date
    fechaCierre: Date | null
    usuarioId: number
    clienteId: number
    createdAt: Date
    updatedAt: Date
    _count: CasoCountAggregateOutputType | null
    _avg: CasoAvgAggregateOutputType | null
    _sum: CasoSumAggregateOutputType | null
    _min: CasoMinAggregateOutputType | null
    _max: CasoMaxAggregateOutputType | null
  }

  type GetCasoGroupByPayload<T extends CasoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CasoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CasoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CasoGroupByOutputType[P]>
            : GetScalarType<T[P], CasoGroupByOutputType[P]>
        }
      >
    >


  export type CasoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    asunto?: boolean
    tipo?: boolean
    estado?: boolean
    fechaInicio?: boolean
    fechaCierre?: boolean
    usuarioId?: boolean
    clienteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    audiencias?: boolean | Caso$audienciasArgs<ExtArgs>
    citas?: boolean | Caso$citasArgs<ExtArgs>
    recordatorios?: boolean | Caso$recordatoriosArgs<ExtArgs>
    responsables?: boolean | Caso$responsablesArgs<ExtArgs>
    reuniones?: boolean | Caso$reunionesArgs<ExtArgs>
    _count?: boolean | CasoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caso"]>

  export type CasoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    asunto?: boolean
    tipo?: boolean
    estado?: boolean
    fechaInicio?: boolean
    fechaCierre?: boolean
    usuarioId?: boolean
    clienteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caso"]>

  export type CasoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    asunto?: boolean
    tipo?: boolean
    estado?: boolean
    fechaInicio?: boolean
    fechaCierre?: boolean
    usuarioId?: boolean
    clienteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caso"]>

  export type CasoSelectScalar = {
    id?: boolean
    numero?: boolean
    asunto?: boolean
    tipo?: boolean
    estado?: boolean
    fechaInicio?: boolean
    fechaCierre?: boolean
    usuarioId?: boolean
    clienteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CasoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "asunto" | "tipo" | "estado" | "fechaInicio" | "fechaCierre" | "usuarioId" | "clienteId" | "createdAt" | "updatedAt", ExtArgs["result"]["caso"]>
  export type CasoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    audiencias?: boolean | Caso$audienciasArgs<ExtArgs>
    citas?: boolean | Caso$citasArgs<ExtArgs>
    recordatorios?: boolean | Caso$recordatoriosArgs<ExtArgs>
    responsables?: boolean | Caso$responsablesArgs<ExtArgs>
    reuniones?: boolean | Caso$reunionesArgs<ExtArgs>
    _count?: boolean | CasoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CasoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type CasoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $CasoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Caso"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      cliente: Prisma.$ClientePayload<ExtArgs>
      audiencias: Prisma.$AudienciaPayload<ExtArgs>[]
      citas: Prisma.$CitaPayload<ExtArgs>[]
      recordatorios: Prisma.$RecordatorioPayload<ExtArgs>[]
      responsables: Prisma.$CasoResponsablePayload<ExtArgs>[]
      reuniones: Prisma.$ReunionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numero: string
      asunto: string
      tipo: string
      estado: $Enums.EstadoCaso
      fechaInicio: Date
      fechaCierre: Date | null
      usuarioId: number
      clienteId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["caso"]>
    composites: {}
  }

  type CasoGetPayload<S extends boolean | null | undefined | CasoDefaultArgs> = $Result.GetResult<Prisma.$CasoPayload, S>

  type CasoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CasoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CasoCountAggregateInputType | true
    }

  export interface CasoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Caso'], meta: { name: 'Caso' } }
    /**
     * Find zero or one Caso that matches the filter.
     * @param {CasoFindUniqueArgs} args - Arguments to find a Caso
     * @example
     * // Get one Caso
     * const caso = await prisma.caso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CasoFindUniqueArgs>(args: SelectSubset<T, CasoFindUniqueArgs<ExtArgs>>): Prisma__CasoClient<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Caso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CasoFindUniqueOrThrowArgs} args - Arguments to find a Caso
     * @example
     * // Get one Caso
     * const caso = await prisma.caso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CasoFindUniqueOrThrowArgs>(args: SelectSubset<T, CasoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CasoClient<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Caso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasoFindFirstArgs} args - Arguments to find a Caso
     * @example
     * // Get one Caso
     * const caso = await prisma.caso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CasoFindFirstArgs>(args?: SelectSubset<T, CasoFindFirstArgs<ExtArgs>>): Prisma__CasoClient<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Caso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasoFindFirstOrThrowArgs} args - Arguments to find a Caso
     * @example
     * // Get one Caso
     * const caso = await prisma.caso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CasoFindFirstOrThrowArgs>(args?: SelectSubset<T, CasoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CasoClient<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Casos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Casos
     * const casos = await prisma.caso.findMany()
     * 
     * // Get first 10 Casos
     * const casos = await prisma.caso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const casoWithIdOnly = await prisma.caso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CasoFindManyArgs>(args?: SelectSubset<T, CasoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Caso.
     * @param {CasoCreateArgs} args - Arguments to create a Caso.
     * @example
     * // Create one Caso
     * const Caso = await prisma.caso.create({
     *   data: {
     *     // ... data to create a Caso
     *   }
     * })
     * 
     */
    create<T extends CasoCreateArgs>(args: SelectSubset<T, CasoCreateArgs<ExtArgs>>): Prisma__CasoClient<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Casos.
     * @param {CasoCreateManyArgs} args - Arguments to create many Casos.
     * @example
     * // Create many Casos
     * const caso = await prisma.caso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CasoCreateManyArgs>(args?: SelectSubset<T, CasoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Casos and returns the data saved in the database.
     * @param {CasoCreateManyAndReturnArgs} args - Arguments to create many Casos.
     * @example
     * // Create many Casos
     * const caso = await prisma.caso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Casos and only return the `id`
     * const casoWithIdOnly = await prisma.caso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CasoCreateManyAndReturnArgs>(args?: SelectSubset<T, CasoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Caso.
     * @param {CasoDeleteArgs} args - Arguments to delete one Caso.
     * @example
     * // Delete one Caso
     * const Caso = await prisma.caso.delete({
     *   where: {
     *     // ... filter to delete one Caso
     *   }
     * })
     * 
     */
    delete<T extends CasoDeleteArgs>(args: SelectSubset<T, CasoDeleteArgs<ExtArgs>>): Prisma__CasoClient<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Caso.
     * @param {CasoUpdateArgs} args - Arguments to update one Caso.
     * @example
     * // Update one Caso
     * const caso = await prisma.caso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CasoUpdateArgs>(args: SelectSubset<T, CasoUpdateArgs<ExtArgs>>): Prisma__CasoClient<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Casos.
     * @param {CasoDeleteManyArgs} args - Arguments to filter Casos to delete.
     * @example
     * // Delete a few Casos
     * const { count } = await prisma.caso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CasoDeleteManyArgs>(args?: SelectSubset<T, CasoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Casos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Casos
     * const caso = await prisma.caso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CasoUpdateManyArgs>(args: SelectSubset<T, CasoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Casos and returns the data updated in the database.
     * @param {CasoUpdateManyAndReturnArgs} args - Arguments to update many Casos.
     * @example
     * // Update many Casos
     * const caso = await prisma.caso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Casos and only return the `id`
     * const casoWithIdOnly = await prisma.caso.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CasoUpdateManyAndReturnArgs>(args: SelectSubset<T, CasoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Caso.
     * @param {CasoUpsertArgs} args - Arguments to update or create a Caso.
     * @example
     * // Update or create a Caso
     * const caso = await prisma.caso.upsert({
     *   create: {
     *     // ... data to create a Caso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Caso we want to update
     *   }
     * })
     */
    upsert<T extends CasoUpsertArgs>(args: SelectSubset<T, CasoUpsertArgs<ExtArgs>>): Prisma__CasoClient<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Casos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasoCountArgs} args - Arguments to filter Casos to count.
     * @example
     * // Count the number of Casos
     * const count = await prisma.caso.count({
     *   where: {
     *     // ... the filter for the Casos we want to count
     *   }
     * })
    **/
    count<T extends CasoCountArgs>(
      args?: Subset<T, CasoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CasoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Caso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CasoAggregateArgs>(args: Subset<T, CasoAggregateArgs>): Prisma.PrismaPromise<GetCasoAggregateType<T>>

    /**
     * Group by Caso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CasoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CasoGroupByArgs['orderBy'] }
        : { orderBy?: CasoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CasoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCasoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Caso model
   */
  readonly fields: CasoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Caso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CasoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    audiencias<T extends Caso$audienciasArgs<ExtArgs> = {}>(args?: Subset<T, Caso$audienciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudienciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    citas<T extends Caso$citasArgs<ExtArgs> = {}>(args?: Subset<T, Caso$citasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recordatorios<T extends Caso$recordatoriosArgs<ExtArgs> = {}>(args?: Subset<T, Caso$recordatoriosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordatorioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    responsables<T extends Caso$responsablesArgs<ExtArgs> = {}>(args?: Subset<T, Caso$responsablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasoResponsablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reuniones<T extends Caso$reunionesArgs<ExtArgs> = {}>(args?: Subset<T, Caso$reunionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReunionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Caso model
   */
  interface CasoFieldRefs {
    readonly id: FieldRef<"Caso", 'Int'>
    readonly numero: FieldRef<"Caso", 'String'>
    readonly asunto: FieldRef<"Caso", 'String'>
    readonly tipo: FieldRef<"Caso", 'String'>
    readonly estado: FieldRef<"Caso", 'EstadoCaso'>
    readonly fechaInicio: FieldRef<"Caso", 'DateTime'>
    readonly fechaCierre: FieldRef<"Caso", 'DateTime'>
    readonly usuarioId: FieldRef<"Caso", 'Int'>
    readonly clienteId: FieldRef<"Caso", 'Int'>
    readonly createdAt: FieldRef<"Caso", 'DateTime'>
    readonly updatedAt: FieldRef<"Caso", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Caso findUnique
   */
  export type CasoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
    /**
     * Filter, which Caso to fetch.
     */
    where: CasoWhereUniqueInput
  }

  /**
   * Caso findUniqueOrThrow
   */
  export type CasoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
    /**
     * Filter, which Caso to fetch.
     */
    where: CasoWhereUniqueInput
  }

  /**
   * Caso findFirst
   */
  export type CasoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
    /**
     * Filter, which Caso to fetch.
     */
    where?: CasoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casos to fetch.
     */
    orderBy?: CasoOrderByWithRelationInput | CasoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Casos.
     */
    cursor?: CasoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Casos.
     */
    distinct?: CasoScalarFieldEnum | CasoScalarFieldEnum[]
  }

  /**
   * Caso findFirstOrThrow
   */
  export type CasoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
    /**
     * Filter, which Caso to fetch.
     */
    where?: CasoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casos to fetch.
     */
    orderBy?: CasoOrderByWithRelationInput | CasoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Casos.
     */
    cursor?: CasoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Casos.
     */
    distinct?: CasoScalarFieldEnum | CasoScalarFieldEnum[]
  }

  /**
   * Caso findMany
   */
  export type CasoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
    /**
     * Filter, which Casos to fetch.
     */
    where?: CasoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casos to fetch.
     */
    orderBy?: CasoOrderByWithRelationInput | CasoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Casos.
     */
    cursor?: CasoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Casos.
     */
    distinct?: CasoScalarFieldEnum | CasoScalarFieldEnum[]
  }

  /**
   * Caso create
   */
  export type CasoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
    /**
     * The data needed to create a Caso.
     */
    data: XOR<CasoCreateInput, CasoUncheckedCreateInput>
  }

  /**
   * Caso createMany
   */
  export type CasoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Casos.
     */
    data: CasoCreateManyInput | CasoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Caso createManyAndReturn
   */
  export type CasoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * The data used to create many Casos.
     */
    data: CasoCreateManyInput | CasoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Caso update
   */
  export type CasoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
    /**
     * The data needed to update a Caso.
     */
    data: XOR<CasoUpdateInput, CasoUncheckedUpdateInput>
    /**
     * Choose, which Caso to update.
     */
    where: CasoWhereUniqueInput
  }

  /**
   * Caso updateMany
   */
  export type CasoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Casos.
     */
    data: XOR<CasoUpdateManyMutationInput, CasoUncheckedUpdateManyInput>
    /**
     * Filter which Casos to update
     */
    where?: CasoWhereInput
    /**
     * Limit how many Casos to update.
     */
    limit?: number
  }

  /**
   * Caso updateManyAndReturn
   */
  export type CasoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * The data used to update Casos.
     */
    data: XOR<CasoUpdateManyMutationInput, CasoUncheckedUpdateManyInput>
    /**
     * Filter which Casos to update
     */
    where?: CasoWhereInput
    /**
     * Limit how many Casos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Caso upsert
   */
  export type CasoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
    /**
     * The filter to search for the Caso to update in case it exists.
     */
    where: CasoWhereUniqueInput
    /**
     * In case the Caso found by the `where` argument doesn't exist, create a new Caso with this data.
     */
    create: XOR<CasoCreateInput, CasoUncheckedCreateInput>
    /**
     * In case the Caso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CasoUpdateInput, CasoUncheckedUpdateInput>
  }

  /**
   * Caso delete
   */
  export type CasoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
    /**
     * Filter which Caso to delete.
     */
    where: CasoWhereUniqueInput
  }

  /**
   * Caso deleteMany
   */
  export type CasoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Casos to delete
     */
    where?: CasoWhereInput
    /**
     * Limit how many Casos to delete.
     */
    limit?: number
  }

  /**
   * Caso.audiencias
   */
  export type Caso$audienciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audiencia
     */
    select?: AudienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audiencia
     */
    omit?: AudienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienciaInclude<ExtArgs> | null
    where?: AudienciaWhereInput
    orderBy?: AudienciaOrderByWithRelationInput | AudienciaOrderByWithRelationInput[]
    cursor?: AudienciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AudienciaScalarFieldEnum | AudienciaScalarFieldEnum[]
  }

  /**
   * Caso.citas
   */
  export type Caso$citasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    where?: CitaWhereInput
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    cursor?: CitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Caso.recordatorios
   */
  export type Caso$recordatoriosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recordatorio
     */
    select?: RecordatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recordatorio
     */
    omit?: RecordatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordatorioInclude<ExtArgs> | null
    where?: RecordatorioWhereInput
    orderBy?: RecordatorioOrderByWithRelationInput | RecordatorioOrderByWithRelationInput[]
    cursor?: RecordatorioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecordatorioScalarFieldEnum | RecordatorioScalarFieldEnum[]
  }

  /**
   * Caso.responsables
   */
  export type Caso$responsablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasoResponsable
     */
    select?: CasoResponsableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasoResponsable
     */
    omit?: CasoResponsableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoResponsableInclude<ExtArgs> | null
    where?: CasoResponsableWhereInput
    orderBy?: CasoResponsableOrderByWithRelationInput | CasoResponsableOrderByWithRelationInput[]
    cursor?: CasoResponsableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CasoResponsableScalarFieldEnum | CasoResponsableScalarFieldEnum[]
  }

  /**
   * Caso.reuniones
   */
  export type Caso$reunionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reunion
     */
    select?: ReunionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reunion
     */
    omit?: ReunionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReunionInclude<ExtArgs> | null
    where?: ReunionWhereInput
    orderBy?: ReunionOrderByWithRelationInput | ReunionOrderByWithRelationInput[]
    cursor?: ReunionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReunionScalarFieldEnum | ReunionScalarFieldEnum[]
  }

  /**
   * Caso without action
   */
  export type CasoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
  }


  /**
   * Model CasoResponsable
   */

  export type AggregateCasoResponsable = {
    _count: CasoResponsableCountAggregateOutputType | null
    _avg: CasoResponsableAvgAggregateOutputType | null
    _sum: CasoResponsableSumAggregateOutputType | null
    _min: CasoResponsableMinAggregateOutputType | null
    _max: CasoResponsableMaxAggregateOutputType | null
  }

  export type CasoResponsableAvgAggregateOutputType = {
    id: number | null
    casoId: number | null
    usuarioId: number | null
  }

  export type CasoResponsableSumAggregateOutputType = {
    id: number | null
    casoId: number | null
    usuarioId: number | null
  }

  export type CasoResponsableMinAggregateOutputType = {
    id: number | null
    casoId: number | null
    usuarioId: number | null
    esPrincipal: boolean | null
    createdAt: Date | null
  }

  export type CasoResponsableMaxAggregateOutputType = {
    id: number | null
    casoId: number | null
    usuarioId: number | null
    esPrincipal: boolean | null
    createdAt: Date | null
  }

  export type CasoResponsableCountAggregateOutputType = {
    id: number
    casoId: number
    usuarioId: number
    esPrincipal: number
    createdAt: number
    _all: number
  }


  export type CasoResponsableAvgAggregateInputType = {
    id?: true
    casoId?: true
    usuarioId?: true
  }

  export type CasoResponsableSumAggregateInputType = {
    id?: true
    casoId?: true
    usuarioId?: true
  }

  export type CasoResponsableMinAggregateInputType = {
    id?: true
    casoId?: true
    usuarioId?: true
    esPrincipal?: true
    createdAt?: true
  }

  export type CasoResponsableMaxAggregateInputType = {
    id?: true
    casoId?: true
    usuarioId?: true
    esPrincipal?: true
    createdAt?: true
  }

  export type CasoResponsableCountAggregateInputType = {
    id?: true
    casoId?: true
    usuarioId?: true
    esPrincipal?: true
    createdAt?: true
    _all?: true
  }

  export type CasoResponsableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CasoResponsable to aggregate.
     */
    where?: CasoResponsableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasoResponsables to fetch.
     */
    orderBy?: CasoResponsableOrderByWithRelationInput | CasoResponsableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CasoResponsableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasoResponsables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasoResponsables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CasoResponsables
    **/
    _count?: true | CasoResponsableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CasoResponsableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CasoResponsableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CasoResponsableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CasoResponsableMaxAggregateInputType
  }

  export type GetCasoResponsableAggregateType<T extends CasoResponsableAggregateArgs> = {
        [P in keyof T & keyof AggregateCasoResponsable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCasoResponsable[P]>
      : GetScalarType<T[P], AggregateCasoResponsable[P]>
  }




  export type CasoResponsableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasoResponsableWhereInput
    orderBy?: CasoResponsableOrderByWithAggregationInput | CasoResponsableOrderByWithAggregationInput[]
    by: CasoResponsableScalarFieldEnum[] | CasoResponsableScalarFieldEnum
    having?: CasoResponsableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CasoResponsableCountAggregateInputType | true
    _avg?: CasoResponsableAvgAggregateInputType
    _sum?: CasoResponsableSumAggregateInputType
    _min?: CasoResponsableMinAggregateInputType
    _max?: CasoResponsableMaxAggregateInputType
  }

  export type CasoResponsableGroupByOutputType = {
    id: number
    casoId: number
    usuarioId: number
    esPrincipal: boolean
    createdAt: Date
    _count: CasoResponsableCountAggregateOutputType | null
    _avg: CasoResponsableAvgAggregateOutputType | null
    _sum: CasoResponsableSumAggregateOutputType | null
    _min: CasoResponsableMinAggregateOutputType | null
    _max: CasoResponsableMaxAggregateOutputType | null
  }

  type GetCasoResponsableGroupByPayload<T extends CasoResponsableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CasoResponsableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CasoResponsableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CasoResponsableGroupByOutputType[P]>
            : GetScalarType<T[P], CasoResponsableGroupByOutputType[P]>
        }
      >
    >


  export type CasoResponsableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    casoId?: boolean
    usuarioId?: boolean
    esPrincipal?: boolean
    createdAt?: boolean
    caso?: boolean | CasoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["casoResponsable"]>

  export type CasoResponsableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    casoId?: boolean
    usuarioId?: boolean
    esPrincipal?: boolean
    createdAt?: boolean
    caso?: boolean | CasoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["casoResponsable"]>

  export type CasoResponsableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    casoId?: boolean
    usuarioId?: boolean
    esPrincipal?: boolean
    createdAt?: boolean
    caso?: boolean | CasoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["casoResponsable"]>

  export type CasoResponsableSelectScalar = {
    id?: boolean
    casoId?: boolean
    usuarioId?: boolean
    esPrincipal?: boolean
    createdAt?: boolean
  }

  export type CasoResponsableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "casoId" | "usuarioId" | "esPrincipal" | "createdAt", ExtArgs["result"]["casoResponsable"]>
  export type CasoResponsableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caso?: boolean | CasoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type CasoResponsableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caso?: boolean | CasoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type CasoResponsableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caso?: boolean | CasoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $CasoResponsablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CasoResponsable"
    objects: {
      caso: Prisma.$CasoPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      casoId: number
      usuarioId: number
      esPrincipal: boolean
      createdAt: Date
    }, ExtArgs["result"]["casoResponsable"]>
    composites: {}
  }

  type CasoResponsableGetPayload<S extends boolean | null | undefined | CasoResponsableDefaultArgs> = $Result.GetResult<Prisma.$CasoResponsablePayload, S>

  type CasoResponsableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CasoResponsableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CasoResponsableCountAggregateInputType | true
    }

  export interface CasoResponsableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CasoResponsable'], meta: { name: 'CasoResponsable' } }
    /**
     * Find zero or one CasoResponsable that matches the filter.
     * @param {CasoResponsableFindUniqueArgs} args - Arguments to find a CasoResponsable
     * @example
     * // Get one CasoResponsable
     * const casoResponsable = await prisma.casoResponsable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CasoResponsableFindUniqueArgs>(args: SelectSubset<T, CasoResponsableFindUniqueArgs<ExtArgs>>): Prisma__CasoResponsableClient<$Result.GetResult<Prisma.$CasoResponsablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CasoResponsable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CasoResponsableFindUniqueOrThrowArgs} args - Arguments to find a CasoResponsable
     * @example
     * // Get one CasoResponsable
     * const casoResponsable = await prisma.casoResponsable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CasoResponsableFindUniqueOrThrowArgs>(args: SelectSubset<T, CasoResponsableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CasoResponsableClient<$Result.GetResult<Prisma.$CasoResponsablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CasoResponsable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasoResponsableFindFirstArgs} args - Arguments to find a CasoResponsable
     * @example
     * // Get one CasoResponsable
     * const casoResponsable = await prisma.casoResponsable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CasoResponsableFindFirstArgs>(args?: SelectSubset<T, CasoResponsableFindFirstArgs<ExtArgs>>): Prisma__CasoResponsableClient<$Result.GetResult<Prisma.$CasoResponsablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CasoResponsable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasoResponsableFindFirstOrThrowArgs} args - Arguments to find a CasoResponsable
     * @example
     * // Get one CasoResponsable
     * const casoResponsable = await prisma.casoResponsable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CasoResponsableFindFirstOrThrowArgs>(args?: SelectSubset<T, CasoResponsableFindFirstOrThrowArgs<ExtArgs>>): Prisma__CasoResponsableClient<$Result.GetResult<Prisma.$CasoResponsablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CasoResponsables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasoResponsableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CasoResponsables
     * const casoResponsables = await prisma.casoResponsable.findMany()
     * 
     * // Get first 10 CasoResponsables
     * const casoResponsables = await prisma.casoResponsable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const casoResponsableWithIdOnly = await prisma.casoResponsable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CasoResponsableFindManyArgs>(args?: SelectSubset<T, CasoResponsableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasoResponsablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CasoResponsable.
     * @param {CasoResponsableCreateArgs} args - Arguments to create a CasoResponsable.
     * @example
     * // Create one CasoResponsable
     * const CasoResponsable = await prisma.casoResponsable.create({
     *   data: {
     *     // ... data to create a CasoResponsable
     *   }
     * })
     * 
     */
    create<T extends CasoResponsableCreateArgs>(args: SelectSubset<T, CasoResponsableCreateArgs<ExtArgs>>): Prisma__CasoResponsableClient<$Result.GetResult<Prisma.$CasoResponsablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CasoResponsables.
     * @param {CasoResponsableCreateManyArgs} args - Arguments to create many CasoResponsables.
     * @example
     * // Create many CasoResponsables
     * const casoResponsable = await prisma.casoResponsable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CasoResponsableCreateManyArgs>(args?: SelectSubset<T, CasoResponsableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CasoResponsables and returns the data saved in the database.
     * @param {CasoResponsableCreateManyAndReturnArgs} args - Arguments to create many CasoResponsables.
     * @example
     * // Create many CasoResponsables
     * const casoResponsable = await prisma.casoResponsable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CasoResponsables and only return the `id`
     * const casoResponsableWithIdOnly = await prisma.casoResponsable.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CasoResponsableCreateManyAndReturnArgs>(args?: SelectSubset<T, CasoResponsableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasoResponsablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CasoResponsable.
     * @param {CasoResponsableDeleteArgs} args - Arguments to delete one CasoResponsable.
     * @example
     * // Delete one CasoResponsable
     * const CasoResponsable = await prisma.casoResponsable.delete({
     *   where: {
     *     // ... filter to delete one CasoResponsable
     *   }
     * })
     * 
     */
    delete<T extends CasoResponsableDeleteArgs>(args: SelectSubset<T, CasoResponsableDeleteArgs<ExtArgs>>): Prisma__CasoResponsableClient<$Result.GetResult<Prisma.$CasoResponsablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CasoResponsable.
     * @param {CasoResponsableUpdateArgs} args - Arguments to update one CasoResponsable.
     * @example
     * // Update one CasoResponsable
     * const casoResponsable = await prisma.casoResponsable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CasoResponsableUpdateArgs>(args: SelectSubset<T, CasoResponsableUpdateArgs<ExtArgs>>): Prisma__CasoResponsableClient<$Result.GetResult<Prisma.$CasoResponsablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CasoResponsables.
     * @param {CasoResponsableDeleteManyArgs} args - Arguments to filter CasoResponsables to delete.
     * @example
     * // Delete a few CasoResponsables
     * const { count } = await prisma.casoResponsable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CasoResponsableDeleteManyArgs>(args?: SelectSubset<T, CasoResponsableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CasoResponsables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasoResponsableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CasoResponsables
     * const casoResponsable = await prisma.casoResponsable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CasoResponsableUpdateManyArgs>(args: SelectSubset<T, CasoResponsableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CasoResponsables and returns the data updated in the database.
     * @param {CasoResponsableUpdateManyAndReturnArgs} args - Arguments to update many CasoResponsables.
     * @example
     * // Update many CasoResponsables
     * const casoResponsable = await prisma.casoResponsable.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CasoResponsables and only return the `id`
     * const casoResponsableWithIdOnly = await prisma.casoResponsable.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CasoResponsableUpdateManyAndReturnArgs>(args: SelectSubset<T, CasoResponsableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasoResponsablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CasoResponsable.
     * @param {CasoResponsableUpsertArgs} args - Arguments to update or create a CasoResponsable.
     * @example
     * // Update or create a CasoResponsable
     * const casoResponsable = await prisma.casoResponsable.upsert({
     *   create: {
     *     // ... data to create a CasoResponsable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CasoResponsable we want to update
     *   }
     * })
     */
    upsert<T extends CasoResponsableUpsertArgs>(args: SelectSubset<T, CasoResponsableUpsertArgs<ExtArgs>>): Prisma__CasoResponsableClient<$Result.GetResult<Prisma.$CasoResponsablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CasoResponsables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasoResponsableCountArgs} args - Arguments to filter CasoResponsables to count.
     * @example
     * // Count the number of CasoResponsables
     * const count = await prisma.casoResponsable.count({
     *   where: {
     *     // ... the filter for the CasoResponsables we want to count
     *   }
     * })
    **/
    count<T extends CasoResponsableCountArgs>(
      args?: Subset<T, CasoResponsableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CasoResponsableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CasoResponsable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasoResponsableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CasoResponsableAggregateArgs>(args: Subset<T, CasoResponsableAggregateArgs>): Prisma.PrismaPromise<GetCasoResponsableAggregateType<T>>

    /**
     * Group by CasoResponsable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasoResponsableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CasoResponsableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CasoResponsableGroupByArgs['orderBy'] }
        : { orderBy?: CasoResponsableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CasoResponsableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCasoResponsableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CasoResponsable model
   */
  readonly fields: CasoResponsableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CasoResponsable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CasoResponsableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    caso<T extends CasoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CasoDefaultArgs<ExtArgs>>): Prisma__CasoClient<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CasoResponsable model
   */
  interface CasoResponsableFieldRefs {
    readonly id: FieldRef<"CasoResponsable", 'Int'>
    readonly casoId: FieldRef<"CasoResponsable", 'Int'>
    readonly usuarioId: FieldRef<"CasoResponsable", 'Int'>
    readonly esPrincipal: FieldRef<"CasoResponsable", 'Boolean'>
    readonly createdAt: FieldRef<"CasoResponsable", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CasoResponsable findUnique
   */
  export type CasoResponsableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasoResponsable
     */
    select?: CasoResponsableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasoResponsable
     */
    omit?: CasoResponsableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoResponsableInclude<ExtArgs> | null
    /**
     * Filter, which CasoResponsable to fetch.
     */
    where: CasoResponsableWhereUniqueInput
  }

  /**
   * CasoResponsable findUniqueOrThrow
   */
  export type CasoResponsableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasoResponsable
     */
    select?: CasoResponsableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasoResponsable
     */
    omit?: CasoResponsableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoResponsableInclude<ExtArgs> | null
    /**
     * Filter, which CasoResponsable to fetch.
     */
    where: CasoResponsableWhereUniqueInput
  }

  /**
   * CasoResponsable findFirst
   */
  export type CasoResponsableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasoResponsable
     */
    select?: CasoResponsableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasoResponsable
     */
    omit?: CasoResponsableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoResponsableInclude<ExtArgs> | null
    /**
     * Filter, which CasoResponsable to fetch.
     */
    where?: CasoResponsableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasoResponsables to fetch.
     */
    orderBy?: CasoResponsableOrderByWithRelationInput | CasoResponsableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CasoResponsables.
     */
    cursor?: CasoResponsableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasoResponsables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasoResponsables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CasoResponsables.
     */
    distinct?: CasoResponsableScalarFieldEnum | CasoResponsableScalarFieldEnum[]
  }

  /**
   * CasoResponsable findFirstOrThrow
   */
  export type CasoResponsableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasoResponsable
     */
    select?: CasoResponsableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasoResponsable
     */
    omit?: CasoResponsableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoResponsableInclude<ExtArgs> | null
    /**
     * Filter, which CasoResponsable to fetch.
     */
    where?: CasoResponsableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasoResponsables to fetch.
     */
    orderBy?: CasoResponsableOrderByWithRelationInput | CasoResponsableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CasoResponsables.
     */
    cursor?: CasoResponsableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasoResponsables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasoResponsables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CasoResponsables.
     */
    distinct?: CasoResponsableScalarFieldEnum | CasoResponsableScalarFieldEnum[]
  }

  /**
   * CasoResponsable findMany
   */
  export type CasoResponsableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasoResponsable
     */
    select?: CasoResponsableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasoResponsable
     */
    omit?: CasoResponsableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoResponsableInclude<ExtArgs> | null
    /**
     * Filter, which CasoResponsables to fetch.
     */
    where?: CasoResponsableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasoResponsables to fetch.
     */
    orderBy?: CasoResponsableOrderByWithRelationInput | CasoResponsableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CasoResponsables.
     */
    cursor?: CasoResponsableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasoResponsables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasoResponsables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CasoResponsables.
     */
    distinct?: CasoResponsableScalarFieldEnum | CasoResponsableScalarFieldEnum[]
  }

  /**
   * CasoResponsable create
   */
  export type CasoResponsableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasoResponsable
     */
    select?: CasoResponsableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasoResponsable
     */
    omit?: CasoResponsableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoResponsableInclude<ExtArgs> | null
    /**
     * The data needed to create a CasoResponsable.
     */
    data: XOR<CasoResponsableCreateInput, CasoResponsableUncheckedCreateInput>
  }

  /**
   * CasoResponsable createMany
   */
  export type CasoResponsableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CasoResponsables.
     */
    data: CasoResponsableCreateManyInput | CasoResponsableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CasoResponsable createManyAndReturn
   */
  export type CasoResponsableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasoResponsable
     */
    select?: CasoResponsableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CasoResponsable
     */
    omit?: CasoResponsableOmit<ExtArgs> | null
    /**
     * The data used to create many CasoResponsables.
     */
    data: CasoResponsableCreateManyInput | CasoResponsableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoResponsableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CasoResponsable update
   */
  export type CasoResponsableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasoResponsable
     */
    select?: CasoResponsableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasoResponsable
     */
    omit?: CasoResponsableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoResponsableInclude<ExtArgs> | null
    /**
     * The data needed to update a CasoResponsable.
     */
    data: XOR<CasoResponsableUpdateInput, CasoResponsableUncheckedUpdateInput>
    /**
     * Choose, which CasoResponsable to update.
     */
    where: CasoResponsableWhereUniqueInput
  }

  /**
   * CasoResponsable updateMany
   */
  export type CasoResponsableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CasoResponsables.
     */
    data: XOR<CasoResponsableUpdateManyMutationInput, CasoResponsableUncheckedUpdateManyInput>
    /**
     * Filter which CasoResponsables to update
     */
    where?: CasoResponsableWhereInput
    /**
     * Limit how many CasoResponsables to update.
     */
    limit?: number
  }

  /**
   * CasoResponsable updateManyAndReturn
   */
  export type CasoResponsableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasoResponsable
     */
    select?: CasoResponsableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CasoResponsable
     */
    omit?: CasoResponsableOmit<ExtArgs> | null
    /**
     * The data used to update CasoResponsables.
     */
    data: XOR<CasoResponsableUpdateManyMutationInput, CasoResponsableUncheckedUpdateManyInput>
    /**
     * Filter which CasoResponsables to update
     */
    where?: CasoResponsableWhereInput
    /**
     * Limit how many CasoResponsables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoResponsableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CasoResponsable upsert
   */
  export type CasoResponsableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasoResponsable
     */
    select?: CasoResponsableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasoResponsable
     */
    omit?: CasoResponsableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoResponsableInclude<ExtArgs> | null
    /**
     * The filter to search for the CasoResponsable to update in case it exists.
     */
    where: CasoResponsableWhereUniqueInput
    /**
     * In case the CasoResponsable found by the `where` argument doesn't exist, create a new CasoResponsable with this data.
     */
    create: XOR<CasoResponsableCreateInput, CasoResponsableUncheckedCreateInput>
    /**
     * In case the CasoResponsable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CasoResponsableUpdateInput, CasoResponsableUncheckedUpdateInput>
  }

  /**
   * CasoResponsable delete
   */
  export type CasoResponsableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasoResponsable
     */
    select?: CasoResponsableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasoResponsable
     */
    omit?: CasoResponsableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoResponsableInclude<ExtArgs> | null
    /**
     * Filter which CasoResponsable to delete.
     */
    where: CasoResponsableWhereUniqueInput
  }

  /**
   * CasoResponsable deleteMany
   */
  export type CasoResponsableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CasoResponsables to delete
     */
    where?: CasoResponsableWhereInput
    /**
     * Limit how many CasoResponsables to delete.
     */
    limit?: number
  }

  /**
   * CasoResponsable without action
   */
  export type CasoResponsableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasoResponsable
     */
    select?: CasoResponsableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CasoResponsable
     */
    omit?: CasoResponsableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoResponsableInclude<ExtArgs> | null
  }


  /**
   * Model Audiencia
   */

  export type AggregateAudiencia = {
    _count: AudienciaCountAggregateOutputType | null
    _avg: AudienciaAvgAggregateOutputType | null
    _sum: AudienciaSumAggregateOutputType | null
    _min: AudienciaMinAggregateOutputType | null
    _max: AudienciaMaxAggregateOutputType | null
  }

  export type AudienciaAvgAggregateOutputType = {
    id: number | null
    casoId: number | null
    usuarioId: number | null
  }

  export type AudienciaSumAggregateOutputType = {
    id: number | null
    casoId: number | null
    usuarioId: number | null
  }

  export type AudienciaMinAggregateOutputType = {
    id: number | null
    fecha: Date | null
    lugar: string | null
    estado: $Enums.EstadoAudiencia | null
    observaciones: string | null
    casoId: number | null
    usuarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AudienciaMaxAggregateOutputType = {
    id: number | null
    fecha: Date | null
    lugar: string | null
    estado: $Enums.EstadoAudiencia | null
    observaciones: string | null
    casoId: number | null
    usuarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AudienciaCountAggregateOutputType = {
    id: number
    fecha: number
    lugar: number
    estado: number
    observaciones: number
    casoId: number
    usuarioId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AudienciaAvgAggregateInputType = {
    id?: true
    casoId?: true
    usuarioId?: true
  }

  export type AudienciaSumAggregateInputType = {
    id?: true
    casoId?: true
    usuarioId?: true
  }

  export type AudienciaMinAggregateInputType = {
    id?: true
    fecha?: true
    lugar?: true
    estado?: true
    observaciones?: true
    casoId?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AudienciaMaxAggregateInputType = {
    id?: true
    fecha?: true
    lugar?: true
    estado?: true
    observaciones?: true
    casoId?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AudienciaCountAggregateInputType = {
    id?: true
    fecha?: true
    lugar?: true
    estado?: true
    observaciones?: true
    casoId?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AudienciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Audiencia to aggregate.
     */
    where?: AudienciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audiencias to fetch.
     */
    orderBy?: AudienciaOrderByWithRelationInput | AudienciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AudienciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audiencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audiencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Audiencias
    **/
    _count?: true | AudienciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AudienciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AudienciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AudienciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AudienciaMaxAggregateInputType
  }

  export type GetAudienciaAggregateType<T extends AudienciaAggregateArgs> = {
        [P in keyof T & keyof AggregateAudiencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudiencia[P]>
      : GetScalarType<T[P], AggregateAudiencia[P]>
  }




  export type AudienciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudienciaWhereInput
    orderBy?: AudienciaOrderByWithAggregationInput | AudienciaOrderByWithAggregationInput[]
    by: AudienciaScalarFieldEnum[] | AudienciaScalarFieldEnum
    having?: AudienciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AudienciaCountAggregateInputType | true
    _avg?: AudienciaAvgAggregateInputType
    _sum?: AudienciaSumAggregateInputType
    _min?: AudienciaMinAggregateInputType
    _max?: AudienciaMaxAggregateInputType
  }

  export type AudienciaGroupByOutputType = {
    id: number
    fecha: Date
    lugar: string
    estado: $Enums.EstadoAudiencia
    observaciones: string | null
    casoId: number
    usuarioId: number
    createdAt: Date
    updatedAt: Date
    _count: AudienciaCountAggregateOutputType | null
    _avg: AudienciaAvgAggregateOutputType | null
    _sum: AudienciaSumAggregateOutputType | null
    _min: AudienciaMinAggregateOutputType | null
    _max: AudienciaMaxAggregateOutputType | null
  }

  type GetAudienciaGroupByPayload<T extends AudienciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AudienciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AudienciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AudienciaGroupByOutputType[P]>
            : GetScalarType<T[P], AudienciaGroupByOutputType[P]>
        }
      >
    >


  export type AudienciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    lugar?: boolean
    estado?: boolean
    observaciones?: boolean
    casoId?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    caso?: boolean | CasoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audiencia"]>

  export type AudienciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    lugar?: boolean
    estado?: boolean
    observaciones?: boolean
    casoId?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    caso?: boolean | CasoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audiencia"]>

  export type AudienciaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    lugar?: boolean
    estado?: boolean
    observaciones?: boolean
    casoId?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    caso?: boolean | CasoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audiencia"]>

  export type AudienciaSelectScalar = {
    id?: boolean
    fecha?: boolean
    lugar?: boolean
    estado?: boolean
    observaciones?: boolean
    casoId?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AudienciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "lugar" | "estado" | "observaciones" | "casoId" | "usuarioId" | "createdAt" | "updatedAt", ExtArgs["result"]["audiencia"]>
  export type AudienciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caso?: boolean | CasoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type AudienciaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caso?: boolean | CasoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type AudienciaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caso?: boolean | CasoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $AudienciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Audiencia"
    objects: {
      caso: Prisma.$CasoPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fecha: Date
      lugar: string
      estado: $Enums.EstadoAudiencia
      observaciones: string | null
      casoId: number
      usuarioId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["audiencia"]>
    composites: {}
  }

  type AudienciaGetPayload<S extends boolean | null | undefined | AudienciaDefaultArgs> = $Result.GetResult<Prisma.$AudienciaPayload, S>

  type AudienciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AudienciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AudienciaCountAggregateInputType | true
    }

  export interface AudienciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Audiencia'], meta: { name: 'Audiencia' } }
    /**
     * Find zero or one Audiencia that matches the filter.
     * @param {AudienciaFindUniqueArgs} args - Arguments to find a Audiencia
     * @example
     * // Get one Audiencia
     * const audiencia = await prisma.audiencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AudienciaFindUniqueArgs>(args: SelectSubset<T, AudienciaFindUniqueArgs<ExtArgs>>): Prisma__AudienciaClient<$Result.GetResult<Prisma.$AudienciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Audiencia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AudienciaFindUniqueOrThrowArgs} args - Arguments to find a Audiencia
     * @example
     * // Get one Audiencia
     * const audiencia = await prisma.audiencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AudienciaFindUniqueOrThrowArgs>(args: SelectSubset<T, AudienciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AudienciaClient<$Result.GetResult<Prisma.$AudienciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audiencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienciaFindFirstArgs} args - Arguments to find a Audiencia
     * @example
     * // Get one Audiencia
     * const audiencia = await prisma.audiencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AudienciaFindFirstArgs>(args?: SelectSubset<T, AudienciaFindFirstArgs<ExtArgs>>): Prisma__AudienciaClient<$Result.GetResult<Prisma.$AudienciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audiencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienciaFindFirstOrThrowArgs} args - Arguments to find a Audiencia
     * @example
     * // Get one Audiencia
     * const audiencia = await prisma.audiencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AudienciaFindFirstOrThrowArgs>(args?: SelectSubset<T, AudienciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AudienciaClient<$Result.GetResult<Prisma.$AudienciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Audiencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audiencias
     * const audiencias = await prisma.audiencia.findMany()
     * 
     * // Get first 10 Audiencias
     * const audiencias = await prisma.audiencia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audienciaWithIdOnly = await prisma.audiencia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AudienciaFindManyArgs>(args?: SelectSubset<T, AudienciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudienciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Audiencia.
     * @param {AudienciaCreateArgs} args - Arguments to create a Audiencia.
     * @example
     * // Create one Audiencia
     * const Audiencia = await prisma.audiencia.create({
     *   data: {
     *     // ... data to create a Audiencia
     *   }
     * })
     * 
     */
    create<T extends AudienciaCreateArgs>(args: SelectSubset<T, AudienciaCreateArgs<ExtArgs>>): Prisma__AudienciaClient<$Result.GetResult<Prisma.$AudienciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Audiencias.
     * @param {AudienciaCreateManyArgs} args - Arguments to create many Audiencias.
     * @example
     * // Create many Audiencias
     * const audiencia = await prisma.audiencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AudienciaCreateManyArgs>(args?: SelectSubset<T, AudienciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Audiencias and returns the data saved in the database.
     * @param {AudienciaCreateManyAndReturnArgs} args - Arguments to create many Audiencias.
     * @example
     * // Create many Audiencias
     * const audiencia = await prisma.audiencia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Audiencias and only return the `id`
     * const audienciaWithIdOnly = await prisma.audiencia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AudienciaCreateManyAndReturnArgs>(args?: SelectSubset<T, AudienciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudienciaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Audiencia.
     * @param {AudienciaDeleteArgs} args - Arguments to delete one Audiencia.
     * @example
     * // Delete one Audiencia
     * const Audiencia = await prisma.audiencia.delete({
     *   where: {
     *     // ... filter to delete one Audiencia
     *   }
     * })
     * 
     */
    delete<T extends AudienciaDeleteArgs>(args: SelectSubset<T, AudienciaDeleteArgs<ExtArgs>>): Prisma__AudienciaClient<$Result.GetResult<Prisma.$AudienciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Audiencia.
     * @param {AudienciaUpdateArgs} args - Arguments to update one Audiencia.
     * @example
     * // Update one Audiencia
     * const audiencia = await prisma.audiencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AudienciaUpdateArgs>(args: SelectSubset<T, AudienciaUpdateArgs<ExtArgs>>): Prisma__AudienciaClient<$Result.GetResult<Prisma.$AudienciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Audiencias.
     * @param {AudienciaDeleteManyArgs} args - Arguments to filter Audiencias to delete.
     * @example
     * // Delete a few Audiencias
     * const { count } = await prisma.audiencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AudienciaDeleteManyArgs>(args?: SelectSubset<T, AudienciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audiencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audiencias
     * const audiencia = await prisma.audiencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AudienciaUpdateManyArgs>(args: SelectSubset<T, AudienciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audiencias and returns the data updated in the database.
     * @param {AudienciaUpdateManyAndReturnArgs} args - Arguments to update many Audiencias.
     * @example
     * // Update many Audiencias
     * const audiencia = await prisma.audiencia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Audiencias and only return the `id`
     * const audienciaWithIdOnly = await prisma.audiencia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AudienciaUpdateManyAndReturnArgs>(args: SelectSubset<T, AudienciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudienciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Audiencia.
     * @param {AudienciaUpsertArgs} args - Arguments to update or create a Audiencia.
     * @example
     * // Update or create a Audiencia
     * const audiencia = await prisma.audiencia.upsert({
     *   create: {
     *     // ... data to create a Audiencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audiencia we want to update
     *   }
     * })
     */
    upsert<T extends AudienciaUpsertArgs>(args: SelectSubset<T, AudienciaUpsertArgs<ExtArgs>>): Prisma__AudienciaClient<$Result.GetResult<Prisma.$AudienciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Audiencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienciaCountArgs} args - Arguments to filter Audiencias to count.
     * @example
     * // Count the number of Audiencias
     * const count = await prisma.audiencia.count({
     *   where: {
     *     // ... the filter for the Audiencias we want to count
     *   }
     * })
    **/
    count<T extends AudienciaCountArgs>(
      args?: Subset<T, AudienciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AudienciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audiencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AudienciaAggregateArgs>(args: Subset<T, AudienciaAggregateArgs>): Prisma.PrismaPromise<GetAudienciaAggregateType<T>>

    /**
     * Group by Audiencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienciaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AudienciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AudienciaGroupByArgs['orderBy'] }
        : { orderBy?: AudienciaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AudienciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudienciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Audiencia model
   */
  readonly fields: AudienciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Audiencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AudienciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    caso<T extends CasoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CasoDefaultArgs<ExtArgs>>): Prisma__CasoClient<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Audiencia model
   */
  interface AudienciaFieldRefs {
    readonly id: FieldRef<"Audiencia", 'Int'>
    readonly fecha: FieldRef<"Audiencia", 'DateTime'>
    readonly lugar: FieldRef<"Audiencia", 'String'>
    readonly estado: FieldRef<"Audiencia", 'EstadoAudiencia'>
    readonly observaciones: FieldRef<"Audiencia", 'String'>
    readonly casoId: FieldRef<"Audiencia", 'Int'>
    readonly usuarioId: FieldRef<"Audiencia", 'Int'>
    readonly createdAt: FieldRef<"Audiencia", 'DateTime'>
    readonly updatedAt: FieldRef<"Audiencia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Audiencia findUnique
   */
  export type AudienciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audiencia
     */
    select?: AudienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audiencia
     */
    omit?: AudienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienciaInclude<ExtArgs> | null
    /**
     * Filter, which Audiencia to fetch.
     */
    where: AudienciaWhereUniqueInput
  }

  /**
   * Audiencia findUniqueOrThrow
   */
  export type AudienciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audiencia
     */
    select?: AudienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audiencia
     */
    omit?: AudienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienciaInclude<ExtArgs> | null
    /**
     * Filter, which Audiencia to fetch.
     */
    where: AudienciaWhereUniqueInput
  }

  /**
   * Audiencia findFirst
   */
  export type AudienciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audiencia
     */
    select?: AudienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audiencia
     */
    omit?: AudienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienciaInclude<ExtArgs> | null
    /**
     * Filter, which Audiencia to fetch.
     */
    where?: AudienciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audiencias to fetch.
     */
    orderBy?: AudienciaOrderByWithRelationInput | AudienciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Audiencias.
     */
    cursor?: AudienciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audiencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audiencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Audiencias.
     */
    distinct?: AudienciaScalarFieldEnum | AudienciaScalarFieldEnum[]
  }

  /**
   * Audiencia findFirstOrThrow
   */
  export type AudienciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audiencia
     */
    select?: AudienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audiencia
     */
    omit?: AudienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienciaInclude<ExtArgs> | null
    /**
     * Filter, which Audiencia to fetch.
     */
    where?: AudienciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audiencias to fetch.
     */
    orderBy?: AudienciaOrderByWithRelationInput | AudienciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Audiencias.
     */
    cursor?: AudienciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audiencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audiencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Audiencias.
     */
    distinct?: AudienciaScalarFieldEnum | AudienciaScalarFieldEnum[]
  }

  /**
   * Audiencia findMany
   */
  export type AudienciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audiencia
     */
    select?: AudienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audiencia
     */
    omit?: AudienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienciaInclude<ExtArgs> | null
    /**
     * Filter, which Audiencias to fetch.
     */
    where?: AudienciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audiencias to fetch.
     */
    orderBy?: AudienciaOrderByWithRelationInput | AudienciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Audiencias.
     */
    cursor?: AudienciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audiencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audiencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Audiencias.
     */
    distinct?: AudienciaScalarFieldEnum | AudienciaScalarFieldEnum[]
  }

  /**
   * Audiencia create
   */
  export type AudienciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audiencia
     */
    select?: AudienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audiencia
     */
    omit?: AudienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienciaInclude<ExtArgs> | null
    /**
     * The data needed to create a Audiencia.
     */
    data: XOR<AudienciaCreateInput, AudienciaUncheckedCreateInput>
  }

  /**
   * Audiencia createMany
   */
  export type AudienciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Audiencias.
     */
    data: AudienciaCreateManyInput | AudienciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Audiencia createManyAndReturn
   */
  export type AudienciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audiencia
     */
    select?: AudienciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Audiencia
     */
    omit?: AudienciaOmit<ExtArgs> | null
    /**
     * The data used to create many Audiencias.
     */
    data: AudienciaCreateManyInput | AudienciaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienciaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Audiencia update
   */
  export type AudienciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audiencia
     */
    select?: AudienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audiencia
     */
    omit?: AudienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienciaInclude<ExtArgs> | null
    /**
     * The data needed to update a Audiencia.
     */
    data: XOR<AudienciaUpdateInput, AudienciaUncheckedUpdateInput>
    /**
     * Choose, which Audiencia to update.
     */
    where: AudienciaWhereUniqueInput
  }

  /**
   * Audiencia updateMany
   */
  export type AudienciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Audiencias.
     */
    data: XOR<AudienciaUpdateManyMutationInput, AudienciaUncheckedUpdateManyInput>
    /**
     * Filter which Audiencias to update
     */
    where?: AudienciaWhereInput
    /**
     * Limit how many Audiencias to update.
     */
    limit?: number
  }

  /**
   * Audiencia updateManyAndReturn
   */
  export type AudienciaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audiencia
     */
    select?: AudienciaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Audiencia
     */
    omit?: AudienciaOmit<ExtArgs> | null
    /**
     * The data used to update Audiencias.
     */
    data: XOR<AudienciaUpdateManyMutationInput, AudienciaUncheckedUpdateManyInput>
    /**
     * Filter which Audiencias to update
     */
    where?: AudienciaWhereInput
    /**
     * Limit how many Audiencias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienciaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Audiencia upsert
   */
  export type AudienciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audiencia
     */
    select?: AudienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audiencia
     */
    omit?: AudienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienciaInclude<ExtArgs> | null
    /**
     * The filter to search for the Audiencia to update in case it exists.
     */
    where: AudienciaWhereUniqueInput
    /**
     * In case the Audiencia found by the `where` argument doesn't exist, create a new Audiencia with this data.
     */
    create: XOR<AudienciaCreateInput, AudienciaUncheckedCreateInput>
    /**
     * In case the Audiencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AudienciaUpdateInput, AudienciaUncheckedUpdateInput>
  }

  /**
   * Audiencia delete
   */
  export type AudienciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audiencia
     */
    select?: AudienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audiencia
     */
    omit?: AudienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienciaInclude<ExtArgs> | null
    /**
     * Filter which Audiencia to delete.
     */
    where: AudienciaWhereUniqueInput
  }

  /**
   * Audiencia deleteMany
   */
  export type AudienciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Audiencias to delete
     */
    where?: AudienciaWhereInput
    /**
     * Limit how many Audiencias to delete.
     */
    limit?: number
  }

  /**
   * Audiencia without action
   */
  export type AudienciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audiencia
     */
    select?: AudienciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audiencia
     */
    omit?: AudienciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienciaInclude<ExtArgs> | null
  }


  /**
   * Model Cita
   */

  export type AggregateCita = {
    _count: CitaCountAggregateOutputType | null
    _avg: CitaAvgAggregateOutputType | null
    _sum: CitaSumAggregateOutputType | null
    _min: CitaMinAggregateOutputType | null
    _max: CitaMaxAggregateOutputType | null
  }

  export type CitaAvgAggregateOutputType = {
    id: number | null
    casoId: number | null
    usuarioId: number | null
  }

  export type CitaSumAggregateOutputType = {
    id: number | null
    casoId: number | null
    usuarioId: number | null
  }

  export type CitaMinAggregateOutputType = {
    id: number | null
    fecha: Date | null
    asunto: string | null
    contacto: string | null
    casoId: number | null
    usuarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CitaMaxAggregateOutputType = {
    id: number | null
    fecha: Date | null
    asunto: string | null
    contacto: string | null
    casoId: number | null
    usuarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CitaCountAggregateOutputType = {
    id: number
    fecha: number
    asunto: number
    contacto: number
    casoId: number
    usuarioId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CitaAvgAggregateInputType = {
    id?: true
    casoId?: true
    usuarioId?: true
  }

  export type CitaSumAggregateInputType = {
    id?: true
    casoId?: true
    usuarioId?: true
  }

  export type CitaMinAggregateInputType = {
    id?: true
    fecha?: true
    asunto?: true
    contacto?: true
    casoId?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CitaMaxAggregateInputType = {
    id?: true
    fecha?: true
    asunto?: true
    contacto?: true
    casoId?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CitaCountAggregateInputType = {
    id?: true
    fecha?: true
    asunto?: true
    contacto?: true
    casoId?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CitaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cita to aggregate.
     */
    where?: CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Citas
    **/
    _count?: true | CitaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CitaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CitaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CitaMaxAggregateInputType
  }

  export type GetCitaAggregateType<T extends CitaAggregateArgs> = {
        [P in keyof T & keyof AggregateCita]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCita[P]>
      : GetScalarType<T[P], AggregateCita[P]>
  }




  export type CitaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitaWhereInput
    orderBy?: CitaOrderByWithAggregationInput | CitaOrderByWithAggregationInput[]
    by: CitaScalarFieldEnum[] | CitaScalarFieldEnum
    having?: CitaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CitaCountAggregateInputType | true
    _avg?: CitaAvgAggregateInputType
    _sum?: CitaSumAggregateInputType
    _min?: CitaMinAggregateInputType
    _max?: CitaMaxAggregateInputType
  }

  export type CitaGroupByOutputType = {
    id: number
    fecha: Date
    asunto: string
    contacto: string
    casoId: number | null
    usuarioId: number
    createdAt: Date
    updatedAt: Date
    _count: CitaCountAggregateOutputType | null
    _avg: CitaAvgAggregateOutputType | null
    _sum: CitaSumAggregateOutputType | null
    _min: CitaMinAggregateOutputType | null
    _max: CitaMaxAggregateOutputType | null
  }

  type GetCitaGroupByPayload<T extends CitaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CitaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CitaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CitaGroupByOutputType[P]>
            : GetScalarType<T[P], CitaGroupByOutputType[P]>
        }
      >
    >


  export type CitaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    asunto?: boolean
    contacto?: boolean
    casoId?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    caso?: boolean | Cita$casoArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cita"]>

  export type CitaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    asunto?: boolean
    contacto?: boolean
    casoId?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    caso?: boolean | Cita$casoArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cita"]>

  export type CitaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    asunto?: boolean
    contacto?: boolean
    casoId?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    caso?: boolean | Cita$casoArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cita"]>

  export type CitaSelectScalar = {
    id?: boolean
    fecha?: boolean
    asunto?: boolean
    contacto?: boolean
    casoId?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CitaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "asunto" | "contacto" | "casoId" | "usuarioId" | "createdAt" | "updatedAt", ExtArgs["result"]["cita"]>
  export type CitaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caso?: boolean | Cita$casoArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type CitaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caso?: boolean | Cita$casoArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type CitaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caso?: boolean | Cita$casoArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $CitaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cita"
    objects: {
      caso: Prisma.$CasoPayload<ExtArgs> | null
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fecha: Date
      asunto: string
      contacto: string
      casoId: number | null
      usuarioId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cita"]>
    composites: {}
  }

  type CitaGetPayload<S extends boolean | null | undefined | CitaDefaultArgs> = $Result.GetResult<Prisma.$CitaPayload, S>

  type CitaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CitaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CitaCountAggregateInputType | true
    }

  export interface CitaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cita'], meta: { name: 'Cita' } }
    /**
     * Find zero or one Cita that matches the filter.
     * @param {CitaFindUniqueArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CitaFindUniqueArgs>(args: SelectSubset<T, CitaFindUniqueArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cita that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CitaFindUniqueOrThrowArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CitaFindUniqueOrThrowArgs>(args: SelectSubset<T, CitaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cita that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaFindFirstArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CitaFindFirstArgs>(args?: SelectSubset<T, CitaFindFirstArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cita that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaFindFirstOrThrowArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CitaFindFirstOrThrowArgs>(args?: SelectSubset<T, CitaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Citas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Citas
     * const citas = await prisma.cita.findMany()
     * 
     * // Get first 10 Citas
     * const citas = await prisma.cita.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const citaWithIdOnly = await prisma.cita.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CitaFindManyArgs>(args?: SelectSubset<T, CitaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cita.
     * @param {CitaCreateArgs} args - Arguments to create a Cita.
     * @example
     * // Create one Cita
     * const Cita = await prisma.cita.create({
     *   data: {
     *     // ... data to create a Cita
     *   }
     * })
     * 
     */
    create<T extends CitaCreateArgs>(args: SelectSubset<T, CitaCreateArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Citas.
     * @param {CitaCreateManyArgs} args - Arguments to create many Citas.
     * @example
     * // Create many Citas
     * const cita = await prisma.cita.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CitaCreateManyArgs>(args?: SelectSubset<T, CitaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Citas and returns the data saved in the database.
     * @param {CitaCreateManyAndReturnArgs} args - Arguments to create many Citas.
     * @example
     * // Create many Citas
     * const cita = await prisma.cita.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Citas and only return the `id`
     * const citaWithIdOnly = await prisma.cita.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CitaCreateManyAndReturnArgs>(args?: SelectSubset<T, CitaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cita.
     * @param {CitaDeleteArgs} args - Arguments to delete one Cita.
     * @example
     * // Delete one Cita
     * const Cita = await prisma.cita.delete({
     *   where: {
     *     // ... filter to delete one Cita
     *   }
     * })
     * 
     */
    delete<T extends CitaDeleteArgs>(args: SelectSubset<T, CitaDeleteArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cita.
     * @param {CitaUpdateArgs} args - Arguments to update one Cita.
     * @example
     * // Update one Cita
     * const cita = await prisma.cita.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CitaUpdateArgs>(args: SelectSubset<T, CitaUpdateArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Citas.
     * @param {CitaDeleteManyArgs} args - Arguments to filter Citas to delete.
     * @example
     * // Delete a few Citas
     * const { count } = await prisma.cita.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CitaDeleteManyArgs>(args?: SelectSubset<T, CitaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Citas
     * const cita = await prisma.cita.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CitaUpdateManyArgs>(args: SelectSubset<T, CitaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Citas and returns the data updated in the database.
     * @param {CitaUpdateManyAndReturnArgs} args - Arguments to update many Citas.
     * @example
     * // Update many Citas
     * const cita = await prisma.cita.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Citas and only return the `id`
     * const citaWithIdOnly = await prisma.cita.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CitaUpdateManyAndReturnArgs>(args: SelectSubset<T, CitaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cita.
     * @param {CitaUpsertArgs} args - Arguments to update or create a Cita.
     * @example
     * // Update or create a Cita
     * const cita = await prisma.cita.upsert({
     *   create: {
     *     // ... data to create a Cita
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cita we want to update
     *   }
     * })
     */
    upsert<T extends CitaUpsertArgs>(args: SelectSubset<T, CitaUpsertArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaCountArgs} args - Arguments to filter Citas to count.
     * @example
     * // Count the number of Citas
     * const count = await prisma.cita.count({
     *   where: {
     *     // ... the filter for the Citas we want to count
     *   }
     * })
    **/
    count<T extends CitaCountArgs>(
      args?: Subset<T, CitaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CitaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CitaAggregateArgs>(args: Subset<T, CitaAggregateArgs>): Prisma.PrismaPromise<GetCitaAggregateType<T>>

    /**
     * Group by Cita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CitaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CitaGroupByArgs['orderBy'] }
        : { orderBy?: CitaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CitaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCitaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cita model
   */
  readonly fields: CitaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cita.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CitaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    caso<T extends Cita$casoArgs<ExtArgs> = {}>(args?: Subset<T, Cita$casoArgs<ExtArgs>>): Prisma__CasoClient<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cita model
   */
  interface CitaFieldRefs {
    readonly id: FieldRef<"Cita", 'Int'>
    readonly fecha: FieldRef<"Cita", 'DateTime'>
    readonly asunto: FieldRef<"Cita", 'String'>
    readonly contacto: FieldRef<"Cita", 'String'>
    readonly casoId: FieldRef<"Cita", 'Int'>
    readonly usuarioId: FieldRef<"Cita", 'Int'>
    readonly createdAt: FieldRef<"Cita", 'DateTime'>
    readonly updatedAt: FieldRef<"Cita", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cita findUnique
   */
  export type CitaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Cita to fetch.
     */
    where: CitaWhereUniqueInput
  }

  /**
   * Cita findUniqueOrThrow
   */
  export type CitaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Cita to fetch.
     */
    where: CitaWhereUniqueInput
  }

  /**
   * Cita findFirst
   */
  export type CitaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Cita to fetch.
     */
    where?: CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Citas.
     */
    cursor?: CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Citas.
     */
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Cita findFirstOrThrow
   */
  export type CitaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Cita to fetch.
     */
    where?: CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Citas.
     */
    cursor?: CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Citas.
     */
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Cita findMany
   */
  export type CitaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Citas to fetch.
     */
    where?: CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Citas.
     */
    cursor?: CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Citas.
     */
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Cita create
   */
  export type CitaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * The data needed to create a Cita.
     */
    data: XOR<CitaCreateInput, CitaUncheckedCreateInput>
  }

  /**
   * Cita createMany
   */
  export type CitaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Citas.
     */
    data: CitaCreateManyInput | CitaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cita createManyAndReturn
   */
  export type CitaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * The data used to create many Citas.
     */
    data: CitaCreateManyInput | CitaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cita update
   */
  export type CitaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * The data needed to update a Cita.
     */
    data: XOR<CitaUpdateInput, CitaUncheckedUpdateInput>
    /**
     * Choose, which Cita to update.
     */
    where: CitaWhereUniqueInput
  }

  /**
   * Cita updateMany
   */
  export type CitaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Citas.
     */
    data: XOR<CitaUpdateManyMutationInput, CitaUncheckedUpdateManyInput>
    /**
     * Filter which Citas to update
     */
    where?: CitaWhereInput
    /**
     * Limit how many Citas to update.
     */
    limit?: number
  }

  /**
   * Cita updateManyAndReturn
   */
  export type CitaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * The data used to update Citas.
     */
    data: XOR<CitaUpdateManyMutationInput, CitaUncheckedUpdateManyInput>
    /**
     * Filter which Citas to update
     */
    where?: CitaWhereInput
    /**
     * Limit how many Citas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cita upsert
   */
  export type CitaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * The filter to search for the Cita to update in case it exists.
     */
    where: CitaWhereUniqueInput
    /**
     * In case the Cita found by the `where` argument doesn't exist, create a new Cita with this data.
     */
    create: XOR<CitaCreateInput, CitaUncheckedCreateInput>
    /**
     * In case the Cita was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CitaUpdateInput, CitaUncheckedUpdateInput>
  }

  /**
   * Cita delete
   */
  export type CitaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter which Cita to delete.
     */
    where: CitaWhereUniqueInput
  }

  /**
   * Cita deleteMany
   */
  export type CitaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Citas to delete
     */
    where?: CitaWhereInput
    /**
     * Limit how many Citas to delete.
     */
    limit?: number
  }

  /**
   * Cita.caso
   */
  export type Cita$casoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
    where?: CasoWhereInput
  }

  /**
   * Cita without action
   */
  export type CitaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
  }


  /**
   * Model Recordatorio
   */

  export type AggregateRecordatorio = {
    _count: RecordatorioCountAggregateOutputType | null
    _avg: RecordatorioAvgAggregateOutputType | null
    _sum: RecordatorioSumAggregateOutputType | null
    _min: RecordatorioMinAggregateOutputType | null
    _max: RecordatorioMaxAggregateOutputType | null
  }

  export type RecordatorioAvgAggregateOutputType = {
    id: number | null
    casoId: number | null
    usuarioId: number | null
  }

  export type RecordatorioSumAggregateOutputType = {
    id: number | null
    casoId: number | null
    usuarioId: number | null
  }

  export type RecordatorioMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    mensaje: string | null
    fechaEnvio: Date | null
    leido: boolean | null
    casoId: number | null
    usuarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecordatorioMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    mensaje: string | null
    fechaEnvio: Date | null
    leido: boolean | null
    casoId: number | null
    usuarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecordatorioCountAggregateOutputType = {
    id: number
    titulo: number
    mensaje: number
    fechaEnvio: number
    leido: number
    casoId: number
    usuarioId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RecordatorioAvgAggregateInputType = {
    id?: true
    casoId?: true
    usuarioId?: true
  }

  export type RecordatorioSumAggregateInputType = {
    id?: true
    casoId?: true
    usuarioId?: true
  }

  export type RecordatorioMinAggregateInputType = {
    id?: true
    titulo?: true
    mensaje?: true
    fechaEnvio?: true
    leido?: true
    casoId?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecordatorioMaxAggregateInputType = {
    id?: true
    titulo?: true
    mensaje?: true
    fechaEnvio?: true
    leido?: true
    casoId?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecordatorioCountAggregateInputType = {
    id?: true
    titulo?: true
    mensaje?: true
    fechaEnvio?: true
    leido?: true
    casoId?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RecordatorioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recordatorio to aggregate.
     */
    where?: RecordatorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recordatorios to fetch.
     */
    orderBy?: RecordatorioOrderByWithRelationInput | RecordatorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecordatorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recordatorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recordatorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recordatorios
    **/
    _count?: true | RecordatorioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecordatorioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecordatorioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecordatorioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecordatorioMaxAggregateInputType
  }

  export type GetRecordatorioAggregateType<T extends RecordatorioAggregateArgs> = {
        [P in keyof T & keyof AggregateRecordatorio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecordatorio[P]>
      : GetScalarType<T[P], AggregateRecordatorio[P]>
  }




  export type RecordatorioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordatorioWhereInput
    orderBy?: RecordatorioOrderByWithAggregationInput | RecordatorioOrderByWithAggregationInput[]
    by: RecordatorioScalarFieldEnum[] | RecordatorioScalarFieldEnum
    having?: RecordatorioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecordatorioCountAggregateInputType | true
    _avg?: RecordatorioAvgAggregateInputType
    _sum?: RecordatorioSumAggregateInputType
    _min?: RecordatorioMinAggregateInputType
    _max?: RecordatorioMaxAggregateInputType
  }

  export type RecordatorioGroupByOutputType = {
    id: number
    titulo: string
    mensaje: string
    fechaEnvio: Date
    leido: boolean
    casoId: number | null
    usuarioId: number
    createdAt: Date
    updatedAt: Date
    _count: RecordatorioCountAggregateOutputType | null
    _avg: RecordatorioAvgAggregateOutputType | null
    _sum: RecordatorioSumAggregateOutputType | null
    _min: RecordatorioMinAggregateOutputType | null
    _max: RecordatorioMaxAggregateOutputType | null
  }

  type GetRecordatorioGroupByPayload<T extends RecordatorioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecordatorioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecordatorioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecordatorioGroupByOutputType[P]>
            : GetScalarType<T[P], RecordatorioGroupByOutputType[P]>
        }
      >
    >


  export type RecordatorioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    mensaje?: boolean
    fechaEnvio?: boolean
    leido?: boolean
    casoId?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    caso?: boolean | Recordatorio$casoArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recordatorio"]>

  export type RecordatorioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    mensaje?: boolean
    fechaEnvio?: boolean
    leido?: boolean
    casoId?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    caso?: boolean | Recordatorio$casoArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recordatorio"]>

  export type RecordatorioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    mensaje?: boolean
    fechaEnvio?: boolean
    leido?: boolean
    casoId?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    caso?: boolean | Recordatorio$casoArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recordatorio"]>

  export type RecordatorioSelectScalar = {
    id?: boolean
    titulo?: boolean
    mensaje?: boolean
    fechaEnvio?: boolean
    leido?: boolean
    casoId?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RecordatorioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "mensaje" | "fechaEnvio" | "leido" | "casoId" | "usuarioId" | "createdAt" | "updatedAt", ExtArgs["result"]["recordatorio"]>
  export type RecordatorioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caso?: boolean | Recordatorio$casoArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type RecordatorioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caso?: boolean | Recordatorio$casoArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type RecordatorioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caso?: boolean | Recordatorio$casoArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $RecordatorioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recordatorio"
    objects: {
      caso: Prisma.$CasoPayload<ExtArgs> | null
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      mensaje: string
      fechaEnvio: Date
      leido: boolean
      casoId: number | null
      usuarioId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["recordatorio"]>
    composites: {}
  }

  type RecordatorioGetPayload<S extends boolean | null | undefined | RecordatorioDefaultArgs> = $Result.GetResult<Prisma.$RecordatorioPayload, S>

  type RecordatorioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecordatorioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecordatorioCountAggregateInputType | true
    }

  export interface RecordatorioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recordatorio'], meta: { name: 'Recordatorio' } }
    /**
     * Find zero or one Recordatorio that matches the filter.
     * @param {RecordatorioFindUniqueArgs} args - Arguments to find a Recordatorio
     * @example
     * // Get one Recordatorio
     * const recordatorio = await prisma.recordatorio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecordatorioFindUniqueArgs>(args: SelectSubset<T, RecordatorioFindUniqueArgs<ExtArgs>>): Prisma__RecordatorioClient<$Result.GetResult<Prisma.$RecordatorioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recordatorio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecordatorioFindUniqueOrThrowArgs} args - Arguments to find a Recordatorio
     * @example
     * // Get one Recordatorio
     * const recordatorio = await prisma.recordatorio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecordatorioFindUniqueOrThrowArgs>(args: SelectSubset<T, RecordatorioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecordatorioClient<$Result.GetResult<Prisma.$RecordatorioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recordatorio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordatorioFindFirstArgs} args - Arguments to find a Recordatorio
     * @example
     * // Get one Recordatorio
     * const recordatorio = await prisma.recordatorio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecordatorioFindFirstArgs>(args?: SelectSubset<T, RecordatorioFindFirstArgs<ExtArgs>>): Prisma__RecordatorioClient<$Result.GetResult<Prisma.$RecordatorioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recordatorio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordatorioFindFirstOrThrowArgs} args - Arguments to find a Recordatorio
     * @example
     * // Get one Recordatorio
     * const recordatorio = await prisma.recordatorio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecordatorioFindFirstOrThrowArgs>(args?: SelectSubset<T, RecordatorioFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecordatorioClient<$Result.GetResult<Prisma.$RecordatorioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recordatorios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordatorioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recordatorios
     * const recordatorios = await prisma.recordatorio.findMany()
     * 
     * // Get first 10 Recordatorios
     * const recordatorios = await prisma.recordatorio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recordatorioWithIdOnly = await prisma.recordatorio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecordatorioFindManyArgs>(args?: SelectSubset<T, RecordatorioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordatorioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recordatorio.
     * @param {RecordatorioCreateArgs} args - Arguments to create a Recordatorio.
     * @example
     * // Create one Recordatorio
     * const Recordatorio = await prisma.recordatorio.create({
     *   data: {
     *     // ... data to create a Recordatorio
     *   }
     * })
     * 
     */
    create<T extends RecordatorioCreateArgs>(args: SelectSubset<T, RecordatorioCreateArgs<ExtArgs>>): Prisma__RecordatorioClient<$Result.GetResult<Prisma.$RecordatorioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recordatorios.
     * @param {RecordatorioCreateManyArgs} args - Arguments to create many Recordatorios.
     * @example
     * // Create many Recordatorios
     * const recordatorio = await prisma.recordatorio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecordatorioCreateManyArgs>(args?: SelectSubset<T, RecordatorioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recordatorios and returns the data saved in the database.
     * @param {RecordatorioCreateManyAndReturnArgs} args - Arguments to create many Recordatorios.
     * @example
     * // Create many Recordatorios
     * const recordatorio = await prisma.recordatorio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recordatorios and only return the `id`
     * const recordatorioWithIdOnly = await prisma.recordatorio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecordatorioCreateManyAndReturnArgs>(args?: SelectSubset<T, RecordatorioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordatorioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recordatorio.
     * @param {RecordatorioDeleteArgs} args - Arguments to delete one Recordatorio.
     * @example
     * // Delete one Recordatorio
     * const Recordatorio = await prisma.recordatorio.delete({
     *   where: {
     *     // ... filter to delete one Recordatorio
     *   }
     * })
     * 
     */
    delete<T extends RecordatorioDeleteArgs>(args: SelectSubset<T, RecordatorioDeleteArgs<ExtArgs>>): Prisma__RecordatorioClient<$Result.GetResult<Prisma.$RecordatorioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recordatorio.
     * @param {RecordatorioUpdateArgs} args - Arguments to update one Recordatorio.
     * @example
     * // Update one Recordatorio
     * const recordatorio = await prisma.recordatorio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecordatorioUpdateArgs>(args: SelectSubset<T, RecordatorioUpdateArgs<ExtArgs>>): Prisma__RecordatorioClient<$Result.GetResult<Prisma.$RecordatorioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recordatorios.
     * @param {RecordatorioDeleteManyArgs} args - Arguments to filter Recordatorios to delete.
     * @example
     * // Delete a few Recordatorios
     * const { count } = await prisma.recordatorio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecordatorioDeleteManyArgs>(args?: SelectSubset<T, RecordatorioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recordatorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordatorioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recordatorios
     * const recordatorio = await prisma.recordatorio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecordatorioUpdateManyArgs>(args: SelectSubset<T, RecordatorioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recordatorios and returns the data updated in the database.
     * @param {RecordatorioUpdateManyAndReturnArgs} args - Arguments to update many Recordatorios.
     * @example
     * // Update many Recordatorios
     * const recordatorio = await prisma.recordatorio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recordatorios and only return the `id`
     * const recordatorioWithIdOnly = await prisma.recordatorio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecordatorioUpdateManyAndReturnArgs>(args: SelectSubset<T, RecordatorioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordatorioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recordatorio.
     * @param {RecordatorioUpsertArgs} args - Arguments to update or create a Recordatorio.
     * @example
     * // Update or create a Recordatorio
     * const recordatorio = await prisma.recordatorio.upsert({
     *   create: {
     *     // ... data to create a Recordatorio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recordatorio we want to update
     *   }
     * })
     */
    upsert<T extends RecordatorioUpsertArgs>(args: SelectSubset<T, RecordatorioUpsertArgs<ExtArgs>>): Prisma__RecordatorioClient<$Result.GetResult<Prisma.$RecordatorioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recordatorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordatorioCountArgs} args - Arguments to filter Recordatorios to count.
     * @example
     * // Count the number of Recordatorios
     * const count = await prisma.recordatorio.count({
     *   where: {
     *     // ... the filter for the Recordatorios we want to count
     *   }
     * })
    **/
    count<T extends RecordatorioCountArgs>(
      args?: Subset<T, RecordatorioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecordatorioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recordatorio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordatorioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecordatorioAggregateArgs>(args: Subset<T, RecordatorioAggregateArgs>): Prisma.PrismaPromise<GetRecordatorioAggregateType<T>>

    /**
     * Group by Recordatorio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordatorioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecordatorioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecordatorioGroupByArgs['orderBy'] }
        : { orderBy?: RecordatorioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecordatorioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecordatorioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recordatorio model
   */
  readonly fields: RecordatorioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recordatorio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecordatorioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    caso<T extends Recordatorio$casoArgs<ExtArgs> = {}>(args?: Subset<T, Recordatorio$casoArgs<ExtArgs>>): Prisma__CasoClient<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recordatorio model
   */
  interface RecordatorioFieldRefs {
    readonly id: FieldRef<"Recordatorio", 'Int'>
    readonly titulo: FieldRef<"Recordatorio", 'String'>
    readonly mensaje: FieldRef<"Recordatorio", 'String'>
    readonly fechaEnvio: FieldRef<"Recordatorio", 'DateTime'>
    readonly leido: FieldRef<"Recordatorio", 'Boolean'>
    readonly casoId: FieldRef<"Recordatorio", 'Int'>
    readonly usuarioId: FieldRef<"Recordatorio", 'Int'>
    readonly createdAt: FieldRef<"Recordatorio", 'DateTime'>
    readonly updatedAt: FieldRef<"Recordatorio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recordatorio findUnique
   */
  export type RecordatorioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recordatorio
     */
    select?: RecordatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recordatorio
     */
    omit?: RecordatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordatorioInclude<ExtArgs> | null
    /**
     * Filter, which Recordatorio to fetch.
     */
    where: RecordatorioWhereUniqueInput
  }

  /**
   * Recordatorio findUniqueOrThrow
   */
  export type RecordatorioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recordatorio
     */
    select?: RecordatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recordatorio
     */
    omit?: RecordatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordatorioInclude<ExtArgs> | null
    /**
     * Filter, which Recordatorio to fetch.
     */
    where: RecordatorioWhereUniqueInput
  }

  /**
   * Recordatorio findFirst
   */
  export type RecordatorioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recordatorio
     */
    select?: RecordatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recordatorio
     */
    omit?: RecordatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordatorioInclude<ExtArgs> | null
    /**
     * Filter, which Recordatorio to fetch.
     */
    where?: RecordatorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recordatorios to fetch.
     */
    orderBy?: RecordatorioOrderByWithRelationInput | RecordatorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recordatorios.
     */
    cursor?: RecordatorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recordatorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recordatorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recordatorios.
     */
    distinct?: RecordatorioScalarFieldEnum | RecordatorioScalarFieldEnum[]
  }

  /**
   * Recordatorio findFirstOrThrow
   */
  export type RecordatorioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recordatorio
     */
    select?: RecordatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recordatorio
     */
    omit?: RecordatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordatorioInclude<ExtArgs> | null
    /**
     * Filter, which Recordatorio to fetch.
     */
    where?: RecordatorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recordatorios to fetch.
     */
    orderBy?: RecordatorioOrderByWithRelationInput | RecordatorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recordatorios.
     */
    cursor?: RecordatorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recordatorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recordatorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recordatorios.
     */
    distinct?: RecordatorioScalarFieldEnum | RecordatorioScalarFieldEnum[]
  }

  /**
   * Recordatorio findMany
   */
  export type RecordatorioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recordatorio
     */
    select?: RecordatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recordatorio
     */
    omit?: RecordatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordatorioInclude<ExtArgs> | null
    /**
     * Filter, which Recordatorios to fetch.
     */
    where?: RecordatorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recordatorios to fetch.
     */
    orderBy?: RecordatorioOrderByWithRelationInput | RecordatorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recordatorios.
     */
    cursor?: RecordatorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recordatorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recordatorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recordatorios.
     */
    distinct?: RecordatorioScalarFieldEnum | RecordatorioScalarFieldEnum[]
  }

  /**
   * Recordatorio create
   */
  export type RecordatorioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recordatorio
     */
    select?: RecordatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recordatorio
     */
    omit?: RecordatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordatorioInclude<ExtArgs> | null
    /**
     * The data needed to create a Recordatorio.
     */
    data: XOR<RecordatorioCreateInput, RecordatorioUncheckedCreateInput>
  }

  /**
   * Recordatorio createMany
   */
  export type RecordatorioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recordatorios.
     */
    data: RecordatorioCreateManyInput | RecordatorioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recordatorio createManyAndReturn
   */
  export type RecordatorioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recordatorio
     */
    select?: RecordatorioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recordatorio
     */
    omit?: RecordatorioOmit<ExtArgs> | null
    /**
     * The data used to create many Recordatorios.
     */
    data: RecordatorioCreateManyInput | RecordatorioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordatorioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recordatorio update
   */
  export type RecordatorioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recordatorio
     */
    select?: RecordatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recordatorio
     */
    omit?: RecordatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordatorioInclude<ExtArgs> | null
    /**
     * The data needed to update a Recordatorio.
     */
    data: XOR<RecordatorioUpdateInput, RecordatorioUncheckedUpdateInput>
    /**
     * Choose, which Recordatorio to update.
     */
    where: RecordatorioWhereUniqueInput
  }

  /**
   * Recordatorio updateMany
   */
  export type RecordatorioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recordatorios.
     */
    data: XOR<RecordatorioUpdateManyMutationInput, RecordatorioUncheckedUpdateManyInput>
    /**
     * Filter which Recordatorios to update
     */
    where?: RecordatorioWhereInput
    /**
     * Limit how many Recordatorios to update.
     */
    limit?: number
  }

  /**
   * Recordatorio updateManyAndReturn
   */
  export type RecordatorioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recordatorio
     */
    select?: RecordatorioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recordatorio
     */
    omit?: RecordatorioOmit<ExtArgs> | null
    /**
     * The data used to update Recordatorios.
     */
    data: XOR<RecordatorioUpdateManyMutationInput, RecordatorioUncheckedUpdateManyInput>
    /**
     * Filter which Recordatorios to update
     */
    where?: RecordatorioWhereInput
    /**
     * Limit how many Recordatorios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordatorioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recordatorio upsert
   */
  export type RecordatorioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recordatorio
     */
    select?: RecordatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recordatorio
     */
    omit?: RecordatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordatorioInclude<ExtArgs> | null
    /**
     * The filter to search for the Recordatorio to update in case it exists.
     */
    where: RecordatorioWhereUniqueInput
    /**
     * In case the Recordatorio found by the `where` argument doesn't exist, create a new Recordatorio with this data.
     */
    create: XOR<RecordatorioCreateInput, RecordatorioUncheckedCreateInput>
    /**
     * In case the Recordatorio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecordatorioUpdateInput, RecordatorioUncheckedUpdateInput>
  }

  /**
   * Recordatorio delete
   */
  export type RecordatorioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recordatorio
     */
    select?: RecordatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recordatorio
     */
    omit?: RecordatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordatorioInclude<ExtArgs> | null
    /**
     * Filter which Recordatorio to delete.
     */
    where: RecordatorioWhereUniqueInput
  }

  /**
   * Recordatorio deleteMany
   */
  export type RecordatorioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recordatorios to delete
     */
    where?: RecordatorioWhereInput
    /**
     * Limit how many Recordatorios to delete.
     */
    limit?: number
  }

  /**
   * Recordatorio.caso
   */
  export type Recordatorio$casoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
    where?: CasoWhereInput
  }

  /**
   * Recordatorio without action
   */
  export type RecordatorioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recordatorio
     */
    select?: RecordatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recordatorio
     */
    omit?: RecordatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordatorioInclude<ExtArgs> | null
  }


  /**
   * Model Reunion
   */

  export type AggregateReunion = {
    _count: ReunionCountAggregateOutputType | null
    _avg: ReunionAvgAggregateOutputType | null
    _sum: ReunionSumAggregateOutputType | null
    _min: ReunionMinAggregateOutputType | null
    _max: ReunionMaxAggregateOutputType | null
  }

  export type ReunionAvgAggregateOutputType = {
    id: number | null
    casoId: number | null
    creadorId: number | null
  }

  export type ReunionSumAggregateOutputType = {
    id: number | null
    casoId: number | null
    creadorId: number | null
  }

  export type ReunionMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    fecha: Date | null
    lugar: string | null
    observaciones: string | null
    casoId: number | null
    creadorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReunionMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    fecha: Date | null
    lugar: string | null
    observaciones: string | null
    casoId: number | null
    creadorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReunionCountAggregateOutputType = {
    id: number
    titulo: number
    fecha: number
    lugar: number
    observaciones: number
    casoId: number
    creadorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReunionAvgAggregateInputType = {
    id?: true
    casoId?: true
    creadorId?: true
  }

  export type ReunionSumAggregateInputType = {
    id?: true
    casoId?: true
    creadorId?: true
  }

  export type ReunionMinAggregateInputType = {
    id?: true
    titulo?: true
    fecha?: true
    lugar?: true
    observaciones?: true
    casoId?: true
    creadorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReunionMaxAggregateInputType = {
    id?: true
    titulo?: true
    fecha?: true
    lugar?: true
    observaciones?: true
    casoId?: true
    creadorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReunionCountAggregateInputType = {
    id?: true
    titulo?: true
    fecha?: true
    lugar?: true
    observaciones?: true
    casoId?: true
    creadorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReunionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reunion to aggregate.
     */
    where?: ReunionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reunions to fetch.
     */
    orderBy?: ReunionOrderByWithRelationInput | ReunionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReunionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reunions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reunions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reunions
    **/
    _count?: true | ReunionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReunionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReunionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReunionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReunionMaxAggregateInputType
  }

  export type GetReunionAggregateType<T extends ReunionAggregateArgs> = {
        [P in keyof T & keyof AggregateReunion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReunion[P]>
      : GetScalarType<T[P], AggregateReunion[P]>
  }




  export type ReunionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReunionWhereInput
    orderBy?: ReunionOrderByWithAggregationInput | ReunionOrderByWithAggregationInput[]
    by: ReunionScalarFieldEnum[] | ReunionScalarFieldEnum
    having?: ReunionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReunionCountAggregateInputType | true
    _avg?: ReunionAvgAggregateInputType
    _sum?: ReunionSumAggregateInputType
    _min?: ReunionMinAggregateInputType
    _max?: ReunionMaxAggregateInputType
  }

  export type ReunionGroupByOutputType = {
    id: number
    titulo: string
    fecha: Date
    lugar: string | null
    observaciones: string | null
    casoId: number | null
    creadorId: number
    createdAt: Date
    updatedAt: Date
    _count: ReunionCountAggregateOutputType | null
    _avg: ReunionAvgAggregateOutputType | null
    _sum: ReunionSumAggregateOutputType | null
    _min: ReunionMinAggregateOutputType | null
    _max: ReunionMaxAggregateOutputType | null
  }

  type GetReunionGroupByPayload<T extends ReunionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReunionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReunionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReunionGroupByOutputType[P]>
            : GetScalarType<T[P], ReunionGroupByOutputType[P]>
        }
      >
    >


  export type ReunionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    fecha?: boolean
    lugar?: boolean
    observaciones?: boolean
    casoId?: boolean
    creadorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    caso?: boolean | Reunion$casoArgs<ExtArgs>
    creador?: boolean | UsuarioDefaultArgs<ExtArgs>
    participantes?: boolean | Reunion$participantesArgs<ExtArgs>
    _count?: boolean | ReunionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reunion"]>

  export type ReunionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    fecha?: boolean
    lugar?: boolean
    observaciones?: boolean
    casoId?: boolean
    creadorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    caso?: boolean | Reunion$casoArgs<ExtArgs>
    creador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reunion"]>

  export type ReunionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    fecha?: boolean
    lugar?: boolean
    observaciones?: boolean
    casoId?: boolean
    creadorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    caso?: boolean | Reunion$casoArgs<ExtArgs>
    creador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reunion"]>

  export type ReunionSelectScalar = {
    id?: boolean
    titulo?: boolean
    fecha?: boolean
    lugar?: boolean
    observaciones?: boolean
    casoId?: boolean
    creadorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReunionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "fecha" | "lugar" | "observaciones" | "casoId" | "creadorId" | "createdAt" | "updatedAt", ExtArgs["result"]["reunion"]>
  export type ReunionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caso?: boolean | Reunion$casoArgs<ExtArgs>
    creador?: boolean | UsuarioDefaultArgs<ExtArgs>
    participantes?: boolean | Reunion$participantesArgs<ExtArgs>
    _count?: boolean | ReunionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReunionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caso?: boolean | Reunion$casoArgs<ExtArgs>
    creador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ReunionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caso?: boolean | Reunion$casoArgs<ExtArgs>
    creador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ReunionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reunion"
    objects: {
      caso: Prisma.$CasoPayload<ExtArgs> | null
      creador: Prisma.$UsuarioPayload<ExtArgs>
      participantes: Prisma.$ParticipanteReunionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      fecha: Date
      lugar: string | null
      observaciones: string | null
      casoId: number | null
      creadorId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reunion"]>
    composites: {}
  }

  type ReunionGetPayload<S extends boolean | null | undefined | ReunionDefaultArgs> = $Result.GetResult<Prisma.$ReunionPayload, S>

  type ReunionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReunionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReunionCountAggregateInputType | true
    }

  export interface ReunionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reunion'], meta: { name: 'Reunion' } }
    /**
     * Find zero or one Reunion that matches the filter.
     * @param {ReunionFindUniqueArgs} args - Arguments to find a Reunion
     * @example
     * // Get one Reunion
     * const reunion = await prisma.reunion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReunionFindUniqueArgs>(args: SelectSubset<T, ReunionFindUniqueArgs<ExtArgs>>): Prisma__ReunionClient<$Result.GetResult<Prisma.$ReunionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reunion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReunionFindUniqueOrThrowArgs} args - Arguments to find a Reunion
     * @example
     * // Get one Reunion
     * const reunion = await prisma.reunion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReunionFindUniqueOrThrowArgs>(args: SelectSubset<T, ReunionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReunionClient<$Result.GetResult<Prisma.$ReunionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reunion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReunionFindFirstArgs} args - Arguments to find a Reunion
     * @example
     * // Get one Reunion
     * const reunion = await prisma.reunion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReunionFindFirstArgs>(args?: SelectSubset<T, ReunionFindFirstArgs<ExtArgs>>): Prisma__ReunionClient<$Result.GetResult<Prisma.$ReunionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reunion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReunionFindFirstOrThrowArgs} args - Arguments to find a Reunion
     * @example
     * // Get one Reunion
     * const reunion = await prisma.reunion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReunionFindFirstOrThrowArgs>(args?: SelectSubset<T, ReunionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReunionClient<$Result.GetResult<Prisma.$ReunionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reunions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReunionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reunions
     * const reunions = await prisma.reunion.findMany()
     * 
     * // Get first 10 Reunions
     * const reunions = await prisma.reunion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reunionWithIdOnly = await prisma.reunion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReunionFindManyArgs>(args?: SelectSubset<T, ReunionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReunionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reunion.
     * @param {ReunionCreateArgs} args - Arguments to create a Reunion.
     * @example
     * // Create one Reunion
     * const Reunion = await prisma.reunion.create({
     *   data: {
     *     // ... data to create a Reunion
     *   }
     * })
     * 
     */
    create<T extends ReunionCreateArgs>(args: SelectSubset<T, ReunionCreateArgs<ExtArgs>>): Prisma__ReunionClient<$Result.GetResult<Prisma.$ReunionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reunions.
     * @param {ReunionCreateManyArgs} args - Arguments to create many Reunions.
     * @example
     * // Create many Reunions
     * const reunion = await prisma.reunion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReunionCreateManyArgs>(args?: SelectSubset<T, ReunionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reunions and returns the data saved in the database.
     * @param {ReunionCreateManyAndReturnArgs} args - Arguments to create many Reunions.
     * @example
     * // Create many Reunions
     * const reunion = await prisma.reunion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reunions and only return the `id`
     * const reunionWithIdOnly = await prisma.reunion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReunionCreateManyAndReturnArgs>(args?: SelectSubset<T, ReunionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReunionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reunion.
     * @param {ReunionDeleteArgs} args - Arguments to delete one Reunion.
     * @example
     * // Delete one Reunion
     * const Reunion = await prisma.reunion.delete({
     *   where: {
     *     // ... filter to delete one Reunion
     *   }
     * })
     * 
     */
    delete<T extends ReunionDeleteArgs>(args: SelectSubset<T, ReunionDeleteArgs<ExtArgs>>): Prisma__ReunionClient<$Result.GetResult<Prisma.$ReunionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reunion.
     * @param {ReunionUpdateArgs} args - Arguments to update one Reunion.
     * @example
     * // Update one Reunion
     * const reunion = await prisma.reunion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReunionUpdateArgs>(args: SelectSubset<T, ReunionUpdateArgs<ExtArgs>>): Prisma__ReunionClient<$Result.GetResult<Prisma.$ReunionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reunions.
     * @param {ReunionDeleteManyArgs} args - Arguments to filter Reunions to delete.
     * @example
     * // Delete a few Reunions
     * const { count } = await prisma.reunion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReunionDeleteManyArgs>(args?: SelectSubset<T, ReunionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reunions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReunionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reunions
     * const reunion = await prisma.reunion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReunionUpdateManyArgs>(args: SelectSubset<T, ReunionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reunions and returns the data updated in the database.
     * @param {ReunionUpdateManyAndReturnArgs} args - Arguments to update many Reunions.
     * @example
     * // Update many Reunions
     * const reunion = await prisma.reunion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reunions and only return the `id`
     * const reunionWithIdOnly = await prisma.reunion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReunionUpdateManyAndReturnArgs>(args: SelectSubset<T, ReunionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReunionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reunion.
     * @param {ReunionUpsertArgs} args - Arguments to update or create a Reunion.
     * @example
     * // Update or create a Reunion
     * const reunion = await prisma.reunion.upsert({
     *   create: {
     *     // ... data to create a Reunion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reunion we want to update
     *   }
     * })
     */
    upsert<T extends ReunionUpsertArgs>(args: SelectSubset<T, ReunionUpsertArgs<ExtArgs>>): Prisma__ReunionClient<$Result.GetResult<Prisma.$ReunionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reunions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReunionCountArgs} args - Arguments to filter Reunions to count.
     * @example
     * // Count the number of Reunions
     * const count = await prisma.reunion.count({
     *   where: {
     *     // ... the filter for the Reunions we want to count
     *   }
     * })
    **/
    count<T extends ReunionCountArgs>(
      args?: Subset<T, ReunionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReunionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reunion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReunionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReunionAggregateArgs>(args: Subset<T, ReunionAggregateArgs>): Prisma.PrismaPromise<GetReunionAggregateType<T>>

    /**
     * Group by Reunion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReunionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReunionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReunionGroupByArgs['orderBy'] }
        : { orderBy?: ReunionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReunionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReunionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reunion model
   */
  readonly fields: ReunionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reunion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReunionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    caso<T extends Reunion$casoArgs<ExtArgs> = {}>(args?: Subset<T, Reunion$casoArgs<ExtArgs>>): Prisma__CasoClient<$Result.GetResult<Prisma.$CasoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    creador<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participantes<T extends Reunion$participantesArgs<ExtArgs> = {}>(args?: Subset<T, Reunion$participantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipanteReunionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reunion model
   */
  interface ReunionFieldRefs {
    readonly id: FieldRef<"Reunion", 'Int'>
    readonly titulo: FieldRef<"Reunion", 'String'>
    readonly fecha: FieldRef<"Reunion", 'DateTime'>
    readonly lugar: FieldRef<"Reunion", 'String'>
    readonly observaciones: FieldRef<"Reunion", 'String'>
    readonly casoId: FieldRef<"Reunion", 'Int'>
    readonly creadorId: FieldRef<"Reunion", 'Int'>
    readonly createdAt: FieldRef<"Reunion", 'DateTime'>
    readonly updatedAt: FieldRef<"Reunion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reunion findUnique
   */
  export type ReunionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reunion
     */
    select?: ReunionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reunion
     */
    omit?: ReunionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReunionInclude<ExtArgs> | null
    /**
     * Filter, which Reunion to fetch.
     */
    where: ReunionWhereUniqueInput
  }

  /**
   * Reunion findUniqueOrThrow
   */
  export type ReunionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reunion
     */
    select?: ReunionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reunion
     */
    omit?: ReunionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReunionInclude<ExtArgs> | null
    /**
     * Filter, which Reunion to fetch.
     */
    where: ReunionWhereUniqueInput
  }

  /**
   * Reunion findFirst
   */
  export type ReunionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reunion
     */
    select?: ReunionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reunion
     */
    omit?: ReunionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReunionInclude<ExtArgs> | null
    /**
     * Filter, which Reunion to fetch.
     */
    where?: ReunionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reunions to fetch.
     */
    orderBy?: ReunionOrderByWithRelationInput | ReunionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reunions.
     */
    cursor?: ReunionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reunions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reunions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reunions.
     */
    distinct?: ReunionScalarFieldEnum | ReunionScalarFieldEnum[]
  }

  /**
   * Reunion findFirstOrThrow
   */
  export type ReunionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reunion
     */
    select?: ReunionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reunion
     */
    omit?: ReunionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReunionInclude<ExtArgs> | null
    /**
     * Filter, which Reunion to fetch.
     */
    where?: ReunionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reunions to fetch.
     */
    orderBy?: ReunionOrderByWithRelationInput | ReunionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reunions.
     */
    cursor?: ReunionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reunions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reunions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reunions.
     */
    distinct?: ReunionScalarFieldEnum | ReunionScalarFieldEnum[]
  }

  /**
   * Reunion findMany
   */
  export type ReunionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reunion
     */
    select?: ReunionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reunion
     */
    omit?: ReunionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReunionInclude<ExtArgs> | null
    /**
     * Filter, which Reunions to fetch.
     */
    where?: ReunionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reunions to fetch.
     */
    orderBy?: ReunionOrderByWithRelationInput | ReunionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reunions.
     */
    cursor?: ReunionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reunions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reunions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reunions.
     */
    distinct?: ReunionScalarFieldEnum | ReunionScalarFieldEnum[]
  }

  /**
   * Reunion create
   */
  export type ReunionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reunion
     */
    select?: ReunionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reunion
     */
    omit?: ReunionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReunionInclude<ExtArgs> | null
    /**
     * The data needed to create a Reunion.
     */
    data: XOR<ReunionCreateInput, ReunionUncheckedCreateInput>
  }

  /**
   * Reunion createMany
   */
  export type ReunionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reunions.
     */
    data: ReunionCreateManyInput | ReunionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reunion createManyAndReturn
   */
  export type ReunionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reunion
     */
    select?: ReunionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reunion
     */
    omit?: ReunionOmit<ExtArgs> | null
    /**
     * The data used to create many Reunions.
     */
    data: ReunionCreateManyInput | ReunionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReunionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reunion update
   */
  export type ReunionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reunion
     */
    select?: ReunionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reunion
     */
    omit?: ReunionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReunionInclude<ExtArgs> | null
    /**
     * The data needed to update a Reunion.
     */
    data: XOR<ReunionUpdateInput, ReunionUncheckedUpdateInput>
    /**
     * Choose, which Reunion to update.
     */
    where: ReunionWhereUniqueInput
  }

  /**
   * Reunion updateMany
   */
  export type ReunionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reunions.
     */
    data: XOR<ReunionUpdateManyMutationInput, ReunionUncheckedUpdateManyInput>
    /**
     * Filter which Reunions to update
     */
    where?: ReunionWhereInput
    /**
     * Limit how many Reunions to update.
     */
    limit?: number
  }

  /**
   * Reunion updateManyAndReturn
   */
  export type ReunionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reunion
     */
    select?: ReunionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reunion
     */
    omit?: ReunionOmit<ExtArgs> | null
    /**
     * The data used to update Reunions.
     */
    data: XOR<ReunionUpdateManyMutationInput, ReunionUncheckedUpdateManyInput>
    /**
     * Filter which Reunions to update
     */
    where?: ReunionWhereInput
    /**
     * Limit how many Reunions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReunionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reunion upsert
   */
  export type ReunionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reunion
     */
    select?: ReunionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reunion
     */
    omit?: ReunionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReunionInclude<ExtArgs> | null
    /**
     * The filter to search for the Reunion to update in case it exists.
     */
    where: ReunionWhereUniqueInput
    /**
     * In case the Reunion found by the `where` argument doesn't exist, create a new Reunion with this data.
     */
    create: XOR<ReunionCreateInput, ReunionUncheckedCreateInput>
    /**
     * In case the Reunion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReunionUpdateInput, ReunionUncheckedUpdateInput>
  }

  /**
   * Reunion delete
   */
  export type ReunionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reunion
     */
    select?: ReunionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reunion
     */
    omit?: ReunionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReunionInclude<ExtArgs> | null
    /**
     * Filter which Reunion to delete.
     */
    where: ReunionWhereUniqueInput
  }

  /**
   * Reunion deleteMany
   */
  export type ReunionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reunions to delete
     */
    where?: ReunionWhereInput
    /**
     * Limit how many Reunions to delete.
     */
    limit?: number
  }

  /**
   * Reunion.caso
   */
  export type Reunion$casoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caso
     */
    select?: CasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caso
     */
    omit?: CasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasoInclude<ExtArgs> | null
    where?: CasoWhereInput
  }

  /**
   * Reunion.participantes
   */
  export type Reunion$participantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipanteReunion
     */
    select?: ParticipanteReunionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipanteReunion
     */
    omit?: ParticipanteReunionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteReunionInclude<ExtArgs> | null
    where?: ParticipanteReunionWhereInput
    orderBy?: ParticipanteReunionOrderByWithRelationInput | ParticipanteReunionOrderByWithRelationInput[]
    cursor?: ParticipanteReunionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipanteReunionScalarFieldEnum | ParticipanteReunionScalarFieldEnum[]
  }

  /**
   * Reunion without action
   */
  export type ReunionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reunion
     */
    select?: ReunionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reunion
     */
    omit?: ReunionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReunionInclude<ExtArgs> | null
  }


  /**
   * Model ParticipanteReunion
   */

  export type AggregateParticipanteReunion = {
    _count: ParticipanteReunionCountAggregateOutputType | null
    _avg: ParticipanteReunionAvgAggregateOutputType | null
    _sum: ParticipanteReunionSumAggregateOutputType | null
    _min: ParticipanteReunionMinAggregateOutputType | null
    _max: ParticipanteReunionMaxAggregateOutputType | null
  }

  export type ParticipanteReunionAvgAggregateOutputType = {
    id: number | null
    reunionId: number | null
    usuarioId: number | null
    clienteId: number | null
  }

  export type ParticipanteReunionSumAggregateOutputType = {
    id: number | null
    reunionId: number | null
    usuarioId: number | null
    clienteId: number | null
  }

  export type ParticipanteReunionMinAggregateOutputType = {
    id: number | null
    reunionId: number | null
    usuarioId: number | null
    clienteId: number | null
    nombreExterno: string | null
    correoExterno: string | null
  }

  export type ParticipanteReunionMaxAggregateOutputType = {
    id: number | null
    reunionId: number | null
    usuarioId: number | null
    clienteId: number | null
    nombreExterno: string | null
    correoExterno: string | null
  }

  export type ParticipanteReunionCountAggregateOutputType = {
    id: number
    reunionId: number
    usuarioId: number
    clienteId: number
    nombreExterno: number
    correoExterno: number
    _all: number
  }


  export type ParticipanteReunionAvgAggregateInputType = {
    id?: true
    reunionId?: true
    usuarioId?: true
    clienteId?: true
  }

  export type ParticipanteReunionSumAggregateInputType = {
    id?: true
    reunionId?: true
    usuarioId?: true
    clienteId?: true
  }

  export type ParticipanteReunionMinAggregateInputType = {
    id?: true
    reunionId?: true
    usuarioId?: true
    clienteId?: true
    nombreExterno?: true
    correoExterno?: true
  }

  export type ParticipanteReunionMaxAggregateInputType = {
    id?: true
    reunionId?: true
    usuarioId?: true
    clienteId?: true
    nombreExterno?: true
    correoExterno?: true
  }

  export type ParticipanteReunionCountAggregateInputType = {
    id?: true
    reunionId?: true
    usuarioId?: true
    clienteId?: true
    nombreExterno?: true
    correoExterno?: true
    _all?: true
  }

  export type ParticipanteReunionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipanteReunion to aggregate.
     */
    where?: ParticipanteReunionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipanteReunions to fetch.
     */
    orderBy?: ParticipanteReunionOrderByWithRelationInput | ParticipanteReunionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipanteReunionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipanteReunions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipanteReunions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParticipanteReunions
    **/
    _count?: true | ParticipanteReunionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipanteReunionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipanteReunionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipanteReunionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipanteReunionMaxAggregateInputType
  }

  export type GetParticipanteReunionAggregateType<T extends ParticipanteReunionAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipanteReunion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipanteReunion[P]>
      : GetScalarType<T[P], AggregateParticipanteReunion[P]>
  }




  export type ParticipanteReunionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipanteReunionWhereInput
    orderBy?: ParticipanteReunionOrderByWithAggregationInput | ParticipanteReunionOrderByWithAggregationInput[]
    by: ParticipanteReunionScalarFieldEnum[] | ParticipanteReunionScalarFieldEnum
    having?: ParticipanteReunionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipanteReunionCountAggregateInputType | true
    _avg?: ParticipanteReunionAvgAggregateInputType
    _sum?: ParticipanteReunionSumAggregateInputType
    _min?: ParticipanteReunionMinAggregateInputType
    _max?: ParticipanteReunionMaxAggregateInputType
  }

  export type ParticipanteReunionGroupByOutputType = {
    id: number
    reunionId: number
    usuarioId: number | null
    clienteId: number | null
    nombreExterno: string | null
    correoExterno: string | null
    _count: ParticipanteReunionCountAggregateOutputType | null
    _avg: ParticipanteReunionAvgAggregateOutputType | null
    _sum: ParticipanteReunionSumAggregateOutputType | null
    _min: ParticipanteReunionMinAggregateOutputType | null
    _max: ParticipanteReunionMaxAggregateOutputType | null
  }

  type GetParticipanteReunionGroupByPayload<T extends ParticipanteReunionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipanteReunionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipanteReunionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipanteReunionGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipanteReunionGroupByOutputType[P]>
        }
      >
    >


  export type ParticipanteReunionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reunionId?: boolean
    usuarioId?: boolean
    clienteId?: boolean
    nombreExterno?: boolean
    correoExterno?: boolean
    reunion?: boolean | ReunionDefaultArgs<ExtArgs>
    usuario?: boolean | ParticipanteReunion$usuarioArgs<ExtArgs>
    cliente?: boolean | ParticipanteReunion$clienteArgs<ExtArgs>
  }, ExtArgs["result"]["participanteReunion"]>

  export type ParticipanteReunionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reunionId?: boolean
    usuarioId?: boolean
    clienteId?: boolean
    nombreExterno?: boolean
    correoExterno?: boolean
    reunion?: boolean | ReunionDefaultArgs<ExtArgs>
    usuario?: boolean | ParticipanteReunion$usuarioArgs<ExtArgs>
    cliente?: boolean | ParticipanteReunion$clienteArgs<ExtArgs>
  }, ExtArgs["result"]["participanteReunion"]>

  export type ParticipanteReunionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reunionId?: boolean
    usuarioId?: boolean
    clienteId?: boolean
    nombreExterno?: boolean
    correoExterno?: boolean
    reunion?: boolean | ReunionDefaultArgs<ExtArgs>
    usuario?: boolean | ParticipanteReunion$usuarioArgs<ExtArgs>
    cliente?: boolean | ParticipanteReunion$clienteArgs<ExtArgs>
  }, ExtArgs["result"]["participanteReunion"]>

  export type ParticipanteReunionSelectScalar = {
    id?: boolean
    reunionId?: boolean
    usuarioId?: boolean
    clienteId?: boolean
    nombreExterno?: boolean
    correoExterno?: boolean
  }

  export type ParticipanteReunionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reunionId" | "usuarioId" | "clienteId" | "nombreExterno" | "correoExterno", ExtArgs["result"]["participanteReunion"]>
  export type ParticipanteReunionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reunion?: boolean | ReunionDefaultArgs<ExtArgs>
    usuario?: boolean | ParticipanteReunion$usuarioArgs<ExtArgs>
    cliente?: boolean | ParticipanteReunion$clienteArgs<ExtArgs>
  }
  export type ParticipanteReunionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reunion?: boolean | ReunionDefaultArgs<ExtArgs>
    usuario?: boolean | ParticipanteReunion$usuarioArgs<ExtArgs>
    cliente?: boolean | ParticipanteReunion$clienteArgs<ExtArgs>
  }
  export type ParticipanteReunionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reunion?: boolean | ReunionDefaultArgs<ExtArgs>
    usuario?: boolean | ParticipanteReunion$usuarioArgs<ExtArgs>
    cliente?: boolean | ParticipanteReunion$clienteArgs<ExtArgs>
  }

  export type $ParticipanteReunionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParticipanteReunion"
    objects: {
      reunion: Prisma.$ReunionPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
      cliente: Prisma.$ClientePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reunionId: number
      usuarioId: number | null
      clienteId: number | null
      nombreExterno: string | null
      correoExterno: string | null
    }, ExtArgs["result"]["participanteReunion"]>
    composites: {}
  }

  type ParticipanteReunionGetPayload<S extends boolean | null | undefined | ParticipanteReunionDefaultArgs> = $Result.GetResult<Prisma.$ParticipanteReunionPayload, S>

  type ParticipanteReunionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipanteReunionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipanteReunionCountAggregateInputType | true
    }

  export interface ParticipanteReunionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParticipanteReunion'], meta: { name: 'ParticipanteReunion' } }
    /**
     * Find zero or one ParticipanteReunion that matches the filter.
     * @param {ParticipanteReunionFindUniqueArgs} args - Arguments to find a ParticipanteReunion
     * @example
     * // Get one ParticipanteReunion
     * const participanteReunion = await prisma.participanteReunion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipanteReunionFindUniqueArgs>(args: SelectSubset<T, ParticipanteReunionFindUniqueArgs<ExtArgs>>): Prisma__ParticipanteReunionClient<$Result.GetResult<Prisma.$ParticipanteReunionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParticipanteReunion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipanteReunionFindUniqueOrThrowArgs} args - Arguments to find a ParticipanteReunion
     * @example
     * // Get one ParticipanteReunion
     * const participanteReunion = await prisma.participanteReunion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipanteReunionFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipanteReunionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipanteReunionClient<$Result.GetResult<Prisma.$ParticipanteReunionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipanteReunion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteReunionFindFirstArgs} args - Arguments to find a ParticipanteReunion
     * @example
     * // Get one ParticipanteReunion
     * const participanteReunion = await prisma.participanteReunion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipanteReunionFindFirstArgs>(args?: SelectSubset<T, ParticipanteReunionFindFirstArgs<ExtArgs>>): Prisma__ParticipanteReunionClient<$Result.GetResult<Prisma.$ParticipanteReunionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipanteReunion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteReunionFindFirstOrThrowArgs} args - Arguments to find a ParticipanteReunion
     * @example
     * // Get one ParticipanteReunion
     * const participanteReunion = await prisma.participanteReunion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipanteReunionFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipanteReunionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipanteReunionClient<$Result.GetResult<Prisma.$ParticipanteReunionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParticipanteReunions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteReunionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParticipanteReunions
     * const participanteReunions = await prisma.participanteReunion.findMany()
     * 
     * // Get first 10 ParticipanteReunions
     * const participanteReunions = await prisma.participanteReunion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participanteReunionWithIdOnly = await prisma.participanteReunion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipanteReunionFindManyArgs>(args?: SelectSubset<T, ParticipanteReunionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipanteReunionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParticipanteReunion.
     * @param {ParticipanteReunionCreateArgs} args - Arguments to create a ParticipanteReunion.
     * @example
     * // Create one ParticipanteReunion
     * const ParticipanteReunion = await prisma.participanteReunion.create({
     *   data: {
     *     // ... data to create a ParticipanteReunion
     *   }
     * })
     * 
     */
    create<T extends ParticipanteReunionCreateArgs>(args: SelectSubset<T, ParticipanteReunionCreateArgs<ExtArgs>>): Prisma__ParticipanteReunionClient<$Result.GetResult<Prisma.$ParticipanteReunionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParticipanteReunions.
     * @param {ParticipanteReunionCreateManyArgs} args - Arguments to create many ParticipanteReunions.
     * @example
     * // Create many ParticipanteReunions
     * const participanteReunion = await prisma.participanteReunion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipanteReunionCreateManyArgs>(args?: SelectSubset<T, ParticipanteReunionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParticipanteReunions and returns the data saved in the database.
     * @param {ParticipanteReunionCreateManyAndReturnArgs} args - Arguments to create many ParticipanteReunions.
     * @example
     * // Create many ParticipanteReunions
     * const participanteReunion = await prisma.participanteReunion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParticipanteReunions and only return the `id`
     * const participanteReunionWithIdOnly = await prisma.participanteReunion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipanteReunionCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipanteReunionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipanteReunionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParticipanteReunion.
     * @param {ParticipanteReunionDeleteArgs} args - Arguments to delete one ParticipanteReunion.
     * @example
     * // Delete one ParticipanteReunion
     * const ParticipanteReunion = await prisma.participanteReunion.delete({
     *   where: {
     *     // ... filter to delete one ParticipanteReunion
     *   }
     * })
     * 
     */
    delete<T extends ParticipanteReunionDeleteArgs>(args: SelectSubset<T, ParticipanteReunionDeleteArgs<ExtArgs>>): Prisma__ParticipanteReunionClient<$Result.GetResult<Prisma.$ParticipanteReunionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParticipanteReunion.
     * @param {ParticipanteReunionUpdateArgs} args - Arguments to update one ParticipanteReunion.
     * @example
     * // Update one ParticipanteReunion
     * const participanteReunion = await prisma.participanteReunion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipanteReunionUpdateArgs>(args: SelectSubset<T, ParticipanteReunionUpdateArgs<ExtArgs>>): Prisma__ParticipanteReunionClient<$Result.GetResult<Prisma.$ParticipanteReunionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParticipanteReunions.
     * @param {ParticipanteReunionDeleteManyArgs} args - Arguments to filter ParticipanteReunions to delete.
     * @example
     * // Delete a few ParticipanteReunions
     * const { count } = await prisma.participanteReunion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipanteReunionDeleteManyArgs>(args?: SelectSubset<T, ParticipanteReunionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipanteReunions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteReunionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParticipanteReunions
     * const participanteReunion = await prisma.participanteReunion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipanteReunionUpdateManyArgs>(args: SelectSubset<T, ParticipanteReunionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipanteReunions and returns the data updated in the database.
     * @param {ParticipanteReunionUpdateManyAndReturnArgs} args - Arguments to update many ParticipanteReunions.
     * @example
     * // Update many ParticipanteReunions
     * const participanteReunion = await prisma.participanteReunion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParticipanteReunions and only return the `id`
     * const participanteReunionWithIdOnly = await prisma.participanteReunion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParticipanteReunionUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipanteReunionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipanteReunionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParticipanteReunion.
     * @param {ParticipanteReunionUpsertArgs} args - Arguments to update or create a ParticipanteReunion.
     * @example
     * // Update or create a ParticipanteReunion
     * const participanteReunion = await prisma.participanteReunion.upsert({
     *   create: {
     *     // ... data to create a ParticipanteReunion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParticipanteReunion we want to update
     *   }
     * })
     */
    upsert<T extends ParticipanteReunionUpsertArgs>(args: SelectSubset<T, ParticipanteReunionUpsertArgs<ExtArgs>>): Prisma__ParticipanteReunionClient<$Result.GetResult<Prisma.$ParticipanteReunionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParticipanteReunions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteReunionCountArgs} args - Arguments to filter ParticipanteReunions to count.
     * @example
     * // Count the number of ParticipanteReunions
     * const count = await prisma.participanteReunion.count({
     *   where: {
     *     // ... the filter for the ParticipanteReunions we want to count
     *   }
     * })
    **/
    count<T extends ParticipanteReunionCountArgs>(
      args?: Subset<T, ParticipanteReunionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipanteReunionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParticipanteReunion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteReunionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParticipanteReunionAggregateArgs>(args: Subset<T, ParticipanteReunionAggregateArgs>): Prisma.PrismaPromise<GetParticipanteReunionAggregateType<T>>

    /**
     * Group by ParticipanteReunion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteReunionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParticipanteReunionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipanteReunionGroupByArgs['orderBy'] }
        : { orderBy?: ParticipanteReunionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParticipanteReunionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipanteReunionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParticipanteReunion model
   */
  readonly fields: ParticipanteReunionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParticipanteReunion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipanteReunionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reunion<T extends ReunionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReunionDefaultArgs<ExtArgs>>): Prisma__ReunionClient<$Result.GetResult<Prisma.$ReunionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends ParticipanteReunion$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, ParticipanteReunion$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cliente<T extends ParticipanteReunion$clienteArgs<ExtArgs> = {}>(args?: Subset<T, ParticipanteReunion$clienteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParticipanteReunion model
   */
  interface ParticipanteReunionFieldRefs {
    readonly id: FieldRef<"ParticipanteReunion", 'Int'>
    readonly reunionId: FieldRef<"ParticipanteReunion", 'Int'>
    readonly usuarioId: FieldRef<"ParticipanteReunion", 'Int'>
    readonly clienteId: FieldRef<"ParticipanteReunion", 'Int'>
    readonly nombreExterno: FieldRef<"ParticipanteReunion", 'String'>
    readonly correoExterno: FieldRef<"ParticipanteReunion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ParticipanteReunion findUnique
   */
  export type ParticipanteReunionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipanteReunion
     */
    select?: ParticipanteReunionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipanteReunion
     */
    omit?: ParticipanteReunionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteReunionInclude<ExtArgs> | null
    /**
     * Filter, which ParticipanteReunion to fetch.
     */
    where: ParticipanteReunionWhereUniqueInput
  }

  /**
   * ParticipanteReunion findUniqueOrThrow
   */
  export type ParticipanteReunionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipanteReunion
     */
    select?: ParticipanteReunionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipanteReunion
     */
    omit?: ParticipanteReunionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteReunionInclude<ExtArgs> | null
    /**
     * Filter, which ParticipanteReunion to fetch.
     */
    where: ParticipanteReunionWhereUniqueInput
  }

  /**
   * ParticipanteReunion findFirst
   */
  export type ParticipanteReunionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipanteReunion
     */
    select?: ParticipanteReunionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipanteReunion
     */
    omit?: ParticipanteReunionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteReunionInclude<ExtArgs> | null
    /**
     * Filter, which ParticipanteReunion to fetch.
     */
    where?: ParticipanteReunionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipanteReunions to fetch.
     */
    orderBy?: ParticipanteReunionOrderByWithRelationInput | ParticipanteReunionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipanteReunions.
     */
    cursor?: ParticipanteReunionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipanteReunions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipanteReunions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipanteReunions.
     */
    distinct?: ParticipanteReunionScalarFieldEnum | ParticipanteReunionScalarFieldEnum[]
  }

  /**
   * ParticipanteReunion findFirstOrThrow
   */
  export type ParticipanteReunionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipanteReunion
     */
    select?: ParticipanteReunionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipanteReunion
     */
    omit?: ParticipanteReunionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteReunionInclude<ExtArgs> | null
    /**
     * Filter, which ParticipanteReunion to fetch.
     */
    where?: ParticipanteReunionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipanteReunions to fetch.
     */
    orderBy?: ParticipanteReunionOrderByWithRelationInput | ParticipanteReunionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipanteReunions.
     */
    cursor?: ParticipanteReunionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipanteReunions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipanteReunions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipanteReunions.
     */
    distinct?: ParticipanteReunionScalarFieldEnum | ParticipanteReunionScalarFieldEnum[]
  }

  /**
   * ParticipanteReunion findMany
   */
  export type ParticipanteReunionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipanteReunion
     */
    select?: ParticipanteReunionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipanteReunion
     */
    omit?: ParticipanteReunionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteReunionInclude<ExtArgs> | null
    /**
     * Filter, which ParticipanteReunions to fetch.
     */
    where?: ParticipanteReunionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipanteReunions to fetch.
     */
    orderBy?: ParticipanteReunionOrderByWithRelationInput | ParticipanteReunionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParticipanteReunions.
     */
    cursor?: ParticipanteReunionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipanteReunions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipanteReunions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipanteReunions.
     */
    distinct?: ParticipanteReunionScalarFieldEnum | ParticipanteReunionScalarFieldEnum[]
  }

  /**
   * ParticipanteReunion create
   */
  export type ParticipanteReunionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipanteReunion
     */
    select?: ParticipanteReunionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipanteReunion
     */
    omit?: ParticipanteReunionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteReunionInclude<ExtArgs> | null
    /**
     * The data needed to create a ParticipanteReunion.
     */
    data: XOR<ParticipanteReunionCreateInput, ParticipanteReunionUncheckedCreateInput>
  }

  /**
   * ParticipanteReunion createMany
   */
  export type ParticipanteReunionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParticipanteReunions.
     */
    data: ParticipanteReunionCreateManyInput | ParticipanteReunionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParticipanteReunion createManyAndReturn
   */
  export type ParticipanteReunionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipanteReunion
     */
    select?: ParticipanteReunionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipanteReunion
     */
    omit?: ParticipanteReunionOmit<ExtArgs> | null
    /**
     * The data used to create many ParticipanteReunions.
     */
    data: ParticipanteReunionCreateManyInput | ParticipanteReunionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteReunionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParticipanteReunion update
   */
  export type ParticipanteReunionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipanteReunion
     */
    select?: ParticipanteReunionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipanteReunion
     */
    omit?: ParticipanteReunionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteReunionInclude<ExtArgs> | null
    /**
     * The data needed to update a ParticipanteReunion.
     */
    data: XOR<ParticipanteReunionUpdateInput, ParticipanteReunionUncheckedUpdateInput>
    /**
     * Choose, which ParticipanteReunion to update.
     */
    where: ParticipanteReunionWhereUniqueInput
  }

  /**
   * ParticipanteReunion updateMany
   */
  export type ParticipanteReunionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParticipanteReunions.
     */
    data: XOR<ParticipanteReunionUpdateManyMutationInput, ParticipanteReunionUncheckedUpdateManyInput>
    /**
     * Filter which ParticipanteReunions to update
     */
    where?: ParticipanteReunionWhereInput
    /**
     * Limit how many ParticipanteReunions to update.
     */
    limit?: number
  }

  /**
   * ParticipanteReunion updateManyAndReturn
   */
  export type ParticipanteReunionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipanteReunion
     */
    select?: ParticipanteReunionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipanteReunion
     */
    omit?: ParticipanteReunionOmit<ExtArgs> | null
    /**
     * The data used to update ParticipanteReunions.
     */
    data: XOR<ParticipanteReunionUpdateManyMutationInput, ParticipanteReunionUncheckedUpdateManyInput>
    /**
     * Filter which ParticipanteReunions to update
     */
    where?: ParticipanteReunionWhereInput
    /**
     * Limit how many ParticipanteReunions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteReunionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParticipanteReunion upsert
   */
  export type ParticipanteReunionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipanteReunion
     */
    select?: ParticipanteReunionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipanteReunion
     */
    omit?: ParticipanteReunionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteReunionInclude<ExtArgs> | null
    /**
     * The filter to search for the ParticipanteReunion to update in case it exists.
     */
    where: ParticipanteReunionWhereUniqueInput
    /**
     * In case the ParticipanteReunion found by the `where` argument doesn't exist, create a new ParticipanteReunion with this data.
     */
    create: XOR<ParticipanteReunionCreateInput, ParticipanteReunionUncheckedCreateInput>
    /**
     * In case the ParticipanteReunion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipanteReunionUpdateInput, ParticipanteReunionUncheckedUpdateInput>
  }

  /**
   * ParticipanteReunion delete
   */
  export type ParticipanteReunionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipanteReunion
     */
    select?: ParticipanteReunionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipanteReunion
     */
    omit?: ParticipanteReunionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteReunionInclude<ExtArgs> | null
    /**
     * Filter which ParticipanteReunion to delete.
     */
    where: ParticipanteReunionWhereUniqueInput
  }

  /**
   * ParticipanteReunion deleteMany
   */
  export type ParticipanteReunionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipanteReunions to delete
     */
    where?: ParticipanteReunionWhereInput
    /**
     * Limit how many ParticipanteReunions to delete.
     */
    limit?: number
  }

  /**
   * ParticipanteReunion.usuario
   */
  export type ParticipanteReunion$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * ParticipanteReunion.cliente
   */
  export type ParticipanteReunion$clienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
  }

  /**
   * ParticipanteReunion without action
   */
  export type ParticipanteReunionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipanteReunion
     */
    select?: ParticipanteReunionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipanteReunion
     */
    omit?: ParticipanteReunionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteReunionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    correo: 'correo',
    clave: 'clave',
    rol: 'rol',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    correo: 'correo',
    telefono: 'telefono',
    direccion: 'direccion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const CasoScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    asunto: 'asunto',
    tipo: 'tipo',
    estado: 'estado',
    fechaInicio: 'fechaInicio',
    fechaCierre: 'fechaCierre',
    usuarioId: 'usuarioId',
    clienteId: 'clienteId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CasoScalarFieldEnum = (typeof CasoScalarFieldEnum)[keyof typeof CasoScalarFieldEnum]


  export const CasoResponsableScalarFieldEnum: {
    id: 'id',
    casoId: 'casoId',
    usuarioId: 'usuarioId',
    esPrincipal: 'esPrincipal',
    createdAt: 'createdAt'
  };

  export type CasoResponsableScalarFieldEnum = (typeof CasoResponsableScalarFieldEnum)[keyof typeof CasoResponsableScalarFieldEnum]


  export const AudienciaScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    lugar: 'lugar',
    estado: 'estado',
    observaciones: 'observaciones',
    casoId: 'casoId',
    usuarioId: 'usuarioId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AudienciaScalarFieldEnum = (typeof AudienciaScalarFieldEnum)[keyof typeof AudienciaScalarFieldEnum]


  export const CitaScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    asunto: 'asunto',
    contacto: 'contacto',
    casoId: 'casoId',
    usuarioId: 'usuarioId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CitaScalarFieldEnum = (typeof CitaScalarFieldEnum)[keyof typeof CitaScalarFieldEnum]


  export const RecordatorioScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    mensaje: 'mensaje',
    fechaEnvio: 'fechaEnvio',
    leido: 'leido',
    casoId: 'casoId',
    usuarioId: 'usuarioId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RecordatorioScalarFieldEnum = (typeof RecordatorioScalarFieldEnum)[keyof typeof RecordatorioScalarFieldEnum]


  export const ReunionScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    fecha: 'fecha',
    lugar: 'lugar',
    observaciones: 'observaciones',
    casoId: 'casoId',
    creadorId: 'creadorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReunionScalarFieldEnum = (typeof ReunionScalarFieldEnum)[keyof typeof ReunionScalarFieldEnum]


  export const ParticipanteReunionScalarFieldEnum: {
    id: 'id',
    reunionId: 'reunionId',
    usuarioId: 'usuarioId',
    clienteId: 'clienteId',
    nombreExterno: 'nombreExterno',
    correoExterno: 'correoExterno'
  };

  export type ParticipanteReunionScalarFieldEnum = (typeof ParticipanteReunionScalarFieldEnum)[keyof typeof ParticipanteReunionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'RolUsuario'
   */
  export type EnumRolUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RolUsuario'>
    


  /**
   * Reference to a field of type 'RolUsuario[]'
   */
  export type ListEnumRolUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RolUsuario[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EstadoCaso'
   */
  export type EnumEstadoCasoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoCaso'>
    


  /**
   * Reference to a field of type 'EstadoCaso[]'
   */
  export type ListEnumEstadoCasoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoCaso[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'EstadoAudiencia'
   */
  export type EnumEstadoAudienciaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoAudiencia'>
    


  /**
   * Reference to a field of type 'EstadoAudiencia[]'
   */
  export type ListEnumEstadoAudienciaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoAudiencia[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    correo?: StringFilter<"Usuario"> | string
    clave?: StringFilter<"Usuario"> | string
    rol?: EnumRolUsuarioFilter<"Usuario"> | $Enums.RolUsuario
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    casos?: CasoListRelationFilter
    casosAsignados?: CasoResponsableListRelationFilter
    audiencias?: AudienciaListRelationFilter
    citas?: CitaListRelationFilter
    recordatorios?: RecordatorioListRelationFilter
    reunionesCreadas?: ReunionListRelationFilter
    participacionesReunion?: ParticipanteReunionListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    clave?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    casos?: CasoOrderByRelationAggregateInput
    casosAsignados?: CasoResponsableOrderByRelationAggregateInput
    audiencias?: AudienciaOrderByRelationAggregateInput
    citas?: CitaOrderByRelationAggregateInput
    recordatorios?: RecordatorioOrderByRelationAggregateInput
    reunionesCreadas?: ReunionOrderByRelationAggregateInput
    participacionesReunion?: ParticipanteReunionOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    correo?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    clave?: StringFilter<"Usuario"> | string
    rol?: EnumRolUsuarioFilter<"Usuario"> | $Enums.RolUsuario
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    casos?: CasoListRelationFilter
    casosAsignados?: CasoResponsableListRelationFilter
    audiencias?: AudienciaListRelationFilter
    citas?: CitaListRelationFilter
    recordatorios?: RecordatorioListRelationFilter
    reunionesCreadas?: ReunionListRelationFilter
    participacionesReunion?: ParticipanteReunionListRelationFilter
  }, "id" | "correo">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    clave?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    correo?: StringWithAggregatesFilter<"Usuario"> | string
    clave?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: EnumRolUsuarioWithAggregatesFilter<"Usuario"> | $Enums.RolUsuario
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    nombre?: StringFilter<"Cliente"> | string
    correo?: StringFilter<"Cliente"> | string
    telefono?: StringFilter<"Cliente"> | string
    direccion?: StringNullableFilter<"Cliente"> | string | null
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    casos?: CasoListRelationFilter
    participacionesReunion?: ParticipanteReunionListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    casos?: CasoOrderByRelationAggregateInput
    participacionesReunion?: ParticipanteReunionOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    correo?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nombre?: StringFilter<"Cliente"> | string
    telefono?: StringFilter<"Cliente"> | string
    direccion?: StringNullableFilter<"Cliente"> | string | null
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    casos?: CasoListRelationFilter
    participacionesReunion?: ParticipanteReunionListRelationFilter
  }, "id" | "correo">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    nombre?: StringWithAggregatesFilter<"Cliente"> | string
    correo?: StringWithAggregatesFilter<"Cliente"> | string
    telefono?: StringWithAggregatesFilter<"Cliente"> | string
    direccion?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type CasoWhereInput = {
    AND?: CasoWhereInput | CasoWhereInput[]
    OR?: CasoWhereInput[]
    NOT?: CasoWhereInput | CasoWhereInput[]
    id?: IntFilter<"Caso"> | number
    numero?: StringFilter<"Caso"> | string
    asunto?: StringFilter<"Caso"> | string
    tipo?: StringFilter<"Caso"> | string
    estado?: EnumEstadoCasoFilter<"Caso"> | $Enums.EstadoCaso
    fechaInicio?: DateTimeFilter<"Caso"> | Date | string
    fechaCierre?: DateTimeNullableFilter<"Caso"> | Date | string | null
    usuarioId?: IntFilter<"Caso"> | number
    clienteId?: IntFilter<"Caso"> | number
    createdAt?: DateTimeFilter<"Caso"> | Date | string
    updatedAt?: DateTimeFilter<"Caso"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    audiencias?: AudienciaListRelationFilter
    citas?: CitaListRelationFilter
    recordatorios?: RecordatorioListRelationFilter
    responsables?: CasoResponsableListRelationFilter
    reuniones?: ReunionListRelationFilter
  }

  export type CasoOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    asunto?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    fechaInicio?: SortOrder
    fechaCierre?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    clienteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    cliente?: ClienteOrderByWithRelationInput
    audiencias?: AudienciaOrderByRelationAggregateInput
    citas?: CitaOrderByRelationAggregateInput
    recordatorios?: RecordatorioOrderByRelationAggregateInput
    responsables?: CasoResponsableOrderByRelationAggregateInput
    reuniones?: ReunionOrderByRelationAggregateInput
  }

  export type CasoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    numero?: string
    AND?: CasoWhereInput | CasoWhereInput[]
    OR?: CasoWhereInput[]
    NOT?: CasoWhereInput | CasoWhereInput[]
    asunto?: StringFilter<"Caso"> | string
    tipo?: StringFilter<"Caso"> | string
    estado?: EnumEstadoCasoFilter<"Caso"> | $Enums.EstadoCaso
    fechaInicio?: DateTimeFilter<"Caso"> | Date | string
    fechaCierre?: DateTimeNullableFilter<"Caso"> | Date | string | null
    usuarioId?: IntFilter<"Caso"> | number
    clienteId?: IntFilter<"Caso"> | number
    createdAt?: DateTimeFilter<"Caso"> | Date | string
    updatedAt?: DateTimeFilter<"Caso"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    audiencias?: AudienciaListRelationFilter
    citas?: CitaListRelationFilter
    recordatorios?: RecordatorioListRelationFilter
    responsables?: CasoResponsableListRelationFilter
    reuniones?: ReunionListRelationFilter
  }, "id" | "numero">

  export type CasoOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    asunto?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    fechaInicio?: SortOrder
    fechaCierre?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    clienteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CasoCountOrderByAggregateInput
    _avg?: CasoAvgOrderByAggregateInput
    _max?: CasoMaxOrderByAggregateInput
    _min?: CasoMinOrderByAggregateInput
    _sum?: CasoSumOrderByAggregateInput
  }

  export type CasoScalarWhereWithAggregatesInput = {
    AND?: CasoScalarWhereWithAggregatesInput | CasoScalarWhereWithAggregatesInput[]
    OR?: CasoScalarWhereWithAggregatesInput[]
    NOT?: CasoScalarWhereWithAggregatesInput | CasoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Caso"> | number
    numero?: StringWithAggregatesFilter<"Caso"> | string
    asunto?: StringWithAggregatesFilter<"Caso"> | string
    tipo?: StringWithAggregatesFilter<"Caso"> | string
    estado?: EnumEstadoCasoWithAggregatesFilter<"Caso"> | $Enums.EstadoCaso
    fechaInicio?: DateTimeWithAggregatesFilter<"Caso"> | Date | string
    fechaCierre?: DateTimeNullableWithAggregatesFilter<"Caso"> | Date | string | null
    usuarioId?: IntWithAggregatesFilter<"Caso"> | number
    clienteId?: IntWithAggregatesFilter<"Caso"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Caso"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Caso"> | Date | string
  }

  export type CasoResponsableWhereInput = {
    AND?: CasoResponsableWhereInput | CasoResponsableWhereInput[]
    OR?: CasoResponsableWhereInput[]
    NOT?: CasoResponsableWhereInput | CasoResponsableWhereInput[]
    id?: IntFilter<"CasoResponsable"> | number
    casoId?: IntFilter<"CasoResponsable"> | number
    usuarioId?: IntFilter<"CasoResponsable"> | number
    esPrincipal?: BoolFilter<"CasoResponsable"> | boolean
    createdAt?: DateTimeFilter<"CasoResponsable"> | Date | string
    caso?: XOR<CasoScalarRelationFilter, CasoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type CasoResponsableOrderByWithRelationInput = {
    id?: SortOrder
    casoId?: SortOrder
    usuarioId?: SortOrder
    esPrincipal?: SortOrder
    createdAt?: SortOrder
    caso?: CasoOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type CasoResponsableWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    casoId_usuarioId?: CasoResponsableCasoIdUsuarioIdCompoundUniqueInput
    AND?: CasoResponsableWhereInput | CasoResponsableWhereInput[]
    OR?: CasoResponsableWhereInput[]
    NOT?: CasoResponsableWhereInput | CasoResponsableWhereInput[]
    casoId?: IntFilter<"CasoResponsable"> | number
    usuarioId?: IntFilter<"CasoResponsable"> | number
    esPrincipal?: BoolFilter<"CasoResponsable"> | boolean
    createdAt?: DateTimeFilter<"CasoResponsable"> | Date | string
    caso?: XOR<CasoScalarRelationFilter, CasoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "casoId_usuarioId">

  export type CasoResponsableOrderByWithAggregationInput = {
    id?: SortOrder
    casoId?: SortOrder
    usuarioId?: SortOrder
    esPrincipal?: SortOrder
    createdAt?: SortOrder
    _count?: CasoResponsableCountOrderByAggregateInput
    _avg?: CasoResponsableAvgOrderByAggregateInput
    _max?: CasoResponsableMaxOrderByAggregateInput
    _min?: CasoResponsableMinOrderByAggregateInput
    _sum?: CasoResponsableSumOrderByAggregateInput
  }

  export type CasoResponsableScalarWhereWithAggregatesInput = {
    AND?: CasoResponsableScalarWhereWithAggregatesInput | CasoResponsableScalarWhereWithAggregatesInput[]
    OR?: CasoResponsableScalarWhereWithAggregatesInput[]
    NOT?: CasoResponsableScalarWhereWithAggregatesInput | CasoResponsableScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CasoResponsable"> | number
    casoId?: IntWithAggregatesFilter<"CasoResponsable"> | number
    usuarioId?: IntWithAggregatesFilter<"CasoResponsable"> | number
    esPrincipal?: BoolWithAggregatesFilter<"CasoResponsable"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CasoResponsable"> | Date | string
  }

  export type AudienciaWhereInput = {
    AND?: AudienciaWhereInput | AudienciaWhereInput[]
    OR?: AudienciaWhereInput[]
    NOT?: AudienciaWhereInput | AudienciaWhereInput[]
    id?: IntFilter<"Audiencia"> | number
    fecha?: DateTimeFilter<"Audiencia"> | Date | string
    lugar?: StringFilter<"Audiencia"> | string
    estado?: EnumEstadoAudienciaFilter<"Audiencia"> | $Enums.EstadoAudiencia
    observaciones?: StringNullableFilter<"Audiencia"> | string | null
    casoId?: IntFilter<"Audiencia"> | number
    usuarioId?: IntFilter<"Audiencia"> | number
    createdAt?: DateTimeFilter<"Audiencia"> | Date | string
    updatedAt?: DateTimeFilter<"Audiencia"> | Date | string
    caso?: XOR<CasoScalarRelationFilter, CasoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type AudienciaOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    lugar?: SortOrder
    estado?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    casoId?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    caso?: CasoOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type AudienciaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AudienciaWhereInput | AudienciaWhereInput[]
    OR?: AudienciaWhereInput[]
    NOT?: AudienciaWhereInput | AudienciaWhereInput[]
    fecha?: DateTimeFilter<"Audiencia"> | Date | string
    lugar?: StringFilter<"Audiencia"> | string
    estado?: EnumEstadoAudienciaFilter<"Audiencia"> | $Enums.EstadoAudiencia
    observaciones?: StringNullableFilter<"Audiencia"> | string | null
    casoId?: IntFilter<"Audiencia"> | number
    usuarioId?: IntFilter<"Audiencia"> | number
    createdAt?: DateTimeFilter<"Audiencia"> | Date | string
    updatedAt?: DateTimeFilter<"Audiencia"> | Date | string
    caso?: XOR<CasoScalarRelationFilter, CasoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type AudienciaOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    lugar?: SortOrder
    estado?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    casoId?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AudienciaCountOrderByAggregateInput
    _avg?: AudienciaAvgOrderByAggregateInput
    _max?: AudienciaMaxOrderByAggregateInput
    _min?: AudienciaMinOrderByAggregateInput
    _sum?: AudienciaSumOrderByAggregateInput
  }

  export type AudienciaScalarWhereWithAggregatesInput = {
    AND?: AudienciaScalarWhereWithAggregatesInput | AudienciaScalarWhereWithAggregatesInput[]
    OR?: AudienciaScalarWhereWithAggregatesInput[]
    NOT?: AudienciaScalarWhereWithAggregatesInput | AudienciaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Audiencia"> | number
    fecha?: DateTimeWithAggregatesFilter<"Audiencia"> | Date | string
    lugar?: StringWithAggregatesFilter<"Audiencia"> | string
    estado?: EnumEstadoAudienciaWithAggregatesFilter<"Audiencia"> | $Enums.EstadoAudiencia
    observaciones?: StringNullableWithAggregatesFilter<"Audiencia"> | string | null
    casoId?: IntWithAggregatesFilter<"Audiencia"> | number
    usuarioId?: IntWithAggregatesFilter<"Audiencia"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Audiencia"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Audiencia"> | Date | string
  }

  export type CitaWhereInput = {
    AND?: CitaWhereInput | CitaWhereInput[]
    OR?: CitaWhereInput[]
    NOT?: CitaWhereInput | CitaWhereInput[]
    id?: IntFilter<"Cita"> | number
    fecha?: DateTimeFilter<"Cita"> | Date | string
    asunto?: StringFilter<"Cita"> | string
    contacto?: StringFilter<"Cita"> | string
    casoId?: IntNullableFilter<"Cita"> | number | null
    usuarioId?: IntFilter<"Cita"> | number
    createdAt?: DateTimeFilter<"Cita"> | Date | string
    updatedAt?: DateTimeFilter<"Cita"> | Date | string
    caso?: XOR<CasoNullableScalarRelationFilter, CasoWhereInput> | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type CitaOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    asunto?: SortOrder
    contacto?: SortOrder
    casoId?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    caso?: CasoOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type CitaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CitaWhereInput | CitaWhereInput[]
    OR?: CitaWhereInput[]
    NOT?: CitaWhereInput | CitaWhereInput[]
    fecha?: DateTimeFilter<"Cita"> | Date | string
    asunto?: StringFilter<"Cita"> | string
    contacto?: StringFilter<"Cita"> | string
    casoId?: IntNullableFilter<"Cita"> | number | null
    usuarioId?: IntFilter<"Cita"> | number
    createdAt?: DateTimeFilter<"Cita"> | Date | string
    updatedAt?: DateTimeFilter<"Cita"> | Date | string
    caso?: XOR<CasoNullableScalarRelationFilter, CasoWhereInput> | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type CitaOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    asunto?: SortOrder
    contacto?: SortOrder
    casoId?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CitaCountOrderByAggregateInput
    _avg?: CitaAvgOrderByAggregateInput
    _max?: CitaMaxOrderByAggregateInput
    _min?: CitaMinOrderByAggregateInput
    _sum?: CitaSumOrderByAggregateInput
  }

  export type CitaScalarWhereWithAggregatesInput = {
    AND?: CitaScalarWhereWithAggregatesInput | CitaScalarWhereWithAggregatesInput[]
    OR?: CitaScalarWhereWithAggregatesInput[]
    NOT?: CitaScalarWhereWithAggregatesInput | CitaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cita"> | number
    fecha?: DateTimeWithAggregatesFilter<"Cita"> | Date | string
    asunto?: StringWithAggregatesFilter<"Cita"> | string
    contacto?: StringWithAggregatesFilter<"Cita"> | string
    casoId?: IntNullableWithAggregatesFilter<"Cita"> | number | null
    usuarioId?: IntWithAggregatesFilter<"Cita"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Cita"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cita"> | Date | string
  }

  export type RecordatorioWhereInput = {
    AND?: RecordatorioWhereInput | RecordatorioWhereInput[]
    OR?: RecordatorioWhereInput[]
    NOT?: RecordatorioWhereInput | RecordatorioWhereInput[]
    id?: IntFilter<"Recordatorio"> | number
    titulo?: StringFilter<"Recordatorio"> | string
    mensaje?: StringFilter<"Recordatorio"> | string
    fechaEnvio?: DateTimeFilter<"Recordatorio"> | Date | string
    leido?: BoolFilter<"Recordatorio"> | boolean
    casoId?: IntNullableFilter<"Recordatorio"> | number | null
    usuarioId?: IntFilter<"Recordatorio"> | number
    createdAt?: DateTimeFilter<"Recordatorio"> | Date | string
    updatedAt?: DateTimeFilter<"Recordatorio"> | Date | string
    caso?: XOR<CasoNullableScalarRelationFilter, CasoWhereInput> | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type RecordatorioOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    mensaje?: SortOrder
    fechaEnvio?: SortOrder
    leido?: SortOrder
    casoId?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    caso?: CasoOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type RecordatorioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecordatorioWhereInput | RecordatorioWhereInput[]
    OR?: RecordatorioWhereInput[]
    NOT?: RecordatorioWhereInput | RecordatorioWhereInput[]
    titulo?: StringFilter<"Recordatorio"> | string
    mensaje?: StringFilter<"Recordatorio"> | string
    fechaEnvio?: DateTimeFilter<"Recordatorio"> | Date | string
    leido?: BoolFilter<"Recordatorio"> | boolean
    casoId?: IntNullableFilter<"Recordatorio"> | number | null
    usuarioId?: IntFilter<"Recordatorio"> | number
    createdAt?: DateTimeFilter<"Recordatorio"> | Date | string
    updatedAt?: DateTimeFilter<"Recordatorio"> | Date | string
    caso?: XOR<CasoNullableScalarRelationFilter, CasoWhereInput> | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type RecordatorioOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    mensaje?: SortOrder
    fechaEnvio?: SortOrder
    leido?: SortOrder
    casoId?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RecordatorioCountOrderByAggregateInput
    _avg?: RecordatorioAvgOrderByAggregateInput
    _max?: RecordatorioMaxOrderByAggregateInput
    _min?: RecordatorioMinOrderByAggregateInput
    _sum?: RecordatorioSumOrderByAggregateInput
  }

  export type RecordatorioScalarWhereWithAggregatesInput = {
    AND?: RecordatorioScalarWhereWithAggregatesInput | RecordatorioScalarWhereWithAggregatesInput[]
    OR?: RecordatorioScalarWhereWithAggregatesInput[]
    NOT?: RecordatorioScalarWhereWithAggregatesInput | RecordatorioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Recordatorio"> | number
    titulo?: StringWithAggregatesFilter<"Recordatorio"> | string
    mensaje?: StringWithAggregatesFilter<"Recordatorio"> | string
    fechaEnvio?: DateTimeWithAggregatesFilter<"Recordatorio"> | Date | string
    leido?: BoolWithAggregatesFilter<"Recordatorio"> | boolean
    casoId?: IntNullableWithAggregatesFilter<"Recordatorio"> | number | null
    usuarioId?: IntWithAggregatesFilter<"Recordatorio"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Recordatorio"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Recordatorio"> | Date | string
  }

  export type ReunionWhereInput = {
    AND?: ReunionWhereInput | ReunionWhereInput[]
    OR?: ReunionWhereInput[]
    NOT?: ReunionWhereInput | ReunionWhereInput[]
    id?: IntFilter<"Reunion"> | number
    titulo?: StringFilter<"Reunion"> | string
    fecha?: DateTimeFilter<"Reunion"> | Date | string
    lugar?: StringNullableFilter<"Reunion"> | string | null
    observaciones?: StringNullableFilter<"Reunion"> | string | null
    casoId?: IntNullableFilter<"Reunion"> | number | null
    creadorId?: IntFilter<"Reunion"> | number
    createdAt?: DateTimeFilter<"Reunion"> | Date | string
    updatedAt?: DateTimeFilter<"Reunion"> | Date | string
    caso?: XOR<CasoNullableScalarRelationFilter, CasoWhereInput> | null
    creador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    participantes?: ParticipanteReunionListRelationFilter
  }

  export type ReunionOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    fecha?: SortOrder
    lugar?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    casoId?: SortOrderInput | SortOrder
    creadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    caso?: CasoOrderByWithRelationInput
    creador?: UsuarioOrderByWithRelationInput
    participantes?: ParticipanteReunionOrderByRelationAggregateInput
  }

  export type ReunionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReunionWhereInput | ReunionWhereInput[]
    OR?: ReunionWhereInput[]
    NOT?: ReunionWhereInput | ReunionWhereInput[]
    titulo?: StringFilter<"Reunion"> | string
    fecha?: DateTimeFilter<"Reunion"> | Date | string
    lugar?: StringNullableFilter<"Reunion"> | string | null
    observaciones?: StringNullableFilter<"Reunion"> | string | null
    casoId?: IntNullableFilter<"Reunion"> | number | null
    creadorId?: IntFilter<"Reunion"> | number
    createdAt?: DateTimeFilter<"Reunion"> | Date | string
    updatedAt?: DateTimeFilter<"Reunion"> | Date | string
    caso?: XOR<CasoNullableScalarRelationFilter, CasoWhereInput> | null
    creador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    participantes?: ParticipanteReunionListRelationFilter
  }, "id">

  export type ReunionOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    fecha?: SortOrder
    lugar?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    casoId?: SortOrderInput | SortOrder
    creadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReunionCountOrderByAggregateInput
    _avg?: ReunionAvgOrderByAggregateInput
    _max?: ReunionMaxOrderByAggregateInput
    _min?: ReunionMinOrderByAggregateInput
    _sum?: ReunionSumOrderByAggregateInput
  }

  export type ReunionScalarWhereWithAggregatesInput = {
    AND?: ReunionScalarWhereWithAggregatesInput | ReunionScalarWhereWithAggregatesInput[]
    OR?: ReunionScalarWhereWithAggregatesInput[]
    NOT?: ReunionScalarWhereWithAggregatesInput | ReunionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reunion"> | number
    titulo?: StringWithAggregatesFilter<"Reunion"> | string
    fecha?: DateTimeWithAggregatesFilter<"Reunion"> | Date | string
    lugar?: StringNullableWithAggregatesFilter<"Reunion"> | string | null
    observaciones?: StringNullableWithAggregatesFilter<"Reunion"> | string | null
    casoId?: IntNullableWithAggregatesFilter<"Reunion"> | number | null
    creadorId?: IntWithAggregatesFilter<"Reunion"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Reunion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reunion"> | Date | string
  }

  export type ParticipanteReunionWhereInput = {
    AND?: ParticipanteReunionWhereInput | ParticipanteReunionWhereInput[]
    OR?: ParticipanteReunionWhereInput[]
    NOT?: ParticipanteReunionWhereInput | ParticipanteReunionWhereInput[]
    id?: IntFilter<"ParticipanteReunion"> | number
    reunionId?: IntFilter<"ParticipanteReunion"> | number
    usuarioId?: IntNullableFilter<"ParticipanteReunion"> | number | null
    clienteId?: IntNullableFilter<"ParticipanteReunion"> | number | null
    nombreExterno?: StringNullableFilter<"ParticipanteReunion"> | string | null
    correoExterno?: StringNullableFilter<"ParticipanteReunion"> | string | null
    reunion?: XOR<ReunionScalarRelationFilter, ReunionWhereInput>
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    cliente?: XOR<ClienteNullableScalarRelationFilter, ClienteWhereInput> | null
  }

  export type ParticipanteReunionOrderByWithRelationInput = {
    id?: SortOrder
    reunionId?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    clienteId?: SortOrderInput | SortOrder
    nombreExterno?: SortOrderInput | SortOrder
    correoExterno?: SortOrderInput | SortOrder
    reunion?: ReunionOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
    cliente?: ClienteOrderByWithRelationInput
  }

  export type ParticipanteReunionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParticipanteReunionWhereInput | ParticipanteReunionWhereInput[]
    OR?: ParticipanteReunionWhereInput[]
    NOT?: ParticipanteReunionWhereInput | ParticipanteReunionWhereInput[]
    reunionId?: IntFilter<"ParticipanteReunion"> | number
    usuarioId?: IntNullableFilter<"ParticipanteReunion"> | number | null
    clienteId?: IntNullableFilter<"ParticipanteReunion"> | number | null
    nombreExterno?: StringNullableFilter<"ParticipanteReunion"> | string | null
    correoExterno?: StringNullableFilter<"ParticipanteReunion"> | string | null
    reunion?: XOR<ReunionScalarRelationFilter, ReunionWhereInput>
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    cliente?: XOR<ClienteNullableScalarRelationFilter, ClienteWhereInput> | null
  }, "id">

  export type ParticipanteReunionOrderByWithAggregationInput = {
    id?: SortOrder
    reunionId?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    clienteId?: SortOrderInput | SortOrder
    nombreExterno?: SortOrderInput | SortOrder
    correoExterno?: SortOrderInput | SortOrder
    _count?: ParticipanteReunionCountOrderByAggregateInput
    _avg?: ParticipanteReunionAvgOrderByAggregateInput
    _max?: ParticipanteReunionMaxOrderByAggregateInput
    _min?: ParticipanteReunionMinOrderByAggregateInput
    _sum?: ParticipanteReunionSumOrderByAggregateInput
  }

  export type ParticipanteReunionScalarWhereWithAggregatesInput = {
    AND?: ParticipanteReunionScalarWhereWithAggregatesInput | ParticipanteReunionScalarWhereWithAggregatesInput[]
    OR?: ParticipanteReunionScalarWhereWithAggregatesInput[]
    NOT?: ParticipanteReunionScalarWhereWithAggregatesInput | ParticipanteReunionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ParticipanteReunion"> | number
    reunionId?: IntWithAggregatesFilter<"ParticipanteReunion"> | number
    usuarioId?: IntNullableWithAggregatesFilter<"ParticipanteReunion"> | number | null
    clienteId?: IntNullableWithAggregatesFilter<"ParticipanteReunion"> | number | null
    nombreExterno?: StringNullableWithAggregatesFilter<"ParticipanteReunion"> | string | null
    correoExterno?: StringNullableWithAggregatesFilter<"ParticipanteReunion"> | string | null
  }

  export type UsuarioCreateInput = {
    nombre: string
    correo: string
    clave: string
    rol?: $Enums.RolUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    casos?: CasoCreateNestedManyWithoutUsuarioInput
    casosAsignados?: CasoResponsableCreateNestedManyWithoutUsuarioInput
    audiencias?: AudienciaCreateNestedManyWithoutUsuarioInput
    citas?: CitaCreateNestedManyWithoutUsuarioInput
    recordatorios?: RecordatorioCreateNestedManyWithoutUsuarioInput
    reunionesCreadas?: ReunionCreateNestedManyWithoutCreadorInput
    participacionesReunion?: ParticipanteReunionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    correo: string
    clave: string
    rol?: $Enums.RolUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    casos?: CasoUncheckedCreateNestedManyWithoutUsuarioInput
    casosAsignados?: CasoResponsableUncheckedCreateNestedManyWithoutUsuarioInput
    audiencias?: AudienciaUncheckedCreateNestedManyWithoutUsuarioInput
    citas?: CitaUncheckedCreateNestedManyWithoutUsuarioInput
    recordatorios?: RecordatorioUncheckedCreateNestedManyWithoutUsuarioInput
    reunionesCreadas?: ReunionUncheckedCreateNestedManyWithoutCreadorInput
    participacionesReunion?: ParticipanteReunionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casos?: CasoUpdateManyWithoutUsuarioNestedInput
    casosAsignados?: CasoResponsableUpdateManyWithoutUsuarioNestedInput
    audiencias?: AudienciaUpdateManyWithoutUsuarioNestedInput
    citas?: CitaUpdateManyWithoutUsuarioNestedInput
    recordatorios?: RecordatorioUpdateManyWithoutUsuarioNestedInput
    reunionesCreadas?: ReunionUpdateManyWithoutCreadorNestedInput
    participacionesReunion?: ParticipanteReunionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casos?: CasoUncheckedUpdateManyWithoutUsuarioNestedInput
    casosAsignados?: CasoResponsableUncheckedUpdateManyWithoutUsuarioNestedInput
    audiencias?: AudienciaUncheckedUpdateManyWithoutUsuarioNestedInput
    citas?: CitaUncheckedUpdateManyWithoutUsuarioNestedInput
    recordatorios?: RecordatorioUncheckedUpdateManyWithoutUsuarioNestedInput
    reunionesCreadas?: ReunionUncheckedUpdateManyWithoutCreadorNestedInput
    participacionesReunion?: ParticipanteReunionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    correo: string
    clave: string
    rol?: $Enums.RolUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteCreateInput = {
    nombre: string
    correo: string
    telefono: string
    direccion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    casos?: CasoCreateNestedManyWithoutClienteInput
    participacionesReunion?: ParticipanteReunionCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    nombre: string
    correo: string
    telefono: string
    direccion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    casos?: CasoUncheckedCreateNestedManyWithoutClienteInput
    participacionesReunion?: ParticipanteReunionUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casos?: CasoUpdateManyWithoutClienteNestedInput
    participacionesReunion?: ParticipanteReunionUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casos?: CasoUncheckedUpdateManyWithoutClienteNestedInput
    participacionesReunion?: ParticipanteReunionUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: number
    nombre: string
    correo: string
    telefono: string
    direccion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasoCreateInput = {
    numero: string
    asunto: string
    tipo: string
    estado?: $Enums.EstadoCaso
    fechaInicio: Date | string
    fechaCierre?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCasosInput
    cliente: ClienteCreateNestedOneWithoutCasosInput
    audiencias?: AudienciaCreateNestedManyWithoutCasoInput
    citas?: CitaCreateNestedManyWithoutCasoInput
    recordatorios?: RecordatorioCreateNestedManyWithoutCasoInput
    responsables?: CasoResponsableCreateNestedManyWithoutCasoInput
    reuniones?: ReunionCreateNestedManyWithoutCasoInput
  }

  export type CasoUncheckedCreateInput = {
    id?: number
    numero: string
    asunto: string
    tipo: string
    estado?: $Enums.EstadoCaso
    fechaInicio: Date | string
    fechaCierre?: Date | string | null
    usuarioId: number
    clienteId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    audiencias?: AudienciaUncheckedCreateNestedManyWithoutCasoInput
    citas?: CitaUncheckedCreateNestedManyWithoutCasoInput
    recordatorios?: RecordatorioUncheckedCreateNestedManyWithoutCasoInput
    responsables?: CasoResponsableUncheckedCreateNestedManyWithoutCasoInput
    reuniones?: ReunionUncheckedCreateNestedManyWithoutCasoInput
  }

  export type CasoUpdateInput = {
    numero?: StringFieldUpdateOperationsInput | string
    asunto?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoCasoFieldUpdateOperationsInput | $Enums.EstadoCaso
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCasosNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutCasosNestedInput
    audiencias?: AudienciaUpdateManyWithoutCasoNestedInput
    citas?: CitaUpdateManyWithoutCasoNestedInput
    recordatorios?: RecordatorioUpdateManyWithoutCasoNestedInput
    responsables?: CasoResponsableUpdateManyWithoutCasoNestedInput
    reuniones?: ReunionUpdateManyWithoutCasoNestedInput
  }

  export type CasoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    asunto?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoCasoFieldUpdateOperationsInput | $Enums.EstadoCaso
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audiencias?: AudienciaUncheckedUpdateManyWithoutCasoNestedInput
    citas?: CitaUncheckedUpdateManyWithoutCasoNestedInput
    recordatorios?: RecordatorioUncheckedUpdateManyWithoutCasoNestedInput
    responsables?: CasoResponsableUncheckedUpdateManyWithoutCasoNestedInput
    reuniones?: ReunionUncheckedUpdateManyWithoutCasoNestedInput
  }

  export type CasoCreateManyInput = {
    id?: number
    numero: string
    asunto: string
    tipo: string
    estado?: $Enums.EstadoCaso
    fechaInicio: Date | string
    fechaCierre?: Date | string | null
    usuarioId: number
    clienteId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CasoUpdateManyMutationInput = {
    numero?: StringFieldUpdateOperationsInput | string
    asunto?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoCasoFieldUpdateOperationsInput | $Enums.EstadoCaso
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    asunto?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoCasoFieldUpdateOperationsInput | $Enums.EstadoCaso
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasoResponsableCreateInput = {
    esPrincipal?: boolean
    createdAt?: Date | string
    caso: CasoCreateNestedOneWithoutResponsablesInput
    usuario: UsuarioCreateNestedOneWithoutCasosAsignadosInput
  }

  export type CasoResponsableUncheckedCreateInput = {
    id?: number
    casoId: number
    usuarioId: number
    esPrincipal?: boolean
    createdAt?: Date | string
  }

  export type CasoResponsableUpdateInput = {
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caso?: CasoUpdateOneRequiredWithoutResponsablesNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutCasosAsignadosNestedInput
  }

  export type CasoResponsableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    casoId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasoResponsableCreateManyInput = {
    id?: number
    casoId: number
    usuarioId: number
    esPrincipal?: boolean
    createdAt?: Date | string
  }

  export type CasoResponsableUpdateManyMutationInput = {
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasoResponsableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    casoId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudienciaCreateInput = {
    fecha: Date | string
    lugar: string
    estado?: $Enums.EstadoAudiencia
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    caso: CasoCreateNestedOneWithoutAudienciasInput
    usuario: UsuarioCreateNestedOneWithoutAudienciasInput
  }

  export type AudienciaUncheckedCreateInput = {
    id?: number
    fecha: Date | string
    lugar: string
    estado?: $Enums.EstadoAudiencia
    observaciones?: string | null
    casoId: number
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AudienciaUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAudienciaFieldUpdateOperationsInput | $Enums.EstadoAudiencia
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caso?: CasoUpdateOneRequiredWithoutAudienciasNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutAudienciasNestedInput
  }

  export type AudienciaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAudienciaFieldUpdateOperationsInput | $Enums.EstadoAudiencia
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    casoId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudienciaCreateManyInput = {
    id?: number
    fecha: Date | string
    lugar: string
    estado?: $Enums.EstadoAudiencia
    observaciones?: string | null
    casoId: number
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AudienciaUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAudienciaFieldUpdateOperationsInput | $Enums.EstadoAudiencia
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudienciaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAudienciaFieldUpdateOperationsInput | $Enums.EstadoAudiencia
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    casoId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitaCreateInput = {
    fecha: Date | string
    asunto: string
    contacto: string
    createdAt?: Date | string
    updatedAt?: Date | string
    caso?: CasoCreateNestedOneWithoutCitasInput
    usuario: UsuarioCreateNestedOneWithoutCitasInput
  }

  export type CitaUncheckedCreateInput = {
    id?: number
    fecha: Date | string
    asunto: string
    contacto: string
    casoId?: number | null
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CitaUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    asunto?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caso?: CasoUpdateOneWithoutCitasNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutCitasNestedInput
  }

  export type CitaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    asunto?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    casoId?: NullableIntFieldUpdateOperationsInput | number | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitaCreateManyInput = {
    id?: number
    fecha: Date | string
    asunto: string
    contacto: string
    casoId?: number | null
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CitaUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    asunto?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    asunto?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    casoId?: NullableIntFieldUpdateOperationsInput | number | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordatorioCreateInput = {
    titulo: string
    mensaje: string
    fechaEnvio: Date | string
    leido?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    caso?: CasoCreateNestedOneWithoutRecordatoriosInput
    usuario: UsuarioCreateNestedOneWithoutRecordatoriosInput
  }

  export type RecordatorioUncheckedCreateInput = {
    id?: number
    titulo: string
    mensaje: string
    fechaEnvio: Date | string
    leido?: boolean
    casoId?: number | null
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecordatorioUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    fechaEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caso?: CasoUpdateOneWithoutRecordatoriosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutRecordatoriosNestedInput
  }

  export type RecordatorioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    fechaEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    casoId?: NullableIntFieldUpdateOperationsInput | number | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordatorioCreateManyInput = {
    id?: number
    titulo: string
    mensaje: string
    fechaEnvio: Date | string
    leido?: boolean
    casoId?: number | null
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecordatorioUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    fechaEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordatorioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    fechaEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    casoId?: NullableIntFieldUpdateOperationsInput | number | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReunionCreateInput = {
    titulo: string
    fecha: Date | string
    lugar?: string | null
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    caso?: CasoCreateNestedOneWithoutReunionesInput
    creador: UsuarioCreateNestedOneWithoutReunionesCreadasInput
    participantes?: ParticipanteReunionCreateNestedManyWithoutReunionInput
  }

  export type ReunionUncheckedCreateInput = {
    id?: number
    titulo: string
    fecha: Date | string
    lugar?: string | null
    observaciones?: string | null
    casoId?: number | null
    creadorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    participantes?: ParticipanteReunionUncheckedCreateNestedManyWithoutReunionInput
  }

  export type ReunionUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caso?: CasoUpdateOneWithoutReunionesNestedInput
    creador?: UsuarioUpdateOneRequiredWithoutReunionesCreadasNestedInput
    participantes?: ParticipanteReunionUpdateManyWithoutReunionNestedInput
  }

  export type ReunionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    casoId?: NullableIntFieldUpdateOperationsInput | number | null
    creadorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: ParticipanteReunionUncheckedUpdateManyWithoutReunionNestedInput
  }

  export type ReunionCreateManyInput = {
    id?: number
    titulo: string
    fecha: Date | string
    lugar?: string | null
    observaciones?: string | null
    casoId?: number | null
    creadorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReunionUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReunionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    casoId?: NullableIntFieldUpdateOperationsInput | number | null
    creadorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipanteReunionCreateInput = {
    nombreExterno?: string | null
    correoExterno?: string | null
    reunion: ReunionCreateNestedOneWithoutParticipantesInput
    usuario?: UsuarioCreateNestedOneWithoutParticipacionesReunionInput
    cliente?: ClienteCreateNestedOneWithoutParticipacionesReunionInput
  }

  export type ParticipanteReunionUncheckedCreateInput = {
    id?: number
    reunionId: number
    usuarioId?: number | null
    clienteId?: number | null
    nombreExterno?: string | null
    correoExterno?: string | null
  }

  export type ParticipanteReunionUpdateInput = {
    nombreExterno?: NullableStringFieldUpdateOperationsInput | string | null
    correoExterno?: NullableStringFieldUpdateOperationsInput | string | null
    reunion?: ReunionUpdateOneRequiredWithoutParticipantesNestedInput
    usuario?: UsuarioUpdateOneWithoutParticipacionesReunionNestedInput
    cliente?: ClienteUpdateOneWithoutParticipacionesReunionNestedInput
  }

  export type ParticipanteReunionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reunionId?: IntFieldUpdateOperationsInput | number
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    clienteId?: NullableIntFieldUpdateOperationsInput | number | null
    nombreExterno?: NullableStringFieldUpdateOperationsInput | string | null
    correoExterno?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParticipanteReunionCreateManyInput = {
    id?: number
    reunionId: number
    usuarioId?: number | null
    clienteId?: number | null
    nombreExterno?: string | null
    correoExterno?: string | null
  }

  export type ParticipanteReunionUpdateManyMutationInput = {
    nombreExterno?: NullableStringFieldUpdateOperationsInput | string | null
    correoExterno?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParticipanteReunionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reunionId?: IntFieldUpdateOperationsInput | number
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    clienteId?: NullableIntFieldUpdateOperationsInput | number | null
    nombreExterno?: NullableStringFieldUpdateOperationsInput | string | null
    correoExterno?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRolUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.RolUsuario | EnumRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumRolUsuarioFilter<$PrismaModel> | $Enums.RolUsuario
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CasoListRelationFilter = {
    every?: CasoWhereInput
    some?: CasoWhereInput
    none?: CasoWhereInput
  }

  export type CasoResponsableListRelationFilter = {
    every?: CasoResponsableWhereInput
    some?: CasoResponsableWhereInput
    none?: CasoResponsableWhereInput
  }

  export type AudienciaListRelationFilter = {
    every?: AudienciaWhereInput
    some?: AudienciaWhereInput
    none?: AudienciaWhereInput
  }

  export type CitaListRelationFilter = {
    every?: CitaWhereInput
    some?: CitaWhereInput
    none?: CitaWhereInput
  }

  export type RecordatorioListRelationFilter = {
    every?: RecordatorioWhereInput
    some?: RecordatorioWhereInput
    none?: RecordatorioWhereInput
  }

  export type ReunionListRelationFilter = {
    every?: ReunionWhereInput
    some?: ReunionWhereInput
    none?: ReunionWhereInput
  }

  export type ParticipanteReunionListRelationFilter = {
    every?: ParticipanteReunionWhereInput
    some?: ParticipanteReunionWhereInput
    none?: ParticipanteReunionWhereInput
  }

  export type CasoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CasoResponsableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AudienciaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CitaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecordatorioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReunionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipanteReunionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    clave?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    clave?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    clave?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRolUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RolUsuario | EnumRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumRolUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.RolUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolUsuarioFilter<$PrismaModel>
    _max?: NestedEnumRolUsuarioFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumEstadoCasoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCaso | EnumEstadoCasoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCaso[] | ListEnumEstadoCasoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoCaso[] | ListEnumEstadoCasoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoCasoFilter<$PrismaModel> | $Enums.EstadoCaso
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type CasoCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    asunto?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    fechaInicio?: SortOrder
    fechaCierre?: SortOrder
    usuarioId?: SortOrder
    clienteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CasoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    clienteId?: SortOrder
  }

  export type CasoMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    asunto?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    fechaInicio?: SortOrder
    fechaCierre?: SortOrder
    usuarioId?: SortOrder
    clienteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CasoMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    asunto?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    fechaInicio?: SortOrder
    fechaCierre?: SortOrder
    usuarioId?: SortOrder
    clienteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CasoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    clienteId?: SortOrder
  }

  export type EnumEstadoCasoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCaso | EnumEstadoCasoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCaso[] | ListEnumEstadoCasoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoCaso[] | ListEnumEstadoCasoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoCasoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoCaso
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoCasoFilter<$PrismaModel>
    _max?: NestedEnumEstadoCasoFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CasoScalarRelationFilter = {
    is?: CasoWhereInput
    isNot?: CasoWhereInput
  }

  export type CasoResponsableCasoIdUsuarioIdCompoundUniqueInput = {
    casoId: number
    usuarioId: number
  }

  export type CasoResponsableCountOrderByAggregateInput = {
    id?: SortOrder
    casoId?: SortOrder
    usuarioId?: SortOrder
    esPrincipal?: SortOrder
    createdAt?: SortOrder
  }

  export type CasoResponsableAvgOrderByAggregateInput = {
    id?: SortOrder
    casoId?: SortOrder
    usuarioId?: SortOrder
  }

  export type CasoResponsableMaxOrderByAggregateInput = {
    id?: SortOrder
    casoId?: SortOrder
    usuarioId?: SortOrder
    esPrincipal?: SortOrder
    createdAt?: SortOrder
  }

  export type CasoResponsableMinOrderByAggregateInput = {
    id?: SortOrder
    casoId?: SortOrder
    usuarioId?: SortOrder
    esPrincipal?: SortOrder
    createdAt?: SortOrder
  }

  export type CasoResponsableSumOrderByAggregateInput = {
    id?: SortOrder
    casoId?: SortOrder
    usuarioId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumEstadoAudienciaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAudiencia | EnumEstadoAudienciaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAudiencia[] | ListEnumEstadoAudienciaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAudiencia[] | ListEnumEstadoAudienciaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAudienciaFilter<$PrismaModel> | $Enums.EstadoAudiencia
  }

  export type AudienciaCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    lugar?: SortOrder
    estado?: SortOrder
    observaciones?: SortOrder
    casoId?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AudienciaAvgOrderByAggregateInput = {
    id?: SortOrder
    casoId?: SortOrder
    usuarioId?: SortOrder
  }

  export type AudienciaMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    lugar?: SortOrder
    estado?: SortOrder
    observaciones?: SortOrder
    casoId?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AudienciaMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    lugar?: SortOrder
    estado?: SortOrder
    observaciones?: SortOrder
    casoId?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AudienciaSumOrderByAggregateInput = {
    id?: SortOrder
    casoId?: SortOrder
    usuarioId?: SortOrder
  }

  export type EnumEstadoAudienciaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAudiencia | EnumEstadoAudienciaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAudiencia[] | ListEnumEstadoAudienciaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAudiencia[] | ListEnumEstadoAudienciaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAudienciaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoAudiencia
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoAudienciaFilter<$PrismaModel>
    _max?: NestedEnumEstadoAudienciaFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CasoNullableScalarRelationFilter = {
    is?: CasoWhereInput | null
    isNot?: CasoWhereInput | null
  }

  export type CitaCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    asunto?: SortOrder
    contacto?: SortOrder
    casoId?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CitaAvgOrderByAggregateInput = {
    id?: SortOrder
    casoId?: SortOrder
    usuarioId?: SortOrder
  }

  export type CitaMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    asunto?: SortOrder
    contacto?: SortOrder
    casoId?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CitaMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    asunto?: SortOrder
    contacto?: SortOrder
    casoId?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CitaSumOrderByAggregateInput = {
    id?: SortOrder
    casoId?: SortOrder
    usuarioId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type RecordatorioCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    mensaje?: SortOrder
    fechaEnvio?: SortOrder
    leido?: SortOrder
    casoId?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecordatorioAvgOrderByAggregateInput = {
    id?: SortOrder
    casoId?: SortOrder
    usuarioId?: SortOrder
  }

  export type RecordatorioMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    mensaje?: SortOrder
    fechaEnvio?: SortOrder
    leido?: SortOrder
    casoId?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecordatorioMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    mensaje?: SortOrder
    fechaEnvio?: SortOrder
    leido?: SortOrder
    casoId?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecordatorioSumOrderByAggregateInput = {
    id?: SortOrder
    casoId?: SortOrder
    usuarioId?: SortOrder
  }

  export type ReunionCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    fecha?: SortOrder
    lugar?: SortOrder
    observaciones?: SortOrder
    casoId?: SortOrder
    creadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReunionAvgOrderByAggregateInput = {
    id?: SortOrder
    casoId?: SortOrder
    creadorId?: SortOrder
  }

  export type ReunionMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    fecha?: SortOrder
    lugar?: SortOrder
    observaciones?: SortOrder
    casoId?: SortOrder
    creadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReunionMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    fecha?: SortOrder
    lugar?: SortOrder
    observaciones?: SortOrder
    casoId?: SortOrder
    creadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReunionSumOrderByAggregateInput = {
    id?: SortOrder
    casoId?: SortOrder
    creadorId?: SortOrder
  }

  export type ReunionScalarRelationFilter = {
    is?: ReunionWhereInput
    isNot?: ReunionWhereInput
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type ClienteNullableScalarRelationFilter = {
    is?: ClienteWhereInput | null
    isNot?: ClienteWhereInput | null
  }

  export type ParticipanteReunionCountOrderByAggregateInput = {
    id?: SortOrder
    reunionId?: SortOrder
    usuarioId?: SortOrder
    clienteId?: SortOrder
    nombreExterno?: SortOrder
    correoExterno?: SortOrder
  }

  export type ParticipanteReunionAvgOrderByAggregateInput = {
    id?: SortOrder
    reunionId?: SortOrder
    usuarioId?: SortOrder
    clienteId?: SortOrder
  }

  export type ParticipanteReunionMaxOrderByAggregateInput = {
    id?: SortOrder
    reunionId?: SortOrder
    usuarioId?: SortOrder
    clienteId?: SortOrder
    nombreExterno?: SortOrder
    correoExterno?: SortOrder
  }

  export type ParticipanteReunionMinOrderByAggregateInput = {
    id?: SortOrder
    reunionId?: SortOrder
    usuarioId?: SortOrder
    clienteId?: SortOrder
    nombreExterno?: SortOrder
    correoExterno?: SortOrder
  }

  export type ParticipanteReunionSumOrderByAggregateInput = {
    id?: SortOrder
    reunionId?: SortOrder
    usuarioId?: SortOrder
    clienteId?: SortOrder
  }

  export type CasoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CasoCreateWithoutUsuarioInput, CasoUncheckedCreateWithoutUsuarioInput> | CasoCreateWithoutUsuarioInput[] | CasoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CasoCreateOrConnectWithoutUsuarioInput | CasoCreateOrConnectWithoutUsuarioInput[]
    createMany?: CasoCreateManyUsuarioInputEnvelope
    connect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
  }

  export type CasoResponsableCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CasoResponsableCreateWithoutUsuarioInput, CasoResponsableUncheckedCreateWithoutUsuarioInput> | CasoResponsableCreateWithoutUsuarioInput[] | CasoResponsableUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CasoResponsableCreateOrConnectWithoutUsuarioInput | CasoResponsableCreateOrConnectWithoutUsuarioInput[]
    createMany?: CasoResponsableCreateManyUsuarioInputEnvelope
    connect?: CasoResponsableWhereUniqueInput | CasoResponsableWhereUniqueInput[]
  }

  export type AudienciaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AudienciaCreateWithoutUsuarioInput, AudienciaUncheckedCreateWithoutUsuarioInput> | AudienciaCreateWithoutUsuarioInput[] | AudienciaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AudienciaCreateOrConnectWithoutUsuarioInput | AudienciaCreateOrConnectWithoutUsuarioInput[]
    createMany?: AudienciaCreateManyUsuarioInputEnvelope
    connect?: AudienciaWhereUniqueInput | AudienciaWhereUniqueInput[]
  }

  export type CitaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CitaCreateWithoutUsuarioInput, CitaUncheckedCreateWithoutUsuarioInput> | CitaCreateWithoutUsuarioInput[] | CitaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutUsuarioInput | CitaCreateOrConnectWithoutUsuarioInput[]
    createMany?: CitaCreateManyUsuarioInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type RecordatorioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RecordatorioCreateWithoutUsuarioInput, RecordatorioUncheckedCreateWithoutUsuarioInput> | RecordatorioCreateWithoutUsuarioInput[] | RecordatorioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RecordatorioCreateOrConnectWithoutUsuarioInput | RecordatorioCreateOrConnectWithoutUsuarioInput[]
    createMany?: RecordatorioCreateManyUsuarioInputEnvelope
    connect?: RecordatorioWhereUniqueInput | RecordatorioWhereUniqueInput[]
  }

  export type ReunionCreateNestedManyWithoutCreadorInput = {
    create?: XOR<ReunionCreateWithoutCreadorInput, ReunionUncheckedCreateWithoutCreadorInput> | ReunionCreateWithoutCreadorInput[] | ReunionUncheckedCreateWithoutCreadorInput[]
    connectOrCreate?: ReunionCreateOrConnectWithoutCreadorInput | ReunionCreateOrConnectWithoutCreadorInput[]
    createMany?: ReunionCreateManyCreadorInputEnvelope
    connect?: ReunionWhereUniqueInput | ReunionWhereUniqueInput[]
  }

  export type ParticipanteReunionCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ParticipanteReunionCreateWithoutUsuarioInput, ParticipanteReunionUncheckedCreateWithoutUsuarioInput> | ParticipanteReunionCreateWithoutUsuarioInput[] | ParticipanteReunionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ParticipanteReunionCreateOrConnectWithoutUsuarioInput | ParticipanteReunionCreateOrConnectWithoutUsuarioInput[]
    createMany?: ParticipanteReunionCreateManyUsuarioInputEnvelope
    connect?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
  }

  export type CasoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CasoCreateWithoutUsuarioInput, CasoUncheckedCreateWithoutUsuarioInput> | CasoCreateWithoutUsuarioInput[] | CasoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CasoCreateOrConnectWithoutUsuarioInput | CasoCreateOrConnectWithoutUsuarioInput[]
    createMany?: CasoCreateManyUsuarioInputEnvelope
    connect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
  }

  export type CasoResponsableUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CasoResponsableCreateWithoutUsuarioInput, CasoResponsableUncheckedCreateWithoutUsuarioInput> | CasoResponsableCreateWithoutUsuarioInput[] | CasoResponsableUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CasoResponsableCreateOrConnectWithoutUsuarioInput | CasoResponsableCreateOrConnectWithoutUsuarioInput[]
    createMany?: CasoResponsableCreateManyUsuarioInputEnvelope
    connect?: CasoResponsableWhereUniqueInput | CasoResponsableWhereUniqueInput[]
  }

  export type AudienciaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AudienciaCreateWithoutUsuarioInput, AudienciaUncheckedCreateWithoutUsuarioInput> | AudienciaCreateWithoutUsuarioInput[] | AudienciaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AudienciaCreateOrConnectWithoutUsuarioInput | AudienciaCreateOrConnectWithoutUsuarioInput[]
    createMany?: AudienciaCreateManyUsuarioInputEnvelope
    connect?: AudienciaWhereUniqueInput | AudienciaWhereUniqueInput[]
  }

  export type CitaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CitaCreateWithoutUsuarioInput, CitaUncheckedCreateWithoutUsuarioInput> | CitaCreateWithoutUsuarioInput[] | CitaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutUsuarioInput | CitaCreateOrConnectWithoutUsuarioInput[]
    createMany?: CitaCreateManyUsuarioInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type RecordatorioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RecordatorioCreateWithoutUsuarioInput, RecordatorioUncheckedCreateWithoutUsuarioInput> | RecordatorioCreateWithoutUsuarioInput[] | RecordatorioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RecordatorioCreateOrConnectWithoutUsuarioInput | RecordatorioCreateOrConnectWithoutUsuarioInput[]
    createMany?: RecordatorioCreateManyUsuarioInputEnvelope
    connect?: RecordatorioWhereUniqueInput | RecordatorioWhereUniqueInput[]
  }

  export type ReunionUncheckedCreateNestedManyWithoutCreadorInput = {
    create?: XOR<ReunionCreateWithoutCreadorInput, ReunionUncheckedCreateWithoutCreadorInput> | ReunionCreateWithoutCreadorInput[] | ReunionUncheckedCreateWithoutCreadorInput[]
    connectOrCreate?: ReunionCreateOrConnectWithoutCreadorInput | ReunionCreateOrConnectWithoutCreadorInput[]
    createMany?: ReunionCreateManyCreadorInputEnvelope
    connect?: ReunionWhereUniqueInput | ReunionWhereUniqueInput[]
  }

  export type ParticipanteReunionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ParticipanteReunionCreateWithoutUsuarioInput, ParticipanteReunionUncheckedCreateWithoutUsuarioInput> | ParticipanteReunionCreateWithoutUsuarioInput[] | ParticipanteReunionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ParticipanteReunionCreateOrConnectWithoutUsuarioInput | ParticipanteReunionCreateOrConnectWithoutUsuarioInput[]
    createMany?: ParticipanteReunionCreateManyUsuarioInputEnvelope
    connect?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRolUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.RolUsuario
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CasoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CasoCreateWithoutUsuarioInput, CasoUncheckedCreateWithoutUsuarioInput> | CasoCreateWithoutUsuarioInput[] | CasoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CasoCreateOrConnectWithoutUsuarioInput | CasoCreateOrConnectWithoutUsuarioInput[]
    upsert?: CasoUpsertWithWhereUniqueWithoutUsuarioInput | CasoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CasoCreateManyUsuarioInputEnvelope
    set?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    disconnect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    delete?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    connect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    update?: CasoUpdateWithWhereUniqueWithoutUsuarioInput | CasoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CasoUpdateManyWithWhereWithoutUsuarioInput | CasoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CasoScalarWhereInput | CasoScalarWhereInput[]
  }

  export type CasoResponsableUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CasoResponsableCreateWithoutUsuarioInput, CasoResponsableUncheckedCreateWithoutUsuarioInput> | CasoResponsableCreateWithoutUsuarioInput[] | CasoResponsableUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CasoResponsableCreateOrConnectWithoutUsuarioInput | CasoResponsableCreateOrConnectWithoutUsuarioInput[]
    upsert?: CasoResponsableUpsertWithWhereUniqueWithoutUsuarioInput | CasoResponsableUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CasoResponsableCreateManyUsuarioInputEnvelope
    set?: CasoResponsableWhereUniqueInput | CasoResponsableWhereUniqueInput[]
    disconnect?: CasoResponsableWhereUniqueInput | CasoResponsableWhereUniqueInput[]
    delete?: CasoResponsableWhereUniqueInput | CasoResponsableWhereUniqueInput[]
    connect?: CasoResponsableWhereUniqueInput | CasoResponsableWhereUniqueInput[]
    update?: CasoResponsableUpdateWithWhereUniqueWithoutUsuarioInput | CasoResponsableUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CasoResponsableUpdateManyWithWhereWithoutUsuarioInput | CasoResponsableUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CasoResponsableScalarWhereInput | CasoResponsableScalarWhereInput[]
  }

  export type AudienciaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AudienciaCreateWithoutUsuarioInput, AudienciaUncheckedCreateWithoutUsuarioInput> | AudienciaCreateWithoutUsuarioInput[] | AudienciaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AudienciaCreateOrConnectWithoutUsuarioInput | AudienciaCreateOrConnectWithoutUsuarioInput[]
    upsert?: AudienciaUpsertWithWhereUniqueWithoutUsuarioInput | AudienciaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AudienciaCreateManyUsuarioInputEnvelope
    set?: AudienciaWhereUniqueInput | AudienciaWhereUniqueInput[]
    disconnect?: AudienciaWhereUniqueInput | AudienciaWhereUniqueInput[]
    delete?: AudienciaWhereUniqueInput | AudienciaWhereUniqueInput[]
    connect?: AudienciaWhereUniqueInput | AudienciaWhereUniqueInput[]
    update?: AudienciaUpdateWithWhereUniqueWithoutUsuarioInput | AudienciaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AudienciaUpdateManyWithWhereWithoutUsuarioInput | AudienciaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AudienciaScalarWhereInput | AudienciaScalarWhereInput[]
  }

  export type CitaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CitaCreateWithoutUsuarioInput, CitaUncheckedCreateWithoutUsuarioInput> | CitaCreateWithoutUsuarioInput[] | CitaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutUsuarioInput | CitaCreateOrConnectWithoutUsuarioInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutUsuarioInput | CitaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CitaCreateManyUsuarioInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutUsuarioInput | CitaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutUsuarioInput | CitaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type RecordatorioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RecordatorioCreateWithoutUsuarioInput, RecordatorioUncheckedCreateWithoutUsuarioInput> | RecordatorioCreateWithoutUsuarioInput[] | RecordatorioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RecordatorioCreateOrConnectWithoutUsuarioInput | RecordatorioCreateOrConnectWithoutUsuarioInput[]
    upsert?: RecordatorioUpsertWithWhereUniqueWithoutUsuarioInput | RecordatorioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RecordatorioCreateManyUsuarioInputEnvelope
    set?: RecordatorioWhereUniqueInput | RecordatorioWhereUniqueInput[]
    disconnect?: RecordatorioWhereUniqueInput | RecordatorioWhereUniqueInput[]
    delete?: RecordatorioWhereUniqueInput | RecordatorioWhereUniqueInput[]
    connect?: RecordatorioWhereUniqueInput | RecordatorioWhereUniqueInput[]
    update?: RecordatorioUpdateWithWhereUniqueWithoutUsuarioInput | RecordatorioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RecordatorioUpdateManyWithWhereWithoutUsuarioInput | RecordatorioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RecordatorioScalarWhereInput | RecordatorioScalarWhereInput[]
  }

  export type ReunionUpdateManyWithoutCreadorNestedInput = {
    create?: XOR<ReunionCreateWithoutCreadorInput, ReunionUncheckedCreateWithoutCreadorInput> | ReunionCreateWithoutCreadorInput[] | ReunionUncheckedCreateWithoutCreadorInput[]
    connectOrCreate?: ReunionCreateOrConnectWithoutCreadorInput | ReunionCreateOrConnectWithoutCreadorInput[]
    upsert?: ReunionUpsertWithWhereUniqueWithoutCreadorInput | ReunionUpsertWithWhereUniqueWithoutCreadorInput[]
    createMany?: ReunionCreateManyCreadorInputEnvelope
    set?: ReunionWhereUniqueInput | ReunionWhereUniqueInput[]
    disconnect?: ReunionWhereUniqueInput | ReunionWhereUniqueInput[]
    delete?: ReunionWhereUniqueInput | ReunionWhereUniqueInput[]
    connect?: ReunionWhereUniqueInput | ReunionWhereUniqueInput[]
    update?: ReunionUpdateWithWhereUniqueWithoutCreadorInput | ReunionUpdateWithWhereUniqueWithoutCreadorInput[]
    updateMany?: ReunionUpdateManyWithWhereWithoutCreadorInput | ReunionUpdateManyWithWhereWithoutCreadorInput[]
    deleteMany?: ReunionScalarWhereInput | ReunionScalarWhereInput[]
  }

  export type ParticipanteReunionUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ParticipanteReunionCreateWithoutUsuarioInput, ParticipanteReunionUncheckedCreateWithoutUsuarioInput> | ParticipanteReunionCreateWithoutUsuarioInput[] | ParticipanteReunionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ParticipanteReunionCreateOrConnectWithoutUsuarioInput | ParticipanteReunionCreateOrConnectWithoutUsuarioInput[]
    upsert?: ParticipanteReunionUpsertWithWhereUniqueWithoutUsuarioInput | ParticipanteReunionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ParticipanteReunionCreateManyUsuarioInputEnvelope
    set?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
    disconnect?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
    delete?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
    connect?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
    update?: ParticipanteReunionUpdateWithWhereUniqueWithoutUsuarioInput | ParticipanteReunionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ParticipanteReunionUpdateManyWithWhereWithoutUsuarioInput | ParticipanteReunionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ParticipanteReunionScalarWhereInput | ParticipanteReunionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CasoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CasoCreateWithoutUsuarioInput, CasoUncheckedCreateWithoutUsuarioInput> | CasoCreateWithoutUsuarioInput[] | CasoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CasoCreateOrConnectWithoutUsuarioInput | CasoCreateOrConnectWithoutUsuarioInput[]
    upsert?: CasoUpsertWithWhereUniqueWithoutUsuarioInput | CasoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CasoCreateManyUsuarioInputEnvelope
    set?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    disconnect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    delete?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    connect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    update?: CasoUpdateWithWhereUniqueWithoutUsuarioInput | CasoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CasoUpdateManyWithWhereWithoutUsuarioInput | CasoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CasoScalarWhereInput | CasoScalarWhereInput[]
  }

  export type CasoResponsableUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CasoResponsableCreateWithoutUsuarioInput, CasoResponsableUncheckedCreateWithoutUsuarioInput> | CasoResponsableCreateWithoutUsuarioInput[] | CasoResponsableUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CasoResponsableCreateOrConnectWithoutUsuarioInput | CasoResponsableCreateOrConnectWithoutUsuarioInput[]
    upsert?: CasoResponsableUpsertWithWhereUniqueWithoutUsuarioInput | CasoResponsableUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CasoResponsableCreateManyUsuarioInputEnvelope
    set?: CasoResponsableWhereUniqueInput | CasoResponsableWhereUniqueInput[]
    disconnect?: CasoResponsableWhereUniqueInput | CasoResponsableWhereUniqueInput[]
    delete?: CasoResponsableWhereUniqueInput | CasoResponsableWhereUniqueInput[]
    connect?: CasoResponsableWhereUniqueInput | CasoResponsableWhereUniqueInput[]
    update?: CasoResponsableUpdateWithWhereUniqueWithoutUsuarioInput | CasoResponsableUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CasoResponsableUpdateManyWithWhereWithoutUsuarioInput | CasoResponsableUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CasoResponsableScalarWhereInput | CasoResponsableScalarWhereInput[]
  }

  export type AudienciaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AudienciaCreateWithoutUsuarioInput, AudienciaUncheckedCreateWithoutUsuarioInput> | AudienciaCreateWithoutUsuarioInput[] | AudienciaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AudienciaCreateOrConnectWithoutUsuarioInput | AudienciaCreateOrConnectWithoutUsuarioInput[]
    upsert?: AudienciaUpsertWithWhereUniqueWithoutUsuarioInput | AudienciaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AudienciaCreateManyUsuarioInputEnvelope
    set?: AudienciaWhereUniqueInput | AudienciaWhereUniqueInput[]
    disconnect?: AudienciaWhereUniqueInput | AudienciaWhereUniqueInput[]
    delete?: AudienciaWhereUniqueInput | AudienciaWhereUniqueInput[]
    connect?: AudienciaWhereUniqueInput | AudienciaWhereUniqueInput[]
    update?: AudienciaUpdateWithWhereUniqueWithoutUsuarioInput | AudienciaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AudienciaUpdateManyWithWhereWithoutUsuarioInput | AudienciaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AudienciaScalarWhereInput | AudienciaScalarWhereInput[]
  }

  export type CitaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CitaCreateWithoutUsuarioInput, CitaUncheckedCreateWithoutUsuarioInput> | CitaCreateWithoutUsuarioInput[] | CitaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutUsuarioInput | CitaCreateOrConnectWithoutUsuarioInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutUsuarioInput | CitaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CitaCreateManyUsuarioInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutUsuarioInput | CitaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutUsuarioInput | CitaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type RecordatorioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RecordatorioCreateWithoutUsuarioInput, RecordatorioUncheckedCreateWithoutUsuarioInput> | RecordatorioCreateWithoutUsuarioInput[] | RecordatorioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RecordatorioCreateOrConnectWithoutUsuarioInput | RecordatorioCreateOrConnectWithoutUsuarioInput[]
    upsert?: RecordatorioUpsertWithWhereUniqueWithoutUsuarioInput | RecordatorioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RecordatorioCreateManyUsuarioInputEnvelope
    set?: RecordatorioWhereUniqueInput | RecordatorioWhereUniqueInput[]
    disconnect?: RecordatorioWhereUniqueInput | RecordatorioWhereUniqueInput[]
    delete?: RecordatorioWhereUniqueInput | RecordatorioWhereUniqueInput[]
    connect?: RecordatorioWhereUniqueInput | RecordatorioWhereUniqueInput[]
    update?: RecordatorioUpdateWithWhereUniqueWithoutUsuarioInput | RecordatorioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RecordatorioUpdateManyWithWhereWithoutUsuarioInput | RecordatorioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RecordatorioScalarWhereInput | RecordatorioScalarWhereInput[]
  }

  export type ReunionUncheckedUpdateManyWithoutCreadorNestedInput = {
    create?: XOR<ReunionCreateWithoutCreadorInput, ReunionUncheckedCreateWithoutCreadorInput> | ReunionCreateWithoutCreadorInput[] | ReunionUncheckedCreateWithoutCreadorInput[]
    connectOrCreate?: ReunionCreateOrConnectWithoutCreadorInput | ReunionCreateOrConnectWithoutCreadorInput[]
    upsert?: ReunionUpsertWithWhereUniqueWithoutCreadorInput | ReunionUpsertWithWhereUniqueWithoutCreadorInput[]
    createMany?: ReunionCreateManyCreadorInputEnvelope
    set?: ReunionWhereUniqueInput | ReunionWhereUniqueInput[]
    disconnect?: ReunionWhereUniqueInput | ReunionWhereUniqueInput[]
    delete?: ReunionWhereUniqueInput | ReunionWhereUniqueInput[]
    connect?: ReunionWhereUniqueInput | ReunionWhereUniqueInput[]
    update?: ReunionUpdateWithWhereUniqueWithoutCreadorInput | ReunionUpdateWithWhereUniqueWithoutCreadorInput[]
    updateMany?: ReunionUpdateManyWithWhereWithoutCreadorInput | ReunionUpdateManyWithWhereWithoutCreadorInput[]
    deleteMany?: ReunionScalarWhereInput | ReunionScalarWhereInput[]
  }

  export type ParticipanteReunionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ParticipanteReunionCreateWithoutUsuarioInput, ParticipanteReunionUncheckedCreateWithoutUsuarioInput> | ParticipanteReunionCreateWithoutUsuarioInput[] | ParticipanteReunionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ParticipanteReunionCreateOrConnectWithoutUsuarioInput | ParticipanteReunionCreateOrConnectWithoutUsuarioInput[]
    upsert?: ParticipanteReunionUpsertWithWhereUniqueWithoutUsuarioInput | ParticipanteReunionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ParticipanteReunionCreateManyUsuarioInputEnvelope
    set?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
    disconnect?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
    delete?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
    connect?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
    update?: ParticipanteReunionUpdateWithWhereUniqueWithoutUsuarioInput | ParticipanteReunionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ParticipanteReunionUpdateManyWithWhereWithoutUsuarioInput | ParticipanteReunionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ParticipanteReunionScalarWhereInput | ParticipanteReunionScalarWhereInput[]
  }

  export type CasoCreateNestedManyWithoutClienteInput = {
    create?: XOR<CasoCreateWithoutClienteInput, CasoUncheckedCreateWithoutClienteInput> | CasoCreateWithoutClienteInput[] | CasoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CasoCreateOrConnectWithoutClienteInput | CasoCreateOrConnectWithoutClienteInput[]
    createMany?: CasoCreateManyClienteInputEnvelope
    connect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
  }

  export type ParticipanteReunionCreateNestedManyWithoutClienteInput = {
    create?: XOR<ParticipanteReunionCreateWithoutClienteInput, ParticipanteReunionUncheckedCreateWithoutClienteInput> | ParticipanteReunionCreateWithoutClienteInput[] | ParticipanteReunionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ParticipanteReunionCreateOrConnectWithoutClienteInput | ParticipanteReunionCreateOrConnectWithoutClienteInput[]
    createMany?: ParticipanteReunionCreateManyClienteInputEnvelope
    connect?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
  }

  export type CasoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<CasoCreateWithoutClienteInput, CasoUncheckedCreateWithoutClienteInput> | CasoCreateWithoutClienteInput[] | CasoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CasoCreateOrConnectWithoutClienteInput | CasoCreateOrConnectWithoutClienteInput[]
    createMany?: CasoCreateManyClienteInputEnvelope
    connect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
  }

  export type ParticipanteReunionUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<ParticipanteReunionCreateWithoutClienteInput, ParticipanteReunionUncheckedCreateWithoutClienteInput> | ParticipanteReunionCreateWithoutClienteInput[] | ParticipanteReunionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ParticipanteReunionCreateOrConnectWithoutClienteInput | ParticipanteReunionCreateOrConnectWithoutClienteInput[]
    createMany?: ParticipanteReunionCreateManyClienteInputEnvelope
    connect?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CasoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<CasoCreateWithoutClienteInput, CasoUncheckedCreateWithoutClienteInput> | CasoCreateWithoutClienteInput[] | CasoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CasoCreateOrConnectWithoutClienteInput | CasoCreateOrConnectWithoutClienteInput[]
    upsert?: CasoUpsertWithWhereUniqueWithoutClienteInput | CasoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: CasoCreateManyClienteInputEnvelope
    set?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    disconnect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    delete?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    connect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    update?: CasoUpdateWithWhereUniqueWithoutClienteInput | CasoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: CasoUpdateManyWithWhereWithoutClienteInput | CasoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: CasoScalarWhereInput | CasoScalarWhereInput[]
  }

  export type ParticipanteReunionUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ParticipanteReunionCreateWithoutClienteInput, ParticipanteReunionUncheckedCreateWithoutClienteInput> | ParticipanteReunionCreateWithoutClienteInput[] | ParticipanteReunionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ParticipanteReunionCreateOrConnectWithoutClienteInput | ParticipanteReunionCreateOrConnectWithoutClienteInput[]
    upsert?: ParticipanteReunionUpsertWithWhereUniqueWithoutClienteInput | ParticipanteReunionUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ParticipanteReunionCreateManyClienteInputEnvelope
    set?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
    disconnect?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
    delete?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
    connect?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
    update?: ParticipanteReunionUpdateWithWhereUniqueWithoutClienteInput | ParticipanteReunionUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ParticipanteReunionUpdateManyWithWhereWithoutClienteInput | ParticipanteReunionUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ParticipanteReunionScalarWhereInput | ParticipanteReunionScalarWhereInput[]
  }

  export type CasoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<CasoCreateWithoutClienteInput, CasoUncheckedCreateWithoutClienteInput> | CasoCreateWithoutClienteInput[] | CasoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CasoCreateOrConnectWithoutClienteInput | CasoCreateOrConnectWithoutClienteInput[]
    upsert?: CasoUpsertWithWhereUniqueWithoutClienteInput | CasoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: CasoCreateManyClienteInputEnvelope
    set?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    disconnect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    delete?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    connect?: CasoWhereUniqueInput | CasoWhereUniqueInput[]
    update?: CasoUpdateWithWhereUniqueWithoutClienteInput | CasoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: CasoUpdateManyWithWhereWithoutClienteInput | CasoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: CasoScalarWhereInput | CasoScalarWhereInput[]
  }

  export type ParticipanteReunionUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ParticipanteReunionCreateWithoutClienteInput, ParticipanteReunionUncheckedCreateWithoutClienteInput> | ParticipanteReunionCreateWithoutClienteInput[] | ParticipanteReunionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ParticipanteReunionCreateOrConnectWithoutClienteInput | ParticipanteReunionCreateOrConnectWithoutClienteInput[]
    upsert?: ParticipanteReunionUpsertWithWhereUniqueWithoutClienteInput | ParticipanteReunionUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ParticipanteReunionCreateManyClienteInputEnvelope
    set?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
    disconnect?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
    delete?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
    connect?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
    update?: ParticipanteReunionUpdateWithWhereUniqueWithoutClienteInput | ParticipanteReunionUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ParticipanteReunionUpdateManyWithWhereWithoutClienteInput | ParticipanteReunionUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ParticipanteReunionScalarWhereInput | ParticipanteReunionScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutCasosInput = {
    create?: XOR<UsuarioCreateWithoutCasosInput, UsuarioUncheckedCreateWithoutCasosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCasosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ClienteCreateNestedOneWithoutCasosInput = {
    create?: XOR<ClienteCreateWithoutCasosInput, ClienteUncheckedCreateWithoutCasosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutCasosInput
    connect?: ClienteWhereUniqueInput
  }

  export type AudienciaCreateNestedManyWithoutCasoInput = {
    create?: XOR<AudienciaCreateWithoutCasoInput, AudienciaUncheckedCreateWithoutCasoInput> | AudienciaCreateWithoutCasoInput[] | AudienciaUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: AudienciaCreateOrConnectWithoutCasoInput | AudienciaCreateOrConnectWithoutCasoInput[]
    createMany?: AudienciaCreateManyCasoInputEnvelope
    connect?: AudienciaWhereUniqueInput | AudienciaWhereUniqueInput[]
  }

  export type CitaCreateNestedManyWithoutCasoInput = {
    create?: XOR<CitaCreateWithoutCasoInput, CitaUncheckedCreateWithoutCasoInput> | CitaCreateWithoutCasoInput[] | CitaUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutCasoInput | CitaCreateOrConnectWithoutCasoInput[]
    createMany?: CitaCreateManyCasoInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type RecordatorioCreateNestedManyWithoutCasoInput = {
    create?: XOR<RecordatorioCreateWithoutCasoInput, RecordatorioUncheckedCreateWithoutCasoInput> | RecordatorioCreateWithoutCasoInput[] | RecordatorioUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: RecordatorioCreateOrConnectWithoutCasoInput | RecordatorioCreateOrConnectWithoutCasoInput[]
    createMany?: RecordatorioCreateManyCasoInputEnvelope
    connect?: RecordatorioWhereUniqueInput | RecordatorioWhereUniqueInput[]
  }

  export type CasoResponsableCreateNestedManyWithoutCasoInput = {
    create?: XOR<CasoResponsableCreateWithoutCasoInput, CasoResponsableUncheckedCreateWithoutCasoInput> | CasoResponsableCreateWithoutCasoInput[] | CasoResponsableUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: CasoResponsableCreateOrConnectWithoutCasoInput | CasoResponsableCreateOrConnectWithoutCasoInput[]
    createMany?: CasoResponsableCreateManyCasoInputEnvelope
    connect?: CasoResponsableWhereUniqueInput | CasoResponsableWhereUniqueInput[]
  }

  export type ReunionCreateNestedManyWithoutCasoInput = {
    create?: XOR<ReunionCreateWithoutCasoInput, ReunionUncheckedCreateWithoutCasoInput> | ReunionCreateWithoutCasoInput[] | ReunionUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: ReunionCreateOrConnectWithoutCasoInput | ReunionCreateOrConnectWithoutCasoInput[]
    createMany?: ReunionCreateManyCasoInputEnvelope
    connect?: ReunionWhereUniqueInput | ReunionWhereUniqueInput[]
  }

  export type AudienciaUncheckedCreateNestedManyWithoutCasoInput = {
    create?: XOR<AudienciaCreateWithoutCasoInput, AudienciaUncheckedCreateWithoutCasoInput> | AudienciaCreateWithoutCasoInput[] | AudienciaUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: AudienciaCreateOrConnectWithoutCasoInput | AudienciaCreateOrConnectWithoutCasoInput[]
    createMany?: AudienciaCreateManyCasoInputEnvelope
    connect?: AudienciaWhereUniqueInput | AudienciaWhereUniqueInput[]
  }

  export type CitaUncheckedCreateNestedManyWithoutCasoInput = {
    create?: XOR<CitaCreateWithoutCasoInput, CitaUncheckedCreateWithoutCasoInput> | CitaCreateWithoutCasoInput[] | CitaUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutCasoInput | CitaCreateOrConnectWithoutCasoInput[]
    createMany?: CitaCreateManyCasoInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type RecordatorioUncheckedCreateNestedManyWithoutCasoInput = {
    create?: XOR<RecordatorioCreateWithoutCasoInput, RecordatorioUncheckedCreateWithoutCasoInput> | RecordatorioCreateWithoutCasoInput[] | RecordatorioUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: RecordatorioCreateOrConnectWithoutCasoInput | RecordatorioCreateOrConnectWithoutCasoInput[]
    createMany?: RecordatorioCreateManyCasoInputEnvelope
    connect?: RecordatorioWhereUniqueInput | RecordatorioWhereUniqueInput[]
  }

  export type CasoResponsableUncheckedCreateNestedManyWithoutCasoInput = {
    create?: XOR<CasoResponsableCreateWithoutCasoInput, CasoResponsableUncheckedCreateWithoutCasoInput> | CasoResponsableCreateWithoutCasoInput[] | CasoResponsableUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: CasoResponsableCreateOrConnectWithoutCasoInput | CasoResponsableCreateOrConnectWithoutCasoInput[]
    createMany?: CasoResponsableCreateManyCasoInputEnvelope
    connect?: CasoResponsableWhereUniqueInput | CasoResponsableWhereUniqueInput[]
  }

  export type ReunionUncheckedCreateNestedManyWithoutCasoInput = {
    create?: XOR<ReunionCreateWithoutCasoInput, ReunionUncheckedCreateWithoutCasoInput> | ReunionCreateWithoutCasoInput[] | ReunionUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: ReunionCreateOrConnectWithoutCasoInput | ReunionCreateOrConnectWithoutCasoInput[]
    createMany?: ReunionCreateManyCasoInputEnvelope
    connect?: ReunionWhereUniqueInput | ReunionWhereUniqueInput[]
  }

  export type EnumEstadoCasoFieldUpdateOperationsInput = {
    set?: $Enums.EstadoCaso
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsuarioUpdateOneRequiredWithoutCasosNestedInput = {
    create?: XOR<UsuarioCreateWithoutCasosInput, UsuarioUncheckedCreateWithoutCasosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCasosInput
    upsert?: UsuarioUpsertWithoutCasosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCasosInput, UsuarioUpdateWithoutCasosInput>, UsuarioUncheckedUpdateWithoutCasosInput>
  }

  export type ClienteUpdateOneRequiredWithoutCasosNestedInput = {
    create?: XOR<ClienteCreateWithoutCasosInput, ClienteUncheckedCreateWithoutCasosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutCasosInput
    upsert?: ClienteUpsertWithoutCasosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutCasosInput, ClienteUpdateWithoutCasosInput>, ClienteUncheckedUpdateWithoutCasosInput>
  }

  export type AudienciaUpdateManyWithoutCasoNestedInput = {
    create?: XOR<AudienciaCreateWithoutCasoInput, AudienciaUncheckedCreateWithoutCasoInput> | AudienciaCreateWithoutCasoInput[] | AudienciaUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: AudienciaCreateOrConnectWithoutCasoInput | AudienciaCreateOrConnectWithoutCasoInput[]
    upsert?: AudienciaUpsertWithWhereUniqueWithoutCasoInput | AudienciaUpsertWithWhereUniqueWithoutCasoInput[]
    createMany?: AudienciaCreateManyCasoInputEnvelope
    set?: AudienciaWhereUniqueInput | AudienciaWhereUniqueInput[]
    disconnect?: AudienciaWhereUniqueInput | AudienciaWhereUniqueInput[]
    delete?: AudienciaWhereUniqueInput | AudienciaWhereUniqueInput[]
    connect?: AudienciaWhereUniqueInput | AudienciaWhereUniqueInput[]
    update?: AudienciaUpdateWithWhereUniqueWithoutCasoInput | AudienciaUpdateWithWhereUniqueWithoutCasoInput[]
    updateMany?: AudienciaUpdateManyWithWhereWithoutCasoInput | AudienciaUpdateManyWithWhereWithoutCasoInput[]
    deleteMany?: AudienciaScalarWhereInput | AudienciaScalarWhereInput[]
  }

  export type CitaUpdateManyWithoutCasoNestedInput = {
    create?: XOR<CitaCreateWithoutCasoInput, CitaUncheckedCreateWithoutCasoInput> | CitaCreateWithoutCasoInput[] | CitaUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutCasoInput | CitaCreateOrConnectWithoutCasoInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutCasoInput | CitaUpsertWithWhereUniqueWithoutCasoInput[]
    createMany?: CitaCreateManyCasoInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutCasoInput | CitaUpdateWithWhereUniqueWithoutCasoInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutCasoInput | CitaUpdateManyWithWhereWithoutCasoInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type RecordatorioUpdateManyWithoutCasoNestedInput = {
    create?: XOR<RecordatorioCreateWithoutCasoInput, RecordatorioUncheckedCreateWithoutCasoInput> | RecordatorioCreateWithoutCasoInput[] | RecordatorioUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: RecordatorioCreateOrConnectWithoutCasoInput | RecordatorioCreateOrConnectWithoutCasoInput[]
    upsert?: RecordatorioUpsertWithWhereUniqueWithoutCasoInput | RecordatorioUpsertWithWhereUniqueWithoutCasoInput[]
    createMany?: RecordatorioCreateManyCasoInputEnvelope
    set?: RecordatorioWhereUniqueInput | RecordatorioWhereUniqueInput[]
    disconnect?: RecordatorioWhereUniqueInput | RecordatorioWhereUniqueInput[]
    delete?: RecordatorioWhereUniqueInput | RecordatorioWhereUniqueInput[]
    connect?: RecordatorioWhereUniqueInput | RecordatorioWhereUniqueInput[]
    update?: RecordatorioUpdateWithWhereUniqueWithoutCasoInput | RecordatorioUpdateWithWhereUniqueWithoutCasoInput[]
    updateMany?: RecordatorioUpdateManyWithWhereWithoutCasoInput | RecordatorioUpdateManyWithWhereWithoutCasoInput[]
    deleteMany?: RecordatorioScalarWhereInput | RecordatorioScalarWhereInput[]
  }

  export type CasoResponsableUpdateManyWithoutCasoNestedInput = {
    create?: XOR<CasoResponsableCreateWithoutCasoInput, CasoResponsableUncheckedCreateWithoutCasoInput> | CasoResponsableCreateWithoutCasoInput[] | CasoResponsableUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: CasoResponsableCreateOrConnectWithoutCasoInput | CasoResponsableCreateOrConnectWithoutCasoInput[]
    upsert?: CasoResponsableUpsertWithWhereUniqueWithoutCasoInput | CasoResponsableUpsertWithWhereUniqueWithoutCasoInput[]
    createMany?: CasoResponsableCreateManyCasoInputEnvelope
    set?: CasoResponsableWhereUniqueInput | CasoResponsableWhereUniqueInput[]
    disconnect?: CasoResponsableWhereUniqueInput | CasoResponsableWhereUniqueInput[]
    delete?: CasoResponsableWhereUniqueInput | CasoResponsableWhereUniqueInput[]
    connect?: CasoResponsableWhereUniqueInput | CasoResponsableWhereUniqueInput[]
    update?: CasoResponsableUpdateWithWhereUniqueWithoutCasoInput | CasoResponsableUpdateWithWhereUniqueWithoutCasoInput[]
    updateMany?: CasoResponsableUpdateManyWithWhereWithoutCasoInput | CasoResponsableUpdateManyWithWhereWithoutCasoInput[]
    deleteMany?: CasoResponsableScalarWhereInput | CasoResponsableScalarWhereInput[]
  }

  export type ReunionUpdateManyWithoutCasoNestedInput = {
    create?: XOR<ReunionCreateWithoutCasoInput, ReunionUncheckedCreateWithoutCasoInput> | ReunionCreateWithoutCasoInput[] | ReunionUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: ReunionCreateOrConnectWithoutCasoInput | ReunionCreateOrConnectWithoutCasoInput[]
    upsert?: ReunionUpsertWithWhereUniqueWithoutCasoInput | ReunionUpsertWithWhereUniqueWithoutCasoInput[]
    createMany?: ReunionCreateManyCasoInputEnvelope
    set?: ReunionWhereUniqueInput | ReunionWhereUniqueInput[]
    disconnect?: ReunionWhereUniqueInput | ReunionWhereUniqueInput[]
    delete?: ReunionWhereUniqueInput | ReunionWhereUniqueInput[]
    connect?: ReunionWhereUniqueInput | ReunionWhereUniqueInput[]
    update?: ReunionUpdateWithWhereUniqueWithoutCasoInput | ReunionUpdateWithWhereUniqueWithoutCasoInput[]
    updateMany?: ReunionUpdateManyWithWhereWithoutCasoInput | ReunionUpdateManyWithWhereWithoutCasoInput[]
    deleteMany?: ReunionScalarWhereInput | ReunionScalarWhereInput[]
  }

  export type AudienciaUncheckedUpdateManyWithoutCasoNestedInput = {
    create?: XOR<AudienciaCreateWithoutCasoInput, AudienciaUncheckedCreateWithoutCasoInput> | AudienciaCreateWithoutCasoInput[] | AudienciaUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: AudienciaCreateOrConnectWithoutCasoInput | AudienciaCreateOrConnectWithoutCasoInput[]
    upsert?: AudienciaUpsertWithWhereUniqueWithoutCasoInput | AudienciaUpsertWithWhereUniqueWithoutCasoInput[]
    createMany?: AudienciaCreateManyCasoInputEnvelope
    set?: AudienciaWhereUniqueInput | AudienciaWhereUniqueInput[]
    disconnect?: AudienciaWhereUniqueInput | AudienciaWhereUniqueInput[]
    delete?: AudienciaWhereUniqueInput | AudienciaWhereUniqueInput[]
    connect?: AudienciaWhereUniqueInput | AudienciaWhereUniqueInput[]
    update?: AudienciaUpdateWithWhereUniqueWithoutCasoInput | AudienciaUpdateWithWhereUniqueWithoutCasoInput[]
    updateMany?: AudienciaUpdateManyWithWhereWithoutCasoInput | AudienciaUpdateManyWithWhereWithoutCasoInput[]
    deleteMany?: AudienciaScalarWhereInput | AudienciaScalarWhereInput[]
  }

  export type CitaUncheckedUpdateManyWithoutCasoNestedInput = {
    create?: XOR<CitaCreateWithoutCasoInput, CitaUncheckedCreateWithoutCasoInput> | CitaCreateWithoutCasoInput[] | CitaUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutCasoInput | CitaCreateOrConnectWithoutCasoInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutCasoInput | CitaUpsertWithWhereUniqueWithoutCasoInput[]
    createMany?: CitaCreateManyCasoInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutCasoInput | CitaUpdateWithWhereUniqueWithoutCasoInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutCasoInput | CitaUpdateManyWithWhereWithoutCasoInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type RecordatorioUncheckedUpdateManyWithoutCasoNestedInput = {
    create?: XOR<RecordatorioCreateWithoutCasoInput, RecordatorioUncheckedCreateWithoutCasoInput> | RecordatorioCreateWithoutCasoInput[] | RecordatorioUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: RecordatorioCreateOrConnectWithoutCasoInput | RecordatorioCreateOrConnectWithoutCasoInput[]
    upsert?: RecordatorioUpsertWithWhereUniqueWithoutCasoInput | RecordatorioUpsertWithWhereUniqueWithoutCasoInput[]
    createMany?: RecordatorioCreateManyCasoInputEnvelope
    set?: RecordatorioWhereUniqueInput | RecordatorioWhereUniqueInput[]
    disconnect?: RecordatorioWhereUniqueInput | RecordatorioWhereUniqueInput[]
    delete?: RecordatorioWhereUniqueInput | RecordatorioWhereUniqueInput[]
    connect?: RecordatorioWhereUniqueInput | RecordatorioWhereUniqueInput[]
    update?: RecordatorioUpdateWithWhereUniqueWithoutCasoInput | RecordatorioUpdateWithWhereUniqueWithoutCasoInput[]
    updateMany?: RecordatorioUpdateManyWithWhereWithoutCasoInput | RecordatorioUpdateManyWithWhereWithoutCasoInput[]
    deleteMany?: RecordatorioScalarWhereInput | RecordatorioScalarWhereInput[]
  }

  export type CasoResponsableUncheckedUpdateManyWithoutCasoNestedInput = {
    create?: XOR<CasoResponsableCreateWithoutCasoInput, CasoResponsableUncheckedCreateWithoutCasoInput> | CasoResponsableCreateWithoutCasoInput[] | CasoResponsableUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: CasoResponsableCreateOrConnectWithoutCasoInput | CasoResponsableCreateOrConnectWithoutCasoInput[]
    upsert?: CasoResponsableUpsertWithWhereUniqueWithoutCasoInput | CasoResponsableUpsertWithWhereUniqueWithoutCasoInput[]
    createMany?: CasoResponsableCreateManyCasoInputEnvelope
    set?: CasoResponsableWhereUniqueInput | CasoResponsableWhereUniqueInput[]
    disconnect?: CasoResponsableWhereUniqueInput | CasoResponsableWhereUniqueInput[]
    delete?: CasoResponsableWhereUniqueInput | CasoResponsableWhereUniqueInput[]
    connect?: CasoResponsableWhereUniqueInput | CasoResponsableWhereUniqueInput[]
    update?: CasoResponsableUpdateWithWhereUniqueWithoutCasoInput | CasoResponsableUpdateWithWhereUniqueWithoutCasoInput[]
    updateMany?: CasoResponsableUpdateManyWithWhereWithoutCasoInput | CasoResponsableUpdateManyWithWhereWithoutCasoInput[]
    deleteMany?: CasoResponsableScalarWhereInput | CasoResponsableScalarWhereInput[]
  }

  export type ReunionUncheckedUpdateManyWithoutCasoNestedInput = {
    create?: XOR<ReunionCreateWithoutCasoInput, ReunionUncheckedCreateWithoutCasoInput> | ReunionCreateWithoutCasoInput[] | ReunionUncheckedCreateWithoutCasoInput[]
    connectOrCreate?: ReunionCreateOrConnectWithoutCasoInput | ReunionCreateOrConnectWithoutCasoInput[]
    upsert?: ReunionUpsertWithWhereUniqueWithoutCasoInput | ReunionUpsertWithWhereUniqueWithoutCasoInput[]
    createMany?: ReunionCreateManyCasoInputEnvelope
    set?: ReunionWhereUniqueInput | ReunionWhereUniqueInput[]
    disconnect?: ReunionWhereUniqueInput | ReunionWhereUniqueInput[]
    delete?: ReunionWhereUniqueInput | ReunionWhereUniqueInput[]
    connect?: ReunionWhereUniqueInput | ReunionWhereUniqueInput[]
    update?: ReunionUpdateWithWhereUniqueWithoutCasoInput | ReunionUpdateWithWhereUniqueWithoutCasoInput[]
    updateMany?: ReunionUpdateManyWithWhereWithoutCasoInput | ReunionUpdateManyWithWhereWithoutCasoInput[]
    deleteMany?: ReunionScalarWhereInput | ReunionScalarWhereInput[]
  }

  export type CasoCreateNestedOneWithoutResponsablesInput = {
    create?: XOR<CasoCreateWithoutResponsablesInput, CasoUncheckedCreateWithoutResponsablesInput>
    connectOrCreate?: CasoCreateOrConnectWithoutResponsablesInput
    connect?: CasoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutCasosAsignadosInput = {
    create?: XOR<UsuarioCreateWithoutCasosAsignadosInput, UsuarioUncheckedCreateWithoutCasosAsignadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCasosAsignadosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CasoUpdateOneRequiredWithoutResponsablesNestedInput = {
    create?: XOR<CasoCreateWithoutResponsablesInput, CasoUncheckedCreateWithoutResponsablesInput>
    connectOrCreate?: CasoCreateOrConnectWithoutResponsablesInput
    upsert?: CasoUpsertWithoutResponsablesInput
    connect?: CasoWhereUniqueInput
    update?: XOR<XOR<CasoUpdateToOneWithWhereWithoutResponsablesInput, CasoUpdateWithoutResponsablesInput>, CasoUncheckedUpdateWithoutResponsablesInput>
  }

  export type UsuarioUpdateOneRequiredWithoutCasosAsignadosNestedInput = {
    create?: XOR<UsuarioCreateWithoutCasosAsignadosInput, UsuarioUncheckedCreateWithoutCasosAsignadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCasosAsignadosInput
    upsert?: UsuarioUpsertWithoutCasosAsignadosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCasosAsignadosInput, UsuarioUpdateWithoutCasosAsignadosInput>, UsuarioUncheckedUpdateWithoutCasosAsignadosInput>
  }

  export type CasoCreateNestedOneWithoutAudienciasInput = {
    create?: XOR<CasoCreateWithoutAudienciasInput, CasoUncheckedCreateWithoutAudienciasInput>
    connectOrCreate?: CasoCreateOrConnectWithoutAudienciasInput
    connect?: CasoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutAudienciasInput = {
    create?: XOR<UsuarioCreateWithoutAudienciasInput, UsuarioUncheckedCreateWithoutAudienciasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAudienciasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EnumEstadoAudienciaFieldUpdateOperationsInput = {
    set?: $Enums.EstadoAudiencia
  }

  export type CasoUpdateOneRequiredWithoutAudienciasNestedInput = {
    create?: XOR<CasoCreateWithoutAudienciasInput, CasoUncheckedCreateWithoutAudienciasInput>
    connectOrCreate?: CasoCreateOrConnectWithoutAudienciasInput
    upsert?: CasoUpsertWithoutAudienciasInput
    connect?: CasoWhereUniqueInput
    update?: XOR<XOR<CasoUpdateToOneWithWhereWithoutAudienciasInput, CasoUpdateWithoutAudienciasInput>, CasoUncheckedUpdateWithoutAudienciasInput>
  }

  export type UsuarioUpdateOneRequiredWithoutAudienciasNestedInput = {
    create?: XOR<UsuarioCreateWithoutAudienciasInput, UsuarioUncheckedCreateWithoutAudienciasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAudienciasInput
    upsert?: UsuarioUpsertWithoutAudienciasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAudienciasInput, UsuarioUpdateWithoutAudienciasInput>, UsuarioUncheckedUpdateWithoutAudienciasInput>
  }

  export type CasoCreateNestedOneWithoutCitasInput = {
    create?: XOR<CasoCreateWithoutCitasInput, CasoUncheckedCreateWithoutCitasInput>
    connectOrCreate?: CasoCreateOrConnectWithoutCitasInput
    connect?: CasoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutCitasInput = {
    create?: XOR<UsuarioCreateWithoutCitasInput, UsuarioUncheckedCreateWithoutCitasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCitasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CasoUpdateOneWithoutCitasNestedInput = {
    create?: XOR<CasoCreateWithoutCitasInput, CasoUncheckedCreateWithoutCitasInput>
    connectOrCreate?: CasoCreateOrConnectWithoutCitasInput
    upsert?: CasoUpsertWithoutCitasInput
    disconnect?: CasoWhereInput | boolean
    delete?: CasoWhereInput | boolean
    connect?: CasoWhereUniqueInput
    update?: XOR<XOR<CasoUpdateToOneWithWhereWithoutCitasInput, CasoUpdateWithoutCitasInput>, CasoUncheckedUpdateWithoutCitasInput>
  }

  export type UsuarioUpdateOneRequiredWithoutCitasNestedInput = {
    create?: XOR<UsuarioCreateWithoutCitasInput, UsuarioUncheckedCreateWithoutCitasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCitasInput
    upsert?: UsuarioUpsertWithoutCitasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCitasInput, UsuarioUpdateWithoutCitasInput>, UsuarioUncheckedUpdateWithoutCitasInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CasoCreateNestedOneWithoutRecordatoriosInput = {
    create?: XOR<CasoCreateWithoutRecordatoriosInput, CasoUncheckedCreateWithoutRecordatoriosInput>
    connectOrCreate?: CasoCreateOrConnectWithoutRecordatoriosInput
    connect?: CasoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutRecordatoriosInput = {
    create?: XOR<UsuarioCreateWithoutRecordatoriosInput, UsuarioUncheckedCreateWithoutRecordatoriosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRecordatoriosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CasoUpdateOneWithoutRecordatoriosNestedInput = {
    create?: XOR<CasoCreateWithoutRecordatoriosInput, CasoUncheckedCreateWithoutRecordatoriosInput>
    connectOrCreate?: CasoCreateOrConnectWithoutRecordatoriosInput
    upsert?: CasoUpsertWithoutRecordatoriosInput
    disconnect?: CasoWhereInput | boolean
    delete?: CasoWhereInput | boolean
    connect?: CasoWhereUniqueInput
    update?: XOR<XOR<CasoUpdateToOneWithWhereWithoutRecordatoriosInput, CasoUpdateWithoutRecordatoriosInput>, CasoUncheckedUpdateWithoutRecordatoriosInput>
  }

  export type UsuarioUpdateOneRequiredWithoutRecordatoriosNestedInput = {
    create?: XOR<UsuarioCreateWithoutRecordatoriosInput, UsuarioUncheckedCreateWithoutRecordatoriosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRecordatoriosInput
    upsert?: UsuarioUpsertWithoutRecordatoriosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRecordatoriosInput, UsuarioUpdateWithoutRecordatoriosInput>, UsuarioUncheckedUpdateWithoutRecordatoriosInput>
  }

  export type CasoCreateNestedOneWithoutReunionesInput = {
    create?: XOR<CasoCreateWithoutReunionesInput, CasoUncheckedCreateWithoutReunionesInput>
    connectOrCreate?: CasoCreateOrConnectWithoutReunionesInput
    connect?: CasoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutReunionesCreadasInput = {
    create?: XOR<UsuarioCreateWithoutReunionesCreadasInput, UsuarioUncheckedCreateWithoutReunionesCreadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReunionesCreadasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ParticipanteReunionCreateNestedManyWithoutReunionInput = {
    create?: XOR<ParticipanteReunionCreateWithoutReunionInput, ParticipanteReunionUncheckedCreateWithoutReunionInput> | ParticipanteReunionCreateWithoutReunionInput[] | ParticipanteReunionUncheckedCreateWithoutReunionInput[]
    connectOrCreate?: ParticipanteReunionCreateOrConnectWithoutReunionInput | ParticipanteReunionCreateOrConnectWithoutReunionInput[]
    createMany?: ParticipanteReunionCreateManyReunionInputEnvelope
    connect?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
  }

  export type ParticipanteReunionUncheckedCreateNestedManyWithoutReunionInput = {
    create?: XOR<ParticipanteReunionCreateWithoutReunionInput, ParticipanteReunionUncheckedCreateWithoutReunionInput> | ParticipanteReunionCreateWithoutReunionInput[] | ParticipanteReunionUncheckedCreateWithoutReunionInput[]
    connectOrCreate?: ParticipanteReunionCreateOrConnectWithoutReunionInput | ParticipanteReunionCreateOrConnectWithoutReunionInput[]
    createMany?: ParticipanteReunionCreateManyReunionInputEnvelope
    connect?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
  }

  export type CasoUpdateOneWithoutReunionesNestedInput = {
    create?: XOR<CasoCreateWithoutReunionesInput, CasoUncheckedCreateWithoutReunionesInput>
    connectOrCreate?: CasoCreateOrConnectWithoutReunionesInput
    upsert?: CasoUpsertWithoutReunionesInput
    disconnect?: CasoWhereInput | boolean
    delete?: CasoWhereInput | boolean
    connect?: CasoWhereUniqueInput
    update?: XOR<XOR<CasoUpdateToOneWithWhereWithoutReunionesInput, CasoUpdateWithoutReunionesInput>, CasoUncheckedUpdateWithoutReunionesInput>
  }

  export type UsuarioUpdateOneRequiredWithoutReunionesCreadasNestedInput = {
    create?: XOR<UsuarioCreateWithoutReunionesCreadasInput, UsuarioUncheckedCreateWithoutReunionesCreadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReunionesCreadasInput
    upsert?: UsuarioUpsertWithoutReunionesCreadasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutReunionesCreadasInput, UsuarioUpdateWithoutReunionesCreadasInput>, UsuarioUncheckedUpdateWithoutReunionesCreadasInput>
  }

  export type ParticipanteReunionUpdateManyWithoutReunionNestedInput = {
    create?: XOR<ParticipanteReunionCreateWithoutReunionInput, ParticipanteReunionUncheckedCreateWithoutReunionInput> | ParticipanteReunionCreateWithoutReunionInput[] | ParticipanteReunionUncheckedCreateWithoutReunionInput[]
    connectOrCreate?: ParticipanteReunionCreateOrConnectWithoutReunionInput | ParticipanteReunionCreateOrConnectWithoutReunionInput[]
    upsert?: ParticipanteReunionUpsertWithWhereUniqueWithoutReunionInput | ParticipanteReunionUpsertWithWhereUniqueWithoutReunionInput[]
    createMany?: ParticipanteReunionCreateManyReunionInputEnvelope
    set?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
    disconnect?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
    delete?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
    connect?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
    update?: ParticipanteReunionUpdateWithWhereUniqueWithoutReunionInput | ParticipanteReunionUpdateWithWhereUniqueWithoutReunionInput[]
    updateMany?: ParticipanteReunionUpdateManyWithWhereWithoutReunionInput | ParticipanteReunionUpdateManyWithWhereWithoutReunionInput[]
    deleteMany?: ParticipanteReunionScalarWhereInput | ParticipanteReunionScalarWhereInput[]
  }

  export type ParticipanteReunionUncheckedUpdateManyWithoutReunionNestedInput = {
    create?: XOR<ParticipanteReunionCreateWithoutReunionInput, ParticipanteReunionUncheckedCreateWithoutReunionInput> | ParticipanteReunionCreateWithoutReunionInput[] | ParticipanteReunionUncheckedCreateWithoutReunionInput[]
    connectOrCreate?: ParticipanteReunionCreateOrConnectWithoutReunionInput | ParticipanteReunionCreateOrConnectWithoutReunionInput[]
    upsert?: ParticipanteReunionUpsertWithWhereUniqueWithoutReunionInput | ParticipanteReunionUpsertWithWhereUniqueWithoutReunionInput[]
    createMany?: ParticipanteReunionCreateManyReunionInputEnvelope
    set?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
    disconnect?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
    delete?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
    connect?: ParticipanteReunionWhereUniqueInput | ParticipanteReunionWhereUniqueInput[]
    update?: ParticipanteReunionUpdateWithWhereUniqueWithoutReunionInput | ParticipanteReunionUpdateWithWhereUniqueWithoutReunionInput[]
    updateMany?: ParticipanteReunionUpdateManyWithWhereWithoutReunionInput | ParticipanteReunionUpdateManyWithWhereWithoutReunionInput[]
    deleteMany?: ParticipanteReunionScalarWhereInput | ParticipanteReunionScalarWhereInput[]
  }

  export type ReunionCreateNestedOneWithoutParticipantesInput = {
    create?: XOR<ReunionCreateWithoutParticipantesInput, ReunionUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: ReunionCreateOrConnectWithoutParticipantesInput
    connect?: ReunionWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutParticipacionesReunionInput = {
    create?: XOR<UsuarioCreateWithoutParticipacionesReunionInput, UsuarioUncheckedCreateWithoutParticipacionesReunionInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutParticipacionesReunionInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ClienteCreateNestedOneWithoutParticipacionesReunionInput = {
    create?: XOR<ClienteCreateWithoutParticipacionesReunionInput, ClienteUncheckedCreateWithoutParticipacionesReunionInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutParticipacionesReunionInput
    connect?: ClienteWhereUniqueInput
  }

  export type ReunionUpdateOneRequiredWithoutParticipantesNestedInput = {
    create?: XOR<ReunionCreateWithoutParticipantesInput, ReunionUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: ReunionCreateOrConnectWithoutParticipantesInput
    upsert?: ReunionUpsertWithoutParticipantesInput
    connect?: ReunionWhereUniqueInput
    update?: XOR<XOR<ReunionUpdateToOneWithWhereWithoutParticipantesInput, ReunionUpdateWithoutParticipantesInput>, ReunionUncheckedUpdateWithoutParticipantesInput>
  }

  export type UsuarioUpdateOneWithoutParticipacionesReunionNestedInput = {
    create?: XOR<UsuarioCreateWithoutParticipacionesReunionInput, UsuarioUncheckedCreateWithoutParticipacionesReunionInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutParticipacionesReunionInput
    upsert?: UsuarioUpsertWithoutParticipacionesReunionInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutParticipacionesReunionInput, UsuarioUpdateWithoutParticipacionesReunionInput>, UsuarioUncheckedUpdateWithoutParticipacionesReunionInput>
  }

  export type ClienteUpdateOneWithoutParticipacionesReunionNestedInput = {
    create?: XOR<ClienteCreateWithoutParticipacionesReunionInput, ClienteUncheckedCreateWithoutParticipacionesReunionInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutParticipacionesReunionInput
    upsert?: ClienteUpsertWithoutParticipacionesReunionInput
    disconnect?: ClienteWhereInput | boolean
    delete?: ClienteWhereInput | boolean
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutParticipacionesReunionInput, ClienteUpdateWithoutParticipacionesReunionInput>, ClienteUncheckedUpdateWithoutParticipacionesReunionInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRolUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.RolUsuario | EnumRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumRolUsuarioFilter<$PrismaModel> | $Enums.RolUsuario
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRolUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RolUsuario | EnumRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumRolUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.RolUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolUsuarioFilter<$PrismaModel>
    _max?: NestedEnumRolUsuarioFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumEstadoCasoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCaso | EnumEstadoCasoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCaso[] | ListEnumEstadoCasoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoCaso[] | ListEnumEstadoCasoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoCasoFilter<$PrismaModel> | $Enums.EstadoCaso
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumEstadoCasoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCaso | EnumEstadoCasoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCaso[] | ListEnumEstadoCasoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoCaso[] | ListEnumEstadoCasoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoCasoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoCaso
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoCasoFilter<$PrismaModel>
    _max?: NestedEnumEstadoCasoFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumEstadoAudienciaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAudiencia | EnumEstadoAudienciaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAudiencia[] | ListEnumEstadoAudienciaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAudiencia[] | ListEnumEstadoAudienciaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAudienciaFilter<$PrismaModel> | $Enums.EstadoAudiencia
  }

  export type NestedEnumEstadoAudienciaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAudiencia | EnumEstadoAudienciaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAudiencia[] | ListEnumEstadoAudienciaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAudiencia[] | ListEnumEstadoAudienciaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAudienciaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoAudiencia
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoAudienciaFilter<$PrismaModel>
    _max?: NestedEnumEstadoAudienciaFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CasoCreateWithoutUsuarioInput = {
    numero: string
    asunto: string
    tipo: string
    estado?: $Enums.EstadoCaso
    fechaInicio: Date | string
    fechaCierre?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutCasosInput
    audiencias?: AudienciaCreateNestedManyWithoutCasoInput
    citas?: CitaCreateNestedManyWithoutCasoInput
    recordatorios?: RecordatorioCreateNestedManyWithoutCasoInput
    responsables?: CasoResponsableCreateNestedManyWithoutCasoInput
    reuniones?: ReunionCreateNestedManyWithoutCasoInput
  }

  export type CasoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    numero: string
    asunto: string
    tipo: string
    estado?: $Enums.EstadoCaso
    fechaInicio: Date | string
    fechaCierre?: Date | string | null
    clienteId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    audiencias?: AudienciaUncheckedCreateNestedManyWithoutCasoInput
    citas?: CitaUncheckedCreateNestedManyWithoutCasoInput
    recordatorios?: RecordatorioUncheckedCreateNestedManyWithoutCasoInput
    responsables?: CasoResponsableUncheckedCreateNestedManyWithoutCasoInput
    reuniones?: ReunionUncheckedCreateNestedManyWithoutCasoInput
  }

  export type CasoCreateOrConnectWithoutUsuarioInput = {
    where: CasoWhereUniqueInput
    create: XOR<CasoCreateWithoutUsuarioInput, CasoUncheckedCreateWithoutUsuarioInput>
  }

  export type CasoCreateManyUsuarioInputEnvelope = {
    data: CasoCreateManyUsuarioInput | CasoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CasoResponsableCreateWithoutUsuarioInput = {
    esPrincipal?: boolean
    createdAt?: Date | string
    caso: CasoCreateNestedOneWithoutResponsablesInput
  }

  export type CasoResponsableUncheckedCreateWithoutUsuarioInput = {
    id?: number
    casoId: number
    esPrincipal?: boolean
    createdAt?: Date | string
  }

  export type CasoResponsableCreateOrConnectWithoutUsuarioInput = {
    where: CasoResponsableWhereUniqueInput
    create: XOR<CasoResponsableCreateWithoutUsuarioInput, CasoResponsableUncheckedCreateWithoutUsuarioInput>
  }

  export type CasoResponsableCreateManyUsuarioInputEnvelope = {
    data: CasoResponsableCreateManyUsuarioInput | CasoResponsableCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type AudienciaCreateWithoutUsuarioInput = {
    fecha: Date | string
    lugar: string
    estado?: $Enums.EstadoAudiencia
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    caso: CasoCreateNestedOneWithoutAudienciasInput
  }

  export type AudienciaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    fecha: Date | string
    lugar: string
    estado?: $Enums.EstadoAudiencia
    observaciones?: string | null
    casoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AudienciaCreateOrConnectWithoutUsuarioInput = {
    where: AudienciaWhereUniqueInput
    create: XOR<AudienciaCreateWithoutUsuarioInput, AudienciaUncheckedCreateWithoutUsuarioInput>
  }

  export type AudienciaCreateManyUsuarioInputEnvelope = {
    data: AudienciaCreateManyUsuarioInput | AudienciaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CitaCreateWithoutUsuarioInput = {
    fecha: Date | string
    asunto: string
    contacto: string
    createdAt?: Date | string
    updatedAt?: Date | string
    caso?: CasoCreateNestedOneWithoutCitasInput
  }

  export type CitaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    fecha: Date | string
    asunto: string
    contacto: string
    casoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CitaCreateOrConnectWithoutUsuarioInput = {
    where: CitaWhereUniqueInput
    create: XOR<CitaCreateWithoutUsuarioInput, CitaUncheckedCreateWithoutUsuarioInput>
  }

  export type CitaCreateManyUsuarioInputEnvelope = {
    data: CitaCreateManyUsuarioInput | CitaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type RecordatorioCreateWithoutUsuarioInput = {
    titulo: string
    mensaje: string
    fechaEnvio: Date | string
    leido?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    caso?: CasoCreateNestedOneWithoutRecordatoriosInput
  }

  export type RecordatorioUncheckedCreateWithoutUsuarioInput = {
    id?: number
    titulo: string
    mensaje: string
    fechaEnvio: Date | string
    leido?: boolean
    casoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecordatorioCreateOrConnectWithoutUsuarioInput = {
    where: RecordatorioWhereUniqueInput
    create: XOR<RecordatorioCreateWithoutUsuarioInput, RecordatorioUncheckedCreateWithoutUsuarioInput>
  }

  export type RecordatorioCreateManyUsuarioInputEnvelope = {
    data: RecordatorioCreateManyUsuarioInput | RecordatorioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ReunionCreateWithoutCreadorInput = {
    titulo: string
    fecha: Date | string
    lugar?: string | null
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    caso?: CasoCreateNestedOneWithoutReunionesInput
    participantes?: ParticipanteReunionCreateNestedManyWithoutReunionInput
  }

  export type ReunionUncheckedCreateWithoutCreadorInput = {
    id?: number
    titulo: string
    fecha: Date | string
    lugar?: string | null
    observaciones?: string | null
    casoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participantes?: ParticipanteReunionUncheckedCreateNestedManyWithoutReunionInput
  }

  export type ReunionCreateOrConnectWithoutCreadorInput = {
    where: ReunionWhereUniqueInput
    create: XOR<ReunionCreateWithoutCreadorInput, ReunionUncheckedCreateWithoutCreadorInput>
  }

  export type ReunionCreateManyCreadorInputEnvelope = {
    data: ReunionCreateManyCreadorInput | ReunionCreateManyCreadorInput[]
    skipDuplicates?: boolean
  }

  export type ParticipanteReunionCreateWithoutUsuarioInput = {
    nombreExterno?: string | null
    correoExterno?: string | null
    reunion: ReunionCreateNestedOneWithoutParticipantesInput
    cliente?: ClienteCreateNestedOneWithoutParticipacionesReunionInput
  }

  export type ParticipanteReunionUncheckedCreateWithoutUsuarioInput = {
    id?: number
    reunionId: number
    clienteId?: number | null
    nombreExterno?: string | null
    correoExterno?: string | null
  }

  export type ParticipanteReunionCreateOrConnectWithoutUsuarioInput = {
    where: ParticipanteReunionWhereUniqueInput
    create: XOR<ParticipanteReunionCreateWithoutUsuarioInput, ParticipanteReunionUncheckedCreateWithoutUsuarioInput>
  }

  export type ParticipanteReunionCreateManyUsuarioInputEnvelope = {
    data: ParticipanteReunionCreateManyUsuarioInput | ParticipanteReunionCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CasoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: CasoWhereUniqueInput
    update: XOR<CasoUpdateWithoutUsuarioInput, CasoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CasoCreateWithoutUsuarioInput, CasoUncheckedCreateWithoutUsuarioInput>
  }

  export type CasoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: CasoWhereUniqueInput
    data: XOR<CasoUpdateWithoutUsuarioInput, CasoUncheckedUpdateWithoutUsuarioInput>
  }

  export type CasoUpdateManyWithWhereWithoutUsuarioInput = {
    where: CasoScalarWhereInput
    data: XOR<CasoUpdateManyMutationInput, CasoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type CasoScalarWhereInput = {
    AND?: CasoScalarWhereInput | CasoScalarWhereInput[]
    OR?: CasoScalarWhereInput[]
    NOT?: CasoScalarWhereInput | CasoScalarWhereInput[]
    id?: IntFilter<"Caso"> | number
    numero?: StringFilter<"Caso"> | string
    asunto?: StringFilter<"Caso"> | string
    tipo?: StringFilter<"Caso"> | string
    estado?: EnumEstadoCasoFilter<"Caso"> | $Enums.EstadoCaso
    fechaInicio?: DateTimeFilter<"Caso"> | Date | string
    fechaCierre?: DateTimeNullableFilter<"Caso"> | Date | string | null
    usuarioId?: IntFilter<"Caso"> | number
    clienteId?: IntFilter<"Caso"> | number
    createdAt?: DateTimeFilter<"Caso"> | Date | string
    updatedAt?: DateTimeFilter<"Caso"> | Date | string
  }

  export type CasoResponsableUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: CasoResponsableWhereUniqueInput
    update: XOR<CasoResponsableUpdateWithoutUsuarioInput, CasoResponsableUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CasoResponsableCreateWithoutUsuarioInput, CasoResponsableUncheckedCreateWithoutUsuarioInput>
  }

  export type CasoResponsableUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: CasoResponsableWhereUniqueInput
    data: XOR<CasoResponsableUpdateWithoutUsuarioInput, CasoResponsableUncheckedUpdateWithoutUsuarioInput>
  }

  export type CasoResponsableUpdateManyWithWhereWithoutUsuarioInput = {
    where: CasoResponsableScalarWhereInput
    data: XOR<CasoResponsableUpdateManyMutationInput, CasoResponsableUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type CasoResponsableScalarWhereInput = {
    AND?: CasoResponsableScalarWhereInput | CasoResponsableScalarWhereInput[]
    OR?: CasoResponsableScalarWhereInput[]
    NOT?: CasoResponsableScalarWhereInput | CasoResponsableScalarWhereInput[]
    id?: IntFilter<"CasoResponsable"> | number
    casoId?: IntFilter<"CasoResponsable"> | number
    usuarioId?: IntFilter<"CasoResponsable"> | number
    esPrincipal?: BoolFilter<"CasoResponsable"> | boolean
    createdAt?: DateTimeFilter<"CasoResponsable"> | Date | string
  }

  export type AudienciaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: AudienciaWhereUniqueInput
    update: XOR<AudienciaUpdateWithoutUsuarioInput, AudienciaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AudienciaCreateWithoutUsuarioInput, AudienciaUncheckedCreateWithoutUsuarioInput>
  }

  export type AudienciaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: AudienciaWhereUniqueInput
    data: XOR<AudienciaUpdateWithoutUsuarioInput, AudienciaUncheckedUpdateWithoutUsuarioInput>
  }

  export type AudienciaUpdateManyWithWhereWithoutUsuarioInput = {
    where: AudienciaScalarWhereInput
    data: XOR<AudienciaUpdateManyMutationInput, AudienciaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type AudienciaScalarWhereInput = {
    AND?: AudienciaScalarWhereInput | AudienciaScalarWhereInput[]
    OR?: AudienciaScalarWhereInput[]
    NOT?: AudienciaScalarWhereInput | AudienciaScalarWhereInput[]
    id?: IntFilter<"Audiencia"> | number
    fecha?: DateTimeFilter<"Audiencia"> | Date | string
    lugar?: StringFilter<"Audiencia"> | string
    estado?: EnumEstadoAudienciaFilter<"Audiencia"> | $Enums.EstadoAudiencia
    observaciones?: StringNullableFilter<"Audiencia"> | string | null
    casoId?: IntFilter<"Audiencia"> | number
    usuarioId?: IntFilter<"Audiencia"> | number
    createdAt?: DateTimeFilter<"Audiencia"> | Date | string
    updatedAt?: DateTimeFilter<"Audiencia"> | Date | string
  }

  export type CitaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: CitaWhereUniqueInput
    update: XOR<CitaUpdateWithoutUsuarioInput, CitaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CitaCreateWithoutUsuarioInput, CitaUncheckedCreateWithoutUsuarioInput>
  }

  export type CitaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: CitaWhereUniqueInput
    data: XOR<CitaUpdateWithoutUsuarioInput, CitaUncheckedUpdateWithoutUsuarioInput>
  }

  export type CitaUpdateManyWithWhereWithoutUsuarioInput = {
    where: CitaScalarWhereInput
    data: XOR<CitaUpdateManyMutationInput, CitaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type CitaScalarWhereInput = {
    AND?: CitaScalarWhereInput | CitaScalarWhereInput[]
    OR?: CitaScalarWhereInput[]
    NOT?: CitaScalarWhereInput | CitaScalarWhereInput[]
    id?: IntFilter<"Cita"> | number
    fecha?: DateTimeFilter<"Cita"> | Date | string
    asunto?: StringFilter<"Cita"> | string
    contacto?: StringFilter<"Cita"> | string
    casoId?: IntNullableFilter<"Cita"> | number | null
    usuarioId?: IntFilter<"Cita"> | number
    createdAt?: DateTimeFilter<"Cita"> | Date | string
    updatedAt?: DateTimeFilter<"Cita"> | Date | string
  }

  export type RecordatorioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: RecordatorioWhereUniqueInput
    update: XOR<RecordatorioUpdateWithoutUsuarioInput, RecordatorioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<RecordatorioCreateWithoutUsuarioInput, RecordatorioUncheckedCreateWithoutUsuarioInput>
  }

  export type RecordatorioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: RecordatorioWhereUniqueInput
    data: XOR<RecordatorioUpdateWithoutUsuarioInput, RecordatorioUncheckedUpdateWithoutUsuarioInput>
  }

  export type RecordatorioUpdateManyWithWhereWithoutUsuarioInput = {
    where: RecordatorioScalarWhereInput
    data: XOR<RecordatorioUpdateManyMutationInput, RecordatorioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type RecordatorioScalarWhereInput = {
    AND?: RecordatorioScalarWhereInput | RecordatorioScalarWhereInput[]
    OR?: RecordatorioScalarWhereInput[]
    NOT?: RecordatorioScalarWhereInput | RecordatorioScalarWhereInput[]
    id?: IntFilter<"Recordatorio"> | number
    titulo?: StringFilter<"Recordatorio"> | string
    mensaje?: StringFilter<"Recordatorio"> | string
    fechaEnvio?: DateTimeFilter<"Recordatorio"> | Date | string
    leido?: BoolFilter<"Recordatorio"> | boolean
    casoId?: IntNullableFilter<"Recordatorio"> | number | null
    usuarioId?: IntFilter<"Recordatorio"> | number
    createdAt?: DateTimeFilter<"Recordatorio"> | Date | string
    updatedAt?: DateTimeFilter<"Recordatorio"> | Date | string
  }

  export type ReunionUpsertWithWhereUniqueWithoutCreadorInput = {
    where: ReunionWhereUniqueInput
    update: XOR<ReunionUpdateWithoutCreadorInput, ReunionUncheckedUpdateWithoutCreadorInput>
    create: XOR<ReunionCreateWithoutCreadorInput, ReunionUncheckedCreateWithoutCreadorInput>
  }

  export type ReunionUpdateWithWhereUniqueWithoutCreadorInput = {
    where: ReunionWhereUniqueInput
    data: XOR<ReunionUpdateWithoutCreadorInput, ReunionUncheckedUpdateWithoutCreadorInput>
  }

  export type ReunionUpdateManyWithWhereWithoutCreadorInput = {
    where: ReunionScalarWhereInput
    data: XOR<ReunionUpdateManyMutationInput, ReunionUncheckedUpdateManyWithoutCreadorInput>
  }

  export type ReunionScalarWhereInput = {
    AND?: ReunionScalarWhereInput | ReunionScalarWhereInput[]
    OR?: ReunionScalarWhereInput[]
    NOT?: ReunionScalarWhereInput | ReunionScalarWhereInput[]
    id?: IntFilter<"Reunion"> | number
    titulo?: StringFilter<"Reunion"> | string
    fecha?: DateTimeFilter<"Reunion"> | Date | string
    lugar?: StringNullableFilter<"Reunion"> | string | null
    observaciones?: StringNullableFilter<"Reunion"> | string | null
    casoId?: IntNullableFilter<"Reunion"> | number | null
    creadorId?: IntFilter<"Reunion"> | number
    createdAt?: DateTimeFilter<"Reunion"> | Date | string
    updatedAt?: DateTimeFilter<"Reunion"> | Date | string
  }

  export type ParticipanteReunionUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ParticipanteReunionWhereUniqueInput
    update: XOR<ParticipanteReunionUpdateWithoutUsuarioInput, ParticipanteReunionUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ParticipanteReunionCreateWithoutUsuarioInput, ParticipanteReunionUncheckedCreateWithoutUsuarioInput>
  }

  export type ParticipanteReunionUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ParticipanteReunionWhereUniqueInput
    data: XOR<ParticipanteReunionUpdateWithoutUsuarioInput, ParticipanteReunionUncheckedUpdateWithoutUsuarioInput>
  }

  export type ParticipanteReunionUpdateManyWithWhereWithoutUsuarioInput = {
    where: ParticipanteReunionScalarWhereInput
    data: XOR<ParticipanteReunionUpdateManyMutationInput, ParticipanteReunionUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ParticipanteReunionScalarWhereInput = {
    AND?: ParticipanteReunionScalarWhereInput | ParticipanteReunionScalarWhereInput[]
    OR?: ParticipanteReunionScalarWhereInput[]
    NOT?: ParticipanteReunionScalarWhereInput | ParticipanteReunionScalarWhereInput[]
    id?: IntFilter<"ParticipanteReunion"> | number
    reunionId?: IntFilter<"ParticipanteReunion"> | number
    usuarioId?: IntNullableFilter<"ParticipanteReunion"> | number | null
    clienteId?: IntNullableFilter<"ParticipanteReunion"> | number | null
    nombreExterno?: StringNullableFilter<"ParticipanteReunion"> | string | null
    correoExterno?: StringNullableFilter<"ParticipanteReunion"> | string | null
  }

  export type CasoCreateWithoutClienteInput = {
    numero: string
    asunto: string
    tipo: string
    estado?: $Enums.EstadoCaso
    fechaInicio: Date | string
    fechaCierre?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCasosInput
    audiencias?: AudienciaCreateNestedManyWithoutCasoInput
    citas?: CitaCreateNestedManyWithoutCasoInput
    recordatorios?: RecordatorioCreateNestedManyWithoutCasoInput
    responsables?: CasoResponsableCreateNestedManyWithoutCasoInput
    reuniones?: ReunionCreateNestedManyWithoutCasoInput
  }

  export type CasoUncheckedCreateWithoutClienteInput = {
    id?: number
    numero: string
    asunto: string
    tipo: string
    estado?: $Enums.EstadoCaso
    fechaInicio: Date | string
    fechaCierre?: Date | string | null
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    audiencias?: AudienciaUncheckedCreateNestedManyWithoutCasoInput
    citas?: CitaUncheckedCreateNestedManyWithoutCasoInput
    recordatorios?: RecordatorioUncheckedCreateNestedManyWithoutCasoInput
    responsables?: CasoResponsableUncheckedCreateNestedManyWithoutCasoInput
    reuniones?: ReunionUncheckedCreateNestedManyWithoutCasoInput
  }

  export type CasoCreateOrConnectWithoutClienteInput = {
    where: CasoWhereUniqueInput
    create: XOR<CasoCreateWithoutClienteInput, CasoUncheckedCreateWithoutClienteInput>
  }

  export type CasoCreateManyClienteInputEnvelope = {
    data: CasoCreateManyClienteInput | CasoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type ParticipanteReunionCreateWithoutClienteInput = {
    nombreExterno?: string | null
    correoExterno?: string | null
    reunion: ReunionCreateNestedOneWithoutParticipantesInput
    usuario?: UsuarioCreateNestedOneWithoutParticipacionesReunionInput
  }

  export type ParticipanteReunionUncheckedCreateWithoutClienteInput = {
    id?: number
    reunionId: number
    usuarioId?: number | null
    nombreExterno?: string | null
    correoExterno?: string | null
  }

  export type ParticipanteReunionCreateOrConnectWithoutClienteInput = {
    where: ParticipanteReunionWhereUniqueInput
    create: XOR<ParticipanteReunionCreateWithoutClienteInput, ParticipanteReunionUncheckedCreateWithoutClienteInput>
  }

  export type ParticipanteReunionCreateManyClienteInputEnvelope = {
    data: ParticipanteReunionCreateManyClienteInput | ParticipanteReunionCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type CasoUpsertWithWhereUniqueWithoutClienteInput = {
    where: CasoWhereUniqueInput
    update: XOR<CasoUpdateWithoutClienteInput, CasoUncheckedUpdateWithoutClienteInput>
    create: XOR<CasoCreateWithoutClienteInput, CasoUncheckedCreateWithoutClienteInput>
  }

  export type CasoUpdateWithWhereUniqueWithoutClienteInput = {
    where: CasoWhereUniqueInput
    data: XOR<CasoUpdateWithoutClienteInput, CasoUncheckedUpdateWithoutClienteInput>
  }

  export type CasoUpdateManyWithWhereWithoutClienteInput = {
    where: CasoScalarWhereInput
    data: XOR<CasoUpdateManyMutationInput, CasoUncheckedUpdateManyWithoutClienteInput>
  }

  export type ParticipanteReunionUpsertWithWhereUniqueWithoutClienteInput = {
    where: ParticipanteReunionWhereUniqueInput
    update: XOR<ParticipanteReunionUpdateWithoutClienteInput, ParticipanteReunionUncheckedUpdateWithoutClienteInput>
    create: XOR<ParticipanteReunionCreateWithoutClienteInput, ParticipanteReunionUncheckedCreateWithoutClienteInput>
  }

  export type ParticipanteReunionUpdateWithWhereUniqueWithoutClienteInput = {
    where: ParticipanteReunionWhereUniqueInput
    data: XOR<ParticipanteReunionUpdateWithoutClienteInput, ParticipanteReunionUncheckedUpdateWithoutClienteInput>
  }

  export type ParticipanteReunionUpdateManyWithWhereWithoutClienteInput = {
    where: ParticipanteReunionScalarWhereInput
    data: XOR<ParticipanteReunionUpdateManyMutationInput, ParticipanteReunionUncheckedUpdateManyWithoutClienteInput>
  }

  export type UsuarioCreateWithoutCasosInput = {
    nombre: string
    correo: string
    clave: string
    rol?: $Enums.RolUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    casosAsignados?: CasoResponsableCreateNestedManyWithoutUsuarioInput
    audiencias?: AudienciaCreateNestedManyWithoutUsuarioInput
    citas?: CitaCreateNestedManyWithoutUsuarioInput
    recordatorios?: RecordatorioCreateNestedManyWithoutUsuarioInput
    reunionesCreadas?: ReunionCreateNestedManyWithoutCreadorInput
    participacionesReunion?: ParticipanteReunionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCasosInput = {
    id?: number
    nombre: string
    correo: string
    clave: string
    rol?: $Enums.RolUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    casosAsignados?: CasoResponsableUncheckedCreateNestedManyWithoutUsuarioInput
    audiencias?: AudienciaUncheckedCreateNestedManyWithoutUsuarioInput
    citas?: CitaUncheckedCreateNestedManyWithoutUsuarioInput
    recordatorios?: RecordatorioUncheckedCreateNestedManyWithoutUsuarioInput
    reunionesCreadas?: ReunionUncheckedCreateNestedManyWithoutCreadorInput
    participacionesReunion?: ParticipanteReunionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCasosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCasosInput, UsuarioUncheckedCreateWithoutCasosInput>
  }

  export type ClienteCreateWithoutCasosInput = {
    nombre: string
    correo: string
    telefono: string
    direccion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participacionesReunion?: ParticipanteReunionCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutCasosInput = {
    id?: number
    nombre: string
    correo: string
    telefono: string
    direccion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participacionesReunion?: ParticipanteReunionUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutCasosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutCasosInput, ClienteUncheckedCreateWithoutCasosInput>
  }

  export type AudienciaCreateWithoutCasoInput = {
    fecha: Date | string
    lugar: string
    estado?: $Enums.EstadoAudiencia
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutAudienciasInput
  }

  export type AudienciaUncheckedCreateWithoutCasoInput = {
    id?: number
    fecha: Date | string
    lugar: string
    estado?: $Enums.EstadoAudiencia
    observaciones?: string | null
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AudienciaCreateOrConnectWithoutCasoInput = {
    where: AudienciaWhereUniqueInput
    create: XOR<AudienciaCreateWithoutCasoInput, AudienciaUncheckedCreateWithoutCasoInput>
  }

  export type AudienciaCreateManyCasoInputEnvelope = {
    data: AudienciaCreateManyCasoInput | AudienciaCreateManyCasoInput[]
    skipDuplicates?: boolean
  }

  export type CitaCreateWithoutCasoInput = {
    fecha: Date | string
    asunto: string
    contacto: string
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCitasInput
  }

  export type CitaUncheckedCreateWithoutCasoInput = {
    id?: number
    fecha: Date | string
    asunto: string
    contacto: string
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CitaCreateOrConnectWithoutCasoInput = {
    where: CitaWhereUniqueInput
    create: XOR<CitaCreateWithoutCasoInput, CitaUncheckedCreateWithoutCasoInput>
  }

  export type CitaCreateManyCasoInputEnvelope = {
    data: CitaCreateManyCasoInput | CitaCreateManyCasoInput[]
    skipDuplicates?: boolean
  }

  export type RecordatorioCreateWithoutCasoInput = {
    titulo: string
    mensaje: string
    fechaEnvio: Date | string
    leido?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutRecordatoriosInput
  }

  export type RecordatorioUncheckedCreateWithoutCasoInput = {
    id?: number
    titulo: string
    mensaje: string
    fechaEnvio: Date | string
    leido?: boolean
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecordatorioCreateOrConnectWithoutCasoInput = {
    where: RecordatorioWhereUniqueInput
    create: XOR<RecordatorioCreateWithoutCasoInput, RecordatorioUncheckedCreateWithoutCasoInput>
  }

  export type RecordatorioCreateManyCasoInputEnvelope = {
    data: RecordatorioCreateManyCasoInput | RecordatorioCreateManyCasoInput[]
    skipDuplicates?: boolean
  }

  export type CasoResponsableCreateWithoutCasoInput = {
    esPrincipal?: boolean
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCasosAsignadosInput
  }

  export type CasoResponsableUncheckedCreateWithoutCasoInput = {
    id?: number
    usuarioId: number
    esPrincipal?: boolean
    createdAt?: Date | string
  }

  export type CasoResponsableCreateOrConnectWithoutCasoInput = {
    where: CasoResponsableWhereUniqueInput
    create: XOR<CasoResponsableCreateWithoutCasoInput, CasoResponsableUncheckedCreateWithoutCasoInput>
  }

  export type CasoResponsableCreateManyCasoInputEnvelope = {
    data: CasoResponsableCreateManyCasoInput | CasoResponsableCreateManyCasoInput[]
    skipDuplicates?: boolean
  }

  export type ReunionCreateWithoutCasoInput = {
    titulo: string
    fecha: Date | string
    lugar?: string | null
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creador: UsuarioCreateNestedOneWithoutReunionesCreadasInput
    participantes?: ParticipanteReunionCreateNestedManyWithoutReunionInput
  }

  export type ReunionUncheckedCreateWithoutCasoInput = {
    id?: number
    titulo: string
    fecha: Date | string
    lugar?: string | null
    observaciones?: string | null
    creadorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    participantes?: ParticipanteReunionUncheckedCreateNestedManyWithoutReunionInput
  }

  export type ReunionCreateOrConnectWithoutCasoInput = {
    where: ReunionWhereUniqueInput
    create: XOR<ReunionCreateWithoutCasoInput, ReunionUncheckedCreateWithoutCasoInput>
  }

  export type ReunionCreateManyCasoInputEnvelope = {
    data: ReunionCreateManyCasoInput | ReunionCreateManyCasoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutCasosInput = {
    update: XOR<UsuarioUpdateWithoutCasosInput, UsuarioUncheckedUpdateWithoutCasosInput>
    create: XOR<UsuarioCreateWithoutCasosInput, UsuarioUncheckedCreateWithoutCasosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCasosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCasosInput, UsuarioUncheckedUpdateWithoutCasosInput>
  }

  export type UsuarioUpdateWithoutCasosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casosAsignados?: CasoResponsableUpdateManyWithoutUsuarioNestedInput
    audiencias?: AudienciaUpdateManyWithoutUsuarioNestedInput
    citas?: CitaUpdateManyWithoutUsuarioNestedInput
    recordatorios?: RecordatorioUpdateManyWithoutUsuarioNestedInput
    reunionesCreadas?: ReunionUpdateManyWithoutCreadorNestedInput
    participacionesReunion?: ParticipanteReunionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCasosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casosAsignados?: CasoResponsableUncheckedUpdateManyWithoutUsuarioNestedInput
    audiencias?: AudienciaUncheckedUpdateManyWithoutUsuarioNestedInput
    citas?: CitaUncheckedUpdateManyWithoutUsuarioNestedInput
    recordatorios?: RecordatorioUncheckedUpdateManyWithoutUsuarioNestedInput
    reunionesCreadas?: ReunionUncheckedUpdateManyWithoutCreadorNestedInput
    participacionesReunion?: ParticipanteReunionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ClienteUpsertWithoutCasosInput = {
    update: XOR<ClienteUpdateWithoutCasosInput, ClienteUncheckedUpdateWithoutCasosInput>
    create: XOR<ClienteCreateWithoutCasosInput, ClienteUncheckedCreateWithoutCasosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutCasosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutCasosInput, ClienteUncheckedUpdateWithoutCasosInput>
  }

  export type ClienteUpdateWithoutCasosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participacionesReunion?: ParticipanteReunionUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutCasosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participacionesReunion?: ParticipanteReunionUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type AudienciaUpsertWithWhereUniqueWithoutCasoInput = {
    where: AudienciaWhereUniqueInput
    update: XOR<AudienciaUpdateWithoutCasoInput, AudienciaUncheckedUpdateWithoutCasoInput>
    create: XOR<AudienciaCreateWithoutCasoInput, AudienciaUncheckedCreateWithoutCasoInput>
  }

  export type AudienciaUpdateWithWhereUniqueWithoutCasoInput = {
    where: AudienciaWhereUniqueInput
    data: XOR<AudienciaUpdateWithoutCasoInput, AudienciaUncheckedUpdateWithoutCasoInput>
  }

  export type AudienciaUpdateManyWithWhereWithoutCasoInput = {
    where: AudienciaScalarWhereInput
    data: XOR<AudienciaUpdateManyMutationInput, AudienciaUncheckedUpdateManyWithoutCasoInput>
  }

  export type CitaUpsertWithWhereUniqueWithoutCasoInput = {
    where: CitaWhereUniqueInput
    update: XOR<CitaUpdateWithoutCasoInput, CitaUncheckedUpdateWithoutCasoInput>
    create: XOR<CitaCreateWithoutCasoInput, CitaUncheckedCreateWithoutCasoInput>
  }

  export type CitaUpdateWithWhereUniqueWithoutCasoInput = {
    where: CitaWhereUniqueInput
    data: XOR<CitaUpdateWithoutCasoInput, CitaUncheckedUpdateWithoutCasoInput>
  }

  export type CitaUpdateManyWithWhereWithoutCasoInput = {
    where: CitaScalarWhereInput
    data: XOR<CitaUpdateManyMutationInput, CitaUncheckedUpdateManyWithoutCasoInput>
  }

  export type RecordatorioUpsertWithWhereUniqueWithoutCasoInput = {
    where: RecordatorioWhereUniqueInput
    update: XOR<RecordatorioUpdateWithoutCasoInput, RecordatorioUncheckedUpdateWithoutCasoInput>
    create: XOR<RecordatorioCreateWithoutCasoInput, RecordatorioUncheckedCreateWithoutCasoInput>
  }

  export type RecordatorioUpdateWithWhereUniqueWithoutCasoInput = {
    where: RecordatorioWhereUniqueInput
    data: XOR<RecordatorioUpdateWithoutCasoInput, RecordatorioUncheckedUpdateWithoutCasoInput>
  }

  export type RecordatorioUpdateManyWithWhereWithoutCasoInput = {
    where: RecordatorioScalarWhereInput
    data: XOR<RecordatorioUpdateManyMutationInput, RecordatorioUncheckedUpdateManyWithoutCasoInput>
  }

  export type CasoResponsableUpsertWithWhereUniqueWithoutCasoInput = {
    where: CasoResponsableWhereUniqueInput
    update: XOR<CasoResponsableUpdateWithoutCasoInput, CasoResponsableUncheckedUpdateWithoutCasoInput>
    create: XOR<CasoResponsableCreateWithoutCasoInput, CasoResponsableUncheckedCreateWithoutCasoInput>
  }

  export type CasoResponsableUpdateWithWhereUniqueWithoutCasoInput = {
    where: CasoResponsableWhereUniqueInput
    data: XOR<CasoResponsableUpdateWithoutCasoInput, CasoResponsableUncheckedUpdateWithoutCasoInput>
  }

  export type CasoResponsableUpdateManyWithWhereWithoutCasoInput = {
    where: CasoResponsableScalarWhereInput
    data: XOR<CasoResponsableUpdateManyMutationInput, CasoResponsableUncheckedUpdateManyWithoutCasoInput>
  }

  export type ReunionUpsertWithWhereUniqueWithoutCasoInput = {
    where: ReunionWhereUniqueInput
    update: XOR<ReunionUpdateWithoutCasoInput, ReunionUncheckedUpdateWithoutCasoInput>
    create: XOR<ReunionCreateWithoutCasoInput, ReunionUncheckedCreateWithoutCasoInput>
  }

  export type ReunionUpdateWithWhereUniqueWithoutCasoInput = {
    where: ReunionWhereUniqueInput
    data: XOR<ReunionUpdateWithoutCasoInput, ReunionUncheckedUpdateWithoutCasoInput>
  }

  export type ReunionUpdateManyWithWhereWithoutCasoInput = {
    where: ReunionScalarWhereInput
    data: XOR<ReunionUpdateManyMutationInput, ReunionUncheckedUpdateManyWithoutCasoInput>
  }

  export type CasoCreateWithoutResponsablesInput = {
    numero: string
    asunto: string
    tipo: string
    estado?: $Enums.EstadoCaso
    fechaInicio: Date | string
    fechaCierre?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCasosInput
    cliente: ClienteCreateNestedOneWithoutCasosInput
    audiencias?: AudienciaCreateNestedManyWithoutCasoInput
    citas?: CitaCreateNestedManyWithoutCasoInput
    recordatorios?: RecordatorioCreateNestedManyWithoutCasoInput
    reuniones?: ReunionCreateNestedManyWithoutCasoInput
  }

  export type CasoUncheckedCreateWithoutResponsablesInput = {
    id?: number
    numero: string
    asunto: string
    tipo: string
    estado?: $Enums.EstadoCaso
    fechaInicio: Date | string
    fechaCierre?: Date | string | null
    usuarioId: number
    clienteId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    audiencias?: AudienciaUncheckedCreateNestedManyWithoutCasoInput
    citas?: CitaUncheckedCreateNestedManyWithoutCasoInput
    recordatorios?: RecordatorioUncheckedCreateNestedManyWithoutCasoInput
    reuniones?: ReunionUncheckedCreateNestedManyWithoutCasoInput
  }

  export type CasoCreateOrConnectWithoutResponsablesInput = {
    where: CasoWhereUniqueInput
    create: XOR<CasoCreateWithoutResponsablesInput, CasoUncheckedCreateWithoutResponsablesInput>
  }

  export type UsuarioCreateWithoutCasosAsignadosInput = {
    nombre: string
    correo: string
    clave: string
    rol?: $Enums.RolUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    casos?: CasoCreateNestedManyWithoutUsuarioInput
    audiencias?: AudienciaCreateNestedManyWithoutUsuarioInput
    citas?: CitaCreateNestedManyWithoutUsuarioInput
    recordatorios?: RecordatorioCreateNestedManyWithoutUsuarioInput
    reunionesCreadas?: ReunionCreateNestedManyWithoutCreadorInput
    participacionesReunion?: ParticipanteReunionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCasosAsignadosInput = {
    id?: number
    nombre: string
    correo: string
    clave: string
    rol?: $Enums.RolUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    casos?: CasoUncheckedCreateNestedManyWithoutUsuarioInput
    audiencias?: AudienciaUncheckedCreateNestedManyWithoutUsuarioInput
    citas?: CitaUncheckedCreateNestedManyWithoutUsuarioInput
    recordatorios?: RecordatorioUncheckedCreateNestedManyWithoutUsuarioInput
    reunionesCreadas?: ReunionUncheckedCreateNestedManyWithoutCreadorInput
    participacionesReunion?: ParticipanteReunionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCasosAsignadosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCasosAsignadosInput, UsuarioUncheckedCreateWithoutCasosAsignadosInput>
  }

  export type CasoUpsertWithoutResponsablesInput = {
    update: XOR<CasoUpdateWithoutResponsablesInput, CasoUncheckedUpdateWithoutResponsablesInput>
    create: XOR<CasoCreateWithoutResponsablesInput, CasoUncheckedCreateWithoutResponsablesInput>
    where?: CasoWhereInput
  }

  export type CasoUpdateToOneWithWhereWithoutResponsablesInput = {
    where?: CasoWhereInput
    data: XOR<CasoUpdateWithoutResponsablesInput, CasoUncheckedUpdateWithoutResponsablesInput>
  }

  export type CasoUpdateWithoutResponsablesInput = {
    numero?: StringFieldUpdateOperationsInput | string
    asunto?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoCasoFieldUpdateOperationsInput | $Enums.EstadoCaso
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCasosNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutCasosNestedInput
    audiencias?: AudienciaUpdateManyWithoutCasoNestedInput
    citas?: CitaUpdateManyWithoutCasoNestedInput
    recordatorios?: RecordatorioUpdateManyWithoutCasoNestedInput
    reuniones?: ReunionUpdateManyWithoutCasoNestedInput
  }

  export type CasoUncheckedUpdateWithoutResponsablesInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    asunto?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoCasoFieldUpdateOperationsInput | $Enums.EstadoCaso
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audiencias?: AudienciaUncheckedUpdateManyWithoutCasoNestedInput
    citas?: CitaUncheckedUpdateManyWithoutCasoNestedInput
    recordatorios?: RecordatorioUncheckedUpdateManyWithoutCasoNestedInput
    reuniones?: ReunionUncheckedUpdateManyWithoutCasoNestedInput
  }

  export type UsuarioUpsertWithoutCasosAsignadosInput = {
    update: XOR<UsuarioUpdateWithoutCasosAsignadosInput, UsuarioUncheckedUpdateWithoutCasosAsignadosInput>
    create: XOR<UsuarioCreateWithoutCasosAsignadosInput, UsuarioUncheckedCreateWithoutCasosAsignadosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCasosAsignadosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCasosAsignadosInput, UsuarioUncheckedUpdateWithoutCasosAsignadosInput>
  }

  export type UsuarioUpdateWithoutCasosAsignadosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casos?: CasoUpdateManyWithoutUsuarioNestedInput
    audiencias?: AudienciaUpdateManyWithoutUsuarioNestedInput
    citas?: CitaUpdateManyWithoutUsuarioNestedInput
    recordatorios?: RecordatorioUpdateManyWithoutUsuarioNestedInput
    reunionesCreadas?: ReunionUpdateManyWithoutCreadorNestedInput
    participacionesReunion?: ParticipanteReunionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCasosAsignadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casos?: CasoUncheckedUpdateManyWithoutUsuarioNestedInput
    audiencias?: AudienciaUncheckedUpdateManyWithoutUsuarioNestedInput
    citas?: CitaUncheckedUpdateManyWithoutUsuarioNestedInput
    recordatorios?: RecordatorioUncheckedUpdateManyWithoutUsuarioNestedInput
    reunionesCreadas?: ReunionUncheckedUpdateManyWithoutCreadorNestedInput
    participacionesReunion?: ParticipanteReunionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CasoCreateWithoutAudienciasInput = {
    numero: string
    asunto: string
    tipo: string
    estado?: $Enums.EstadoCaso
    fechaInicio: Date | string
    fechaCierre?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCasosInput
    cliente: ClienteCreateNestedOneWithoutCasosInput
    citas?: CitaCreateNestedManyWithoutCasoInput
    recordatorios?: RecordatorioCreateNestedManyWithoutCasoInput
    responsables?: CasoResponsableCreateNestedManyWithoutCasoInput
    reuniones?: ReunionCreateNestedManyWithoutCasoInput
  }

  export type CasoUncheckedCreateWithoutAudienciasInput = {
    id?: number
    numero: string
    asunto: string
    tipo: string
    estado?: $Enums.EstadoCaso
    fechaInicio: Date | string
    fechaCierre?: Date | string | null
    usuarioId: number
    clienteId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    citas?: CitaUncheckedCreateNestedManyWithoutCasoInput
    recordatorios?: RecordatorioUncheckedCreateNestedManyWithoutCasoInput
    responsables?: CasoResponsableUncheckedCreateNestedManyWithoutCasoInput
    reuniones?: ReunionUncheckedCreateNestedManyWithoutCasoInput
  }

  export type CasoCreateOrConnectWithoutAudienciasInput = {
    where: CasoWhereUniqueInput
    create: XOR<CasoCreateWithoutAudienciasInput, CasoUncheckedCreateWithoutAudienciasInput>
  }

  export type UsuarioCreateWithoutAudienciasInput = {
    nombre: string
    correo: string
    clave: string
    rol?: $Enums.RolUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    casos?: CasoCreateNestedManyWithoutUsuarioInput
    casosAsignados?: CasoResponsableCreateNestedManyWithoutUsuarioInput
    citas?: CitaCreateNestedManyWithoutUsuarioInput
    recordatorios?: RecordatorioCreateNestedManyWithoutUsuarioInput
    reunionesCreadas?: ReunionCreateNestedManyWithoutCreadorInput
    participacionesReunion?: ParticipanteReunionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutAudienciasInput = {
    id?: number
    nombre: string
    correo: string
    clave: string
    rol?: $Enums.RolUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    casos?: CasoUncheckedCreateNestedManyWithoutUsuarioInput
    casosAsignados?: CasoResponsableUncheckedCreateNestedManyWithoutUsuarioInput
    citas?: CitaUncheckedCreateNestedManyWithoutUsuarioInput
    recordatorios?: RecordatorioUncheckedCreateNestedManyWithoutUsuarioInput
    reunionesCreadas?: ReunionUncheckedCreateNestedManyWithoutCreadorInput
    participacionesReunion?: ParticipanteReunionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutAudienciasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAudienciasInput, UsuarioUncheckedCreateWithoutAudienciasInput>
  }

  export type CasoUpsertWithoutAudienciasInput = {
    update: XOR<CasoUpdateWithoutAudienciasInput, CasoUncheckedUpdateWithoutAudienciasInput>
    create: XOR<CasoCreateWithoutAudienciasInput, CasoUncheckedCreateWithoutAudienciasInput>
    where?: CasoWhereInput
  }

  export type CasoUpdateToOneWithWhereWithoutAudienciasInput = {
    where?: CasoWhereInput
    data: XOR<CasoUpdateWithoutAudienciasInput, CasoUncheckedUpdateWithoutAudienciasInput>
  }

  export type CasoUpdateWithoutAudienciasInput = {
    numero?: StringFieldUpdateOperationsInput | string
    asunto?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoCasoFieldUpdateOperationsInput | $Enums.EstadoCaso
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCasosNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutCasosNestedInput
    citas?: CitaUpdateManyWithoutCasoNestedInput
    recordatorios?: RecordatorioUpdateManyWithoutCasoNestedInput
    responsables?: CasoResponsableUpdateManyWithoutCasoNestedInput
    reuniones?: ReunionUpdateManyWithoutCasoNestedInput
  }

  export type CasoUncheckedUpdateWithoutAudienciasInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    asunto?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoCasoFieldUpdateOperationsInput | $Enums.EstadoCaso
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    citas?: CitaUncheckedUpdateManyWithoutCasoNestedInput
    recordatorios?: RecordatorioUncheckedUpdateManyWithoutCasoNestedInput
    responsables?: CasoResponsableUncheckedUpdateManyWithoutCasoNestedInput
    reuniones?: ReunionUncheckedUpdateManyWithoutCasoNestedInput
  }

  export type UsuarioUpsertWithoutAudienciasInput = {
    update: XOR<UsuarioUpdateWithoutAudienciasInput, UsuarioUncheckedUpdateWithoutAudienciasInput>
    create: XOR<UsuarioCreateWithoutAudienciasInput, UsuarioUncheckedCreateWithoutAudienciasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAudienciasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAudienciasInput, UsuarioUncheckedUpdateWithoutAudienciasInput>
  }

  export type UsuarioUpdateWithoutAudienciasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casos?: CasoUpdateManyWithoutUsuarioNestedInput
    casosAsignados?: CasoResponsableUpdateManyWithoutUsuarioNestedInput
    citas?: CitaUpdateManyWithoutUsuarioNestedInput
    recordatorios?: RecordatorioUpdateManyWithoutUsuarioNestedInput
    reunionesCreadas?: ReunionUpdateManyWithoutCreadorNestedInput
    participacionesReunion?: ParticipanteReunionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAudienciasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casos?: CasoUncheckedUpdateManyWithoutUsuarioNestedInput
    casosAsignados?: CasoResponsableUncheckedUpdateManyWithoutUsuarioNestedInput
    citas?: CitaUncheckedUpdateManyWithoutUsuarioNestedInput
    recordatorios?: RecordatorioUncheckedUpdateManyWithoutUsuarioNestedInput
    reunionesCreadas?: ReunionUncheckedUpdateManyWithoutCreadorNestedInput
    participacionesReunion?: ParticipanteReunionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CasoCreateWithoutCitasInput = {
    numero: string
    asunto: string
    tipo: string
    estado?: $Enums.EstadoCaso
    fechaInicio: Date | string
    fechaCierre?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCasosInput
    cliente: ClienteCreateNestedOneWithoutCasosInput
    audiencias?: AudienciaCreateNestedManyWithoutCasoInput
    recordatorios?: RecordatorioCreateNestedManyWithoutCasoInput
    responsables?: CasoResponsableCreateNestedManyWithoutCasoInput
    reuniones?: ReunionCreateNestedManyWithoutCasoInput
  }

  export type CasoUncheckedCreateWithoutCitasInput = {
    id?: number
    numero: string
    asunto: string
    tipo: string
    estado?: $Enums.EstadoCaso
    fechaInicio: Date | string
    fechaCierre?: Date | string | null
    usuarioId: number
    clienteId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    audiencias?: AudienciaUncheckedCreateNestedManyWithoutCasoInput
    recordatorios?: RecordatorioUncheckedCreateNestedManyWithoutCasoInput
    responsables?: CasoResponsableUncheckedCreateNestedManyWithoutCasoInput
    reuniones?: ReunionUncheckedCreateNestedManyWithoutCasoInput
  }

  export type CasoCreateOrConnectWithoutCitasInput = {
    where: CasoWhereUniqueInput
    create: XOR<CasoCreateWithoutCitasInput, CasoUncheckedCreateWithoutCitasInput>
  }

  export type UsuarioCreateWithoutCitasInput = {
    nombre: string
    correo: string
    clave: string
    rol?: $Enums.RolUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    casos?: CasoCreateNestedManyWithoutUsuarioInput
    casosAsignados?: CasoResponsableCreateNestedManyWithoutUsuarioInput
    audiencias?: AudienciaCreateNestedManyWithoutUsuarioInput
    recordatorios?: RecordatorioCreateNestedManyWithoutUsuarioInput
    reunionesCreadas?: ReunionCreateNestedManyWithoutCreadorInput
    participacionesReunion?: ParticipanteReunionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCitasInput = {
    id?: number
    nombre: string
    correo: string
    clave: string
    rol?: $Enums.RolUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    casos?: CasoUncheckedCreateNestedManyWithoutUsuarioInput
    casosAsignados?: CasoResponsableUncheckedCreateNestedManyWithoutUsuarioInput
    audiencias?: AudienciaUncheckedCreateNestedManyWithoutUsuarioInput
    recordatorios?: RecordatorioUncheckedCreateNestedManyWithoutUsuarioInput
    reunionesCreadas?: ReunionUncheckedCreateNestedManyWithoutCreadorInput
    participacionesReunion?: ParticipanteReunionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCitasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCitasInput, UsuarioUncheckedCreateWithoutCitasInput>
  }

  export type CasoUpsertWithoutCitasInput = {
    update: XOR<CasoUpdateWithoutCitasInput, CasoUncheckedUpdateWithoutCitasInput>
    create: XOR<CasoCreateWithoutCitasInput, CasoUncheckedCreateWithoutCitasInput>
    where?: CasoWhereInput
  }

  export type CasoUpdateToOneWithWhereWithoutCitasInput = {
    where?: CasoWhereInput
    data: XOR<CasoUpdateWithoutCitasInput, CasoUncheckedUpdateWithoutCitasInput>
  }

  export type CasoUpdateWithoutCitasInput = {
    numero?: StringFieldUpdateOperationsInput | string
    asunto?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoCasoFieldUpdateOperationsInput | $Enums.EstadoCaso
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCasosNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutCasosNestedInput
    audiencias?: AudienciaUpdateManyWithoutCasoNestedInput
    recordatorios?: RecordatorioUpdateManyWithoutCasoNestedInput
    responsables?: CasoResponsableUpdateManyWithoutCasoNestedInput
    reuniones?: ReunionUpdateManyWithoutCasoNestedInput
  }

  export type CasoUncheckedUpdateWithoutCitasInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    asunto?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoCasoFieldUpdateOperationsInput | $Enums.EstadoCaso
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audiencias?: AudienciaUncheckedUpdateManyWithoutCasoNestedInput
    recordatorios?: RecordatorioUncheckedUpdateManyWithoutCasoNestedInput
    responsables?: CasoResponsableUncheckedUpdateManyWithoutCasoNestedInput
    reuniones?: ReunionUncheckedUpdateManyWithoutCasoNestedInput
  }

  export type UsuarioUpsertWithoutCitasInput = {
    update: XOR<UsuarioUpdateWithoutCitasInput, UsuarioUncheckedUpdateWithoutCitasInput>
    create: XOR<UsuarioCreateWithoutCitasInput, UsuarioUncheckedCreateWithoutCitasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCitasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCitasInput, UsuarioUncheckedUpdateWithoutCitasInput>
  }

  export type UsuarioUpdateWithoutCitasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casos?: CasoUpdateManyWithoutUsuarioNestedInput
    casosAsignados?: CasoResponsableUpdateManyWithoutUsuarioNestedInput
    audiencias?: AudienciaUpdateManyWithoutUsuarioNestedInput
    recordatorios?: RecordatorioUpdateManyWithoutUsuarioNestedInput
    reunionesCreadas?: ReunionUpdateManyWithoutCreadorNestedInput
    participacionesReunion?: ParticipanteReunionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCitasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casos?: CasoUncheckedUpdateManyWithoutUsuarioNestedInput
    casosAsignados?: CasoResponsableUncheckedUpdateManyWithoutUsuarioNestedInput
    audiencias?: AudienciaUncheckedUpdateManyWithoutUsuarioNestedInput
    recordatorios?: RecordatorioUncheckedUpdateManyWithoutUsuarioNestedInput
    reunionesCreadas?: ReunionUncheckedUpdateManyWithoutCreadorNestedInput
    participacionesReunion?: ParticipanteReunionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CasoCreateWithoutRecordatoriosInput = {
    numero: string
    asunto: string
    tipo: string
    estado?: $Enums.EstadoCaso
    fechaInicio: Date | string
    fechaCierre?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCasosInput
    cliente: ClienteCreateNestedOneWithoutCasosInput
    audiencias?: AudienciaCreateNestedManyWithoutCasoInput
    citas?: CitaCreateNestedManyWithoutCasoInput
    responsables?: CasoResponsableCreateNestedManyWithoutCasoInput
    reuniones?: ReunionCreateNestedManyWithoutCasoInput
  }

  export type CasoUncheckedCreateWithoutRecordatoriosInput = {
    id?: number
    numero: string
    asunto: string
    tipo: string
    estado?: $Enums.EstadoCaso
    fechaInicio: Date | string
    fechaCierre?: Date | string | null
    usuarioId: number
    clienteId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    audiencias?: AudienciaUncheckedCreateNestedManyWithoutCasoInput
    citas?: CitaUncheckedCreateNestedManyWithoutCasoInput
    responsables?: CasoResponsableUncheckedCreateNestedManyWithoutCasoInput
    reuniones?: ReunionUncheckedCreateNestedManyWithoutCasoInput
  }

  export type CasoCreateOrConnectWithoutRecordatoriosInput = {
    where: CasoWhereUniqueInput
    create: XOR<CasoCreateWithoutRecordatoriosInput, CasoUncheckedCreateWithoutRecordatoriosInput>
  }

  export type UsuarioCreateWithoutRecordatoriosInput = {
    nombre: string
    correo: string
    clave: string
    rol?: $Enums.RolUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    casos?: CasoCreateNestedManyWithoutUsuarioInput
    casosAsignados?: CasoResponsableCreateNestedManyWithoutUsuarioInput
    audiencias?: AudienciaCreateNestedManyWithoutUsuarioInput
    citas?: CitaCreateNestedManyWithoutUsuarioInput
    reunionesCreadas?: ReunionCreateNestedManyWithoutCreadorInput
    participacionesReunion?: ParticipanteReunionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutRecordatoriosInput = {
    id?: number
    nombre: string
    correo: string
    clave: string
    rol?: $Enums.RolUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    casos?: CasoUncheckedCreateNestedManyWithoutUsuarioInput
    casosAsignados?: CasoResponsableUncheckedCreateNestedManyWithoutUsuarioInput
    audiencias?: AudienciaUncheckedCreateNestedManyWithoutUsuarioInput
    citas?: CitaUncheckedCreateNestedManyWithoutUsuarioInput
    reunionesCreadas?: ReunionUncheckedCreateNestedManyWithoutCreadorInput
    participacionesReunion?: ParticipanteReunionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutRecordatoriosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRecordatoriosInput, UsuarioUncheckedCreateWithoutRecordatoriosInput>
  }

  export type CasoUpsertWithoutRecordatoriosInput = {
    update: XOR<CasoUpdateWithoutRecordatoriosInput, CasoUncheckedUpdateWithoutRecordatoriosInput>
    create: XOR<CasoCreateWithoutRecordatoriosInput, CasoUncheckedCreateWithoutRecordatoriosInput>
    where?: CasoWhereInput
  }

  export type CasoUpdateToOneWithWhereWithoutRecordatoriosInput = {
    where?: CasoWhereInput
    data: XOR<CasoUpdateWithoutRecordatoriosInput, CasoUncheckedUpdateWithoutRecordatoriosInput>
  }

  export type CasoUpdateWithoutRecordatoriosInput = {
    numero?: StringFieldUpdateOperationsInput | string
    asunto?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoCasoFieldUpdateOperationsInput | $Enums.EstadoCaso
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCasosNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutCasosNestedInput
    audiencias?: AudienciaUpdateManyWithoutCasoNestedInput
    citas?: CitaUpdateManyWithoutCasoNestedInput
    responsables?: CasoResponsableUpdateManyWithoutCasoNestedInput
    reuniones?: ReunionUpdateManyWithoutCasoNestedInput
  }

  export type CasoUncheckedUpdateWithoutRecordatoriosInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    asunto?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoCasoFieldUpdateOperationsInput | $Enums.EstadoCaso
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audiencias?: AudienciaUncheckedUpdateManyWithoutCasoNestedInput
    citas?: CitaUncheckedUpdateManyWithoutCasoNestedInput
    responsables?: CasoResponsableUncheckedUpdateManyWithoutCasoNestedInput
    reuniones?: ReunionUncheckedUpdateManyWithoutCasoNestedInput
  }

  export type UsuarioUpsertWithoutRecordatoriosInput = {
    update: XOR<UsuarioUpdateWithoutRecordatoriosInput, UsuarioUncheckedUpdateWithoutRecordatoriosInput>
    create: XOR<UsuarioCreateWithoutRecordatoriosInput, UsuarioUncheckedCreateWithoutRecordatoriosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutRecordatoriosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutRecordatoriosInput, UsuarioUncheckedUpdateWithoutRecordatoriosInput>
  }

  export type UsuarioUpdateWithoutRecordatoriosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casos?: CasoUpdateManyWithoutUsuarioNestedInput
    casosAsignados?: CasoResponsableUpdateManyWithoutUsuarioNestedInput
    audiencias?: AudienciaUpdateManyWithoutUsuarioNestedInput
    citas?: CitaUpdateManyWithoutUsuarioNestedInput
    reunionesCreadas?: ReunionUpdateManyWithoutCreadorNestedInput
    participacionesReunion?: ParticipanteReunionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRecordatoriosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casos?: CasoUncheckedUpdateManyWithoutUsuarioNestedInput
    casosAsignados?: CasoResponsableUncheckedUpdateManyWithoutUsuarioNestedInput
    audiencias?: AudienciaUncheckedUpdateManyWithoutUsuarioNestedInput
    citas?: CitaUncheckedUpdateManyWithoutUsuarioNestedInput
    reunionesCreadas?: ReunionUncheckedUpdateManyWithoutCreadorNestedInput
    participacionesReunion?: ParticipanteReunionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CasoCreateWithoutReunionesInput = {
    numero: string
    asunto: string
    tipo: string
    estado?: $Enums.EstadoCaso
    fechaInicio: Date | string
    fechaCierre?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCasosInput
    cliente: ClienteCreateNestedOneWithoutCasosInput
    audiencias?: AudienciaCreateNestedManyWithoutCasoInput
    citas?: CitaCreateNestedManyWithoutCasoInput
    recordatorios?: RecordatorioCreateNestedManyWithoutCasoInput
    responsables?: CasoResponsableCreateNestedManyWithoutCasoInput
  }

  export type CasoUncheckedCreateWithoutReunionesInput = {
    id?: number
    numero: string
    asunto: string
    tipo: string
    estado?: $Enums.EstadoCaso
    fechaInicio: Date | string
    fechaCierre?: Date | string | null
    usuarioId: number
    clienteId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    audiencias?: AudienciaUncheckedCreateNestedManyWithoutCasoInput
    citas?: CitaUncheckedCreateNestedManyWithoutCasoInput
    recordatorios?: RecordatorioUncheckedCreateNestedManyWithoutCasoInput
    responsables?: CasoResponsableUncheckedCreateNestedManyWithoutCasoInput
  }

  export type CasoCreateOrConnectWithoutReunionesInput = {
    where: CasoWhereUniqueInput
    create: XOR<CasoCreateWithoutReunionesInput, CasoUncheckedCreateWithoutReunionesInput>
  }

  export type UsuarioCreateWithoutReunionesCreadasInput = {
    nombre: string
    correo: string
    clave: string
    rol?: $Enums.RolUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    casos?: CasoCreateNestedManyWithoutUsuarioInput
    casosAsignados?: CasoResponsableCreateNestedManyWithoutUsuarioInput
    audiencias?: AudienciaCreateNestedManyWithoutUsuarioInput
    citas?: CitaCreateNestedManyWithoutUsuarioInput
    recordatorios?: RecordatorioCreateNestedManyWithoutUsuarioInput
    participacionesReunion?: ParticipanteReunionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutReunionesCreadasInput = {
    id?: number
    nombre: string
    correo: string
    clave: string
    rol?: $Enums.RolUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    casos?: CasoUncheckedCreateNestedManyWithoutUsuarioInput
    casosAsignados?: CasoResponsableUncheckedCreateNestedManyWithoutUsuarioInput
    audiencias?: AudienciaUncheckedCreateNestedManyWithoutUsuarioInput
    citas?: CitaUncheckedCreateNestedManyWithoutUsuarioInput
    recordatorios?: RecordatorioUncheckedCreateNestedManyWithoutUsuarioInput
    participacionesReunion?: ParticipanteReunionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutReunionesCreadasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutReunionesCreadasInput, UsuarioUncheckedCreateWithoutReunionesCreadasInput>
  }

  export type ParticipanteReunionCreateWithoutReunionInput = {
    nombreExterno?: string | null
    correoExterno?: string | null
    usuario?: UsuarioCreateNestedOneWithoutParticipacionesReunionInput
    cliente?: ClienteCreateNestedOneWithoutParticipacionesReunionInput
  }

  export type ParticipanteReunionUncheckedCreateWithoutReunionInput = {
    id?: number
    usuarioId?: number | null
    clienteId?: number | null
    nombreExterno?: string | null
    correoExterno?: string | null
  }

  export type ParticipanteReunionCreateOrConnectWithoutReunionInput = {
    where: ParticipanteReunionWhereUniqueInput
    create: XOR<ParticipanteReunionCreateWithoutReunionInput, ParticipanteReunionUncheckedCreateWithoutReunionInput>
  }

  export type ParticipanteReunionCreateManyReunionInputEnvelope = {
    data: ParticipanteReunionCreateManyReunionInput | ParticipanteReunionCreateManyReunionInput[]
    skipDuplicates?: boolean
  }

  export type CasoUpsertWithoutReunionesInput = {
    update: XOR<CasoUpdateWithoutReunionesInput, CasoUncheckedUpdateWithoutReunionesInput>
    create: XOR<CasoCreateWithoutReunionesInput, CasoUncheckedCreateWithoutReunionesInput>
    where?: CasoWhereInput
  }

  export type CasoUpdateToOneWithWhereWithoutReunionesInput = {
    where?: CasoWhereInput
    data: XOR<CasoUpdateWithoutReunionesInput, CasoUncheckedUpdateWithoutReunionesInput>
  }

  export type CasoUpdateWithoutReunionesInput = {
    numero?: StringFieldUpdateOperationsInput | string
    asunto?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoCasoFieldUpdateOperationsInput | $Enums.EstadoCaso
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCasosNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutCasosNestedInput
    audiencias?: AudienciaUpdateManyWithoutCasoNestedInput
    citas?: CitaUpdateManyWithoutCasoNestedInput
    recordatorios?: RecordatorioUpdateManyWithoutCasoNestedInput
    responsables?: CasoResponsableUpdateManyWithoutCasoNestedInput
  }

  export type CasoUncheckedUpdateWithoutReunionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    asunto?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoCasoFieldUpdateOperationsInput | $Enums.EstadoCaso
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audiencias?: AudienciaUncheckedUpdateManyWithoutCasoNestedInput
    citas?: CitaUncheckedUpdateManyWithoutCasoNestedInput
    recordatorios?: RecordatorioUncheckedUpdateManyWithoutCasoNestedInput
    responsables?: CasoResponsableUncheckedUpdateManyWithoutCasoNestedInput
  }

  export type UsuarioUpsertWithoutReunionesCreadasInput = {
    update: XOR<UsuarioUpdateWithoutReunionesCreadasInput, UsuarioUncheckedUpdateWithoutReunionesCreadasInput>
    create: XOR<UsuarioCreateWithoutReunionesCreadasInput, UsuarioUncheckedCreateWithoutReunionesCreadasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutReunionesCreadasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutReunionesCreadasInput, UsuarioUncheckedUpdateWithoutReunionesCreadasInput>
  }

  export type UsuarioUpdateWithoutReunionesCreadasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casos?: CasoUpdateManyWithoutUsuarioNestedInput
    casosAsignados?: CasoResponsableUpdateManyWithoutUsuarioNestedInput
    audiencias?: AudienciaUpdateManyWithoutUsuarioNestedInput
    citas?: CitaUpdateManyWithoutUsuarioNestedInput
    recordatorios?: RecordatorioUpdateManyWithoutUsuarioNestedInput
    participacionesReunion?: ParticipanteReunionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutReunionesCreadasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casos?: CasoUncheckedUpdateManyWithoutUsuarioNestedInput
    casosAsignados?: CasoResponsableUncheckedUpdateManyWithoutUsuarioNestedInput
    audiencias?: AudienciaUncheckedUpdateManyWithoutUsuarioNestedInput
    citas?: CitaUncheckedUpdateManyWithoutUsuarioNestedInput
    recordatorios?: RecordatorioUncheckedUpdateManyWithoutUsuarioNestedInput
    participacionesReunion?: ParticipanteReunionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ParticipanteReunionUpsertWithWhereUniqueWithoutReunionInput = {
    where: ParticipanteReunionWhereUniqueInput
    update: XOR<ParticipanteReunionUpdateWithoutReunionInput, ParticipanteReunionUncheckedUpdateWithoutReunionInput>
    create: XOR<ParticipanteReunionCreateWithoutReunionInput, ParticipanteReunionUncheckedCreateWithoutReunionInput>
  }

  export type ParticipanteReunionUpdateWithWhereUniqueWithoutReunionInput = {
    where: ParticipanteReunionWhereUniqueInput
    data: XOR<ParticipanteReunionUpdateWithoutReunionInput, ParticipanteReunionUncheckedUpdateWithoutReunionInput>
  }

  export type ParticipanteReunionUpdateManyWithWhereWithoutReunionInput = {
    where: ParticipanteReunionScalarWhereInput
    data: XOR<ParticipanteReunionUpdateManyMutationInput, ParticipanteReunionUncheckedUpdateManyWithoutReunionInput>
  }

  export type ReunionCreateWithoutParticipantesInput = {
    titulo: string
    fecha: Date | string
    lugar?: string | null
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    caso?: CasoCreateNestedOneWithoutReunionesInput
    creador: UsuarioCreateNestedOneWithoutReunionesCreadasInput
  }

  export type ReunionUncheckedCreateWithoutParticipantesInput = {
    id?: number
    titulo: string
    fecha: Date | string
    lugar?: string | null
    observaciones?: string | null
    casoId?: number | null
    creadorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReunionCreateOrConnectWithoutParticipantesInput = {
    where: ReunionWhereUniqueInput
    create: XOR<ReunionCreateWithoutParticipantesInput, ReunionUncheckedCreateWithoutParticipantesInput>
  }

  export type UsuarioCreateWithoutParticipacionesReunionInput = {
    nombre: string
    correo: string
    clave: string
    rol?: $Enums.RolUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    casos?: CasoCreateNestedManyWithoutUsuarioInput
    casosAsignados?: CasoResponsableCreateNestedManyWithoutUsuarioInput
    audiencias?: AudienciaCreateNestedManyWithoutUsuarioInput
    citas?: CitaCreateNestedManyWithoutUsuarioInput
    recordatorios?: RecordatorioCreateNestedManyWithoutUsuarioInput
    reunionesCreadas?: ReunionCreateNestedManyWithoutCreadorInput
  }

  export type UsuarioUncheckedCreateWithoutParticipacionesReunionInput = {
    id?: number
    nombre: string
    correo: string
    clave: string
    rol?: $Enums.RolUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    casos?: CasoUncheckedCreateNestedManyWithoutUsuarioInput
    casosAsignados?: CasoResponsableUncheckedCreateNestedManyWithoutUsuarioInput
    audiencias?: AudienciaUncheckedCreateNestedManyWithoutUsuarioInput
    citas?: CitaUncheckedCreateNestedManyWithoutUsuarioInput
    recordatorios?: RecordatorioUncheckedCreateNestedManyWithoutUsuarioInput
    reunionesCreadas?: ReunionUncheckedCreateNestedManyWithoutCreadorInput
  }

  export type UsuarioCreateOrConnectWithoutParticipacionesReunionInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutParticipacionesReunionInput, UsuarioUncheckedCreateWithoutParticipacionesReunionInput>
  }

  export type ClienteCreateWithoutParticipacionesReunionInput = {
    nombre: string
    correo: string
    telefono: string
    direccion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    casos?: CasoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutParticipacionesReunionInput = {
    id?: number
    nombre: string
    correo: string
    telefono: string
    direccion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    casos?: CasoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutParticipacionesReunionInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutParticipacionesReunionInput, ClienteUncheckedCreateWithoutParticipacionesReunionInput>
  }

  export type ReunionUpsertWithoutParticipantesInput = {
    update: XOR<ReunionUpdateWithoutParticipantesInput, ReunionUncheckedUpdateWithoutParticipantesInput>
    create: XOR<ReunionCreateWithoutParticipantesInput, ReunionUncheckedCreateWithoutParticipantesInput>
    where?: ReunionWhereInput
  }

  export type ReunionUpdateToOneWithWhereWithoutParticipantesInput = {
    where?: ReunionWhereInput
    data: XOR<ReunionUpdateWithoutParticipantesInput, ReunionUncheckedUpdateWithoutParticipantesInput>
  }

  export type ReunionUpdateWithoutParticipantesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caso?: CasoUpdateOneWithoutReunionesNestedInput
    creador?: UsuarioUpdateOneRequiredWithoutReunionesCreadasNestedInput
  }

  export type ReunionUncheckedUpdateWithoutParticipantesInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    casoId?: NullableIntFieldUpdateOperationsInput | number | null
    creadorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUpsertWithoutParticipacionesReunionInput = {
    update: XOR<UsuarioUpdateWithoutParticipacionesReunionInput, UsuarioUncheckedUpdateWithoutParticipacionesReunionInput>
    create: XOR<UsuarioCreateWithoutParticipacionesReunionInput, UsuarioUncheckedCreateWithoutParticipacionesReunionInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutParticipacionesReunionInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutParticipacionesReunionInput, UsuarioUncheckedUpdateWithoutParticipacionesReunionInput>
  }

  export type UsuarioUpdateWithoutParticipacionesReunionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casos?: CasoUpdateManyWithoutUsuarioNestedInput
    casosAsignados?: CasoResponsableUpdateManyWithoutUsuarioNestedInput
    audiencias?: AudienciaUpdateManyWithoutUsuarioNestedInput
    citas?: CitaUpdateManyWithoutUsuarioNestedInput
    recordatorios?: RecordatorioUpdateManyWithoutUsuarioNestedInput
    reunionesCreadas?: ReunionUpdateManyWithoutCreadorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutParticipacionesReunionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casos?: CasoUncheckedUpdateManyWithoutUsuarioNestedInput
    casosAsignados?: CasoResponsableUncheckedUpdateManyWithoutUsuarioNestedInput
    audiencias?: AudienciaUncheckedUpdateManyWithoutUsuarioNestedInput
    citas?: CitaUncheckedUpdateManyWithoutUsuarioNestedInput
    recordatorios?: RecordatorioUncheckedUpdateManyWithoutUsuarioNestedInput
    reunionesCreadas?: ReunionUncheckedUpdateManyWithoutCreadorNestedInput
  }

  export type ClienteUpsertWithoutParticipacionesReunionInput = {
    update: XOR<ClienteUpdateWithoutParticipacionesReunionInput, ClienteUncheckedUpdateWithoutParticipacionesReunionInput>
    create: XOR<ClienteCreateWithoutParticipacionesReunionInput, ClienteUncheckedCreateWithoutParticipacionesReunionInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutParticipacionesReunionInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutParticipacionesReunionInput, ClienteUncheckedUpdateWithoutParticipacionesReunionInput>
  }

  export type ClienteUpdateWithoutParticipacionesReunionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casos?: CasoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutParticipacionesReunionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    casos?: CasoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type CasoCreateManyUsuarioInput = {
    id?: number
    numero: string
    asunto: string
    tipo: string
    estado?: $Enums.EstadoCaso
    fechaInicio: Date | string
    fechaCierre?: Date | string | null
    clienteId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CasoResponsableCreateManyUsuarioInput = {
    id?: number
    casoId: number
    esPrincipal?: boolean
    createdAt?: Date | string
  }

  export type AudienciaCreateManyUsuarioInput = {
    id?: number
    fecha: Date | string
    lugar: string
    estado?: $Enums.EstadoAudiencia
    observaciones?: string | null
    casoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CitaCreateManyUsuarioInput = {
    id?: number
    fecha: Date | string
    asunto: string
    contacto: string
    casoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecordatorioCreateManyUsuarioInput = {
    id?: number
    titulo: string
    mensaje: string
    fechaEnvio: Date | string
    leido?: boolean
    casoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReunionCreateManyCreadorInput = {
    id?: number
    titulo: string
    fecha: Date | string
    lugar?: string | null
    observaciones?: string | null
    casoId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipanteReunionCreateManyUsuarioInput = {
    id?: number
    reunionId: number
    clienteId?: number | null
    nombreExterno?: string | null
    correoExterno?: string | null
  }

  export type CasoUpdateWithoutUsuarioInput = {
    numero?: StringFieldUpdateOperationsInput | string
    asunto?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoCasoFieldUpdateOperationsInput | $Enums.EstadoCaso
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutCasosNestedInput
    audiencias?: AudienciaUpdateManyWithoutCasoNestedInput
    citas?: CitaUpdateManyWithoutCasoNestedInput
    recordatorios?: RecordatorioUpdateManyWithoutCasoNestedInput
    responsables?: CasoResponsableUpdateManyWithoutCasoNestedInput
    reuniones?: ReunionUpdateManyWithoutCasoNestedInput
  }

  export type CasoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    asunto?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoCasoFieldUpdateOperationsInput | $Enums.EstadoCaso
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clienteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audiencias?: AudienciaUncheckedUpdateManyWithoutCasoNestedInput
    citas?: CitaUncheckedUpdateManyWithoutCasoNestedInput
    recordatorios?: RecordatorioUncheckedUpdateManyWithoutCasoNestedInput
    responsables?: CasoResponsableUncheckedUpdateManyWithoutCasoNestedInput
    reuniones?: ReunionUncheckedUpdateManyWithoutCasoNestedInput
  }

  export type CasoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    asunto?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoCasoFieldUpdateOperationsInput | $Enums.EstadoCaso
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clienteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasoResponsableUpdateWithoutUsuarioInput = {
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caso?: CasoUpdateOneRequiredWithoutResponsablesNestedInput
  }

  export type CasoResponsableUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    casoId?: IntFieldUpdateOperationsInput | number
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasoResponsableUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    casoId?: IntFieldUpdateOperationsInput | number
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudienciaUpdateWithoutUsuarioInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAudienciaFieldUpdateOperationsInput | $Enums.EstadoAudiencia
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caso?: CasoUpdateOneRequiredWithoutAudienciasNestedInput
  }

  export type AudienciaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAudienciaFieldUpdateOperationsInput | $Enums.EstadoAudiencia
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    casoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudienciaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAudienciaFieldUpdateOperationsInput | $Enums.EstadoAudiencia
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    casoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitaUpdateWithoutUsuarioInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    asunto?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caso?: CasoUpdateOneWithoutCitasNestedInput
  }

  export type CitaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    asunto?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    casoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    asunto?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    casoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordatorioUpdateWithoutUsuarioInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    fechaEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caso?: CasoUpdateOneWithoutRecordatoriosNestedInput
  }

  export type RecordatorioUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    fechaEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    casoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordatorioUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    fechaEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    casoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReunionUpdateWithoutCreadorInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caso?: CasoUpdateOneWithoutReunionesNestedInput
    participantes?: ParticipanteReunionUpdateManyWithoutReunionNestedInput
  }

  export type ReunionUncheckedUpdateWithoutCreadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    casoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: ParticipanteReunionUncheckedUpdateManyWithoutReunionNestedInput
  }

  export type ReunionUncheckedUpdateManyWithoutCreadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    casoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipanteReunionUpdateWithoutUsuarioInput = {
    nombreExterno?: NullableStringFieldUpdateOperationsInput | string | null
    correoExterno?: NullableStringFieldUpdateOperationsInput | string | null
    reunion?: ReunionUpdateOneRequiredWithoutParticipantesNestedInput
    cliente?: ClienteUpdateOneWithoutParticipacionesReunionNestedInput
  }

  export type ParticipanteReunionUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    reunionId?: IntFieldUpdateOperationsInput | number
    clienteId?: NullableIntFieldUpdateOperationsInput | number | null
    nombreExterno?: NullableStringFieldUpdateOperationsInput | string | null
    correoExterno?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParticipanteReunionUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    reunionId?: IntFieldUpdateOperationsInput | number
    clienteId?: NullableIntFieldUpdateOperationsInput | number | null
    nombreExterno?: NullableStringFieldUpdateOperationsInput | string | null
    correoExterno?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CasoCreateManyClienteInput = {
    id?: number
    numero: string
    asunto: string
    tipo: string
    estado?: $Enums.EstadoCaso
    fechaInicio: Date | string
    fechaCierre?: Date | string | null
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipanteReunionCreateManyClienteInput = {
    id?: number
    reunionId: number
    usuarioId?: number | null
    nombreExterno?: string | null
    correoExterno?: string | null
  }

  export type CasoUpdateWithoutClienteInput = {
    numero?: StringFieldUpdateOperationsInput | string
    asunto?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoCasoFieldUpdateOperationsInput | $Enums.EstadoCaso
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCasosNestedInput
    audiencias?: AudienciaUpdateManyWithoutCasoNestedInput
    citas?: CitaUpdateManyWithoutCasoNestedInput
    recordatorios?: RecordatorioUpdateManyWithoutCasoNestedInput
    responsables?: CasoResponsableUpdateManyWithoutCasoNestedInput
    reuniones?: ReunionUpdateManyWithoutCasoNestedInput
  }

  export type CasoUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    asunto?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoCasoFieldUpdateOperationsInput | $Enums.EstadoCaso
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audiencias?: AudienciaUncheckedUpdateManyWithoutCasoNestedInput
    citas?: CitaUncheckedUpdateManyWithoutCasoNestedInput
    recordatorios?: RecordatorioUncheckedUpdateManyWithoutCasoNestedInput
    responsables?: CasoResponsableUncheckedUpdateManyWithoutCasoNestedInput
    reuniones?: ReunionUncheckedUpdateManyWithoutCasoNestedInput
  }

  export type CasoUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    asunto?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoCasoFieldUpdateOperationsInput | $Enums.EstadoCaso
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipanteReunionUpdateWithoutClienteInput = {
    nombreExterno?: NullableStringFieldUpdateOperationsInput | string | null
    correoExterno?: NullableStringFieldUpdateOperationsInput | string | null
    reunion?: ReunionUpdateOneRequiredWithoutParticipantesNestedInput
    usuario?: UsuarioUpdateOneWithoutParticipacionesReunionNestedInput
  }

  export type ParticipanteReunionUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    reunionId?: IntFieldUpdateOperationsInput | number
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    nombreExterno?: NullableStringFieldUpdateOperationsInput | string | null
    correoExterno?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParticipanteReunionUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    reunionId?: IntFieldUpdateOperationsInput | number
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    nombreExterno?: NullableStringFieldUpdateOperationsInput | string | null
    correoExterno?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AudienciaCreateManyCasoInput = {
    id?: number
    fecha: Date | string
    lugar: string
    estado?: $Enums.EstadoAudiencia
    observaciones?: string | null
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CitaCreateManyCasoInput = {
    id?: number
    fecha: Date | string
    asunto: string
    contacto: string
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecordatorioCreateManyCasoInput = {
    id?: number
    titulo: string
    mensaje: string
    fechaEnvio: Date | string
    leido?: boolean
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CasoResponsableCreateManyCasoInput = {
    id?: number
    usuarioId: number
    esPrincipal?: boolean
    createdAt?: Date | string
  }

  export type ReunionCreateManyCasoInput = {
    id?: number
    titulo: string
    fecha: Date | string
    lugar?: string | null
    observaciones?: string | null
    creadorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AudienciaUpdateWithoutCasoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAudienciaFieldUpdateOperationsInput | $Enums.EstadoAudiencia
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutAudienciasNestedInput
  }

  export type AudienciaUncheckedUpdateWithoutCasoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAudienciaFieldUpdateOperationsInput | $Enums.EstadoAudiencia
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudienciaUncheckedUpdateManyWithoutCasoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAudienciaFieldUpdateOperationsInput | $Enums.EstadoAudiencia
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitaUpdateWithoutCasoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    asunto?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCitasNestedInput
  }

  export type CitaUncheckedUpdateWithoutCasoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    asunto?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitaUncheckedUpdateManyWithoutCasoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    asunto?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordatorioUpdateWithoutCasoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    fechaEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutRecordatoriosNestedInput
  }

  export type RecordatorioUncheckedUpdateWithoutCasoInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    fechaEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordatorioUncheckedUpdateManyWithoutCasoInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    fechaEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasoResponsableUpdateWithoutCasoInput = {
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCasosAsignadosNestedInput
  }

  export type CasoResponsableUncheckedUpdateWithoutCasoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasoResponsableUncheckedUpdateManyWithoutCasoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReunionUpdateWithoutCasoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creador?: UsuarioUpdateOneRequiredWithoutReunionesCreadasNestedInput
    participantes?: ParticipanteReunionUpdateManyWithoutReunionNestedInput
  }

  export type ReunionUncheckedUpdateWithoutCasoInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    creadorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: ParticipanteReunionUncheckedUpdateManyWithoutReunionNestedInput
  }

  export type ReunionUncheckedUpdateManyWithoutCasoInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    creadorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipanteReunionCreateManyReunionInput = {
    id?: number
    usuarioId?: number | null
    clienteId?: number | null
    nombreExterno?: string | null
    correoExterno?: string | null
  }

  export type ParticipanteReunionUpdateWithoutReunionInput = {
    nombreExterno?: NullableStringFieldUpdateOperationsInput | string | null
    correoExterno?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneWithoutParticipacionesReunionNestedInput
    cliente?: ClienteUpdateOneWithoutParticipacionesReunionNestedInput
  }

  export type ParticipanteReunionUncheckedUpdateWithoutReunionInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    clienteId?: NullableIntFieldUpdateOperationsInput | number | null
    nombreExterno?: NullableStringFieldUpdateOperationsInput | string | null
    correoExterno?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParticipanteReunionUncheckedUpdateManyWithoutReunionInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    clienteId?: NullableIntFieldUpdateOperationsInput | number | null
    nombreExterno?: NullableStringFieldUpdateOperationsInput | string | null
    correoExterno?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}