
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
 * Model Trip
 * 
 */
export type Trip = $Result.DefaultSelection<Prisma.$TripPayload>
/**
 * Model Waypoint
 * 
 */
export type Waypoint = $Result.DefaultSelection<Prisma.$WaypointPayload>
/**
 * Model TripDetail
 * 
 */
export type TripDetail = $Result.DefaultSelection<Prisma.$TripDetailPayload>
/**
 * Model Home
 * 
 */
export type Home = $Result.DefaultSelection<Prisma.$HomePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Trips
 * const trips = await prisma.trip.findMany()
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
   * // Fetch zero or more Trips
   * const trips = await prisma.trip.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * `prisma.trip`: Exposes CRUD operations for the **Trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.TripDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.waypoint`: Exposes CRUD operations for the **Waypoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Waypoints
    * const waypoints = await prisma.waypoint.findMany()
    * ```
    */
  get waypoint(): Prisma.WaypointDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tripDetail`: Exposes CRUD operations for the **TripDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripDetails
    * const tripDetails = await prisma.tripDetail.findMany()
    * ```
    */
  get tripDetail(): Prisma.TripDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.home`: Exposes CRUD operations for the **Home** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Homes
    * const homes = await prisma.home.findMany()
    * ```
    */
  get home(): Prisma.HomeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Trip: 'Trip',
    Waypoint: 'Waypoint',
    TripDetail: 'TripDetail',
    Home: 'Home'
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
      modelProps: "trip" | "waypoint" | "tripDetail" | "home"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Trip: {
        payload: Prisma.$TripPayload<ExtArgs>
        fields: Prisma.TripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findFirst: {
            args: Prisma.TripFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findMany: {
            args: Prisma.TripFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          create: {
            args: Prisma.TripCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          createMany: {
            args: Prisma.TripCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          delete: {
            args: Prisma.TripDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          update: {
            args: Prisma.TripUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          deleteMany: {
            args: Prisma.TripDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          upsert: {
            args: Prisma.TripUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          aggregate: {
            args: Prisma.TripAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrip>
          }
          groupBy: {
            args: Prisma.TripGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripCountArgs<ExtArgs>
            result: $Utils.Optional<TripCountAggregateOutputType> | number
          }
        }
      }
      Waypoint: {
        payload: Prisma.$WaypointPayload<ExtArgs>
        fields: Prisma.WaypointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaypointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaypointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload>
          }
          findFirst: {
            args: Prisma.WaypointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaypointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload>
          }
          findMany: {
            args: Prisma.WaypointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload>[]
          }
          create: {
            args: Prisma.WaypointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload>
          }
          createMany: {
            args: Prisma.WaypointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WaypointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload>[]
          }
          delete: {
            args: Prisma.WaypointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload>
          }
          update: {
            args: Prisma.WaypointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload>
          }
          deleteMany: {
            args: Prisma.WaypointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaypointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WaypointUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload>[]
          }
          upsert: {
            args: Prisma.WaypointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaypointPayload>
          }
          aggregate: {
            args: Prisma.WaypointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaypoint>
          }
          groupBy: {
            args: Prisma.WaypointGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaypointGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaypointCountArgs<ExtArgs>
            result: $Utils.Optional<WaypointCountAggregateOutputType> | number
          }
        }
      }
      TripDetail: {
        payload: Prisma.$TripDetailPayload<ExtArgs>
        fields: Prisma.TripDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDetailPayload>
          }
          findFirst: {
            args: Prisma.TripDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDetailPayload>
          }
          findMany: {
            args: Prisma.TripDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDetailPayload>[]
          }
          create: {
            args: Prisma.TripDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDetailPayload>
          }
          createMany: {
            args: Prisma.TripDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDetailPayload>[]
          }
          delete: {
            args: Prisma.TripDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDetailPayload>
          }
          update: {
            args: Prisma.TripDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDetailPayload>
          }
          deleteMany: {
            args: Prisma.TripDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDetailPayload>[]
          }
          upsert: {
            args: Prisma.TripDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDetailPayload>
          }
          aggregate: {
            args: Prisma.TripDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripDetail>
          }
          groupBy: {
            args: Prisma.TripDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripDetailCountArgs<ExtArgs>
            result: $Utils.Optional<TripDetailCountAggregateOutputType> | number
          }
        }
      }
      Home: {
        payload: Prisma.$HomePayload<ExtArgs>
        fields: Prisma.HomeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HomeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HomeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePayload>
          }
          findFirst: {
            args: Prisma.HomeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HomeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePayload>
          }
          findMany: {
            args: Prisma.HomeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePayload>[]
          }
          create: {
            args: Prisma.HomeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePayload>
          }
          createMany: {
            args: Prisma.HomeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HomeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePayload>[]
          }
          delete: {
            args: Prisma.HomeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePayload>
          }
          update: {
            args: Prisma.HomeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePayload>
          }
          deleteMany: {
            args: Prisma.HomeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HomeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HomeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePayload>[]
          }
          upsert: {
            args: Prisma.HomeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomePayload>
          }
          aggregate: {
            args: Prisma.HomeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHome>
          }
          groupBy: {
            args: Prisma.HomeGroupByArgs<ExtArgs>
            result: $Utils.Optional<HomeGroupByOutputType>[]
          }
          count: {
            args: Prisma.HomeCountArgs<ExtArgs>
            result: $Utils.Optional<HomeCountAggregateOutputType> | number
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
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
    trip?: TripOmit
    waypoint?: WaypointOmit
    tripDetail?: TripDetailOmit
    home?: HomeOmit
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
   * Count Type TripCountOutputType
   */

  export type TripCountOutputType = {
    waypoints: number
    details: number
  }

  export type TripCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    waypoints?: boolean | TripCountOutputTypeCountWaypointsArgs
    details?: boolean | TripCountOutputTypeCountDetailsArgs
  }

  // Custom InputTypes
  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCountOutputType
     */
    select?: TripCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountWaypointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaypointWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripDetailWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Trip
   */

  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripAvgAggregateOutputType = {
    panLat: number | null
    panLng: number | null
    zoom: number | null
  }

  export type TripSumAggregateOutputType = {
    panLat: number | null
    panLng: number | null
    zoom: number | null
  }

  export type TripMinAggregateOutputType = {
    id: string | null
    actionKey: string | null
    panLat: number | null
    panLng: number | null
    zoom: number | null
    htmlDescription: string | null
    createdAt: Date | null
  }

  export type TripMaxAggregateOutputType = {
    id: string | null
    actionKey: string | null
    panLat: number | null
    panLng: number | null
    zoom: number | null
    htmlDescription: string | null
    createdAt: Date | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    actionKey: number
    panLat: number
    panLng: number
    zoom: number
    htmlDescription: number
    createdAt: number
    _all: number
  }


  export type TripAvgAggregateInputType = {
    panLat?: true
    panLng?: true
    zoom?: true
  }

  export type TripSumAggregateInputType = {
    panLat?: true
    panLng?: true
    zoom?: true
  }

  export type TripMinAggregateInputType = {
    id?: true
    actionKey?: true
    panLat?: true
    panLng?: true
    zoom?: true
    htmlDescription?: true
    createdAt?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    actionKey?: true
    panLat?: true
    panLng?: true
    zoom?: true
    htmlDescription?: true
    createdAt?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    actionKey?: true
    panLat?: true
    panLng?: true
    zoom?: true
    htmlDescription?: true
    createdAt?: true
    _all?: true
  }

  export type TripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trip to aggregate.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type TripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
    orderBy?: TripOrderByWithAggregationInput | TripOrderByWithAggregationInput[]
    by: TripScalarFieldEnum[] | TripScalarFieldEnum
    having?: TripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _avg?: TripAvgAggregateInputType
    _sum?: TripSumAggregateInputType
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }

  export type TripGroupByOutputType = {
    id: string
    actionKey: string
    panLat: number
    panLng: number
    zoom: number
    htmlDescription: string
    createdAt: Date
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends TripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type TripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionKey?: boolean
    panLat?: boolean
    panLng?: boolean
    zoom?: boolean
    htmlDescription?: boolean
    createdAt?: boolean
    waypoints?: boolean | Trip$waypointsArgs<ExtArgs>
    details?: boolean | Trip$detailsArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionKey?: boolean
    panLat?: boolean
    panLng?: boolean
    zoom?: boolean
    htmlDescription?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["trip"]>

  export type TripSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionKey?: boolean
    panLat?: boolean
    panLng?: boolean
    zoom?: boolean
    htmlDescription?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["trip"]>

  export type TripSelectScalar = {
    id?: boolean
    actionKey?: boolean
    panLat?: boolean
    panLng?: boolean
    zoom?: boolean
    htmlDescription?: boolean
    createdAt?: boolean
  }

  export type TripOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actionKey" | "panLat" | "panLng" | "zoom" | "htmlDescription" | "createdAt", ExtArgs["result"]["trip"]>
  export type TripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    waypoints?: boolean | Trip$waypointsArgs<ExtArgs>
    details?: boolean | Trip$detailsArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TripIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TripIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trip"
    objects: {
      waypoints: Prisma.$WaypointPayload<ExtArgs>[]
      details: Prisma.$TripDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actionKey: string
      panLat: number
      panLng: number
      zoom: number
      htmlDescription: string
      createdAt: Date
    }, ExtArgs["result"]["trip"]>
    composites: {}
  }

  type TripGetPayload<S extends boolean | null | undefined | TripDefaultArgs> = $Result.GetResult<Prisma.$TripPayload, S>

  type TripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface TripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trip'], meta: { name: 'Trip' } }
    /**
     * Find zero or one Trip that matches the filter.
     * @param {TripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripFindUniqueArgs>(args: SelectSubset<T, TripFindUniqueArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripFindUniqueOrThrowArgs>(args: SelectSubset<T, TripFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripFindFirstArgs>(args?: SelectSubset<T, TripFindFirstArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripFindFirstOrThrowArgs>(args?: SelectSubset<T, TripFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripFindManyArgs>(args?: SelectSubset<T, TripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trip.
     * @param {TripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
     */
    create<T extends TripCreateArgs>(args: SelectSubset<T, TripCreateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trips.
     * @param {TripCreateManyArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripCreateManyArgs>(args?: SelectSubset<T, TripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trips and returns the data saved in the database.
     * @param {TripCreateManyAndReturnArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripCreateManyAndReturnArgs>(args?: SelectSubset<T, TripCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trip.
     * @param {TripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
     */
    delete<T extends TripDeleteArgs>(args: SelectSubset<T, TripDeleteArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trip.
     * @param {TripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripUpdateArgs>(args: SelectSubset<T, TripUpdateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trips.
     * @param {TripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripDeleteManyArgs>(args?: SelectSubset<T, TripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripUpdateManyArgs>(args: SelectSubset<T, TripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips and returns the data updated in the database.
     * @param {TripUpdateManyAndReturnArgs} args - Arguments to update many Trips.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.updateManyAndReturn({
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
    updateManyAndReturn<T extends TripUpdateManyAndReturnArgs>(args: SelectSubset<T, TripUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trip.
     * @param {TripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
     */
    upsert<T extends TripUpsertArgs>(args: SelectSubset<T, TripUpsertArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends TripCountArgs>(
      args?: Subset<T, TripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupByArgs} args - Group by arguments.
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
      T extends TripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trip model
   */
  readonly fields: TripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    waypoints<T extends Trip$waypointsArgs<ExtArgs> = {}>(args?: Subset<T, Trip$waypointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    details<T extends Trip$detailsArgs<ExtArgs> = {}>(args?: Subset<T, Trip$detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Trip model
   */
  interface TripFieldRefs {
    readonly id: FieldRef<"Trip", 'String'>
    readonly actionKey: FieldRef<"Trip", 'String'>
    readonly panLat: FieldRef<"Trip", 'Float'>
    readonly panLng: FieldRef<"Trip", 'Float'>
    readonly zoom: FieldRef<"Trip", 'Int'>
    readonly htmlDescription: FieldRef<"Trip", 'String'>
    readonly createdAt: FieldRef<"Trip", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trip findUnique
   */
  export type TripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findUniqueOrThrow
   */
  export type TripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findFirst
   */
  export type TripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findFirstOrThrow
   */
  export type TripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findMany
   */
  export type TripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trips to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip create
   */
  export type TripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to create a Trip.
     */
    data: XOR<TripCreateInput, TripUncheckedCreateInput>
  }

  /**
   * Trip createMany
   */
  export type TripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trip createManyAndReturn
   */
  export type TripCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trip update
   */
  export type TripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to update a Trip.
     */
    data: XOR<TripUpdateInput, TripUncheckedUpdateInput>
    /**
     * Choose, which Trip to update.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip updateMany
   */
  export type TripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
  }

  /**
   * Trip updateManyAndReturn
   */
  export type TripUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
  }

  /**
   * Trip upsert
   */
  export type TripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The filter to search for the Trip to update in case it exists.
     */
    where: TripWhereUniqueInput
    /**
     * In case the Trip found by the `where` argument doesn't exist, create a new Trip with this data.
     */
    create: XOR<TripCreateInput, TripUncheckedCreateInput>
    /**
     * In case the Trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripUpdateInput, TripUncheckedUpdateInput>
  }

  /**
   * Trip delete
   */
  export type TripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter which Trip to delete.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip deleteMany
   */
  export type TripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trips to delete
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to delete.
     */
    limit?: number
  }

  /**
   * Trip.waypoints
   */
  export type Trip$waypointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waypoint
     */
    omit?: WaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaypointInclude<ExtArgs> | null
    where?: WaypointWhereInput
    orderBy?: WaypointOrderByWithRelationInput | WaypointOrderByWithRelationInput[]
    cursor?: WaypointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaypointScalarFieldEnum | WaypointScalarFieldEnum[]
  }

  /**
   * Trip.details
   */
  export type Trip$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDetail
     */
    select?: TripDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDetail
     */
    omit?: TripDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDetailInclude<ExtArgs> | null
    where?: TripDetailWhereInput
    orderBy?: TripDetailOrderByWithRelationInput | TripDetailOrderByWithRelationInput[]
    cursor?: TripDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripDetailScalarFieldEnum | TripDetailScalarFieldEnum[]
  }

  /**
   * Trip without action
   */
  export type TripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
  }


  /**
   * Model Waypoint
   */

  export type AggregateWaypoint = {
    _count: WaypointCountAggregateOutputType | null
    _avg: WaypointAvgAggregateOutputType | null
    _sum: WaypointSumAggregateOutputType | null
    _min: WaypointMinAggregateOutputType | null
    _max: WaypointMaxAggregateOutputType | null
  }

  export type WaypointAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
    routeNum: number | null
    order: number | null
  }

  export type WaypointSumAggregateOutputType = {
    lat: number | null
    lng: number | null
    routeNum: number | null
    order: number | null
  }

  export type WaypointMinAggregateOutputType = {
    id: string | null
    tripId: string | null
    type: string | null
    lat: number | null
    lng: number | null
    name: string | null
    routeNum: number | null
    order: number | null
  }

  export type WaypointMaxAggregateOutputType = {
    id: string | null
    tripId: string | null
    type: string | null
    lat: number | null
    lng: number | null
    name: string | null
    routeNum: number | null
    order: number | null
  }

  export type WaypointCountAggregateOutputType = {
    id: number
    tripId: number
    type: number
    lat: number
    lng: number
    name: number
    routeNum: number
    order: number
    _all: number
  }


  export type WaypointAvgAggregateInputType = {
    lat?: true
    lng?: true
    routeNum?: true
    order?: true
  }

  export type WaypointSumAggregateInputType = {
    lat?: true
    lng?: true
    routeNum?: true
    order?: true
  }

  export type WaypointMinAggregateInputType = {
    id?: true
    tripId?: true
    type?: true
    lat?: true
    lng?: true
    name?: true
    routeNum?: true
    order?: true
  }

  export type WaypointMaxAggregateInputType = {
    id?: true
    tripId?: true
    type?: true
    lat?: true
    lng?: true
    name?: true
    routeNum?: true
    order?: true
  }

  export type WaypointCountAggregateInputType = {
    id?: true
    tripId?: true
    type?: true
    lat?: true
    lng?: true
    name?: true
    routeNum?: true
    order?: true
    _all?: true
  }

  export type WaypointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Waypoint to aggregate.
     */
    where?: WaypointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waypoints to fetch.
     */
    orderBy?: WaypointOrderByWithRelationInput | WaypointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaypointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waypoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waypoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Waypoints
    **/
    _count?: true | WaypointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaypointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaypointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaypointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaypointMaxAggregateInputType
  }

  export type GetWaypointAggregateType<T extends WaypointAggregateArgs> = {
        [P in keyof T & keyof AggregateWaypoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaypoint[P]>
      : GetScalarType<T[P], AggregateWaypoint[P]>
  }




  export type WaypointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaypointWhereInput
    orderBy?: WaypointOrderByWithAggregationInput | WaypointOrderByWithAggregationInput[]
    by: WaypointScalarFieldEnum[] | WaypointScalarFieldEnum
    having?: WaypointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaypointCountAggregateInputType | true
    _avg?: WaypointAvgAggregateInputType
    _sum?: WaypointSumAggregateInputType
    _min?: WaypointMinAggregateInputType
    _max?: WaypointMaxAggregateInputType
  }

  export type WaypointGroupByOutputType = {
    id: string
    tripId: string
    type: string
    lat: number
    lng: number
    name: string | null
    routeNum: number
    order: number
    _count: WaypointCountAggregateOutputType | null
    _avg: WaypointAvgAggregateOutputType | null
    _sum: WaypointSumAggregateOutputType | null
    _min: WaypointMinAggregateOutputType | null
    _max: WaypointMaxAggregateOutputType | null
  }

  type GetWaypointGroupByPayload<T extends WaypointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaypointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaypointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaypointGroupByOutputType[P]>
            : GetScalarType<T[P], WaypointGroupByOutputType[P]>
        }
      >
    >


  export type WaypointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    type?: boolean
    lat?: boolean
    lng?: boolean
    name?: boolean
    routeNum?: boolean
    order?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waypoint"]>

  export type WaypointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    type?: boolean
    lat?: boolean
    lng?: boolean
    name?: boolean
    routeNum?: boolean
    order?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waypoint"]>

  export type WaypointSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    type?: boolean
    lat?: boolean
    lng?: boolean
    name?: boolean
    routeNum?: boolean
    order?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waypoint"]>

  export type WaypointSelectScalar = {
    id?: boolean
    tripId?: boolean
    type?: boolean
    lat?: boolean
    lng?: boolean
    name?: boolean
    routeNum?: boolean
    order?: boolean
  }

  export type WaypointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "type" | "lat" | "lng" | "name" | "routeNum" | "order", ExtArgs["result"]["waypoint"]>
  export type WaypointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type WaypointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type WaypointIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $WaypointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Waypoint"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripId: string
      type: string
      lat: number
      lng: number
      name: string | null
      routeNum: number
      order: number
    }, ExtArgs["result"]["waypoint"]>
    composites: {}
  }

  type WaypointGetPayload<S extends boolean | null | undefined | WaypointDefaultArgs> = $Result.GetResult<Prisma.$WaypointPayload, S>

  type WaypointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WaypointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaypointCountAggregateInputType | true
    }

  export interface WaypointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Waypoint'], meta: { name: 'Waypoint' } }
    /**
     * Find zero or one Waypoint that matches the filter.
     * @param {WaypointFindUniqueArgs} args - Arguments to find a Waypoint
     * @example
     * // Get one Waypoint
     * const waypoint = await prisma.waypoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaypointFindUniqueArgs>(args: SelectSubset<T, WaypointFindUniqueArgs<ExtArgs>>): Prisma__WaypointClient<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Waypoint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WaypointFindUniqueOrThrowArgs} args - Arguments to find a Waypoint
     * @example
     * // Get one Waypoint
     * const waypoint = await prisma.waypoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaypointFindUniqueOrThrowArgs>(args: SelectSubset<T, WaypointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaypointClient<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Waypoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaypointFindFirstArgs} args - Arguments to find a Waypoint
     * @example
     * // Get one Waypoint
     * const waypoint = await prisma.waypoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaypointFindFirstArgs>(args?: SelectSubset<T, WaypointFindFirstArgs<ExtArgs>>): Prisma__WaypointClient<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Waypoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaypointFindFirstOrThrowArgs} args - Arguments to find a Waypoint
     * @example
     * // Get one Waypoint
     * const waypoint = await prisma.waypoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaypointFindFirstOrThrowArgs>(args?: SelectSubset<T, WaypointFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaypointClient<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Waypoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaypointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Waypoints
     * const waypoints = await prisma.waypoint.findMany()
     * 
     * // Get first 10 Waypoints
     * const waypoints = await prisma.waypoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waypointWithIdOnly = await prisma.waypoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WaypointFindManyArgs>(args?: SelectSubset<T, WaypointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Waypoint.
     * @param {WaypointCreateArgs} args - Arguments to create a Waypoint.
     * @example
     * // Create one Waypoint
     * const Waypoint = await prisma.waypoint.create({
     *   data: {
     *     // ... data to create a Waypoint
     *   }
     * })
     * 
     */
    create<T extends WaypointCreateArgs>(args: SelectSubset<T, WaypointCreateArgs<ExtArgs>>): Prisma__WaypointClient<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Waypoints.
     * @param {WaypointCreateManyArgs} args - Arguments to create many Waypoints.
     * @example
     * // Create many Waypoints
     * const waypoint = await prisma.waypoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaypointCreateManyArgs>(args?: SelectSubset<T, WaypointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Waypoints and returns the data saved in the database.
     * @param {WaypointCreateManyAndReturnArgs} args - Arguments to create many Waypoints.
     * @example
     * // Create many Waypoints
     * const waypoint = await prisma.waypoint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Waypoints and only return the `id`
     * const waypointWithIdOnly = await prisma.waypoint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WaypointCreateManyAndReturnArgs>(args?: SelectSubset<T, WaypointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Waypoint.
     * @param {WaypointDeleteArgs} args - Arguments to delete one Waypoint.
     * @example
     * // Delete one Waypoint
     * const Waypoint = await prisma.waypoint.delete({
     *   where: {
     *     // ... filter to delete one Waypoint
     *   }
     * })
     * 
     */
    delete<T extends WaypointDeleteArgs>(args: SelectSubset<T, WaypointDeleteArgs<ExtArgs>>): Prisma__WaypointClient<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Waypoint.
     * @param {WaypointUpdateArgs} args - Arguments to update one Waypoint.
     * @example
     * // Update one Waypoint
     * const waypoint = await prisma.waypoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaypointUpdateArgs>(args: SelectSubset<T, WaypointUpdateArgs<ExtArgs>>): Prisma__WaypointClient<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Waypoints.
     * @param {WaypointDeleteManyArgs} args - Arguments to filter Waypoints to delete.
     * @example
     * // Delete a few Waypoints
     * const { count } = await prisma.waypoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaypointDeleteManyArgs>(args?: SelectSubset<T, WaypointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Waypoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaypointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Waypoints
     * const waypoint = await prisma.waypoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaypointUpdateManyArgs>(args: SelectSubset<T, WaypointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Waypoints and returns the data updated in the database.
     * @param {WaypointUpdateManyAndReturnArgs} args - Arguments to update many Waypoints.
     * @example
     * // Update many Waypoints
     * const waypoint = await prisma.waypoint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Waypoints and only return the `id`
     * const waypointWithIdOnly = await prisma.waypoint.updateManyAndReturn({
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
    updateManyAndReturn<T extends WaypointUpdateManyAndReturnArgs>(args: SelectSubset<T, WaypointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Waypoint.
     * @param {WaypointUpsertArgs} args - Arguments to update or create a Waypoint.
     * @example
     * // Update or create a Waypoint
     * const waypoint = await prisma.waypoint.upsert({
     *   create: {
     *     // ... data to create a Waypoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Waypoint we want to update
     *   }
     * })
     */
    upsert<T extends WaypointUpsertArgs>(args: SelectSubset<T, WaypointUpsertArgs<ExtArgs>>): Prisma__WaypointClient<$Result.GetResult<Prisma.$WaypointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Waypoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaypointCountArgs} args - Arguments to filter Waypoints to count.
     * @example
     * // Count the number of Waypoints
     * const count = await prisma.waypoint.count({
     *   where: {
     *     // ... the filter for the Waypoints we want to count
     *   }
     * })
    **/
    count<T extends WaypointCountArgs>(
      args?: Subset<T, WaypointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaypointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Waypoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaypointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WaypointAggregateArgs>(args: Subset<T, WaypointAggregateArgs>): Prisma.PrismaPromise<GetWaypointAggregateType<T>>

    /**
     * Group by Waypoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaypointGroupByArgs} args - Group by arguments.
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
      T extends WaypointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaypointGroupByArgs['orderBy'] }
        : { orderBy?: WaypointGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WaypointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaypointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Waypoint model
   */
  readonly fields: WaypointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Waypoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaypointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Waypoint model
   */
  interface WaypointFieldRefs {
    readonly id: FieldRef<"Waypoint", 'String'>
    readonly tripId: FieldRef<"Waypoint", 'String'>
    readonly type: FieldRef<"Waypoint", 'String'>
    readonly lat: FieldRef<"Waypoint", 'Float'>
    readonly lng: FieldRef<"Waypoint", 'Float'>
    readonly name: FieldRef<"Waypoint", 'String'>
    readonly routeNum: FieldRef<"Waypoint", 'Int'>
    readonly order: FieldRef<"Waypoint", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Waypoint findUnique
   */
  export type WaypointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waypoint
     */
    omit?: WaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * Filter, which Waypoint to fetch.
     */
    where: WaypointWhereUniqueInput
  }

  /**
   * Waypoint findUniqueOrThrow
   */
  export type WaypointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waypoint
     */
    omit?: WaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * Filter, which Waypoint to fetch.
     */
    where: WaypointWhereUniqueInput
  }

  /**
   * Waypoint findFirst
   */
  export type WaypointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waypoint
     */
    omit?: WaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * Filter, which Waypoint to fetch.
     */
    where?: WaypointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waypoints to fetch.
     */
    orderBy?: WaypointOrderByWithRelationInput | WaypointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Waypoints.
     */
    cursor?: WaypointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waypoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waypoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Waypoints.
     */
    distinct?: WaypointScalarFieldEnum | WaypointScalarFieldEnum[]
  }

  /**
   * Waypoint findFirstOrThrow
   */
  export type WaypointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waypoint
     */
    omit?: WaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * Filter, which Waypoint to fetch.
     */
    where?: WaypointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waypoints to fetch.
     */
    orderBy?: WaypointOrderByWithRelationInput | WaypointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Waypoints.
     */
    cursor?: WaypointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waypoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waypoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Waypoints.
     */
    distinct?: WaypointScalarFieldEnum | WaypointScalarFieldEnum[]
  }

  /**
   * Waypoint findMany
   */
  export type WaypointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waypoint
     */
    omit?: WaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * Filter, which Waypoints to fetch.
     */
    where?: WaypointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waypoints to fetch.
     */
    orderBy?: WaypointOrderByWithRelationInput | WaypointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Waypoints.
     */
    cursor?: WaypointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waypoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waypoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Waypoints.
     */
    distinct?: WaypointScalarFieldEnum | WaypointScalarFieldEnum[]
  }

  /**
   * Waypoint create
   */
  export type WaypointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waypoint
     */
    omit?: WaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * The data needed to create a Waypoint.
     */
    data: XOR<WaypointCreateInput, WaypointUncheckedCreateInput>
  }

  /**
   * Waypoint createMany
   */
  export type WaypointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Waypoints.
     */
    data: WaypointCreateManyInput | WaypointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Waypoint createManyAndReturn
   */
  export type WaypointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Waypoint
     */
    omit?: WaypointOmit<ExtArgs> | null
    /**
     * The data used to create many Waypoints.
     */
    data: WaypointCreateManyInput | WaypointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaypointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Waypoint update
   */
  export type WaypointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waypoint
     */
    omit?: WaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * The data needed to update a Waypoint.
     */
    data: XOR<WaypointUpdateInput, WaypointUncheckedUpdateInput>
    /**
     * Choose, which Waypoint to update.
     */
    where: WaypointWhereUniqueInput
  }

  /**
   * Waypoint updateMany
   */
  export type WaypointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Waypoints.
     */
    data: XOR<WaypointUpdateManyMutationInput, WaypointUncheckedUpdateManyInput>
    /**
     * Filter which Waypoints to update
     */
    where?: WaypointWhereInput
    /**
     * Limit how many Waypoints to update.
     */
    limit?: number
  }

  /**
   * Waypoint updateManyAndReturn
   */
  export type WaypointUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Waypoint
     */
    omit?: WaypointOmit<ExtArgs> | null
    /**
     * The data used to update Waypoints.
     */
    data: XOR<WaypointUpdateManyMutationInput, WaypointUncheckedUpdateManyInput>
    /**
     * Filter which Waypoints to update
     */
    where?: WaypointWhereInput
    /**
     * Limit how many Waypoints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaypointIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Waypoint upsert
   */
  export type WaypointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waypoint
     */
    omit?: WaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * The filter to search for the Waypoint to update in case it exists.
     */
    where: WaypointWhereUniqueInput
    /**
     * In case the Waypoint found by the `where` argument doesn't exist, create a new Waypoint with this data.
     */
    create: XOR<WaypointCreateInput, WaypointUncheckedCreateInput>
    /**
     * In case the Waypoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaypointUpdateInput, WaypointUncheckedUpdateInput>
  }

  /**
   * Waypoint delete
   */
  export type WaypointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waypoint
     */
    omit?: WaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaypointInclude<ExtArgs> | null
    /**
     * Filter which Waypoint to delete.
     */
    where: WaypointWhereUniqueInput
  }

  /**
   * Waypoint deleteMany
   */
  export type WaypointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Waypoints to delete
     */
    where?: WaypointWhereInput
    /**
     * Limit how many Waypoints to delete.
     */
    limit?: number
  }

  /**
   * Waypoint without action
   */
  export type WaypointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waypoint
     */
    select?: WaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waypoint
     */
    omit?: WaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaypointInclude<ExtArgs> | null
  }


  /**
   * Model TripDetail
   */

  export type AggregateTripDetail = {
    _count: TripDetailCountAggregateOutputType | null
    _avg: TripDetailAvgAggregateOutputType | null
    _sum: TripDetailSumAggregateOutputType | null
    _min: TripDetailMinAggregateOutputType | null
    _max: TripDetailMaxAggregateOutputType | null
  }

  export type TripDetailAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
    order: number | null
  }

  export type TripDetailSumAggregateOutputType = {
    lat: number | null
    lng: number | null
    order: number | null
  }

  export type TripDetailMinAggregateOutputType = {
    id: string | null
    tripId: string | null
    lat: number | null
    lng: number | null
    title: string | null
    description: string | null
    image: string | null
    type: string | null
    order: number | null
  }

  export type TripDetailMaxAggregateOutputType = {
    id: string | null
    tripId: string | null
    lat: number | null
    lng: number | null
    title: string | null
    description: string | null
    image: string | null
    type: string | null
    order: number | null
  }

  export type TripDetailCountAggregateOutputType = {
    id: number
    tripId: number
    lat: number
    lng: number
    title: number
    description: number
    image: number
    type: number
    order: number
    _all: number
  }


  export type TripDetailAvgAggregateInputType = {
    lat?: true
    lng?: true
    order?: true
  }

  export type TripDetailSumAggregateInputType = {
    lat?: true
    lng?: true
    order?: true
  }

  export type TripDetailMinAggregateInputType = {
    id?: true
    tripId?: true
    lat?: true
    lng?: true
    title?: true
    description?: true
    image?: true
    type?: true
    order?: true
  }

  export type TripDetailMaxAggregateInputType = {
    id?: true
    tripId?: true
    lat?: true
    lng?: true
    title?: true
    description?: true
    image?: true
    type?: true
    order?: true
  }

  export type TripDetailCountAggregateInputType = {
    id?: true
    tripId?: true
    lat?: true
    lng?: true
    title?: true
    description?: true
    image?: true
    type?: true
    order?: true
    _all?: true
  }

  export type TripDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripDetail to aggregate.
     */
    where?: TripDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripDetails to fetch.
     */
    orderBy?: TripDetailOrderByWithRelationInput | TripDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripDetails
    **/
    _count?: true | TripDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripDetailMaxAggregateInputType
  }

  export type GetTripDetailAggregateType<T extends TripDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateTripDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripDetail[P]>
      : GetScalarType<T[P], AggregateTripDetail[P]>
  }




  export type TripDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripDetailWhereInput
    orderBy?: TripDetailOrderByWithAggregationInput | TripDetailOrderByWithAggregationInput[]
    by: TripDetailScalarFieldEnum[] | TripDetailScalarFieldEnum
    having?: TripDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripDetailCountAggregateInputType | true
    _avg?: TripDetailAvgAggregateInputType
    _sum?: TripDetailSumAggregateInputType
    _min?: TripDetailMinAggregateInputType
    _max?: TripDetailMaxAggregateInputType
  }

  export type TripDetailGroupByOutputType = {
    id: string
    tripId: string
    lat: number
    lng: number
    title: string
    description: string
    image: string
    type: string
    order: number
    _count: TripDetailCountAggregateOutputType | null
    _avg: TripDetailAvgAggregateOutputType | null
    _sum: TripDetailSumAggregateOutputType | null
    _min: TripDetailMinAggregateOutputType | null
    _max: TripDetailMaxAggregateOutputType | null
  }

  type GetTripDetailGroupByPayload<T extends TripDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripDetailGroupByOutputType[P]>
            : GetScalarType<T[P], TripDetailGroupByOutputType[P]>
        }
      >
    >


  export type TripDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    lat?: boolean
    lng?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    type?: boolean
    order?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripDetail"]>

  export type TripDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    lat?: boolean
    lng?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    type?: boolean
    order?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripDetail"]>

  export type TripDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    lat?: boolean
    lng?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    type?: boolean
    order?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripDetail"]>

  export type TripDetailSelectScalar = {
    id?: boolean
    tripId?: boolean
    lat?: boolean
    lng?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    type?: boolean
    order?: boolean
  }

  export type TripDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "lat" | "lng" | "title" | "description" | "image" | "type" | "order", ExtArgs["result"]["tripDetail"]>
  export type TripDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type TripDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type TripDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $TripDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripDetail"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripId: string
      lat: number
      lng: number
      title: string
      description: string
      image: string
      type: string
      order: number
    }, ExtArgs["result"]["tripDetail"]>
    composites: {}
  }

  type TripDetailGetPayload<S extends boolean | null | undefined | TripDetailDefaultArgs> = $Result.GetResult<Prisma.$TripDetailPayload, S>

  type TripDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripDetailCountAggregateInputType | true
    }

  export interface TripDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripDetail'], meta: { name: 'TripDetail' } }
    /**
     * Find zero or one TripDetail that matches the filter.
     * @param {TripDetailFindUniqueArgs} args - Arguments to find a TripDetail
     * @example
     * // Get one TripDetail
     * const tripDetail = await prisma.tripDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripDetailFindUniqueArgs>(args: SelectSubset<T, TripDetailFindUniqueArgs<ExtArgs>>): Prisma__TripDetailClient<$Result.GetResult<Prisma.$TripDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TripDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripDetailFindUniqueOrThrowArgs} args - Arguments to find a TripDetail
     * @example
     * // Get one TripDetail
     * const tripDetail = await prisma.tripDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, TripDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripDetailClient<$Result.GetResult<Prisma.$TripDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDetailFindFirstArgs} args - Arguments to find a TripDetail
     * @example
     * // Get one TripDetail
     * const tripDetail = await prisma.tripDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripDetailFindFirstArgs>(args?: SelectSubset<T, TripDetailFindFirstArgs<ExtArgs>>): Prisma__TripDetailClient<$Result.GetResult<Prisma.$TripDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDetailFindFirstOrThrowArgs} args - Arguments to find a TripDetail
     * @example
     * // Get one TripDetail
     * const tripDetail = await prisma.tripDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, TripDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripDetailClient<$Result.GetResult<Prisma.$TripDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TripDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripDetails
     * const tripDetails = await prisma.tripDetail.findMany()
     * 
     * // Get first 10 TripDetails
     * const tripDetails = await prisma.tripDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripDetailWithIdOnly = await prisma.tripDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripDetailFindManyArgs>(args?: SelectSubset<T, TripDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TripDetail.
     * @param {TripDetailCreateArgs} args - Arguments to create a TripDetail.
     * @example
     * // Create one TripDetail
     * const TripDetail = await prisma.tripDetail.create({
     *   data: {
     *     // ... data to create a TripDetail
     *   }
     * })
     * 
     */
    create<T extends TripDetailCreateArgs>(args: SelectSubset<T, TripDetailCreateArgs<ExtArgs>>): Prisma__TripDetailClient<$Result.GetResult<Prisma.$TripDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TripDetails.
     * @param {TripDetailCreateManyArgs} args - Arguments to create many TripDetails.
     * @example
     * // Create many TripDetails
     * const tripDetail = await prisma.tripDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripDetailCreateManyArgs>(args?: SelectSubset<T, TripDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripDetails and returns the data saved in the database.
     * @param {TripDetailCreateManyAndReturnArgs} args - Arguments to create many TripDetails.
     * @example
     * // Create many TripDetails
     * const tripDetail = await prisma.tripDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripDetails and only return the `id`
     * const tripDetailWithIdOnly = await prisma.tripDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, TripDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TripDetail.
     * @param {TripDetailDeleteArgs} args - Arguments to delete one TripDetail.
     * @example
     * // Delete one TripDetail
     * const TripDetail = await prisma.tripDetail.delete({
     *   where: {
     *     // ... filter to delete one TripDetail
     *   }
     * })
     * 
     */
    delete<T extends TripDetailDeleteArgs>(args: SelectSubset<T, TripDetailDeleteArgs<ExtArgs>>): Prisma__TripDetailClient<$Result.GetResult<Prisma.$TripDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TripDetail.
     * @param {TripDetailUpdateArgs} args - Arguments to update one TripDetail.
     * @example
     * // Update one TripDetail
     * const tripDetail = await prisma.tripDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripDetailUpdateArgs>(args: SelectSubset<T, TripDetailUpdateArgs<ExtArgs>>): Prisma__TripDetailClient<$Result.GetResult<Prisma.$TripDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TripDetails.
     * @param {TripDetailDeleteManyArgs} args - Arguments to filter TripDetails to delete.
     * @example
     * // Delete a few TripDetails
     * const { count } = await prisma.tripDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripDetailDeleteManyArgs>(args?: SelectSubset<T, TripDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripDetails
     * const tripDetail = await prisma.tripDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripDetailUpdateManyArgs>(args: SelectSubset<T, TripDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripDetails and returns the data updated in the database.
     * @param {TripDetailUpdateManyAndReturnArgs} args - Arguments to update many TripDetails.
     * @example
     * // Update many TripDetails
     * const tripDetail = await prisma.tripDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TripDetails and only return the `id`
     * const tripDetailWithIdOnly = await prisma.tripDetail.updateManyAndReturn({
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
    updateManyAndReturn<T extends TripDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, TripDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TripDetail.
     * @param {TripDetailUpsertArgs} args - Arguments to update or create a TripDetail.
     * @example
     * // Update or create a TripDetail
     * const tripDetail = await prisma.tripDetail.upsert({
     *   create: {
     *     // ... data to create a TripDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripDetail we want to update
     *   }
     * })
     */
    upsert<T extends TripDetailUpsertArgs>(args: SelectSubset<T, TripDetailUpsertArgs<ExtArgs>>): Prisma__TripDetailClient<$Result.GetResult<Prisma.$TripDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TripDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDetailCountArgs} args - Arguments to filter TripDetails to count.
     * @example
     * // Count the number of TripDetails
     * const count = await prisma.tripDetail.count({
     *   where: {
     *     // ... the filter for the TripDetails we want to count
     *   }
     * })
    **/
    count<T extends TripDetailCountArgs>(
      args?: Subset<T, TripDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripDetailAggregateArgs>(args: Subset<T, TripDetailAggregateArgs>): Prisma.PrismaPromise<GetTripDetailAggregateType<T>>

    /**
     * Group by TripDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDetailGroupByArgs} args - Group by arguments.
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
      T extends TripDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripDetailGroupByArgs['orderBy'] }
        : { orderBy?: TripDetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TripDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripDetail model
   */
  readonly fields: TripDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TripDetail model
   */
  interface TripDetailFieldRefs {
    readonly id: FieldRef<"TripDetail", 'String'>
    readonly tripId: FieldRef<"TripDetail", 'String'>
    readonly lat: FieldRef<"TripDetail", 'Float'>
    readonly lng: FieldRef<"TripDetail", 'Float'>
    readonly title: FieldRef<"TripDetail", 'String'>
    readonly description: FieldRef<"TripDetail", 'String'>
    readonly image: FieldRef<"TripDetail", 'String'>
    readonly type: FieldRef<"TripDetail", 'String'>
    readonly order: FieldRef<"TripDetail", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TripDetail findUnique
   */
  export type TripDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDetail
     */
    select?: TripDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDetail
     */
    omit?: TripDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDetailInclude<ExtArgs> | null
    /**
     * Filter, which TripDetail to fetch.
     */
    where: TripDetailWhereUniqueInput
  }

  /**
   * TripDetail findUniqueOrThrow
   */
  export type TripDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDetail
     */
    select?: TripDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDetail
     */
    omit?: TripDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDetailInclude<ExtArgs> | null
    /**
     * Filter, which TripDetail to fetch.
     */
    where: TripDetailWhereUniqueInput
  }

  /**
   * TripDetail findFirst
   */
  export type TripDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDetail
     */
    select?: TripDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDetail
     */
    omit?: TripDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDetailInclude<ExtArgs> | null
    /**
     * Filter, which TripDetail to fetch.
     */
    where?: TripDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripDetails to fetch.
     */
    orderBy?: TripDetailOrderByWithRelationInput | TripDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripDetails.
     */
    cursor?: TripDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripDetails.
     */
    distinct?: TripDetailScalarFieldEnum | TripDetailScalarFieldEnum[]
  }

  /**
   * TripDetail findFirstOrThrow
   */
  export type TripDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDetail
     */
    select?: TripDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDetail
     */
    omit?: TripDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDetailInclude<ExtArgs> | null
    /**
     * Filter, which TripDetail to fetch.
     */
    where?: TripDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripDetails to fetch.
     */
    orderBy?: TripDetailOrderByWithRelationInput | TripDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripDetails.
     */
    cursor?: TripDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripDetails.
     */
    distinct?: TripDetailScalarFieldEnum | TripDetailScalarFieldEnum[]
  }

  /**
   * TripDetail findMany
   */
  export type TripDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDetail
     */
    select?: TripDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDetail
     */
    omit?: TripDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDetailInclude<ExtArgs> | null
    /**
     * Filter, which TripDetails to fetch.
     */
    where?: TripDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripDetails to fetch.
     */
    orderBy?: TripDetailOrderByWithRelationInput | TripDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripDetails.
     */
    cursor?: TripDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripDetails.
     */
    distinct?: TripDetailScalarFieldEnum | TripDetailScalarFieldEnum[]
  }

  /**
   * TripDetail create
   */
  export type TripDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDetail
     */
    select?: TripDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDetail
     */
    omit?: TripDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a TripDetail.
     */
    data: XOR<TripDetailCreateInput, TripDetailUncheckedCreateInput>
  }

  /**
   * TripDetail createMany
   */
  export type TripDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripDetails.
     */
    data: TripDetailCreateManyInput | TripDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TripDetail createManyAndReturn
   */
  export type TripDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDetail
     */
    select?: TripDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripDetail
     */
    omit?: TripDetailOmit<ExtArgs> | null
    /**
     * The data used to create many TripDetails.
     */
    data: TripDetailCreateManyInput | TripDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripDetail update
   */
  export type TripDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDetail
     */
    select?: TripDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDetail
     */
    omit?: TripDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a TripDetail.
     */
    data: XOR<TripDetailUpdateInput, TripDetailUncheckedUpdateInput>
    /**
     * Choose, which TripDetail to update.
     */
    where: TripDetailWhereUniqueInput
  }

  /**
   * TripDetail updateMany
   */
  export type TripDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripDetails.
     */
    data: XOR<TripDetailUpdateManyMutationInput, TripDetailUncheckedUpdateManyInput>
    /**
     * Filter which TripDetails to update
     */
    where?: TripDetailWhereInput
    /**
     * Limit how many TripDetails to update.
     */
    limit?: number
  }

  /**
   * TripDetail updateManyAndReturn
   */
  export type TripDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDetail
     */
    select?: TripDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripDetail
     */
    omit?: TripDetailOmit<ExtArgs> | null
    /**
     * The data used to update TripDetails.
     */
    data: XOR<TripDetailUpdateManyMutationInput, TripDetailUncheckedUpdateManyInput>
    /**
     * Filter which TripDetails to update
     */
    where?: TripDetailWhereInput
    /**
     * Limit how many TripDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripDetail upsert
   */
  export type TripDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDetail
     */
    select?: TripDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDetail
     */
    omit?: TripDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the TripDetail to update in case it exists.
     */
    where: TripDetailWhereUniqueInput
    /**
     * In case the TripDetail found by the `where` argument doesn't exist, create a new TripDetail with this data.
     */
    create: XOR<TripDetailCreateInput, TripDetailUncheckedCreateInput>
    /**
     * In case the TripDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripDetailUpdateInput, TripDetailUncheckedUpdateInput>
  }

  /**
   * TripDetail delete
   */
  export type TripDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDetail
     */
    select?: TripDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDetail
     */
    omit?: TripDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDetailInclude<ExtArgs> | null
    /**
     * Filter which TripDetail to delete.
     */
    where: TripDetailWhereUniqueInput
  }

  /**
   * TripDetail deleteMany
   */
  export type TripDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripDetails to delete
     */
    where?: TripDetailWhereInput
    /**
     * Limit how many TripDetails to delete.
     */
    limit?: number
  }

  /**
   * TripDetail without action
   */
  export type TripDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDetail
     */
    select?: TripDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDetail
     */
    omit?: TripDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDetailInclude<ExtArgs> | null
  }


  /**
   * Model Home
   */

  export type AggregateHome = {
    _count: HomeCountAggregateOutputType | null
    _avg: HomeAvgAggregateOutputType | null
    _sum: HomeSumAggregateOutputType | null
    _min: HomeMinAggregateOutputType | null
    _max: HomeMaxAggregateOutputType | null
  }

  export type HomeAvgAggregateOutputType = {
    id: number | null
    lat: number | null
    lng: number | null
  }

  export type HomeSumAggregateOutputType = {
    id: number | null
    lat: number | null
    lng: number | null
  }

  export type HomeMinAggregateOutputType = {
    id: number | null
    lat: number | null
    lng: number | null
    address: string | null
    from: string | null
    to: string | null
    description: string | null
    type: string | null
  }

  export type HomeMaxAggregateOutputType = {
    id: number | null
    lat: number | null
    lng: number | null
    address: string | null
    from: string | null
    to: string | null
    description: string | null
    type: string | null
  }

  export type HomeCountAggregateOutputType = {
    id: number
    lat: number
    lng: number
    address: number
    from: number
    to: number
    description: number
    type: number
    _all: number
  }


  export type HomeAvgAggregateInputType = {
    id?: true
    lat?: true
    lng?: true
  }

  export type HomeSumAggregateInputType = {
    id?: true
    lat?: true
    lng?: true
  }

  export type HomeMinAggregateInputType = {
    id?: true
    lat?: true
    lng?: true
    address?: true
    from?: true
    to?: true
    description?: true
    type?: true
  }

  export type HomeMaxAggregateInputType = {
    id?: true
    lat?: true
    lng?: true
    address?: true
    from?: true
    to?: true
    description?: true
    type?: true
  }

  export type HomeCountAggregateInputType = {
    id?: true
    lat?: true
    lng?: true
    address?: true
    from?: true
    to?: true
    description?: true
    type?: true
    _all?: true
  }

  export type HomeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Home to aggregate.
     */
    where?: HomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Homes to fetch.
     */
    orderBy?: HomeOrderByWithRelationInput | HomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Homes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Homes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Homes
    **/
    _count?: true | HomeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HomeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HomeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomeMaxAggregateInputType
  }

  export type GetHomeAggregateType<T extends HomeAggregateArgs> = {
        [P in keyof T & keyof AggregateHome]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHome[P]>
      : GetScalarType<T[P], AggregateHome[P]>
  }




  export type HomeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HomeWhereInput
    orderBy?: HomeOrderByWithAggregationInput | HomeOrderByWithAggregationInput[]
    by: HomeScalarFieldEnum[] | HomeScalarFieldEnum
    having?: HomeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomeCountAggregateInputType | true
    _avg?: HomeAvgAggregateInputType
    _sum?: HomeSumAggregateInputType
    _min?: HomeMinAggregateInputType
    _max?: HomeMaxAggregateInputType
  }

  export type HomeGroupByOutputType = {
    id: number
    lat: number
    lng: number
    address: string
    from: string
    to: string
    description: string
    type: string
    _count: HomeCountAggregateOutputType | null
    _avg: HomeAvgAggregateOutputType | null
    _sum: HomeSumAggregateOutputType | null
    _min: HomeMinAggregateOutputType | null
    _max: HomeMaxAggregateOutputType | null
  }

  type GetHomeGroupByPayload<T extends HomeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HomeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomeGroupByOutputType[P]>
            : GetScalarType<T[P], HomeGroupByOutputType[P]>
        }
      >
    >


  export type HomeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lat?: boolean
    lng?: boolean
    address?: boolean
    from?: boolean
    to?: boolean
    description?: boolean
    type?: boolean
  }, ExtArgs["result"]["home"]>

  export type HomeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lat?: boolean
    lng?: boolean
    address?: boolean
    from?: boolean
    to?: boolean
    description?: boolean
    type?: boolean
  }, ExtArgs["result"]["home"]>

  export type HomeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lat?: boolean
    lng?: boolean
    address?: boolean
    from?: boolean
    to?: boolean
    description?: boolean
    type?: boolean
  }, ExtArgs["result"]["home"]>

  export type HomeSelectScalar = {
    id?: boolean
    lat?: boolean
    lng?: boolean
    address?: boolean
    from?: boolean
    to?: boolean
    description?: boolean
    type?: boolean
  }

  export type HomeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lat" | "lng" | "address" | "from" | "to" | "description" | "type", ExtArgs["result"]["home"]>

  export type $HomePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Home"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lat: number
      lng: number
      address: string
      from: string
      to: string
      description: string
      type: string
    }, ExtArgs["result"]["home"]>
    composites: {}
  }

  type HomeGetPayload<S extends boolean | null | undefined | HomeDefaultArgs> = $Result.GetResult<Prisma.$HomePayload, S>

  type HomeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HomeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HomeCountAggregateInputType | true
    }

  export interface HomeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Home'], meta: { name: 'Home' } }
    /**
     * Find zero or one Home that matches the filter.
     * @param {HomeFindUniqueArgs} args - Arguments to find a Home
     * @example
     * // Get one Home
     * const home = await prisma.home.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HomeFindUniqueArgs>(args: SelectSubset<T, HomeFindUniqueArgs<ExtArgs>>): Prisma__HomeClient<$Result.GetResult<Prisma.$HomePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Home that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HomeFindUniqueOrThrowArgs} args - Arguments to find a Home
     * @example
     * // Get one Home
     * const home = await prisma.home.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HomeFindUniqueOrThrowArgs>(args: SelectSubset<T, HomeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HomeClient<$Result.GetResult<Prisma.$HomePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Home that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeFindFirstArgs} args - Arguments to find a Home
     * @example
     * // Get one Home
     * const home = await prisma.home.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HomeFindFirstArgs>(args?: SelectSubset<T, HomeFindFirstArgs<ExtArgs>>): Prisma__HomeClient<$Result.GetResult<Prisma.$HomePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Home that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeFindFirstOrThrowArgs} args - Arguments to find a Home
     * @example
     * // Get one Home
     * const home = await prisma.home.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HomeFindFirstOrThrowArgs>(args?: SelectSubset<T, HomeFindFirstOrThrowArgs<ExtArgs>>): Prisma__HomeClient<$Result.GetResult<Prisma.$HomePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Homes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Homes
     * const homes = await prisma.home.findMany()
     * 
     * // Get first 10 Homes
     * const homes = await prisma.home.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homeWithIdOnly = await prisma.home.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HomeFindManyArgs>(args?: SelectSubset<T, HomeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Home.
     * @param {HomeCreateArgs} args - Arguments to create a Home.
     * @example
     * // Create one Home
     * const Home = await prisma.home.create({
     *   data: {
     *     // ... data to create a Home
     *   }
     * })
     * 
     */
    create<T extends HomeCreateArgs>(args: SelectSubset<T, HomeCreateArgs<ExtArgs>>): Prisma__HomeClient<$Result.GetResult<Prisma.$HomePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Homes.
     * @param {HomeCreateManyArgs} args - Arguments to create many Homes.
     * @example
     * // Create many Homes
     * const home = await prisma.home.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HomeCreateManyArgs>(args?: SelectSubset<T, HomeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Homes and returns the data saved in the database.
     * @param {HomeCreateManyAndReturnArgs} args - Arguments to create many Homes.
     * @example
     * // Create many Homes
     * const home = await prisma.home.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Homes and only return the `id`
     * const homeWithIdOnly = await prisma.home.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HomeCreateManyAndReturnArgs>(args?: SelectSubset<T, HomeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Home.
     * @param {HomeDeleteArgs} args - Arguments to delete one Home.
     * @example
     * // Delete one Home
     * const Home = await prisma.home.delete({
     *   where: {
     *     // ... filter to delete one Home
     *   }
     * })
     * 
     */
    delete<T extends HomeDeleteArgs>(args: SelectSubset<T, HomeDeleteArgs<ExtArgs>>): Prisma__HomeClient<$Result.GetResult<Prisma.$HomePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Home.
     * @param {HomeUpdateArgs} args - Arguments to update one Home.
     * @example
     * // Update one Home
     * const home = await prisma.home.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HomeUpdateArgs>(args: SelectSubset<T, HomeUpdateArgs<ExtArgs>>): Prisma__HomeClient<$Result.GetResult<Prisma.$HomePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Homes.
     * @param {HomeDeleteManyArgs} args - Arguments to filter Homes to delete.
     * @example
     * // Delete a few Homes
     * const { count } = await prisma.home.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HomeDeleteManyArgs>(args?: SelectSubset<T, HomeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Homes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Homes
     * const home = await prisma.home.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HomeUpdateManyArgs>(args: SelectSubset<T, HomeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Homes and returns the data updated in the database.
     * @param {HomeUpdateManyAndReturnArgs} args - Arguments to update many Homes.
     * @example
     * // Update many Homes
     * const home = await prisma.home.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Homes and only return the `id`
     * const homeWithIdOnly = await prisma.home.updateManyAndReturn({
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
    updateManyAndReturn<T extends HomeUpdateManyAndReturnArgs>(args: SelectSubset<T, HomeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Home.
     * @param {HomeUpsertArgs} args - Arguments to update or create a Home.
     * @example
     * // Update or create a Home
     * const home = await prisma.home.upsert({
     *   create: {
     *     // ... data to create a Home
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Home we want to update
     *   }
     * })
     */
    upsert<T extends HomeUpsertArgs>(args: SelectSubset<T, HomeUpsertArgs<ExtArgs>>): Prisma__HomeClient<$Result.GetResult<Prisma.$HomePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Homes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCountArgs} args - Arguments to filter Homes to count.
     * @example
     * // Count the number of Homes
     * const count = await prisma.home.count({
     *   where: {
     *     // ... the filter for the Homes we want to count
     *   }
     * })
    **/
    count<T extends HomeCountArgs>(
      args?: Subset<T, HomeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Home.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HomeAggregateArgs>(args: Subset<T, HomeAggregateArgs>): Prisma.PrismaPromise<GetHomeAggregateType<T>>

    /**
     * Group by Home.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeGroupByArgs} args - Group by arguments.
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
      T extends HomeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HomeGroupByArgs['orderBy'] }
        : { orderBy?: HomeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HomeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Home model
   */
  readonly fields: HomeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Home.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HomeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Home model
   */
  interface HomeFieldRefs {
    readonly id: FieldRef<"Home", 'Int'>
    readonly lat: FieldRef<"Home", 'Float'>
    readonly lng: FieldRef<"Home", 'Float'>
    readonly address: FieldRef<"Home", 'String'>
    readonly from: FieldRef<"Home", 'String'>
    readonly to: FieldRef<"Home", 'String'>
    readonly description: FieldRef<"Home", 'String'>
    readonly type: FieldRef<"Home", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Home findUnique
   */
  export type HomeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Home
     */
    select?: HomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Home
     */
    omit?: HomeOmit<ExtArgs> | null
    /**
     * Filter, which Home to fetch.
     */
    where: HomeWhereUniqueInput
  }

  /**
   * Home findUniqueOrThrow
   */
  export type HomeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Home
     */
    select?: HomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Home
     */
    omit?: HomeOmit<ExtArgs> | null
    /**
     * Filter, which Home to fetch.
     */
    where: HomeWhereUniqueInput
  }

  /**
   * Home findFirst
   */
  export type HomeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Home
     */
    select?: HomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Home
     */
    omit?: HomeOmit<ExtArgs> | null
    /**
     * Filter, which Home to fetch.
     */
    where?: HomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Homes to fetch.
     */
    orderBy?: HomeOrderByWithRelationInput | HomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Homes.
     */
    cursor?: HomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Homes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Homes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Homes.
     */
    distinct?: HomeScalarFieldEnum | HomeScalarFieldEnum[]
  }

  /**
   * Home findFirstOrThrow
   */
  export type HomeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Home
     */
    select?: HomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Home
     */
    omit?: HomeOmit<ExtArgs> | null
    /**
     * Filter, which Home to fetch.
     */
    where?: HomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Homes to fetch.
     */
    orderBy?: HomeOrderByWithRelationInput | HomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Homes.
     */
    cursor?: HomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Homes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Homes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Homes.
     */
    distinct?: HomeScalarFieldEnum | HomeScalarFieldEnum[]
  }

  /**
   * Home findMany
   */
  export type HomeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Home
     */
    select?: HomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Home
     */
    omit?: HomeOmit<ExtArgs> | null
    /**
     * Filter, which Homes to fetch.
     */
    where?: HomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Homes to fetch.
     */
    orderBy?: HomeOrderByWithRelationInput | HomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Homes.
     */
    cursor?: HomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Homes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Homes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Homes.
     */
    distinct?: HomeScalarFieldEnum | HomeScalarFieldEnum[]
  }

  /**
   * Home create
   */
  export type HomeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Home
     */
    select?: HomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Home
     */
    omit?: HomeOmit<ExtArgs> | null
    /**
     * The data needed to create a Home.
     */
    data: XOR<HomeCreateInput, HomeUncheckedCreateInput>
  }

  /**
   * Home createMany
   */
  export type HomeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Homes.
     */
    data: HomeCreateManyInput | HomeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Home createManyAndReturn
   */
  export type HomeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Home
     */
    select?: HomeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Home
     */
    omit?: HomeOmit<ExtArgs> | null
    /**
     * The data used to create many Homes.
     */
    data: HomeCreateManyInput | HomeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Home update
   */
  export type HomeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Home
     */
    select?: HomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Home
     */
    omit?: HomeOmit<ExtArgs> | null
    /**
     * The data needed to update a Home.
     */
    data: XOR<HomeUpdateInput, HomeUncheckedUpdateInput>
    /**
     * Choose, which Home to update.
     */
    where: HomeWhereUniqueInput
  }

  /**
   * Home updateMany
   */
  export type HomeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Homes.
     */
    data: XOR<HomeUpdateManyMutationInput, HomeUncheckedUpdateManyInput>
    /**
     * Filter which Homes to update
     */
    where?: HomeWhereInput
    /**
     * Limit how many Homes to update.
     */
    limit?: number
  }

  /**
   * Home updateManyAndReturn
   */
  export type HomeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Home
     */
    select?: HomeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Home
     */
    omit?: HomeOmit<ExtArgs> | null
    /**
     * The data used to update Homes.
     */
    data: XOR<HomeUpdateManyMutationInput, HomeUncheckedUpdateManyInput>
    /**
     * Filter which Homes to update
     */
    where?: HomeWhereInput
    /**
     * Limit how many Homes to update.
     */
    limit?: number
  }

  /**
   * Home upsert
   */
  export type HomeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Home
     */
    select?: HomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Home
     */
    omit?: HomeOmit<ExtArgs> | null
    /**
     * The filter to search for the Home to update in case it exists.
     */
    where: HomeWhereUniqueInput
    /**
     * In case the Home found by the `where` argument doesn't exist, create a new Home with this data.
     */
    create: XOR<HomeCreateInput, HomeUncheckedCreateInput>
    /**
     * In case the Home was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HomeUpdateInput, HomeUncheckedUpdateInput>
  }

  /**
   * Home delete
   */
  export type HomeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Home
     */
    select?: HomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Home
     */
    omit?: HomeOmit<ExtArgs> | null
    /**
     * Filter which Home to delete.
     */
    where: HomeWhereUniqueInput
  }

  /**
   * Home deleteMany
   */
  export type HomeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Homes to delete
     */
    where?: HomeWhereInput
    /**
     * Limit how many Homes to delete.
     */
    limit?: number
  }

  /**
   * Home without action
   */
  export type HomeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Home
     */
    select?: HomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Home
     */
    omit?: HomeOmit<ExtArgs> | null
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


  export const TripScalarFieldEnum: {
    id: 'id',
    actionKey: 'actionKey',
    panLat: 'panLat',
    panLng: 'panLng',
    zoom: 'zoom',
    htmlDescription: 'htmlDescription',
    createdAt: 'createdAt'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const WaypointScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    type: 'type',
    lat: 'lat',
    lng: 'lng',
    name: 'name',
    routeNum: 'routeNum',
    order: 'order'
  };

  export type WaypointScalarFieldEnum = (typeof WaypointScalarFieldEnum)[keyof typeof WaypointScalarFieldEnum]


  export const TripDetailScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    lat: 'lat',
    lng: 'lng',
    title: 'title',
    description: 'description',
    image: 'image',
    type: 'type',
    order: 'order'
  };

  export type TripDetailScalarFieldEnum = (typeof TripDetailScalarFieldEnum)[keyof typeof TripDetailScalarFieldEnum]


  export const HomeScalarFieldEnum: {
    id: 'id',
    lat: 'lat',
    lng: 'lng',
    address: 'address',
    from: 'from',
    to: 'to',
    description: 'description',
    type: 'type'
  };

  export type HomeScalarFieldEnum = (typeof HomeScalarFieldEnum)[keyof typeof HomeScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type TripWhereInput = {
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    id?: StringFilter<"Trip"> | string
    actionKey?: StringFilter<"Trip"> | string
    panLat?: FloatFilter<"Trip"> | number
    panLng?: FloatFilter<"Trip"> | number
    zoom?: IntFilter<"Trip"> | number
    htmlDescription?: StringFilter<"Trip"> | string
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    waypoints?: WaypointListRelationFilter
    details?: TripDetailListRelationFilter
  }

  export type TripOrderByWithRelationInput = {
    id?: SortOrder
    actionKey?: SortOrder
    panLat?: SortOrder
    panLng?: SortOrder
    zoom?: SortOrder
    htmlDescription?: SortOrder
    createdAt?: SortOrder
    waypoints?: WaypointOrderByRelationAggregateInput
    details?: TripDetailOrderByRelationAggregateInput
  }

  export type TripWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    actionKey?: string
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    panLat?: FloatFilter<"Trip"> | number
    panLng?: FloatFilter<"Trip"> | number
    zoom?: IntFilter<"Trip"> | number
    htmlDescription?: StringFilter<"Trip"> | string
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    waypoints?: WaypointListRelationFilter
    details?: TripDetailListRelationFilter
  }, "id" | "actionKey">

  export type TripOrderByWithAggregationInput = {
    id?: SortOrder
    actionKey?: SortOrder
    panLat?: SortOrder
    panLng?: SortOrder
    zoom?: SortOrder
    htmlDescription?: SortOrder
    createdAt?: SortOrder
    _count?: TripCountOrderByAggregateInput
    _avg?: TripAvgOrderByAggregateInput
    _max?: TripMaxOrderByAggregateInput
    _min?: TripMinOrderByAggregateInput
    _sum?: TripSumOrderByAggregateInput
  }

  export type TripScalarWhereWithAggregatesInput = {
    AND?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    OR?: TripScalarWhereWithAggregatesInput[]
    NOT?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trip"> | string
    actionKey?: StringWithAggregatesFilter<"Trip"> | string
    panLat?: FloatWithAggregatesFilter<"Trip"> | number
    panLng?: FloatWithAggregatesFilter<"Trip"> | number
    zoom?: IntWithAggregatesFilter<"Trip"> | number
    htmlDescription?: StringWithAggregatesFilter<"Trip"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
  }

  export type WaypointWhereInput = {
    AND?: WaypointWhereInput | WaypointWhereInput[]
    OR?: WaypointWhereInput[]
    NOT?: WaypointWhereInput | WaypointWhereInput[]
    id?: StringFilter<"Waypoint"> | string
    tripId?: StringFilter<"Waypoint"> | string
    type?: StringFilter<"Waypoint"> | string
    lat?: FloatFilter<"Waypoint"> | number
    lng?: FloatFilter<"Waypoint"> | number
    name?: StringNullableFilter<"Waypoint"> | string | null
    routeNum?: IntFilter<"Waypoint"> | number
    order?: IntFilter<"Waypoint"> | number
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }

  export type WaypointOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    type?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    name?: SortOrderInput | SortOrder
    routeNum?: SortOrder
    order?: SortOrder
    trip?: TripOrderByWithRelationInput
  }

  export type WaypointWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WaypointWhereInput | WaypointWhereInput[]
    OR?: WaypointWhereInput[]
    NOT?: WaypointWhereInput | WaypointWhereInput[]
    tripId?: StringFilter<"Waypoint"> | string
    type?: StringFilter<"Waypoint"> | string
    lat?: FloatFilter<"Waypoint"> | number
    lng?: FloatFilter<"Waypoint"> | number
    name?: StringNullableFilter<"Waypoint"> | string | null
    routeNum?: IntFilter<"Waypoint"> | number
    order?: IntFilter<"Waypoint"> | number
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }, "id">

  export type WaypointOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    type?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    name?: SortOrderInput | SortOrder
    routeNum?: SortOrder
    order?: SortOrder
    _count?: WaypointCountOrderByAggregateInput
    _avg?: WaypointAvgOrderByAggregateInput
    _max?: WaypointMaxOrderByAggregateInput
    _min?: WaypointMinOrderByAggregateInput
    _sum?: WaypointSumOrderByAggregateInput
  }

  export type WaypointScalarWhereWithAggregatesInput = {
    AND?: WaypointScalarWhereWithAggregatesInput | WaypointScalarWhereWithAggregatesInput[]
    OR?: WaypointScalarWhereWithAggregatesInput[]
    NOT?: WaypointScalarWhereWithAggregatesInput | WaypointScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Waypoint"> | string
    tripId?: StringWithAggregatesFilter<"Waypoint"> | string
    type?: StringWithAggregatesFilter<"Waypoint"> | string
    lat?: FloatWithAggregatesFilter<"Waypoint"> | number
    lng?: FloatWithAggregatesFilter<"Waypoint"> | number
    name?: StringNullableWithAggregatesFilter<"Waypoint"> | string | null
    routeNum?: IntWithAggregatesFilter<"Waypoint"> | number
    order?: IntWithAggregatesFilter<"Waypoint"> | number
  }

  export type TripDetailWhereInput = {
    AND?: TripDetailWhereInput | TripDetailWhereInput[]
    OR?: TripDetailWhereInput[]
    NOT?: TripDetailWhereInput | TripDetailWhereInput[]
    id?: StringFilter<"TripDetail"> | string
    tripId?: StringFilter<"TripDetail"> | string
    lat?: FloatFilter<"TripDetail"> | number
    lng?: FloatFilter<"TripDetail"> | number
    title?: StringFilter<"TripDetail"> | string
    description?: StringFilter<"TripDetail"> | string
    image?: StringFilter<"TripDetail"> | string
    type?: StringFilter<"TripDetail"> | string
    order?: IntFilter<"TripDetail"> | number
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }

  export type TripDetailOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    type?: SortOrder
    order?: SortOrder
    trip?: TripOrderByWithRelationInput
  }

  export type TripDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TripDetailWhereInput | TripDetailWhereInput[]
    OR?: TripDetailWhereInput[]
    NOT?: TripDetailWhereInput | TripDetailWhereInput[]
    tripId?: StringFilter<"TripDetail"> | string
    lat?: FloatFilter<"TripDetail"> | number
    lng?: FloatFilter<"TripDetail"> | number
    title?: StringFilter<"TripDetail"> | string
    description?: StringFilter<"TripDetail"> | string
    image?: StringFilter<"TripDetail"> | string
    type?: StringFilter<"TripDetail"> | string
    order?: IntFilter<"TripDetail"> | number
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }, "id">

  export type TripDetailOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    type?: SortOrder
    order?: SortOrder
    _count?: TripDetailCountOrderByAggregateInput
    _avg?: TripDetailAvgOrderByAggregateInput
    _max?: TripDetailMaxOrderByAggregateInput
    _min?: TripDetailMinOrderByAggregateInput
    _sum?: TripDetailSumOrderByAggregateInput
  }

  export type TripDetailScalarWhereWithAggregatesInput = {
    AND?: TripDetailScalarWhereWithAggregatesInput | TripDetailScalarWhereWithAggregatesInput[]
    OR?: TripDetailScalarWhereWithAggregatesInput[]
    NOT?: TripDetailScalarWhereWithAggregatesInput | TripDetailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TripDetail"> | string
    tripId?: StringWithAggregatesFilter<"TripDetail"> | string
    lat?: FloatWithAggregatesFilter<"TripDetail"> | number
    lng?: FloatWithAggregatesFilter<"TripDetail"> | number
    title?: StringWithAggregatesFilter<"TripDetail"> | string
    description?: StringWithAggregatesFilter<"TripDetail"> | string
    image?: StringWithAggregatesFilter<"TripDetail"> | string
    type?: StringWithAggregatesFilter<"TripDetail"> | string
    order?: IntWithAggregatesFilter<"TripDetail"> | number
  }

  export type HomeWhereInput = {
    AND?: HomeWhereInput | HomeWhereInput[]
    OR?: HomeWhereInput[]
    NOT?: HomeWhereInput | HomeWhereInput[]
    id?: IntFilter<"Home"> | number
    lat?: FloatFilter<"Home"> | number
    lng?: FloatFilter<"Home"> | number
    address?: StringFilter<"Home"> | string
    from?: StringFilter<"Home"> | string
    to?: StringFilter<"Home"> | string
    description?: StringFilter<"Home"> | string
    type?: StringFilter<"Home"> | string
  }

  export type HomeOrderByWithRelationInput = {
    id?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    address?: SortOrder
    from?: SortOrder
    to?: SortOrder
    description?: SortOrder
    type?: SortOrder
  }

  export type HomeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HomeWhereInput | HomeWhereInput[]
    OR?: HomeWhereInput[]
    NOT?: HomeWhereInput | HomeWhereInput[]
    lat?: FloatFilter<"Home"> | number
    lng?: FloatFilter<"Home"> | number
    address?: StringFilter<"Home"> | string
    from?: StringFilter<"Home"> | string
    to?: StringFilter<"Home"> | string
    description?: StringFilter<"Home"> | string
    type?: StringFilter<"Home"> | string
  }, "id">

  export type HomeOrderByWithAggregationInput = {
    id?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    address?: SortOrder
    from?: SortOrder
    to?: SortOrder
    description?: SortOrder
    type?: SortOrder
    _count?: HomeCountOrderByAggregateInput
    _avg?: HomeAvgOrderByAggregateInput
    _max?: HomeMaxOrderByAggregateInput
    _min?: HomeMinOrderByAggregateInput
    _sum?: HomeSumOrderByAggregateInput
  }

  export type HomeScalarWhereWithAggregatesInput = {
    AND?: HomeScalarWhereWithAggregatesInput | HomeScalarWhereWithAggregatesInput[]
    OR?: HomeScalarWhereWithAggregatesInput[]
    NOT?: HomeScalarWhereWithAggregatesInput | HomeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Home"> | number
    lat?: FloatWithAggregatesFilter<"Home"> | number
    lng?: FloatWithAggregatesFilter<"Home"> | number
    address?: StringWithAggregatesFilter<"Home"> | string
    from?: StringWithAggregatesFilter<"Home"> | string
    to?: StringWithAggregatesFilter<"Home"> | string
    description?: StringWithAggregatesFilter<"Home"> | string
    type?: StringWithAggregatesFilter<"Home"> | string
  }

  export type TripCreateInput = {
    id?: string
    actionKey: string
    panLat: number
    panLng: number
    zoom: number
    htmlDescription: string
    createdAt?: Date | string
    waypoints?: WaypointCreateNestedManyWithoutTripInput
    details?: TripDetailCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateInput = {
    id?: string
    actionKey: string
    panLat: number
    panLng: number
    zoom: number
    htmlDescription: string
    createdAt?: Date | string
    waypoints?: WaypointUncheckedCreateNestedManyWithoutTripInput
    details?: TripDetailUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionKey?: StringFieldUpdateOperationsInput | string
    panLat?: FloatFieldUpdateOperationsInput | number
    panLng?: FloatFieldUpdateOperationsInput | number
    zoom?: IntFieldUpdateOperationsInput | number
    htmlDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waypoints?: WaypointUpdateManyWithoutTripNestedInput
    details?: TripDetailUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionKey?: StringFieldUpdateOperationsInput | string
    panLat?: FloatFieldUpdateOperationsInput | number
    panLng?: FloatFieldUpdateOperationsInput | number
    zoom?: IntFieldUpdateOperationsInput | number
    htmlDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waypoints?: WaypointUncheckedUpdateManyWithoutTripNestedInput
    details?: TripDetailUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateManyInput = {
    id?: string
    actionKey: string
    panLat: number
    panLng: number
    zoom: number
    htmlDescription: string
    createdAt?: Date | string
  }

  export type TripUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionKey?: StringFieldUpdateOperationsInput | string
    panLat?: FloatFieldUpdateOperationsInput | number
    panLng?: FloatFieldUpdateOperationsInput | number
    zoom?: IntFieldUpdateOperationsInput | number
    htmlDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionKey?: StringFieldUpdateOperationsInput | string
    panLat?: FloatFieldUpdateOperationsInput | number
    panLng?: FloatFieldUpdateOperationsInput | number
    zoom?: IntFieldUpdateOperationsInput | number
    htmlDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaypointCreateInput = {
    id?: string
    type: string
    lat: number
    lng: number
    name?: string | null
    routeNum?: number
    order: number
    trip: TripCreateNestedOneWithoutWaypointsInput
  }

  export type WaypointUncheckedCreateInput = {
    id?: string
    tripId: string
    type: string
    lat: number
    lng: number
    name?: string | null
    routeNum?: number
    order: number
  }

  export type WaypointUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    routeNum?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    trip?: TripUpdateOneRequiredWithoutWaypointsNestedInput
  }

  export type WaypointUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    routeNum?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type WaypointCreateManyInput = {
    id?: string
    tripId: string
    type: string
    lat: number
    lng: number
    name?: string | null
    routeNum?: number
    order: number
  }

  export type WaypointUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    routeNum?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type WaypointUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    routeNum?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TripDetailCreateInput = {
    id?: string
    lat: number
    lng: number
    title: string
    description: string
    image: string
    type: string
    order: number
    trip: TripCreateNestedOneWithoutDetailsInput
  }

  export type TripDetailUncheckedCreateInput = {
    id?: string
    tripId: string
    lat: number
    lng: number
    title: string
    description: string
    image: string
    type: string
    order: number
  }

  export type TripDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    trip?: TripUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type TripDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TripDetailCreateManyInput = {
    id?: string
    tripId: string
    lat: number
    lng: number
    title: string
    description: string
    image: string
    type: string
    order: number
  }

  export type TripDetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TripDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type HomeCreateInput = {
    lat: number
    lng: number
    address: string
    from: string
    to: string
    description: string
    type: string
  }

  export type HomeUncheckedCreateInput = {
    id?: number
    lat: number
    lng: number
    address: string
    from: string
    to: string
    description: string
    type: string
  }

  export type HomeUpdateInput = {
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type HomeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCreateManyInput = {
    id?: number
    lat: number
    lng: number
    address: string
    from: string
    to: string
    description: string
    type: string
  }

  export type HomeUpdateManyMutationInput = {
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type HomeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type WaypointListRelationFilter = {
    every?: WaypointWhereInput
    some?: WaypointWhereInput
    none?: WaypointWhereInput
  }

  export type TripDetailListRelationFilter = {
    every?: TripDetailWhereInput
    some?: TripDetailWhereInput
    none?: TripDetailWhereInput
  }

  export type WaypointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripCountOrderByAggregateInput = {
    id?: SortOrder
    actionKey?: SortOrder
    panLat?: SortOrder
    panLng?: SortOrder
    zoom?: SortOrder
    htmlDescription?: SortOrder
    createdAt?: SortOrder
  }

  export type TripAvgOrderByAggregateInput = {
    panLat?: SortOrder
    panLng?: SortOrder
    zoom?: SortOrder
  }

  export type TripMaxOrderByAggregateInput = {
    id?: SortOrder
    actionKey?: SortOrder
    panLat?: SortOrder
    panLng?: SortOrder
    zoom?: SortOrder
    htmlDescription?: SortOrder
    createdAt?: SortOrder
  }

  export type TripMinOrderByAggregateInput = {
    id?: SortOrder
    actionKey?: SortOrder
    panLat?: SortOrder
    panLng?: SortOrder
    zoom?: SortOrder
    htmlDescription?: SortOrder
    createdAt?: SortOrder
  }

  export type TripSumOrderByAggregateInput = {
    panLat?: SortOrder
    panLng?: SortOrder
    zoom?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type TripScalarRelationFilter = {
    is?: TripWhereInput
    isNot?: TripWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WaypointCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    type?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    name?: SortOrder
    routeNum?: SortOrder
    order?: SortOrder
  }

  export type WaypointAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
    routeNum?: SortOrder
    order?: SortOrder
  }

  export type WaypointMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    type?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    name?: SortOrder
    routeNum?: SortOrder
    order?: SortOrder
  }

  export type WaypointMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    type?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    name?: SortOrder
    routeNum?: SortOrder
    order?: SortOrder
  }

  export type WaypointSumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
    routeNum?: SortOrder
    order?: SortOrder
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

  export type TripDetailCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    type?: SortOrder
    order?: SortOrder
  }

  export type TripDetailAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
    order?: SortOrder
  }

  export type TripDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    type?: SortOrder
    order?: SortOrder
  }

  export type TripDetailMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    type?: SortOrder
    order?: SortOrder
  }

  export type TripDetailSumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
    order?: SortOrder
  }

  export type HomeCountOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    address?: SortOrder
    from?: SortOrder
    to?: SortOrder
    description?: SortOrder
    type?: SortOrder
  }

  export type HomeAvgOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type HomeMaxOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    address?: SortOrder
    from?: SortOrder
    to?: SortOrder
    description?: SortOrder
    type?: SortOrder
  }

  export type HomeMinOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    address?: SortOrder
    from?: SortOrder
    to?: SortOrder
    description?: SortOrder
    type?: SortOrder
  }

  export type HomeSumOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type WaypointCreateNestedManyWithoutTripInput = {
    create?: XOR<WaypointCreateWithoutTripInput, WaypointUncheckedCreateWithoutTripInput> | WaypointCreateWithoutTripInput[] | WaypointUncheckedCreateWithoutTripInput[]
    connectOrCreate?: WaypointCreateOrConnectWithoutTripInput | WaypointCreateOrConnectWithoutTripInput[]
    createMany?: WaypointCreateManyTripInputEnvelope
    connect?: WaypointWhereUniqueInput | WaypointWhereUniqueInput[]
  }

  export type TripDetailCreateNestedManyWithoutTripInput = {
    create?: XOR<TripDetailCreateWithoutTripInput, TripDetailUncheckedCreateWithoutTripInput> | TripDetailCreateWithoutTripInput[] | TripDetailUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripDetailCreateOrConnectWithoutTripInput | TripDetailCreateOrConnectWithoutTripInput[]
    createMany?: TripDetailCreateManyTripInputEnvelope
    connect?: TripDetailWhereUniqueInput | TripDetailWhereUniqueInput[]
  }

  export type WaypointUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<WaypointCreateWithoutTripInput, WaypointUncheckedCreateWithoutTripInput> | WaypointCreateWithoutTripInput[] | WaypointUncheckedCreateWithoutTripInput[]
    connectOrCreate?: WaypointCreateOrConnectWithoutTripInput | WaypointCreateOrConnectWithoutTripInput[]
    createMany?: WaypointCreateManyTripInputEnvelope
    connect?: WaypointWhereUniqueInput | WaypointWhereUniqueInput[]
  }

  export type TripDetailUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<TripDetailCreateWithoutTripInput, TripDetailUncheckedCreateWithoutTripInput> | TripDetailCreateWithoutTripInput[] | TripDetailUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripDetailCreateOrConnectWithoutTripInput | TripDetailCreateOrConnectWithoutTripInput[]
    createMany?: TripDetailCreateManyTripInputEnvelope
    connect?: TripDetailWhereUniqueInput | TripDetailWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WaypointUpdateManyWithoutTripNestedInput = {
    create?: XOR<WaypointCreateWithoutTripInput, WaypointUncheckedCreateWithoutTripInput> | WaypointCreateWithoutTripInput[] | WaypointUncheckedCreateWithoutTripInput[]
    connectOrCreate?: WaypointCreateOrConnectWithoutTripInput | WaypointCreateOrConnectWithoutTripInput[]
    upsert?: WaypointUpsertWithWhereUniqueWithoutTripInput | WaypointUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: WaypointCreateManyTripInputEnvelope
    set?: WaypointWhereUniqueInput | WaypointWhereUniqueInput[]
    disconnect?: WaypointWhereUniqueInput | WaypointWhereUniqueInput[]
    delete?: WaypointWhereUniqueInput | WaypointWhereUniqueInput[]
    connect?: WaypointWhereUniqueInput | WaypointWhereUniqueInput[]
    update?: WaypointUpdateWithWhereUniqueWithoutTripInput | WaypointUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: WaypointUpdateManyWithWhereWithoutTripInput | WaypointUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: WaypointScalarWhereInput | WaypointScalarWhereInput[]
  }

  export type TripDetailUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripDetailCreateWithoutTripInput, TripDetailUncheckedCreateWithoutTripInput> | TripDetailCreateWithoutTripInput[] | TripDetailUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripDetailCreateOrConnectWithoutTripInput | TripDetailCreateOrConnectWithoutTripInput[]
    upsert?: TripDetailUpsertWithWhereUniqueWithoutTripInput | TripDetailUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripDetailCreateManyTripInputEnvelope
    set?: TripDetailWhereUniqueInput | TripDetailWhereUniqueInput[]
    disconnect?: TripDetailWhereUniqueInput | TripDetailWhereUniqueInput[]
    delete?: TripDetailWhereUniqueInput | TripDetailWhereUniqueInput[]
    connect?: TripDetailWhereUniqueInput | TripDetailWhereUniqueInput[]
    update?: TripDetailUpdateWithWhereUniqueWithoutTripInput | TripDetailUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripDetailUpdateManyWithWhereWithoutTripInput | TripDetailUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripDetailScalarWhereInput | TripDetailScalarWhereInput[]
  }

  export type WaypointUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<WaypointCreateWithoutTripInput, WaypointUncheckedCreateWithoutTripInput> | WaypointCreateWithoutTripInput[] | WaypointUncheckedCreateWithoutTripInput[]
    connectOrCreate?: WaypointCreateOrConnectWithoutTripInput | WaypointCreateOrConnectWithoutTripInput[]
    upsert?: WaypointUpsertWithWhereUniqueWithoutTripInput | WaypointUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: WaypointCreateManyTripInputEnvelope
    set?: WaypointWhereUniqueInput | WaypointWhereUniqueInput[]
    disconnect?: WaypointWhereUniqueInput | WaypointWhereUniqueInput[]
    delete?: WaypointWhereUniqueInput | WaypointWhereUniqueInput[]
    connect?: WaypointWhereUniqueInput | WaypointWhereUniqueInput[]
    update?: WaypointUpdateWithWhereUniqueWithoutTripInput | WaypointUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: WaypointUpdateManyWithWhereWithoutTripInput | WaypointUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: WaypointScalarWhereInput | WaypointScalarWhereInput[]
  }

  export type TripDetailUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripDetailCreateWithoutTripInput, TripDetailUncheckedCreateWithoutTripInput> | TripDetailCreateWithoutTripInput[] | TripDetailUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripDetailCreateOrConnectWithoutTripInput | TripDetailCreateOrConnectWithoutTripInput[]
    upsert?: TripDetailUpsertWithWhereUniqueWithoutTripInput | TripDetailUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripDetailCreateManyTripInputEnvelope
    set?: TripDetailWhereUniqueInput | TripDetailWhereUniqueInput[]
    disconnect?: TripDetailWhereUniqueInput | TripDetailWhereUniqueInput[]
    delete?: TripDetailWhereUniqueInput | TripDetailWhereUniqueInput[]
    connect?: TripDetailWhereUniqueInput | TripDetailWhereUniqueInput[]
    update?: TripDetailUpdateWithWhereUniqueWithoutTripInput | TripDetailUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripDetailUpdateManyWithWhereWithoutTripInput | TripDetailUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripDetailScalarWhereInput | TripDetailScalarWhereInput[]
  }

  export type TripCreateNestedOneWithoutWaypointsInput = {
    create?: XOR<TripCreateWithoutWaypointsInput, TripUncheckedCreateWithoutWaypointsInput>
    connectOrCreate?: TripCreateOrConnectWithoutWaypointsInput
    connect?: TripWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TripUpdateOneRequiredWithoutWaypointsNestedInput = {
    create?: XOR<TripCreateWithoutWaypointsInput, TripUncheckedCreateWithoutWaypointsInput>
    connectOrCreate?: TripCreateOrConnectWithoutWaypointsInput
    upsert?: TripUpsertWithoutWaypointsInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutWaypointsInput, TripUpdateWithoutWaypointsInput>, TripUncheckedUpdateWithoutWaypointsInput>
  }

  export type TripCreateNestedOneWithoutDetailsInput = {
    create?: XOR<TripCreateWithoutDetailsInput, TripUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: TripCreateOrConnectWithoutDetailsInput
    connect?: TripWhereUniqueInput
  }

  export type TripUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<TripCreateWithoutDetailsInput, TripUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: TripCreateOrConnectWithoutDetailsInput
    upsert?: TripUpsertWithoutDetailsInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutDetailsInput, TripUpdateWithoutDetailsInput>, TripUncheckedUpdateWithoutDetailsInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type WaypointCreateWithoutTripInput = {
    id?: string
    type: string
    lat: number
    lng: number
    name?: string | null
    routeNum?: number
    order: number
  }

  export type WaypointUncheckedCreateWithoutTripInput = {
    id?: string
    type: string
    lat: number
    lng: number
    name?: string | null
    routeNum?: number
    order: number
  }

  export type WaypointCreateOrConnectWithoutTripInput = {
    where: WaypointWhereUniqueInput
    create: XOR<WaypointCreateWithoutTripInput, WaypointUncheckedCreateWithoutTripInput>
  }

  export type WaypointCreateManyTripInputEnvelope = {
    data: WaypointCreateManyTripInput | WaypointCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type TripDetailCreateWithoutTripInput = {
    id?: string
    lat: number
    lng: number
    title: string
    description: string
    image: string
    type: string
    order: number
  }

  export type TripDetailUncheckedCreateWithoutTripInput = {
    id?: string
    lat: number
    lng: number
    title: string
    description: string
    image: string
    type: string
    order: number
  }

  export type TripDetailCreateOrConnectWithoutTripInput = {
    where: TripDetailWhereUniqueInput
    create: XOR<TripDetailCreateWithoutTripInput, TripDetailUncheckedCreateWithoutTripInput>
  }

  export type TripDetailCreateManyTripInputEnvelope = {
    data: TripDetailCreateManyTripInput | TripDetailCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type WaypointUpsertWithWhereUniqueWithoutTripInput = {
    where: WaypointWhereUniqueInput
    update: XOR<WaypointUpdateWithoutTripInput, WaypointUncheckedUpdateWithoutTripInput>
    create: XOR<WaypointCreateWithoutTripInput, WaypointUncheckedCreateWithoutTripInput>
  }

  export type WaypointUpdateWithWhereUniqueWithoutTripInput = {
    where: WaypointWhereUniqueInput
    data: XOR<WaypointUpdateWithoutTripInput, WaypointUncheckedUpdateWithoutTripInput>
  }

  export type WaypointUpdateManyWithWhereWithoutTripInput = {
    where: WaypointScalarWhereInput
    data: XOR<WaypointUpdateManyMutationInput, WaypointUncheckedUpdateManyWithoutTripInput>
  }

  export type WaypointScalarWhereInput = {
    AND?: WaypointScalarWhereInput | WaypointScalarWhereInput[]
    OR?: WaypointScalarWhereInput[]
    NOT?: WaypointScalarWhereInput | WaypointScalarWhereInput[]
    id?: StringFilter<"Waypoint"> | string
    tripId?: StringFilter<"Waypoint"> | string
    type?: StringFilter<"Waypoint"> | string
    lat?: FloatFilter<"Waypoint"> | number
    lng?: FloatFilter<"Waypoint"> | number
    name?: StringNullableFilter<"Waypoint"> | string | null
    routeNum?: IntFilter<"Waypoint"> | number
    order?: IntFilter<"Waypoint"> | number
  }

  export type TripDetailUpsertWithWhereUniqueWithoutTripInput = {
    where: TripDetailWhereUniqueInput
    update: XOR<TripDetailUpdateWithoutTripInput, TripDetailUncheckedUpdateWithoutTripInput>
    create: XOR<TripDetailCreateWithoutTripInput, TripDetailUncheckedCreateWithoutTripInput>
  }

  export type TripDetailUpdateWithWhereUniqueWithoutTripInput = {
    where: TripDetailWhereUniqueInput
    data: XOR<TripDetailUpdateWithoutTripInput, TripDetailUncheckedUpdateWithoutTripInput>
  }

  export type TripDetailUpdateManyWithWhereWithoutTripInput = {
    where: TripDetailScalarWhereInput
    data: XOR<TripDetailUpdateManyMutationInput, TripDetailUncheckedUpdateManyWithoutTripInput>
  }

  export type TripDetailScalarWhereInput = {
    AND?: TripDetailScalarWhereInput | TripDetailScalarWhereInput[]
    OR?: TripDetailScalarWhereInput[]
    NOT?: TripDetailScalarWhereInput | TripDetailScalarWhereInput[]
    id?: StringFilter<"TripDetail"> | string
    tripId?: StringFilter<"TripDetail"> | string
    lat?: FloatFilter<"TripDetail"> | number
    lng?: FloatFilter<"TripDetail"> | number
    title?: StringFilter<"TripDetail"> | string
    description?: StringFilter<"TripDetail"> | string
    image?: StringFilter<"TripDetail"> | string
    type?: StringFilter<"TripDetail"> | string
    order?: IntFilter<"TripDetail"> | number
  }

  export type TripCreateWithoutWaypointsInput = {
    id?: string
    actionKey: string
    panLat: number
    panLng: number
    zoom: number
    htmlDescription: string
    createdAt?: Date | string
    details?: TripDetailCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutWaypointsInput = {
    id?: string
    actionKey: string
    panLat: number
    panLng: number
    zoom: number
    htmlDescription: string
    createdAt?: Date | string
    details?: TripDetailUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutWaypointsInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutWaypointsInput, TripUncheckedCreateWithoutWaypointsInput>
  }

  export type TripUpsertWithoutWaypointsInput = {
    update: XOR<TripUpdateWithoutWaypointsInput, TripUncheckedUpdateWithoutWaypointsInput>
    create: XOR<TripCreateWithoutWaypointsInput, TripUncheckedCreateWithoutWaypointsInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutWaypointsInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutWaypointsInput, TripUncheckedUpdateWithoutWaypointsInput>
  }

  export type TripUpdateWithoutWaypointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionKey?: StringFieldUpdateOperationsInput | string
    panLat?: FloatFieldUpdateOperationsInput | number
    panLng?: FloatFieldUpdateOperationsInput | number
    zoom?: IntFieldUpdateOperationsInput | number
    htmlDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: TripDetailUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutWaypointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionKey?: StringFieldUpdateOperationsInput | string
    panLat?: FloatFieldUpdateOperationsInput | number
    panLng?: FloatFieldUpdateOperationsInput | number
    zoom?: IntFieldUpdateOperationsInput | number
    htmlDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: TripDetailUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateWithoutDetailsInput = {
    id?: string
    actionKey: string
    panLat: number
    panLng: number
    zoom: number
    htmlDescription: string
    createdAt?: Date | string
    waypoints?: WaypointCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutDetailsInput = {
    id?: string
    actionKey: string
    panLat: number
    panLng: number
    zoom: number
    htmlDescription: string
    createdAt?: Date | string
    waypoints?: WaypointUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutDetailsInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutDetailsInput, TripUncheckedCreateWithoutDetailsInput>
  }

  export type TripUpsertWithoutDetailsInput = {
    update: XOR<TripUpdateWithoutDetailsInput, TripUncheckedUpdateWithoutDetailsInput>
    create: XOR<TripCreateWithoutDetailsInput, TripUncheckedCreateWithoutDetailsInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutDetailsInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutDetailsInput, TripUncheckedUpdateWithoutDetailsInput>
  }

  export type TripUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionKey?: StringFieldUpdateOperationsInput | string
    panLat?: FloatFieldUpdateOperationsInput | number
    panLng?: FloatFieldUpdateOperationsInput | number
    zoom?: IntFieldUpdateOperationsInput | number
    htmlDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waypoints?: WaypointUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionKey?: StringFieldUpdateOperationsInput | string
    panLat?: FloatFieldUpdateOperationsInput | number
    panLng?: FloatFieldUpdateOperationsInput | number
    zoom?: IntFieldUpdateOperationsInput | number
    htmlDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waypoints?: WaypointUncheckedUpdateManyWithoutTripNestedInput
  }

  export type WaypointCreateManyTripInput = {
    id?: string
    type: string
    lat: number
    lng: number
    name?: string | null
    routeNum?: number
    order: number
  }

  export type TripDetailCreateManyTripInput = {
    id?: string
    lat: number
    lng: number
    title: string
    description: string
    image: string
    type: string
    order: number
  }

  export type WaypointUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    routeNum?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type WaypointUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    routeNum?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type WaypointUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    routeNum?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TripDetailUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TripDetailUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TripDetailUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
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