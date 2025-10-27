/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Item
 *
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>;
/**
 * Model Cart
 *
 */
export type Cart = $Result.DefaultSelection<Prisma.$CartPayload>;
/**
 * Model TokenBlocklist
 *
 */
export type TokenBlocklist =
	$Result.DefaultSelection<Prisma.$TokenBlocklistPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
	ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
	const U = 'log' extends keyof ClientOptions
		? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
			? Prisma.GetEvents<ClientOptions['log']>
			: never
		: never,
	ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
	[K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

	/**
	 * ##  Prisma Client ʲˢ
	 *
	 * Type-safe database client for TypeScript & Node.js
	 * @example
	 * ```
	 * const prisma = new PrismaClient()
	 * // Fetch zero or more Users
	 * const users = await prisma.user.findMany()
	 * ```
	 *
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
	 */

	constructor(
		optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
	);
	$on<V extends U>(
		eventType: V,
		callback: (
			event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
		) => void,
	): PrismaClient;

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
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$executeRaw<T = unknown>(
		query: TemplateStringsArray | Prisma.Sql,
		...values: any[]
	): Prisma.PrismaPromise<number>;

	/**
	 * Executes a raw query and returns the number of affected rows.
	 * Susceptible to SQL injections, see documentation.
	 * @example
	 * ```
	 * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$executeRawUnsafe<T = unknown>(
		query: string,
		...values: any[]
	): Prisma.PrismaPromise<number>;

	/**
	 * Performs a prepared raw query and returns the `SELECT` data.
	 * @example
	 * ```
	 * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$queryRaw<T = unknown>(
		query: TemplateStringsArray | Prisma.Sql,
		...values: any[]
	): Prisma.PrismaPromise<T>;

	/**
	 * Performs a raw query and returns the `SELECT` data.
	 * Susceptible to SQL injections, see documentation.
	 * @example
	 * ```
	 * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$queryRawUnsafe<T = unknown>(
		query: string,
		...values: any[]
	): Prisma.PrismaPromise<T>;

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
	 * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
	 */
	$transaction<P extends Prisma.PrismaPromise<any>[]>(
		arg: [...P],
		options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
	): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

	$transaction<R>(
		fn: (
			prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
		) => $Utils.JsPromise<R>,
		options?: {
			maxWait?: number;
			timeout?: number;
			isolationLevel?: Prisma.TransactionIsolationLevel;
		},
	): $Utils.JsPromise<R>;

	$extends: $Extensions.ExtendsHook<
		'extends',
		Prisma.TypeMapCb<ClientOptions>,
		ExtArgs,
		$Utils.Call<
			Prisma.TypeMapCb<ClientOptions>,
			{
				extArgs: ExtArgs;
			}
		>
	>;

	/**
	 * `prisma.user`: Exposes CRUD operations for the **User** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Users
	 * const users = await prisma.user.findMany()
	 * ```
	 */
	get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.item`: Exposes CRUD operations for the **Item** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Items
	 * const items = await prisma.item.findMany()
	 * ```
	 */
	get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Carts
	 * const carts = await prisma.cart.findMany()
	 * ```
	 */
	get cart(): Prisma.CartDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.tokenBlocklist`: Exposes CRUD operations for the **TokenBlocklist** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more TokenBlocklists
	 * const tokenBlocklists = await prisma.tokenBlocklist.findMany()
	 * ```
	 */
	get tokenBlocklist(): Prisma.TokenBlocklistDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
	export import DMMF = runtime.DMMF;

	export type PrismaPromise<T> = $Public.PrismaPromise<T>;

	/**
	 * Validator
	 */
	export import validator = runtime.Public.validator;

	/**
	 * Prisma Errors
	 */
	export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
	export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
	export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
	export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
	export import PrismaClientValidationError = runtime.PrismaClientValidationError;

	/**
	 * Re-export of sql-template-tag
	 */
	export import sql = runtime.sqltag;
	export import empty = runtime.empty;
	export import join = runtime.join;
	export import raw = runtime.raw;
	export import Sql = runtime.Sql;

	/**
	 * Decimal.js
	 */
	export import Decimal = runtime.Decimal;

	export type DecimalJsLike = runtime.DecimalJsLike;

	/**
	 * Metrics
	 */
	export type Metrics = runtime.Metrics;
	export type Metric<T> = runtime.Metric<T>;
	export type MetricHistogram = runtime.MetricHistogram;
	export type MetricHistogramBucket = runtime.MetricHistogramBucket;

	/**
	 * Extensions
	 */
	export import Extension = $Extensions.UserArgs;
	export import getExtensionContext = runtime.Extensions.getExtensionContext;
	export import Args = $Public.Args;
	export import Payload = $Public.Payload;
	export import Result = $Public.Result;
	export import Exact = $Public.Exact;

	/**
	 * Prisma Client JS version: 6.14.0
	 * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
	 */
	export type PrismaVersion = {
		client: string;
	};

	export const prismaVersion: PrismaVersion;

	/**
	 * Utility Types
	 */

	export import JsonObject = runtime.JsonObject;
	export import JsonArray = runtime.JsonArray;
	export import JsonValue = runtime.JsonValue;
	export import InputJsonObject = runtime.InputJsonObject;
	export import InputJsonArray = runtime.InputJsonArray;
	export import InputJsonValue = runtime.InputJsonValue;

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
			private DbNull: never;
			private constructor();
		}

		/**
		 * Type of `Prisma.JsonNull`.
		 *
		 * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
		 *
		 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
		 */
		class JsonNull {
			private JsonNull: never;
			private constructor();
		}

		/**
		 * Type of `Prisma.AnyNull`.
		 *
		 * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
		 *
		 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
		 */
		class AnyNull {
			private AnyNull: never;
			private constructor();
		}
	}

	/**
	 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const DbNull: NullTypes.DbNull;

	/**
	 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const JsonNull: NullTypes.JsonNull;

	/**
	 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const AnyNull: NullTypes.AnyNull;

	type SelectAndInclude = {
		select: any;
		include: any;
	};

	type SelectAndOmit = {
		select: any;
		omit: any;
	};

	/**
	 * Get the type of the value, that the Promise holds.
	 */
	export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<
		infer U
	>
		? U
		: T;

	/**
	 * Get the return type of a function which returns a Promise.
	 */
	export type PromiseReturnType<
		T extends (...args: any) => $Utils.JsPromise<any>,
	> = PromiseType<ReturnType<T>>;

	/**
	 * From T, pick a set of properties whose keys are in the union K
	 */
	type Prisma__Pick<T, K extends keyof T> = {
		[P in K]: T[P];
	};

	export type Enumerable<T> = T | Array<T>;

	export type RequiredKeys<T> = {
		[K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
	}[keyof T];

	export type TruthyKeys<T> = keyof {
		[K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
	};

	export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
		[key in keyof T]: key extends keyof U ? T[key] : never;
	} & (T extends SelectAndInclude
		? 'Please either choose `select` or `include`.'
		: T extends SelectAndOmit
			? 'Please either choose `select` or `omit`.'
			: {});

	/**
	 * Subset + Intersection
	 * @desc From `T` pick properties that exist in `U` and intersect `K`
	 */
	export type SubsetIntersection<T, U, K> = {
		[key in keyof T]: key extends keyof U ? T[key] : never;
	} & K;

	type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

	/**
	 * XOR is needed to have a real mutually exclusive union type
	 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
	 */
	type XOR<T, U> = T extends object
		? U extends object
			? (Without<T, U> & U) | (Without<U, T> & T)
			: U
		: T;

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
						: False;

	/**
	 * If it's T[], return T
	 */
	export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

	/**
	 * From ts-toolbelt
	 */

	type __Either<O extends object, K extends Key> = Omit<O, K> &
		{
			// Merge all but K
			[P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
		}[K];

	type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

	type EitherLoose<O extends object, K extends Key> = ComputeRaw<
		__Either<O, K>
	>;

	type _Either<O extends object, K extends Key, strict extends Boolean> = {
		1: EitherStrict<O, K>;
		0: EitherLoose<O, K>;
	}[strict];

	type Either<
		O extends object,
		K extends Key,
		strict extends Boolean = 1,
	> = O extends unknown ? _Either<O, K, strict> : never;

	export type Union = any;

	type PatchUndefined<O extends object, O1 extends object> = {
		[K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
	} & {};

	/** Helper Types for "Merge" **/
	export type IntersectOf<U extends Union> = (
		U extends unknown
			? (k: U) => void
			: never
	) extends (k: infer I) => void
		? I
		: never;

	export type Overwrite<O extends object, O1 extends object> = {
		[K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
	} & {};

	type _Merge<U extends object> = IntersectOf<
		Overwrite<
			U,
			{
				[K in keyof U]-?: At<U, K>;
			}
		>
	>;

	type Key = string | number | symbol;
	type AtBasic<O extends object, K extends Key> = K extends keyof O
		? O[K]
		: never;
	type AtStrict<O extends object, K extends Key> = O[K & keyof O];
	type AtLoose<O extends object, K extends Key> = O extends unknown
		? AtStrict<O, K>
		: never;
	export type At<
		O extends object,
		K extends Key,
		strict extends Boolean = 1,
	> = {
		1: AtStrict<O, K>;
		0: AtLoose<O, K>;
	}[strict];

	export type ComputeRaw<A extends any> = A extends Function
		? A
		: {
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
			?
					| (K extends keyof O ? { [P in K]: O[P] } & O : O)
					| ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
			: never
	>;

	type _Strict<U, _U = U> = U extends unknown
		? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
		: never;

	export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
	/** End Helper Types for "Merge" **/

	export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

	/**
  A [[Boolean]]
  */
	export type Boolean = True | False;

	// /**
	// 1
	// */
	export type True = 1;

	/**
  0
  */
	export type False = 0;

	export type Not<B extends Boolean> = {
		0: 1;
		1: 0;
	}[B];

	export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
		? 0 // anything `never` is false
		: A1 extends A2
			? 1
			: 0;

	export type Has<U extends Union, U1 extends Union> = Not<
		Extends<Exclude<U1, U>, U1>
	>;

	export type Or<B1 extends Boolean, B2 extends Boolean> = {
		0: {
			0: 0;
			1: 1;
		};
		1: {
			0: 1;
			1: 1;
		};
	}[B1][B2];

	export type Keys<U extends Union> = U extends unknown ? keyof U : never;

	type Cast<A, B> = A extends B ? A : B;

	export const type: unique symbol;

	/**
	 * Used by group by
	 */

	export type GetScalarType<T, O> = O extends object
		? {
				[P in keyof T]: P extends keyof O ? O[P] : never;
			}
		: never;

	type FieldPaths<
		T,
		U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
	> = IsObject<T> extends True ? U : T;

	type GetHavingFields<T> = {
		[K in keyof T]: Or<
			Or<Extends<'OR', K>, Extends<'AND', K>>,
			Extends<'NOT', K>
		> extends True
			? // infer is only needed to not hit TS limit
				// based on the brilliant idea of Pierre-Antoine Mills
				// https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
				T[K] extends infer TK
				? GetHavingFields<
						UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
					>
				: never
			: {} extends FieldPaths<T[K]>
				? never
				: K;
	}[keyof T];

	/**
	 * Convert tuple to union
	 */
	type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
	type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
	type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

	/**
	 * Like `Pick`, but additionally can also accept an array of keys
	 */
	type PickEnumerable<
		T,
		K extends Enumerable<keyof T> | keyof T,
	> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

	/**
	 * Exclude all keys with underscores
	 */
	type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
		? never
		: T;

	export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

	type FieldRefInputType<Model, FieldType> = Model extends never
		? never
		: FieldRef<Model, FieldType>;

	export const ModelName: {
		User: 'User';
		Item: 'Item';
		Cart: 'Cart';
		TokenBlocklist: 'TokenBlocklist';
	};

	export type ModelName = (typeof ModelName)[keyof typeof ModelName];

	export type Datasources = {
		db?: Datasource;
	};

	interface TypeMapCb<ClientOptions = {}>
		extends $Utils.Fn<
			{ extArgs: $Extensions.InternalArgs },
			$Utils.Record<string, any>
		> {
		returns: Prisma.TypeMap<
			this['params']['extArgs'],
			ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
		>;
	}

	export type TypeMap<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> = {
		globalOmitOptions: {
			omit: GlobalOmitOptions;
		};
		meta: {
			modelProps: 'user' | 'item' | 'cart' | 'tokenBlocklist';
			txIsolationLevel: Prisma.TransactionIsolationLevel;
		};
		model: {
			User: {
				payload: Prisma.$UserPayload<ExtArgs>;
				fields: Prisma.UserFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.UserFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					findFirst: {
						args: Prisma.UserFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					findMany: {
						args: Prisma.UserFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
					};
					create: {
						args: Prisma.UserCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					createMany: {
						args: Prisma.UserCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
					};
					delete: {
						args: Prisma.UserDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					update: {
						args: Prisma.UserUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					deleteMany: {
						args: Prisma.UserDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.UserUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
					};
					upsert: {
						args: Prisma.UserUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					aggregate: {
						args: Prisma.UserAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateUser>;
					};
					groupBy: {
						args: Prisma.UserGroupByArgs<ExtArgs>;
						result: $Utils.Optional<UserGroupByOutputType>[];
					};
					count: {
						args: Prisma.UserCountArgs<ExtArgs>;
						result: $Utils.Optional<UserCountAggregateOutputType> | number;
					};
				};
			};
			Item: {
				payload: Prisma.$ItemPayload<ExtArgs>;
				fields: Prisma.ItemFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.ItemFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ItemPayload>;
					};
					findFirst: {
						args: Prisma.ItemFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ItemPayload>;
					};
					findMany: {
						args: Prisma.ItemFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ItemPayload>[];
					};
					create: {
						args: Prisma.ItemCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ItemPayload>;
					};
					createMany: {
						args: Prisma.ItemCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ItemPayload>[];
					};
					delete: {
						args: Prisma.ItemDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ItemPayload>;
					};
					update: {
						args: Prisma.ItemUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ItemPayload>;
					};
					deleteMany: {
						args: Prisma.ItemDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.ItemUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ItemPayload>[];
					};
					upsert: {
						args: Prisma.ItemUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ItemPayload>;
					};
					aggregate: {
						args: Prisma.ItemAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateItem>;
					};
					groupBy: {
						args: Prisma.ItemGroupByArgs<ExtArgs>;
						result: $Utils.Optional<ItemGroupByOutputType>[];
					};
					count: {
						args: Prisma.ItemCountArgs<ExtArgs>;
						result: $Utils.Optional<ItemCountAggregateOutputType> | number;
					};
				};
			};
			Cart: {
				payload: Prisma.$CartPayload<ExtArgs>;
				fields: Prisma.CartFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.CartFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CartPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CartPayload>;
					};
					findFirst: {
						args: Prisma.CartFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CartPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CartPayload>;
					};
					findMany: {
						args: Prisma.CartFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CartPayload>[];
					};
					create: {
						args: Prisma.CartCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CartPayload>;
					};
					createMany: {
						args: Prisma.CartCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.CartCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CartPayload>[];
					};
					delete: {
						args: Prisma.CartDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CartPayload>;
					};
					update: {
						args: Prisma.CartUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CartPayload>;
					};
					deleteMany: {
						args: Prisma.CartDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.CartUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.CartUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CartPayload>[];
					};
					upsert: {
						args: Prisma.CartUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CartPayload>;
					};
					aggregate: {
						args: Prisma.CartAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateCart>;
					};
					groupBy: {
						args: Prisma.CartGroupByArgs<ExtArgs>;
						result: $Utils.Optional<CartGroupByOutputType>[];
					};
					count: {
						args: Prisma.CartCountArgs<ExtArgs>;
						result: $Utils.Optional<CartCountAggregateOutputType> | number;
					};
				};
			};
			TokenBlocklist: {
				payload: Prisma.$TokenBlocklistPayload<ExtArgs>;
				fields: Prisma.TokenBlocklistFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.TokenBlocklistFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TokenBlocklistPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.TokenBlocklistFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TokenBlocklistPayload>;
					};
					findFirst: {
						args: Prisma.TokenBlocklistFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TokenBlocklistPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.TokenBlocklistFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TokenBlocklistPayload>;
					};
					findMany: {
						args: Prisma.TokenBlocklistFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TokenBlocklistPayload>[];
					};
					create: {
						args: Prisma.TokenBlocklistCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TokenBlocklistPayload>;
					};
					createMany: {
						args: Prisma.TokenBlocklistCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.TokenBlocklistCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TokenBlocklistPayload>[];
					};
					delete: {
						args: Prisma.TokenBlocklistDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TokenBlocklistPayload>;
					};
					update: {
						args: Prisma.TokenBlocklistUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TokenBlocklistPayload>;
					};
					deleteMany: {
						args: Prisma.TokenBlocklistDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.TokenBlocklistUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.TokenBlocklistUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TokenBlocklistPayload>[];
					};
					upsert: {
						args: Prisma.TokenBlocklistUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TokenBlocklistPayload>;
					};
					aggregate: {
						args: Prisma.TokenBlocklistAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateTokenBlocklist>;
					};
					groupBy: {
						args: Prisma.TokenBlocklistGroupByArgs<ExtArgs>;
						result: $Utils.Optional<TokenBlocklistGroupByOutputType>[];
					};
					count: {
						args: Prisma.TokenBlocklistCountArgs<ExtArgs>;
						result:
							| $Utils.Optional<TokenBlocklistCountAggregateOutputType>
							| number;
					};
				};
			};
		};
	} & {
		other: {
			payload: any;
			operations: {
				$executeRaw: {
					args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
					result: any;
				};
				$executeRawUnsafe: {
					args: [query: string, ...values: any[]];
					result: any;
				};
				$queryRaw: {
					args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
					result: any;
				};
				$queryRawUnsafe: {
					args: [query: string, ...values: any[]];
					result: any;
				};
			};
		};
	};
	export const defineExtension: $Extensions.ExtendsHook<
		'define',
		Prisma.TypeMapCb,
		$Extensions.DefaultArgs
	>;
	export type DefaultPrismaClient = PrismaClient;
	export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
	export interface PrismaClientOptions {
		/**
		 * Overwrites the datasource url from your schema.prisma file
		 */
		datasources?: Datasources;
		/**
		 * Overwrites the datasource url from your schema.prisma file
		 */
		datasourceUrl?: string;
		/**
		 * @default "colorless"
		 */
		errorFormat?: ErrorFormat;
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
		 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
		 */
		log?: (LogLevel | LogDefinition)[];
		/**
		 * The default values for transactionOptions
		 * maxWait ?= 2000
		 * timeout ?= 5000
		 */
		transactionOptions?: {
			maxWait?: number;
			timeout?: number;
			isolationLevel?: Prisma.TransactionIsolationLevel;
		};
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
		omit?: Prisma.GlobalOmitConfig;
	}
	export type GlobalOmitConfig = {
		user?: UserOmit;
		item?: ItemOmit;
		cart?: CartOmit;
		tokenBlocklist?: TokenBlocklistOmit;
	};

	/* Types for Logging */
	export type LogLevel = 'info' | 'query' | 'warn' | 'error';
	export type LogDefinition = {
		level: LogLevel;
		emit: 'stdout' | 'event';
	};

	export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

	export type GetLogType<T> = CheckIsLogLevel<
		T extends LogDefinition ? T['level'] : T
	>;

	export type GetEvents<T extends any[]> = T extends Array<
		LogLevel | LogDefinition
	>
		? GetLogType<T[number]>
		: never;

	export type QueryEvent = {
		timestamp: Date;
		query: string;
		params: string;
		duration: number;
		target: string;
	};

	export type LogEvent = {
		timestamp: Date;
		message: string;
		target: string;
	};
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
		| 'groupBy';

	// tested in getLogLevel.test.ts
	export function getLogLevel(
		log: Array<LogLevel | LogDefinition>,
	): LogLevel | undefined;

	/**
	 * `PrismaClient` proxy available in interactive transactions.
	 */
	export type TransactionClient = Omit<
		Prisma.DefaultPrismaClient,
		runtime.ITXClientDenyList
	>;

	export type Datasource = {
		url?: string;
	};

	/**
	 * Count Types
	 */

	/**
	 * Count Type UserCountOutputType
	 */

	export type UserCountOutputType = {
		carts: number;
	};

	export type UserCountOutputTypeSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		carts?: boolean | UserCountOutputTypeCountCartsArgs;
	};

	// Custom InputTypes
	/**
	 * UserCountOutputType without action
	 */
	export type UserCountOutputTypeDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserCountOutputType
		 */
		select?: UserCountOutputTypeSelect<ExtArgs> | null;
	};

	/**
	 * UserCountOutputType without action
	 */
	export type UserCountOutputTypeCountCartsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: CartWhereInput;
	};

	/**
	 * Count Type ItemCountOutputType
	 */

	export type ItemCountOutputType = {
		carts: number;
	};

	export type ItemCountOutputTypeSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		carts?: boolean | ItemCountOutputTypeCountCartsArgs;
	};

	// Custom InputTypes
	/**
	 * ItemCountOutputType without action
	 */
	export type ItemCountOutputTypeDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the ItemCountOutputType
		 */
		select?: ItemCountOutputTypeSelect<ExtArgs> | null;
	};

	/**
	 * ItemCountOutputType without action
	 */
	export type ItemCountOutputTypeCountCartsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: CartWhereInput;
	};

	/**
	 * Models
	 */

	/**
	 * Model User
	 */

	export type AggregateUser = {
		_count: UserCountAggregateOutputType | null;
		_avg: UserAvgAggregateOutputType | null;
		_sum: UserSumAggregateOutputType | null;
		_min: UserMinAggregateOutputType | null;
		_max: UserMaxAggregateOutputType | null;
	};

	export type UserAvgAggregateOutputType = {
		id: number | null;
	};

	export type UserSumAggregateOutputType = {
		id: number | null;
	};

	export type UserMinAggregateOutputType = {
		id: number | null;
		name: string | null;
		email: string | null;
		password: string | null;
		isAdmin: boolean | null;
		createdAt: Date | null;
		updatedAt: Date | null;
	};

	export type UserMaxAggregateOutputType = {
		id: number | null;
		name: string | null;
		email: string | null;
		password: string | null;
		isAdmin: boolean | null;
		createdAt: Date | null;
		updatedAt: Date | null;
	};

	export type UserCountAggregateOutputType = {
		id: number;
		name: number;
		email: number;
		password: number;
		isAdmin: number;
		createdAt: number;
		updatedAt: number;
		_all: number;
	};

	export type UserAvgAggregateInputType = {
		id?: true;
	};

	export type UserSumAggregateInputType = {
		id?: true;
	};

	export type UserMinAggregateInputType = {
		id?: true;
		name?: true;
		email?: true;
		password?: true;
		isAdmin?: true;
		createdAt?: true;
		updatedAt?: true;
	};

	export type UserMaxAggregateInputType = {
		id?: true;
		name?: true;
		email?: true;
		password?: true;
		isAdmin?: true;
		createdAt?: true;
		updatedAt?: true;
	};

	export type UserCountAggregateInputType = {
		id?: true;
		name?: true;
		email?: true;
		password?: true;
		isAdmin?: true;
		createdAt?: true;
		updatedAt?: true;
		_all?: true;
	};

	export type UserAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which User to aggregate.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Users
		 **/
		_count?: true | UserCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: UserAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: UserSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: UserMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: UserMaxAggregateInputType;
	};

	export type GetUserAggregateType<T extends UserAggregateArgs> = {
		[P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateUser[P]>
			: GetScalarType<T[P], AggregateUser[P]>;
	};

	export type UserGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: UserWhereInput;
		orderBy?:
			| UserOrderByWithAggregationInput
			| UserOrderByWithAggregationInput[];
		by: UserScalarFieldEnum[] | UserScalarFieldEnum;
		having?: UserScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: UserCountAggregateInputType | true;
		_avg?: UserAvgAggregateInputType;
		_sum?: UserSumAggregateInputType;
		_min?: UserMinAggregateInputType;
		_max?: UserMaxAggregateInputType;
	};

	export type UserGroupByOutputType = {
		id: number;
		name: string;
		email: string;
		password: string;
		isAdmin: boolean;
		createdAt: Date;
		updatedAt: Date;
		_count: UserCountAggregateOutputType | null;
		_avg: UserAvgAggregateOutputType | null;
		_sum: UserSumAggregateOutputType | null;
		_min: UserMinAggregateOutputType | null;
		_max: UserMaxAggregateOutputType | null;
	};

	type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<UserGroupByOutputType, T['by']> & {
				[P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], UserGroupByOutputType[P]>
					: GetScalarType<T[P], UserGroupByOutputType[P]>;
			}
		>
	>;

	export type UserSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			email?: boolean;
			password?: boolean;
			isAdmin?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			carts?: boolean | User$cartsArgs<ExtArgs>;
			_count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
		},
		ExtArgs['result']['user']
	>;

	export type UserSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			email?: boolean;
			password?: boolean;
			isAdmin?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
		},
		ExtArgs['result']['user']
	>;

	export type UserSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			email?: boolean;
			password?: boolean;
			isAdmin?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
		},
		ExtArgs['result']['user']
	>;

	export type UserSelectScalar = {
		id?: boolean;
		name?: boolean;
		email?: boolean;
		password?: boolean;
		isAdmin?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
	};

	export type UserOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		| 'id'
		| 'name'
		| 'email'
		| 'password'
		| 'isAdmin'
		| 'createdAt'
		| 'updatedAt',
		ExtArgs['result']['user']
	>;
	export type UserInclude<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		carts?: boolean | User$cartsArgs<ExtArgs>;
		_count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
	};
	export type UserIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {};
	export type UserIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {};

	export type $UserPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: 'User';
		objects: {
			carts: Prisma.$CartPayload<ExtArgs>[];
		};
		scalars: $Extensions.GetPayloadResult<
			{
				id: number;
				name: string;
				email: string;
				password: string;
				isAdmin: boolean;
				createdAt: Date;
				updatedAt: Date;
			},
			ExtArgs['result']['user']
		>;
		composites: {};
	};

	type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
		$Result.GetResult<Prisma.$UserPayload, S>;

	type UserCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
		select?: UserCountAggregateInputType | true;
	};

	export interface UserDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>['model']['User'];
			meta: { name: 'User' };
		};
		/**
		 * Find zero or one User that matches the filter.
		 * @param {UserFindUniqueArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends UserFindUniqueArgs>(
			args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				'findUnique',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one User that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
			args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				'findUniqueOrThrow',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first User that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserFindFirstArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends UserFindFirstArgs>(
			args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				'findFirst',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first User that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
			args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				'findFirstOrThrow',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more Users that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Users
		 * const users = await prisma.user.findMany()
		 *
		 * // Get first 10 Users
		 * const users = await prisma.user.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends UserFindManyArgs>(
			args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				'findMany',
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a User.
		 * @param {UserCreateArgs} args - Arguments to create a User.
		 * @example
		 * // Create one User
		 * const User = await prisma.user.create({
		 *   data: {
		 *     // ... data to create a User
		 *   }
		 * })
		 *
		 */
		create<T extends UserCreateArgs>(
			args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				'create',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many Users.
		 * @param {UserCreateManyArgs} args - Arguments to create many Users.
		 * @example
		 * // Create many Users
		 * const user = await prisma.user.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends UserCreateManyArgs>(
			args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many Users and returns the data saved in the database.
		 * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
		 * @example
		 * // Create many Users
		 * const user = await prisma.user.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Users and only return the `id`
		 * const userWithIdOnly = await prisma.user.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
			args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				'createManyAndReturn',
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a User.
		 * @param {UserDeleteArgs} args - Arguments to delete one User.
		 * @example
		 * // Delete one User
		 * const User = await prisma.user.delete({
		 *   where: {
		 *     // ... filter to delete one User
		 *   }
		 * })
		 *
		 */
		delete<T extends UserDeleteArgs>(
			args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				'delete',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one User.
		 * @param {UserUpdateArgs} args - Arguments to update one User.
		 * @example
		 * // Update one User
		 * const user = await prisma.user.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends UserUpdateArgs>(
			args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				'update',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more Users.
		 * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
		 * @example
		 * // Delete a few Users
		 * const { count } = await prisma.user.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends UserDeleteManyArgs>(
			args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Users.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Users
		 * const user = await prisma.user.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends UserUpdateManyArgs>(
			args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Users and returns the data updated in the database.
		 * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
		 * @example
		 * // Update many Users
		 * const user = await prisma.user.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Users and only return the `id`
		 * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
		updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
			args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				'updateManyAndReturn',
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one User.
		 * @param {UserUpsertArgs} args - Arguments to update or create a User.
		 * @example
		 * // Update or create a User
		 * const user = await prisma.user.upsert({
		 *   create: {
		 *     // ... data to create a User
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the User we want to update
		 *   }
		 * })
		 */
		upsert<T extends UserUpsertArgs>(
			args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				'upsert',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of Users.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserCountArgs} args - Arguments to filter Users to count.
		 * @example
		 * // Count the number of Users
		 * const count = await prisma.user.count({
		 *   where: {
		 *     // ... the filter for the Users we want to count
		 *   }
		 * })
		 **/
		count<T extends UserCountArgs>(
			args?: Subset<T, UserCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<'select', any>
				? T['select'] extends true
					? number
					: GetScalarType<T['select'], UserCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a User.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
		aggregate<T extends UserAggregateArgs>(
			args: Subset<T, UserAggregateArgs>,
		): Prisma.PrismaPromise<GetUserAggregateType<T>>;

		/**
		 * Group by User.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserGroupByArgs} args - Group by arguments.
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
			T extends UserGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<'skip', Keys<T>>,
				Extends<'take', Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: UserGroupByArgs['orderBy'] }
				: { orderBy?: UserGroupByArgs['orderBy'] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T['orderBy']>>
			>,
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
										];
						}[HavingFields]
					: 'take' extends Keys<T>
						? 'orderBy' extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: 'skip' extends Keys<T>
							? 'orderBy' extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
		): {} extends InputErrors
			? GetUserGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the User model
		 */
		readonly fields: UserFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for User.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__UserClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise';
		carts<T extends User$cartsArgs<ExtArgs> = {}>(
			args?: Subset<T, User$cartsArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			| $Result.GetResult<
					Prisma.$CartPayload<ExtArgs>,
					T,
					'findMany',
					GlobalOmitOptions
			  >
			| Null
		>;
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null,
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null,
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the User model
	 */
	interface UserFieldRefs {
		readonly id: FieldRef<'User', 'Int'>;
		readonly name: FieldRef<'User', 'String'>;
		readonly email: FieldRef<'User', 'String'>;
		readonly password: FieldRef<'User', 'String'>;
		readonly isAdmin: FieldRef<'User', 'Boolean'>;
		readonly createdAt: FieldRef<'User', 'DateTime'>;
		readonly updatedAt: FieldRef<'User', 'DateTime'>;
	}

	// Custom InputTypes
	/**
	 * User findUnique
	 */
	export type UserFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User findUniqueOrThrow
	 */
	export type UserFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User findFirst
	 */
	export type UserFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Users.
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Users.
		 */
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
	};

	/**
	 * User findFirstOrThrow
	 */
	export type UserFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Users.
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Users.
		 */
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
	};

	/**
	 * User findMany
	 */
	export type UserFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * Filter, which Users to fetch.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Users.
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
	};

	/**
	 * User create
	 */
	export type UserCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * The data needed to create a User.
		 */
		data: XOR<UserCreateInput, UserUncheckedCreateInput>;
	};

	/**
	 * User createMany
	 */
	export type UserCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Users.
		 */
		data: UserCreateManyInput | UserCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * User createManyAndReturn
	 */
	export type UserCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * The data used to create many Users.
		 */
		data: UserCreateManyInput | UserCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * User update
	 */
	export type UserUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * The data needed to update a User.
		 */
		data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
		/**
		 * Choose, which User to update.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User updateMany
	 */
	export type UserUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Users.
		 */
		data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
		/**
		 * Filter which Users to update
		 */
		where?: UserWhereInput;
		/**
		 * Limit how many Users to update.
		 */
		limit?: number;
	};

	/**
	 * User updateManyAndReturn
	 */
	export type UserUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * The data used to update Users.
		 */
		data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
		/**
		 * Filter which Users to update
		 */
		where?: UserWhereInput;
		/**
		 * Limit how many Users to update.
		 */
		limit?: number;
	};

	/**
	 * User upsert
	 */
	export type UserUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * The filter to search for the User to update in case it exists.
		 */
		where: UserWhereUniqueInput;
		/**
		 * In case the User found by the `where` argument doesn't exist, create a new User with this data.
		 */
		create: XOR<UserCreateInput, UserUncheckedCreateInput>;
		/**
		 * In case the User was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
	};

	/**
	 * User delete
	 */
	export type UserDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * Filter which User to delete.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User deleteMany
	 */
	export type UserDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Users to delete
		 */
		where?: UserWhereInput;
		/**
		 * Limit how many Users to delete.
		 */
		limit?: number;
	};

	/**
	 * User.carts
	 */
	export type User$cartsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cart
		 */
		select?: CartSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cart
		 */
		omit?: CartOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CartInclude<ExtArgs> | null;
		where?: CartWhereInput;
		orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[];
		cursor?: CartWhereUniqueInput;
		take?: number;
		skip?: number;
		distinct?: CartScalarFieldEnum | CartScalarFieldEnum[];
	};

	/**
	 * User without action
	 */
	export type UserDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
	};

	/**
	 * Model Item
	 */

	export type AggregateItem = {
		_count: ItemCountAggregateOutputType | null;
		_avg: ItemAvgAggregateOutputType | null;
		_sum: ItemSumAggregateOutputType | null;
		_min: ItemMinAggregateOutputType | null;
		_max: ItemMaxAggregateOutputType | null;
	};

	export type ItemAvgAggregateOutputType = {
		id: number | null;
		price: number | null;
	};

	export type ItemSumAggregateOutputType = {
		id: number | null;
		price: number | null;
	};

	export type ItemMinAggregateOutputType = {
		id: number | null;
		name: string | null;
		price: number | null;
		content: string | null;
		image: string | null;
		createdAt: Date | null;
		updatedAt: Date | null;
	};

	export type ItemMaxAggregateOutputType = {
		id: number | null;
		name: string | null;
		price: number | null;
		content: string | null;
		image: string | null;
		createdAt: Date | null;
		updatedAt: Date | null;
	};

	export type ItemCountAggregateOutputType = {
		id: number;
		name: number;
		price: number;
		content: number;
		image: number;
		createdAt: number;
		updatedAt: number;
		_all: number;
	};

	export type ItemAvgAggregateInputType = {
		id?: true;
		price?: true;
	};

	export type ItemSumAggregateInputType = {
		id?: true;
		price?: true;
	};

	export type ItemMinAggregateInputType = {
		id?: true;
		name?: true;
		price?: true;
		content?: true;
		image?: true;
		createdAt?: true;
		updatedAt?: true;
	};

	export type ItemMaxAggregateInputType = {
		id?: true;
		name?: true;
		price?: true;
		content?: true;
		image?: true;
		createdAt?: true;
		updatedAt?: true;
	};

	export type ItemCountAggregateInputType = {
		id?: true;
		name?: true;
		price?: true;
		content?: true;
		image?: true;
		createdAt?: true;
		updatedAt?: true;
		_all?: true;
	};

	export type ItemAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Item to aggregate.
		 */
		where?: ItemWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Items to fetch.
		 */
		orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: ItemWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Items from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Items.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Items
		 **/
		_count?: true | ItemCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: ItemAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: ItemSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: ItemMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: ItemMaxAggregateInputType;
	};

	export type GetItemAggregateType<T extends ItemAggregateArgs> = {
		[P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateItem[P]>
			: GetScalarType<T[P], AggregateItem[P]>;
	};

	export type ItemGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: ItemWhereInput;
		orderBy?:
			| ItemOrderByWithAggregationInput
			| ItemOrderByWithAggregationInput[];
		by: ItemScalarFieldEnum[] | ItemScalarFieldEnum;
		having?: ItemScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: ItemCountAggregateInputType | true;
		_avg?: ItemAvgAggregateInputType;
		_sum?: ItemSumAggregateInputType;
		_min?: ItemMinAggregateInputType;
		_max?: ItemMaxAggregateInputType;
	};

	export type ItemGroupByOutputType = {
		id: number;
		name: string;
		price: number;
		content: string;
		image: string | null;
		createdAt: Date;
		updatedAt: Date;
		_count: ItemCountAggregateOutputType | null;
		_avg: ItemAvgAggregateOutputType | null;
		_sum: ItemSumAggregateOutputType | null;
		_min: ItemMinAggregateOutputType | null;
		_max: ItemMaxAggregateOutputType | null;
	};

	type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<ItemGroupByOutputType, T['by']> & {
				[P in keyof T & keyof ItemGroupByOutputType]: P extends '_count'
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], ItemGroupByOutputType[P]>
					: GetScalarType<T[P], ItemGroupByOutputType[P]>;
			}
		>
	>;

	export type ItemSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			price?: boolean;
			content?: boolean;
			image?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			carts?: boolean | Item$cartsArgs<ExtArgs>;
			_count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>;
		},
		ExtArgs['result']['item']
	>;

	export type ItemSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			price?: boolean;
			content?: boolean;
			image?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
		},
		ExtArgs['result']['item']
	>;

	export type ItemSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			price?: boolean;
			content?: boolean;
			image?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
		},
		ExtArgs['result']['item']
	>;

	export type ItemSelectScalar = {
		id?: boolean;
		name?: boolean;
		price?: boolean;
		content?: boolean;
		image?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
	};

	export type ItemOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		'id' | 'name' | 'price' | 'content' | 'image' | 'createdAt' | 'updatedAt',
		ExtArgs['result']['item']
	>;
	export type ItemInclude<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		carts?: boolean | Item$cartsArgs<ExtArgs>;
		_count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>;
	};
	export type ItemIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {};
	export type ItemIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {};

	export type $ItemPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: 'Item';
		objects: {
			carts: Prisma.$CartPayload<ExtArgs>[];
		};
		scalars: $Extensions.GetPayloadResult<
			{
				id: number;
				name: string;
				price: number;
				content: string;
				image: string | null;
				createdAt: Date;
				updatedAt: Date;
			},
			ExtArgs['result']['item']
		>;
		composites: {};
	};

	type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> =
		$Result.GetResult<Prisma.$ItemPayload, S>;

	type ItemCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
		select?: ItemCountAggregateInputType | true;
	};

	export interface ItemDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>['model']['Item'];
			meta: { name: 'Item' };
		};
		/**
		 * Find zero or one Item that matches the filter.
		 * @param {ItemFindUniqueArgs} args - Arguments to find a Item
		 * @example
		 * // Get one Item
		 * const item = await prisma.item.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends ItemFindUniqueArgs>(
			args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>,
		): Prisma__ItemClient<
			$Result.GetResult<
				Prisma.$ItemPayload<ExtArgs>,
				T,
				'findUnique',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one Item that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
		 * @example
		 * // Get one Item
		 * const item = await prisma.item.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(
			args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__ItemClient<
			$Result.GetResult<
				Prisma.$ItemPayload<ExtArgs>,
				T,
				'findUniqueOrThrow',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Item that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ItemFindFirstArgs} args - Arguments to find a Item
		 * @example
		 * // Get one Item
		 * const item = await prisma.item.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends ItemFindFirstArgs>(
			args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>,
		): Prisma__ItemClient<
			$Result.GetResult<
				Prisma.$ItemPayload<ExtArgs>,
				T,
				'findFirst',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Item that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
		 * @example
		 * // Get one Item
		 * const item = await prisma.item.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(
			args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__ItemClient<
			$Result.GetResult<
				Prisma.$ItemPayload<ExtArgs>,
				T,
				'findFirstOrThrow',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more Items that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Items
		 * const items = await prisma.item.findMany()
		 *
		 * // Get first 10 Items
		 * const items = await prisma.item.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends ItemFindManyArgs>(
			args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ItemPayload<ExtArgs>,
				T,
				'findMany',
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a Item.
		 * @param {ItemCreateArgs} args - Arguments to create a Item.
		 * @example
		 * // Create one Item
		 * const Item = await prisma.item.create({
		 *   data: {
		 *     // ... data to create a Item
		 *   }
		 * })
		 *
		 */
		create<T extends ItemCreateArgs>(
			args: SelectSubset<T, ItemCreateArgs<ExtArgs>>,
		): Prisma__ItemClient<
			$Result.GetResult<
				Prisma.$ItemPayload<ExtArgs>,
				T,
				'create',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many Items.
		 * @param {ItemCreateManyArgs} args - Arguments to create many Items.
		 * @example
		 * // Create many Items
		 * const item = await prisma.item.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends ItemCreateManyArgs>(
			args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many Items and returns the data saved in the database.
		 * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
		 * @example
		 * // Create many Items
		 * const item = await prisma.item.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Items and only return the `id`
		 * const itemWithIdOnly = await prisma.item.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(
			args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ItemPayload<ExtArgs>,
				T,
				'createManyAndReturn',
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a Item.
		 * @param {ItemDeleteArgs} args - Arguments to delete one Item.
		 * @example
		 * // Delete one Item
		 * const Item = await prisma.item.delete({
		 *   where: {
		 *     // ... filter to delete one Item
		 *   }
		 * })
		 *
		 */
		delete<T extends ItemDeleteArgs>(
			args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>,
		): Prisma__ItemClient<
			$Result.GetResult<
				Prisma.$ItemPayload<ExtArgs>,
				T,
				'delete',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one Item.
		 * @param {ItemUpdateArgs} args - Arguments to update one Item.
		 * @example
		 * // Update one Item
		 * const item = await prisma.item.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends ItemUpdateArgs>(
			args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>,
		): Prisma__ItemClient<
			$Result.GetResult<
				Prisma.$ItemPayload<ExtArgs>,
				T,
				'update',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more Items.
		 * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
		 * @example
		 * // Delete a few Items
		 * const { count } = await prisma.item.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends ItemDeleteManyArgs>(
			args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Items.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Items
		 * const item = await prisma.item.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends ItemUpdateManyArgs>(
			args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Items and returns the data updated in the database.
		 * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
		 * @example
		 * // Update many Items
		 * const item = await prisma.item.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Items and only return the `id`
		 * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
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
		updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(
			args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ItemPayload<ExtArgs>,
				T,
				'updateManyAndReturn',
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one Item.
		 * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
		 * @example
		 * // Update or create a Item
		 * const item = await prisma.item.upsert({
		 *   create: {
		 *     // ... data to create a Item
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Item we want to update
		 *   }
		 * })
		 */
		upsert<T extends ItemUpsertArgs>(
			args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>,
		): Prisma__ItemClient<
			$Result.GetResult<
				Prisma.$ItemPayload<ExtArgs>,
				T,
				'upsert',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of Items.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ItemCountArgs} args - Arguments to filter Items to count.
		 * @example
		 * // Count the number of Items
		 * const count = await prisma.item.count({
		 *   where: {
		 *     // ... the filter for the Items we want to count
		 *   }
		 * })
		 **/
		count<T extends ItemCountArgs>(
			args?: Subset<T, ItemCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<'select', any>
				? T['select'] extends true
					? number
					: GetScalarType<T['select'], ItemCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a Item.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
		aggregate<T extends ItemAggregateArgs>(
			args: Subset<T, ItemAggregateArgs>,
		): Prisma.PrismaPromise<GetItemAggregateType<T>>;

		/**
		 * Group by Item.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ItemGroupByArgs} args - Group by arguments.
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
			T extends ItemGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<'skip', Keys<T>>,
				Extends<'take', Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: ItemGroupByArgs['orderBy'] }
				: { orderBy?: ItemGroupByArgs['orderBy'] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T['orderBy']>>
			>,
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
										];
						}[HavingFields]
					: 'take' extends Keys<T>
						? 'orderBy' extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: 'skip' extends Keys<T>
							? 'orderBy' extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors,
		): {} extends InputErrors
			? GetItemGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the Item model
		 */
		readonly fields: ItemFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Item.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__ItemClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise';
		carts<T extends Item$cartsArgs<ExtArgs> = {}>(
			args?: Subset<T, Item$cartsArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			| $Result.GetResult<
					Prisma.$CartPayload<ExtArgs>,
					T,
					'findMany',
					GlobalOmitOptions
			  >
			| Null
		>;
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null,
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null,
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the Item model
	 */
	interface ItemFieldRefs {
		readonly id: FieldRef<'Item', 'Int'>;
		readonly name: FieldRef<'Item', 'String'>;
		readonly price: FieldRef<'Item', 'Int'>;
		readonly content: FieldRef<'Item', 'String'>;
		readonly image: FieldRef<'Item', 'String'>;
		readonly createdAt: FieldRef<'Item', 'DateTime'>;
		readonly updatedAt: FieldRef<'Item', 'DateTime'>;
	}

	// Custom InputTypes
	/**
	 * Item findUnique
	 */
	export type ItemFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Item
		 */
		select?: ItemSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Item
		 */
		omit?: ItemOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ItemInclude<ExtArgs> | null;
		/**
		 * Filter, which Item to fetch.
		 */
		where: ItemWhereUniqueInput;
	};

	/**
	 * Item findUniqueOrThrow
	 */
	export type ItemFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Item
		 */
		select?: ItemSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Item
		 */
		omit?: ItemOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ItemInclude<ExtArgs> | null;
		/**
		 * Filter, which Item to fetch.
		 */
		where: ItemWhereUniqueInput;
	};

	/**
	 * Item findFirst
	 */
	export type ItemFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Item
		 */
		select?: ItemSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Item
		 */
		omit?: ItemOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ItemInclude<ExtArgs> | null;
		/**
		 * Filter, which Item to fetch.
		 */
		where?: ItemWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Items to fetch.
		 */
		orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Items.
		 */
		cursor?: ItemWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Items from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Items.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Items.
		 */
		distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[];
	};

	/**
	 * Item findFirstOrThrow
	 */
	export type ItemFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Item
		 */
		select?: ItemSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Item
		 */
		omit?: ItemOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ItemInclude<ExtArgs> | null;
		/**
		 * Filter, which Item to fetch.
		 */
		where?: ItemWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Items to fetch.
		 */
		orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Items.
		 */
		cursor?: ItemWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Items from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Items.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Items.
		 */
		distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[];
	};

	/**
	 * Item findMany
	 */
	export type ItemFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Item
		 */
		select?: ItemSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Item
		 */
		omit?: ItemOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ItemInclude<ExtArgs> | null;
		/**
		 * Filter, which Items to fetch.
		 */
		where?: ItemWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Items to fetch.
		 */
		orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Items.
		 */
		cursor?: ItemWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Items from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Items.
		 */
		skip?: number;
		distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[];
	};

	/**
	 * Item create
	 */
	export type ItemCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Item
		 */
		select?: ItemSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Item
		 */
		omit?: ItemOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ItemInclude<ExtArgs> | null;
		/**
		 * The data needed to create a Item.
		 */
		data: XOR<ItemCreateInput, ItemUncheckedCreateInput>;
	};

	/**
	 * Item createMany
	 */
	export type ItemCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Items.
		 */
		data: ItemCreateManyInput | ItemCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Item createManyAndReturn
	 */
	export type ItemCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Item
		 */
		select?: ItemSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Item
		 */
		omit?: ItemOmit<ExtArgs> | null;
		/**
		 * The data used to create many Items.
		 */
		data: ItemCreateManyInput | ItemCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Item update
	 */
	export type ItemUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Item
		 */
		select?: ItemSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Item
		 */
		omit?: ItemOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ItemInclude<ExtArgs> | null;
		/**
		 * The data needed to update a Item.
		 */
		data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>;
		/**
		 * Choose, which Item to update.
		 */
		where: ItemWhereUniqueInput;
	};

	/**
	 * Item updateMany
	 */
	export type ItemUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Items.
		 */
		data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>;
		/**
		 * Filter which Items to update
		 */
		where?: ItemWhereInput;
		/**
		 * Limit how many Items to update.
		 */
		limit?: number;
	};

	/**
	 * Item updateManyAndReturn
	 */
	export type ItemUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Item
		 */
		select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Item
		 */
		omit?: ItemOmit<ExtArgs> | null;
		/**
		 * The data used to update Items.
		 */
		data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>;
		/**
		 * Filter which Items to update
		 */
		where?: ItemWhereInput;
		/**
		 * Limit how many Items to update.
		 */
		limit?: number;
	};

	/**
	 * Item upsert
	 */
	export type ItemUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Item
		 */
		select?: ItemSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Item
		 */
		omit?: ItemOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ItemInclude<ExtArgs> | null;
		/**
		 * The filter to search for the Item to update in case it exists.
		 */
		where: ItemWhereUniqueInput;
		/**
		 * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
		 */
		create: XOR<ItemCreateInput, ItemUncheckedCreateInput>;
		/**
		 * In case the Item was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>;
	};

	/**
	 * Item delete
	 */
	export type ItemDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Item
		 */
		select?: ItemSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Item
		 */
		omit?: ItemOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ItemInclude<ExtArgs> | null;
		/**
		 * Filter which Item to delete.
		 */
		where: ItemWhereUniqueInput;
	};

	/**
	 * Item deleteMany
	 */
	export type ItemDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Items to delete
		 */
		where?: ItemWhereInput;
		/**
		 * Limit how many Items to delete.
		 */
		limit?: number;
	};

	/**
	 * Item.carts
	 */
	export type Item$cartsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cart
		 */
		select?: CartSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cart
		 */
		omit?: CartOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CartInclude<ExtArgs> | null;
		where?: CartWhereInput;
		orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[];
		cursor?: CartWhereUniqueInput;
		take?: number;
		skip?: number;
		distinct?: CartScalarFieldEnum | CartScalarFieldEnum[];
	};

	/**
	 * Item without action
	 */
	export type ItemDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Item
		 */
		select?: ItemSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Item
		 */
		omit?: ItemOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ItemInclude<ExtArgs> | null;
	};

	/**
	 * Model Cart
	 */

	export type AggregateCart = {
		_count: CartCountAggregateOutputType | null;
		_avg: CartAvgAggregateOutputType | null;
		_sum: CartSumAggregateOutputType | null;
		_min: CartMinAggregateOutputType | null;
		_max: CartMaxAggregateOutputType | null;
	};

	export type CartAvgAggregateOutputType = {
		id: number | null;
		userId: number | null;
		itemId: number | null;
		quantity: number | null;
		createdBy: number | null;
		updatedBy: number | null;
	};

	export type CartSumAggregateOutputType = {
		id: number | null;
		userId: number | null;
		itemId: number | null;
		quantity: number | null;
		createdBy: number | null;
		updatedBy: number | null;
	};

	export type CartMinAggregateOutputType = {
		id: number | null;
		userId: number | null;
		itemId: number | null;
		quantity: number | null;
		createdAt: Date | null;
		updatedAt: Date | null;
		createdBy: number | null;
		updatedBy: number | null;
	};

	export type CartMaxAggregateOutputType = {
		id: number | null;
		userId: number | null;
		itemId: number | null;
		quantity: number | null;
		createdAt: Date | null;
		updatedAt: Date | null;
		createdBy: number | null;
		updatedBy: number | null;
	};

	export type CartCountAggregateOutputType = {
		id: number;
		userId: number;
		itemId: number;
		quantity: number;
		createdAt: number;
		updatedAt: number;
		createdBy: number;
		updatedBy: number;
		_all: number;
	};

	export type CartAvgAggregateInputType = {
		id?: true;
		userId?: true;
		itemId?: true;
		quantity?: true;
		createdBy?: true;
		updatedBy?: true;
	};

	export type CartSumAggregateInputType = {
		id?: true;
		userId?: true;
		itemId?: true;
		quantity?: true;
		createdBy?: true;
		updatedBy?: true;
	};

	export type CartMinAggregateInputType = {
		id?: true;
		userId?: true;
		itemId?: true;
		quantity?: true;
		createdAt?: true;
		updatedAt?: true;
		createdBy?: true;
		updatedBy?: true;
	};

	export type CartMaxAggregateInputType = {
		id?: true;
		userId?: true;
		itemId?: true;
		quantity?: true;
		createdAt?: true;
		updatedAt?: true;
		createdBy?: true;
		updatedBy?: true;
	};

	export type CartCountAggregateInputType = {
		id?: true;
		userId?: true;
		itemId?: true;
		quantity?: true;
		createdAt?: true;
		updatedAt?: true;
		createdBy?: true;
		updatedBy?: true;
		_all?: true;
	};

	export type CartAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Cart to aggregate.
		 */
		where?: CartWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Carts to fetch.
		 */
		orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: CartWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Carts from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Carts.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Carts
		 **/
		_count?: true | CartCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: CartAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: CartSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: CartMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: CartMaxAggregateInputType;
	};

	export type GetCartAggregateType<T extends CartAggregateArgs> = {
		[P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateCart[P]>
			: GetScalarType<T[P], AggregateCart[P]>;
	};

	export type CartGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: CartWhereInput;
		orderBy?:
			| CartOrderByWithAggregationInput
			| CartOrderByWithAggregationInput[];
		by: CartScalarFieldEnum[] | CartScalarFieldEnum;
		having?: CartScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: CartCountAggregateInputType | true;
		_avg?: CartAvgAggregateInputType;
		_sum?: CartSumAggregateInputType;
		_min?: CartMinAggregateInputType;
		_max?: CartMaxAggregateInputType;
	};

	export type CartGroupByOutputType = {
		id: number;
		userId: number;
		itemId: number;
		quantity: number;
		createdAt: Date;
		updatedAt: Date;
		createdBy: number;
		updatedBy: number;
		_count: CartCountAggregateOutputType | null;
		_avg: CartAvgAggregateOutputType | null;
		_sum: CartSumAggregateOutputType | null;
		_min: CartMinAggregateOutputType | null;
		_max: CartMaxAggregateOutputType | null;
	};

	type GetCartGroupByPayload<T extends CartGroupByArgs> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<CartGroupByOutputType, T['by']> & {
				[P in keyof T & keyof CartGroupByOutputType]: P extends '_count'
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], CartGroupByOutputType[P]>
					: GetScalarType<T[P], CartGroupByOutputType[P]>;
			}
		>
	>;

	export type CartSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			userId?: boolean;
			itemId?: boolean;
			quantity?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			createdBy?: boolean;
			updatedBy?: boolean;
			user?: boolean | UserDefaultArgs<ExtArgs>;
			item?: boolean | ItemDefaultArgs<ExtArgs>;
		},
		ExtArgs['result']['cart']
	>;

	export type CartSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			userId?: boolean;
			itemId?: boolean;
			quantity?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			createdBy?: boolean;
			updatedBy?: boolean;
			user?: boolean | UserDefaultArgs<ExtArgs>;
			item?: boolean | ItemDefaultArgs<ExtArgs>;
		},
		ExtArgs['result']['cart']
	>;

	export type CartSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			userId?: boolean;
			itemId?: boolean;
			quantity?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			createdBy?: boolean;
			updatedBy?: boolean;
			user?: boolean | UserDefaultArgs<ExtArgs>;
			item?: boolean | ItemDefaultArgs<ExtArgs>;
		},
		ExtArgs['result']['cart']
	>;

	export type CartSelectScalar = {
		id?: boolean;
		userId?: boolean;
		itemId?: boolean;
		quantity?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		createdBy?: boolean;
		updatedBy?: boolean;
	};

	export type CartOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		| 'id'
		| 'userId'
		| 'itemId'
		| 'quantity'
		| 'createdAt'
		| 'updatedAt'
		| 'createdBy'
		| 'updatedBy',
		ExtArgs['result']['cart']
	>;
	export type CartInclude<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		user?: boolean | UserDefaultArgs<ExtArgs>;
		item?: boolean | ItemDefaultArgs<ExtArgs>;
	};
	export type CartIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		user?: boolean | UserDefaultArgs<ExtArgs>;
		item?: boolean | ItemDefaultArgs<ExtArgs>;
	};
	export type CartIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		user?: boolean | UserDefaultArgs<ExtArgs>;
		item?: boolean | ItemDefaultArgs<ExtArgs>;
	};

	export type $CartPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: 'Cart';
		objects: {
			user: Prisma.$UserPayload<ExtArgs>;
			item: Prisma.$ItemPayload<ExtArgs>;
		};
		scalars: $Extensions.GetPayloadResult<
			{
				id: number;
				userId: number;
				itemId: number;
				quantity: number;
				createdAt: Date;
				updatedAt: Date;
				createdBy: number;
				updatedBy: number;
			},
			ExtArgs['result']['cart']
		>;
		composites: {};
	};

	type CartGetPayload<S extends boolean | null | undefined | CartDefaultArgs> =
		$Result.GetResult<Prisma.$CartPayload, S>;

	type CartCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<CartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
		select?: CartCountAggregateInputType | true;
	};

	export interface CartDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>['model']['Cart'];
			meta: { name: 'Cart' };
		};
		/**
		 * Find zero or one Cart that matches the filter.
		 * @param {CartFindUniqueArgs} args - Arguments to find a Cart
		 * @example
		 * // Get one Cart
		 * const cart = await prisma.cart.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends CartFindUniqueArgs>(
			args: SelectSubset<T, CartFindUniqueArgs<ExtArgs>>,
		): Prisma__CartClient<
			$Result.GetResult<
				Prisma.$CartPayload<ExtArgs>,
				T,
				'findUnique',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
		 * @example
		 * // Get one Cart
		 * const cart = await prisma.cart.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs>(
			args: SelectSubset<T, CartFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__CartClient<
			$Result.GetResult<
				Prisma.$CartPayload<ExtArgs>,
				T,
				'findUniqueOrThrow',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Cart that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CartFindFirstArgs} args - Arguments to find a Cart
		 * @example
		 * // Get one Cart
		 * const cart = await prisma.cart.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends CartFindFirstArgs>(
			args?: SelectSubset<T, CartFindFirstArgs<ExtArgs>>,
		): Prisma__CartClient<
			$Result.GetResult<
				Prisma.$CartPayload<ExtArgs>,
				T,
				'findFirst',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Cart that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
		 * @example
		 * // Get one Cart
		 * const cart = await prisma.cart.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends CartFindFirstOrThrowArgs>(
			args?: SelectSubset<T, CartFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__CartClient<
			$Result.GetResult<
				Prisma.$CartPayload<ExtArgs>,
				T,
				'findFirstOrThrow',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more Carts that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CartFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Carts
		 * const carts = await prisma.cart.findMany()
		 *
		 * // Get first 10 Carts
		 * const carts = await prisma.cart.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends CartFindManyArgs>(
			args?: SelectSubset<T, CartFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$CartPayload<ExtArgs>,
				T,
				'findMany',
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a Cart.
		 * @param {CartCreateArgs} args - Arguments to create a Cart.
		 * @example
		 * // Create one Cart
		 * const Cart = await prisma.cart.create({
		 *   data: {
		 *     // ... data to create a Cart
		 *   }
		 * })
		 *
		 */
		create<T extends CartCreateArgs>(
			args: SelectSubset<T, CartCreateArgs<ExtArgs>>,
		): Prisma__CartClient<
			$Result.GetResult<
				Prisma.$CartPayload<ExtArgs>,
				T,
				'create',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many Carts.
		 * @param {CartCreateManyArgs} args - Arguments to create many Carts.
		 * @example
		 * // Create many Carts
		 * const cart = await prisma.cart.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends CartCreateManyArgs>(
			args?: SelectSubset<T, CartCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many Carts and returns the data saved in the database.
		 * @param {CartCreateManyAndReturnArgs} args - Arguments to create many Carts.
		 * @example
		 * // Create many Carts
		 * const cart = await prisma.cart.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Carts and only return the `id`
		 * const cartWithIdOnly = await prisma.cart.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends CartCreateManyAndReturnArgs>(
			args?: SelectSubset<T, CartCreateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$CartPayload<ExtArgs>,
				T,
				'createManyAndReturn',
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a Cart.
		 * @param {CartDeleteArgs} args - Arguments to delete one Cart.
		 * @example
		 * // Delete one Cart
		 * const Cart = await prisma.cart.delete({
		 *   where: {
		 *     // ... filter to delete one Cart
		 *   }
		 * })
		 *
		 */
		delete<T extends CartDeleteArgs>(
			args: SelectSubset<T, CartDeleteArgs<ExtArgs>>,
		): Prisma__CartClient<
			$Result.GetResult<
				Prisma.$CartPayload<ExtArgs>,
				T,
				'delete',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one Cart.
		 * @param {CartUpdateArgs} args - Arguments to update one Cart.
		 * @example
		 * // Update one Cart
		 * const cart = await prisma.cart.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends CartUpdateArgs>(
			args: SelectSubset<T, CartUpdateArgs<ExtArgs>>,
		): Prisma__CartClient<
			$Result.GetResult<
				Prisma.$CartPayload<ExtArgs>,
				T,
				'update',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more Carts.
		 * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
		 * @example
		 * // Delete a few Carts
		 * const { count } = await prisma.cart.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends CartDeleteManyArgs>(
			args?: SelectSubset<T, CartDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Carts.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Carts
		 * const cart = await prisma.cart.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends CartUpdateManyArgs>(
			args: SelectSubset<T, CartUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Carts and returns the data updated in the database.
		 * @param {CartUpdateManyAndReturnArgs} args - Arguments to update many Carts.
		 * @example
		 * // Update many Carts
		 * const cart = await prisma.cart.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Carts and only return the `id`
		 * const cartWithIdOnly = await prisma.cart.updateManyAndReturn({
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
		updateManyAndReturn<T extends CartUpdateManyAndReturnArgs>(
			args: SelectSubset<T, CartUpdateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$CartPayload<ExtArgs>,
				T,
				'updateManyAndReturn',
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one Cart.
		 * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
		 * @example
		 * // Update or create a Cart
		 * const cart = await prisma.cart.upsert({
		 *   create: {
		 *     // ... data to create a Cart
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Cart we want to update
		 *   }
		 * })
		 */
		upsert<T extends CartUpsertArgs>(
			args: SelectSubset<T, CartUpsertArgs<ExtArgs>>,
		): Prisma__CartClient<
			$Result.GetResult<
				Prisma.$CartPayload<ExtArgs>,
				T,
				'upsert',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of Carts.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CartCountArgs} args - Arguments to filter Carts to count.
		 * @example
		 * // Count the number of Carts
		 * const count = await prisma.cart.count({
		 *   where: {
		 *     // ... the filter for the Carts we want to count
		 *   }
		 * })
		 **/
		count<T extends CartCountArgs>(
			args?: Subset<T, CartCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<'select', any>
				? T['select'] extends true
					? number
					: GetScalarType<T['select'], CartCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a Cart.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
		aggregate<T extends CartAggregateArgs>(
			args: Subset<T, CartAggregateArgs>,
		): Prisma.PrismaPromise<GetCartAggregateType<T>>;

		/**
		 * Group by Cart.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CartGroupByArgs} args - Group by arguments.
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
			T extends CartGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<'skip', Keys<T>>,
				Extends<'take', Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: CartGroupByArgs['orderBy'] }
				: { orderBy?: CartGroupByArgs['orderBy'] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T['orderBy']>>
			>,
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
										];
						}[HavingFields]
					: 'take' extends Keys<T>
						? 'orderBy' extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: 'skip' extends Keys<T>
							? 'orderBy' extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors,
		): {} extends InputErrors
			? GetCartGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the Cart model
		 */
		readonly fields: CartFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Cart.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__CartClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise';
		user<T extends UserDefaultArgs<ExtArgs> = {}>(
			args?: Subset<T, UserDefaultArgs<ExtArgs>>,
		): Prisma__UserClient<
			| $Result.GetResult<
					Prisma.$UserPayload<ExtArgs>,
					T,
					'findUniqueOrThrow',
					GlobalOmitOptions
			  >
			| Null,
			Null,
			ExtArgs,
			GlobalOmitOptions
		>;
		item<T extends ItemDefaultArgs<ExtArgs> = {}>(
			args?: Subset<T, ItemDefaultArgs<ExtArgs>>,
		): Prisma__ItemClient<
			| $Result.GetResult<
					Prisma.$ItemPayload<ExtArgs>,
					T,
					'findUniqueOrThrow',
					GlobalOmitOptions
			  >
			| Null,
			Null,
			ExtArgs,
			GlobalOmitOptions
		>;
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null,
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null,
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the Cart model
	 */
	interface CartFieldRefs {
		readonly id: FieldRef<'Cart', 'Int'>;
		readonly userId: FieldRef<'Cart', 'Int'>;
		readonly itemId: FieldRef<'Cart', 'Int'>;
		readonly quantity: FieldRef<'Cart', 'Int'>;
		readonly createdAt: FieldRef<'Cart', 'DateTime'>;
		readonly updatedAt: FieldRef<'Cart', 'DateTime'>;
		readonly createdBy: FieldRef<'Cart', 'Int'>;
		readonly updatedBy: FieldRef<'Cart', 'Int'>;
	}

	// Custom InputTypes
	/**
	 * Cart findUnique
	 */
	export type CartFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cart
		 */
		select?: CartSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cart
		 */
		omit?: CartOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CartInclude<ExtArgs> | null;
		/**
		 * Filter, which Cart to fetch.
		 */
		where: CartWhereUniqueInput;
	};

	/**
	 * Cart findUniqueOrThrow
	 */
	export type CartFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cart
		 */
		select?: CartSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cart
		 */
		omit?: CartOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CartInclude<ExtArgs> | null;
		/**
		 * Filter, which Cart to fetch.
		 */
		where: CartWhereUniqueInput;
	};

	/**
	 * Cart findFirst
	 */
	export type CartFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cart
		 */
		select?: CartSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cart
		 */
		omit?: CartOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CartInclude<ExtArgs> | null;
		/**
		 * Filter, which Cart to fetch.
		 */
		where?: CartWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Carts to fetch.
		 */
		orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Carts.
		 */
		cursor?: CartWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Carts from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Carts.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Carts.
		 */
		distinct?: CartScalarFieldEnum | CartScalarFieldEnum[];
	};

	/**
	 * Cart findFirstOrThrow
	 */
	export type CartFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cart
		 */
		select?: CartSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cart
		 */
		omit?: CartOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CartInclude<ExtArgs> | null;
		/**
		 * Filter, which Cart to fetch.
		 */
		where?: CartWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Carts to fetch.
		 */
		orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Carts.
		 */
		cursor?: CartWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Carts from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Carts.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Carts.
		 */
		distinct?: CartScalarFieldEnum | CartScalarFieldEnum[];
	};

	/**
	 * Cart findMany
	 */
	export type CartFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cart
		 */
		select?: CartSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cart
		 */
		omit?: CartOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CartInclude<ExtArgs> | null;
		/**
		 * Filter, which Carts to fetch.
		 */
		where?: CartWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Carts to fetch.
		 */
		orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Carts.
		 */
		cursor?: CartWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Carts from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Carts.
		 */
		skip?: number;
		distinct?: CartScalarFieldEnum | CartScalarFieldEnum[];
	};

	/**
	 * Cart create
	 */
	export type CartCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cart
		 */
		select?: CartSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cart
		 */
		omit?: CartOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CartInclude<ExtArgs> | null;
		/**
		 * The data needed to create a Cart.
		 */
		data: XOR<CartCreateInput, CartUncheckedCreateInput>;
	};

	/**
	 * Cart createMany
	 */
	export type CartCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Carts.
		 */
		data: CartCreateManyInput | CartCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Cart createManyAndReturn
	 */
	export type CartCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cart
		 */
		select?: CartSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cart
		 */
		omit?: CartOmit<ExtArgs> | null;
		/**
		 * The data used to create many Carts.
		 */
		data: CartCreateManyInput | CartCreateManyInput[];
		skipDuplicates?: boolean;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CartIncludeCreateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * Cart update
	 */
	export type CartUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cart
		 */
		select?: CartSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cart
		 */
		omit?: CartOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CartInclude<ExtArgs> | null;
		/**
		 * The data needed to update a Cart.
		 */
		data: XOR<CartUpdateInput, CartUncheckedUpdateInput>;
		/**
		 * Choose, which Cart to update.
		 */
		where: CartWhereUniqueInput;
	};

	/**
	 * Cart updateMany
	 */
	export type CartUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Carts.
		 */
		data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>;
		/**
		 * Filter which Carts to update
		 */
		where?: CartWhereInput;
		/**
		 * Limit how many Carts to update.
		 */
		limit?: number;
	};

	/**
	 * Cart updateManyAndReturn
	 */
	export type CartUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cart
		 */
		select?: CartSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cart
		 */
		omit?: CartOmit<ExtArgs> | null;
		/**
		 * The data used to update Carts.
		 */
		data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>;
		/**
		 * Filter which Carts to update
		 */
		where?: CartWhereInput;
		/**
		 * Limit how many Carts to update.
		 */
		limit?: number;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CartIncludeUpdateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * Cart upsert
	 */
	export type CartUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cart
		 */
		select?: CartSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cart
		 */
		omit?: CartOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CartInclude<ExtArgs> | null;
		/**
		 * The filter to search for the Cart to update in case it exists.
		 */
		where: CartWhereUniqueInput;
		/**
		 * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
		 */
		create: XOR<CartCreateInput, CartUncheckedCreateInput>;
		/**
		 * In case the Cart was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<CartUpdateInput, CartUncheckedUpdateInput>;
	};

	/**
	 * Cart delete
	 */
	export type CartDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cart
		 */
		select?: CartSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cart
		 */
		omit?: CartOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CartInclude<ExtArgs> | null;
		/**
		 * Filter which Cart to delete.
		 */
		where: CartWhereUniqueInput;
	};

	/**
	 * Cart deleteMany
	 */
	export type CartDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Carts to delete
		 */
		where?: CartWhereInput;
		/**
		 * Limit how many Carts to delete.
		 */
		limit?: number;
	};

	/**
	 * Cart without action
	 */
	export type CartDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cart
		 */
		select?: CartSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cart
		 */
		omit?: CartOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CartInclude<ExtArgs> | null;
	};

	/**
	 * Model TokenBlocklist
	 */

	export type AggregateTokenBlocklist = {
		_count: TokenBlocklistCountAggregateOutputType | null;
		_min: TokenBlocklistMinAggregateOutputType | null;
		_max: TokenBlocklistMaxAggregateOutputType | null;
	};

	export type TokenBlocklistMinAggregateOutputType = {
		id: string | null;
		token: string | null;
		expiresAt: Date | null;
		createdAt: Date | null;
	};

	export type TokenBlocklistMaxAggregateOutputType = {
		id: string | null;
		token: string | null;
		expiresAt: Date | null;
		createdAt: Date | null;
	};

	export type TokenBlocklistCountAggregateOutputType = {
		id: number;
		token: number;
		expiresAt: number;
		createdAt: number;
		_all: number;
	};

	export type TokenBlocklistMinAggregateInputType = {
		id?: true;
		token?: true;
		expiresAt?: true;
		createdAt?: true;
	};

	export type TokenBlocklistMaxAggregateInputType = {
		id?: true;
		token?: true;
		expiresAt?: true;
		createdAt?: true;
	};

	export type TokenBlocklistCountAggregateInputType = {
		id?: true;
		token?: true;
		expiresAt?: true;
		createdAt?: true;
		_all?: true;
	};

	export type TokenBlocklistAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which TokenBlocklist to aggregate.
		 */
		where?: TokenBlocklistWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of TokenBlocklists to fetch.
		 */
		orderBy?:
			| TokenBlocklistOrderByWithRelationInput
			| TokenBlocklistOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: TokenBlocklistWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` TokenBlocklists from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` TokenBlocklists.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned TokenBlocklists
		 **/
		_count?: true | TokenBlocklistCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: TokenBlocklistMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: TokenBlocklistMaxAggregateInputType;
	};

	export type GetTokenBlocklistAggregateType<
		T extends TokenBlocklistAggregateArgs,
	> = {
		[P in keyof T & keyof AggregateTokenBlocklist]: P extends '_count' | 'count'
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateTokenBlocklist[P]>
			: GetScalarType<T[P], AggregateTokenBlocklist[P]>;
	};

	export type TokenBlocklistGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: TokenBlocklistWhereInput;
		orderBy?:
			| TokenBlocklistOrderByWithAggregationInput
			| TokenBlocklistOrderByWithAggregationInput[];
		by: TokenBlocklistScalarFieldEnum[] | TokenBlocklistScalarFieldEnum;
		having?: TokenBlocklistScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: TokenBlocklistCountAggregateInputType | true;
		_min?: TokenBlocklistMinAggregateInputType;
		_max?: TokenBlocklistMaxAggregateInputType;
	};

	export type TokenBlocklistGroupByOutputType = {
		id: string;
		token: string;
		expiresAt: Date;
		createdAt: Date;
		_count: TokenBlocklistCountAggregateOutputType | null;
		_min: TokenBlocklistMinAggregateOutputType | null;
		_max: TokenBlocklistMaxAggregateOutputType | null;
	};

	type GetTokenBlocklistGroupByPayload<T extends TokenBlocklistGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<TokenBlocklistGroupByOutputType, T['by']> & {
					[P in keyof T &
						keyof TokenBlocklistGroupByOutputType]: P extends '_count'
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], TokenBlocklistGroupByOutputType[P]>
						: GetScalarType<T[P], TokenBlocklistGroupByOutputType[P]>;
				}
			>
		>;

	export type TokenBlocklistSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			token?: boolean;
			expiresAt?: boolean;
			createdAt?: boolean;
		},
		ExtArgs['result']['tokenBlocklist']
	>;

	export type TokenBlocklistSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			token?: boolean;
			expiresAt?: boolean;
			createdAt?: boolean;
		},
		ExtArgs['result']['tokenBlocklist']
	>;

	export type TokenBlocklistSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			token?: boolean;
			expiresAt?: boolean;
			createdAt?: boolean;
		},
		ExtArgs['result']['tokenBlocklist']
	>;

	export type TokenBlocklistSelectScalar = {
		id?: boolean;
		token?: boolean;
		expiresAt?: boolean;
		createdAt?: boolean;
	};

	export type TokenBlocklistOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		'id' | 'token' | 'expiresAt' | 'createdAt',
		ExtArgs['result']['tokenBlocklist']
	>;

	export type $TokenBlocklistPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: 'TokenBlocklist';
		objects: {};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				token: string;
				expiresAt: Date;
				createdAt: Date;
			},
			ExtArgs['result']['tokenBlocklist']
		>;
		composites: {};
	};

	type TokenBlocklistGetPayload<
		S extends boolean | null | undefined | TokenBlocklistDefaultArgs,
	> = $Result.GetResult<Prisma.$TokenBlocklistPayload, S>;

	type TokenBlocklistCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<
		TokenBlocklistFindManyArgs,
		'select' | 'include' | 'distinct' | 'omit'
	> & {
		select?: TokenBlocklistCountAggregateInputType | true;
	};

	export interface TokenBlocklistDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>['model']['TokenBlocklist'];
			meta: { name: 'TokenBlocklist' };
		};
		/**
		 * Find zero or one TokenBlocklist that matches the filter.
		 * @param {TokenBlocklistFindUniqueArgs} args - Arguments to find a TokenBlocklist
		 * @example
		 * // Get one TokenBlocklist
		 * const tokenBlocklist = await prisma.tokenBlocklist.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends TokenBlocklistFindUniqueArgs>(
			args: SelectSubset<T, TokenBlocklistFindUniqueArgs<ExtArgs>>,
		): Prisma__TokenBlocklistClient<
			$Result.GetResult<
				Prisma.$TokenBlocklistPayload<ExtArgs>,
				T,
				'findUnique',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one TokenBlocklist that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {TokenBlocklistFindUniqueOrThrowArgs} args - Arguments to find a TokenBlocklist
		 * @example
		 * // Get one TokenBlocklist
		 * const tokenBlocklist = await prisma.tokenBlocklist.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends TokenBlocklistFindUniqueOrThrowArgs>(
			args: SelectSubset<T, TokenBlocklistFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__TokenBlocklistClient<
			$Result.GetResult<
				Prisma.$TokenBlocklistPayload<ExtArgs>,
				T,
				'findUniqueOrThrow',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first TokenBlocklist that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TokenBlocklistFindFirstArgs} args - Arguments to find a TokenBlocklist
		 * @example
		 * // Get one TokenBlocklist
		 * const tokenBlocklist = await prisma.tokenBlocklist.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends TokenBlocklistFindFirstArgs>(
			args?: SelectSubset<T, TokenBlocklistFindFirstArgs<ExtArgs>>,
		): Prisma__TokenBlocklistClient<
			$Result.GetResult<
				Prisma.$TokenBlocklistPayload<ExtArgs>,
				T,
				'findFirst',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first TokenBlocklist that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TokenBlocklistFindFirstOrThrowArgs} args - Arguments to find a TokenBlocklist
		 * @example
		 * // Get one TokenBlocklist
		 * const tokenBlocklist = await prisma.tokenBlocklist.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends TokenBlocklistFindFirstOrThrowArgs>(
			args?: SelectSubset<T, TokenBlocklistFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__TokenBlocklistClient<
			$Result.GetResult<
				Prisma.$TokenBlocklistPayload<ExtArgs>,
				T,
				'findFirstOrThrow',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more TokenBlocklists that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TokenBlocklistFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all TokenBlocklists
		 * const tokenBlocklists = await prisma.tokenBlocklist.findMany()
		 *
		 * // Get first 10 TokenBlocklists
		 * const tokenBlocklists = await prisma.tokenBlocklist.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const tokenBlocklistWithIdOnly = await prisma.tokenBlocklist.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends TokenBlocklistFindManyArgs>(
			args?: SelectSubset<T, TokenBlocklistFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$TokenBlocklistPayload<ExtArgs>,
				T,
				'findMany',
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a TokenBlocklist.
		 * @param {TokenBlocklistCreateArgs} args - Arguments to create a TokenBlocklist.
		 * @example
		 * // Create one TokenBlocklist
		 * const TokenBlocklist = await prisma.tokenBlocklist.create({
		 *   data: {
		 *     // ... data to create a TokenBlocklist
		 *   }
		 * })
		 *
		 */
		create<T extends TokenBlocklistCreateArgs>(
			args: SelectSubset<T, TokenBlocklistCreateArgs<ExtArgs>>,
		): Prisma__TokenBlocklistClient<
			$Result.GetResult<
				Prisma.$TokenBlocklistPayload<ExtArgs>,
				T,
				'create',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many TokenBlocklists.
		 * @param {TokenBlocklistCreateManyArgs} args - Arguments to create many TokenBlocklists.
		 * @example
		 * // Create many TokenBlocklists
		 * const tokenBlocklist = await prisma.tokenBlocklist.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends TokenBlocklistCreateManyArgs>(
			args?: SelectSubset<T, TokenBlocklistCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many TokenBlocklists and returns the data saved in the database.
		 * @param {TokenBlocklistCreateManyAndReturnArgs} args - Arguments to create many TokenBlocklists.
		 * @example
		 * // Create many TokenBlocklists
		 * const tokenBlocklist = await prisma.tokenBlocklist.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many TokenBlocklists and only return the `id`
		 * const tokenBlocklistWithIdOnly = await prisma.tokenBlocklist.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends TokenBlocklistCreateManyAndReturnArgs>(
			args?: SelectSubset<T, TokenBlocklistCreateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$TokenBlocklistPayload<ExtArgs>,
				T,
				'createManyAndReturn',
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a TokenBlocklist.
		 * @param {TokenBlocklistDeleteArgs} args - Arguments to delete one TokenBlocklist.
		 * @example
		 * // Delete one TokenBlocklist
		 * const TokenBlocklist = await prisma.tokenBlocklist.delete({
		 *   where: {
		 *     // ... filter to delete one TokenBlocklist
		 *   }
		 * })
		 *
		 */
		delete<T extends TokenBlocklistDeleteArgs>(
			args: SelectSubset<T, TokenBlocklistDeleteArgs<ExtArgs>>,
		): Prisma__TokenBlocklistClient<
			$Result.GetResult<
				Prisma.$TokenBlocklistPayload<ExtArgs>,
				T,
				'delete',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one TokenBlocklist.
		 * @param {TokenBlocklistUpdateArgs} args - Arguments to update one TokenBlocklist.
		 * @example
		 * // Update one TokenBlocklist
		 * const tokenBlocklist = await prisma.tokenBlocklist.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends TokenBlocklistUpdateArgs>(
			args: SelectSubset<T, TokenBlocklistUpdateArgs<ExtArgs>>,
		): Prisma__TokenBlocklistClient<
			$Result.GetResult<
				Prisma.$TokenBlocklistPayload<ExtArgs>,
				T,
				'update',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more TokenBlocklists.
		 * @param {TokenBlocklistDeleteManyArgs} args - Arguments to filter TokenBlocklists to delete.
		 * @example
		 * // Delete a few TokenBlocklists
		 * const { count } = await prisma.tokenBlocklist.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends TokenBlocklistDeleteManyArgs>(
			args?: SelectSubset<T, TokenBlocklistDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more TokenBlocklists.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TokenBlocklistUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many TokenBlocklists
		 * const tokenBlocklist = await prisma.tokenBlocklist.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends TokenBlocklistUpdateManyArgs>(
			args: SelectSubset<T, TokenBlocklistUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more TokenBlocklists and returns the data updated in the database.
		 * @param {TokenBlocklistUpdateManyAndReturnArgs} args - Arguments to update many TokenBlocklists.
		 * @example
		 * // Update many TokenBlocklists
		 * const tokenBlocklist = await prisma.tokenBlocklist.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more TokenBlocklists and only return the `id`
		 * const tokenBlocklistWithIdOnly = await prisma.tokenBlocklist.updateManyAndReturn({
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
		updateManyAndReturn<T extends TokenBlocklistUpdateManyAndReturnArgs>(
			args: SelectSubset<T, TokenBlocklistUpdateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$TokenBlocklistPayload<ExtArgs>,
				T,
				'updateManyAndReturn',
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one TokenBlocklist.
		 * @param {TokenBlocklistUpsertArgs} args - Arguments to update or create a TokenBlocklist.
		 * @example
		 * // Update or create a TokenBlocklist
		 * const tokenBlocklist = await prisma.tokenBlocklist.upsert({
		 *   create: {
		 *     // ... data to create a TokenBlocklist
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the TokenBlocklist we want to update
		 *   }
		 * })
		 */
		upsert<T extends TokenBlocklistUpsertArgs>(
			args: SelectSubset<T, TokenBlocklistUpsertArgs<ExtArgs>>,
		): Prisma__TokenBlocklistClient<
			$Result.GetResult<
				Prisma.$TokenBlocklistPayload<ExtArgs>,
				T,
				'upsert',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of TokenBlocklists.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TokenBlocklistCountArgs} args - Arguments to filter TokenBlocklists to count.
		 * @example
		 * // Count the number of TokenBlocklists
		 * const count = await prisma.tokenBlocklist.count({
		 *   where: {
		 *     // ... the filter for the TokenBlocklists we want to count
		 *   }
		 * })
		 **/
		count<T extends TokenBlocklistCountArgs>(
			args?: Subset<T, TokenBlocklistCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<'select', any>
				? T['select'] extends true
					? number
					: GetScalarType<T['select'], TokenBlocklistCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a TokenBlocklist.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TokenBlocklistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
		aggregate<T extends TokenBlocklistAggregateArgs>(
			args: Subset<T, TokenBlocklistAggregateArgs>,
		): Prisma.PrismaPromise<GetTokenBlocklistAggregateType<T>>;

		/**
		 * Group by TokenBlocklist.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TokenBlocklistGroupByArgs} args - Group by arguments.
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
			T extends TokenBlocklistGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<'skip', Keys<T>>,
				Extends<'take', Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: TokenBlocklistGroupByArgs['orderBy'] }
				: { orderBy?: TokenBlocklistGroupByArgs['orderBy'] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T['orderBy']>>
			>,
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
										];
						}[HavingFields]
					: 'take' extends Keys<T>
						? 'orderBy' extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: 'skip' extends Keys<T>
							? 'orderBy' extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, TokenBlocklistGroupByArgs, OrderByArg> &
				InputErrors,
		): {} extends InputErrors
			? GetTokenBlocklistGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the TokenBlocklist model
		 */
		readonly fields: TokenBlocklistFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for TokenBlocklist.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__TokenBlocklistClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise';
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null,
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null,
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the TokenBlocklist model
	 */
	interface TokenBlocklistFieldRefs {
		readonly id: FieldRef<'TokenBlocklist', 'String'>;
		readonly token: FieldRef<'TokenBlocklist', 'String'>;
		readonly expiresAt: FieldRef<'TokenBlocklist', 'DateTime'>;
		readonly createdAt: FieldRef<'TokenBlocklist', 'DateTime'>;
	}

	// Custom InputTypes
	/**
	 * TokenBlocklist findUnique
	 */
	export type TokenBlocklistFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the TokenBlocklist
		 */
		select?: TokenBlocklistSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the TokenBlocklist
		 */
		omit?: TokenBlocklistOmit<ExtArgs> | null;
		/**
		 * Filter, which TokenBlocklist to fetch.
		 */
		where: TokenBlocklistWhereUniqueInput;
	};

	/**
	 * TokenBlocklist findUniqueOrThrow
	 */
	export type TokenBlocklistFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the TokenBlocklist
		 */
		select?: TokenBlocklistSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the TokenBlocklist
		 */
		omit?: TokenBlocklistOmit<ExtArgs> | null;
		/**
		 * Filter, which TokenBlocklist to fetch.
		 */
		where: TokenBlocklistWhereUniqueInput;
	};

	/**
	 * TokenBlocklist findFirst
	 */
	export type TokenBlocklistFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the TokenBlocklist
		 */
		select?: TokenBlocklistSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the TokenBlocklist
		 */
		omit?: TokenBlocklistOmit<ExtArgs> | null;
		/**
		 * Filter, which TokenBlocklist to fetch.
		 */
		where?: TokenBlocklistWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of TokenBlocklists to fetch.
		 */
		orderBy?:
			| TokenBlocklistOrderByWithRelationInput
			| TokenBlocklistOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for TokenBlocklists.
		 */
		cursor?: TokenBlocklistWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` TokenBlocklists from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` TokenBlocklists.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of TokenBlocklists.
		 */
		distinct?: TokenBlocklistScalarFieldEnum | TokenBlocklistScalarFieldEnum[];
	};

	/**
	 * TokenBlocklist findFirstOrThrow
	 */
	export type TokenBlocklistFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the TokenBlocklist
		 */
		select?: TokenBlocklistSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the TokenBlocklist
		 */
		omit?: TokenBlocklistOmit<ExtArgs> | null;
		/**
		 * Filter, which TokenBlocklist to fetch.
		 */
		where?: TokenBlocklistWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of TokenBlocklists to fetch.
		 */
		orderBy?:
			| TokenBlocklistOrderByWithRelationInput
			| TokenBlocklistOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for TokenBlocklists.
		 */
		cursor?: TokenBlocklistWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` TokenBlocklists from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` TokenBlocklists.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of TokenBlocklists.
		 */
		distinct?: TokenBlocklistScalarFieldEnum | TokenBlocklistScalarFieldEnum[];
	};

	/**
	 * TokenBlocklist findMany
	 */
	export type TokenBlocklistFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the TokenBlocklist
		 */
		select?: TokenBlocklistSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the TokenBlocklist
		 */
		omit?: TokenBlocklistOmit<ExtArgs> | null;
		/**
		 * Filter, which TokenBlocklists to fetch.
		 */
		where?: TokenBlocklistWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of TokenBlocklists to fetch.
		 */
		orderBy?:
			| TokenBlocklistOrderByWithRelationInput
			| TokenBlocklistOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing TokenBlocklists.
		 */
		cursor?: TokenBlocklistWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` TokenBlocklists from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` TokenBlocklists.
		 */
		skip?: number;
		distinct?: TokenBlocklistScalarFieldEnum | TokenBlocklistScalarFieldEnum[];
	};

	/**
	 * TokenBlocklist create
	 */
	export type TokenBlocklistCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the TokenBlocklist
		 */
		select?: TokenBlocklistSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the TokenBlocklist
		 */
		omit?: TokenBlocklistOmit<ExtArgs> | null;
		/**
		 * The data needed to create a TokenBlocklist.
		 */
		data: XOR<TokenBlocklistCreateInput, TokenBlocklistUncheckedCreateInput>;
	};

	/**
	 * TokenBlocklist createMany
	 */
	export type TokenBlocklistCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many TokenBlocklists.
		 */
		data: TokenBlocklistCreateManyInput | TokenBlocklistCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * TokenBlocklist createManyAndReturn
	 */
	export type TokenBlocklistCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the TokenBlocklist
		 */
		select?: TokenBlocklistSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the TokenBlocklist
		 */
		omit?: TokenBlocklistOmit<ExtArgs> | null;
		/**
		 * The data used to create many TokenBlocklists.
		 */
		data: TokenBlocklistCreateManyInput | TokenBlocklistCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * TokenBlocklist update
	 */
	export type TokenBlocklistUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the TokenBlocklist
		 */
		select?: TokenBlocklistSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the TokenBlocklist
		 */
		omit?: TokenBlocklistOmit<ExtArgs> | null;
		/**
		 * The data needed to update a TokenBlocklist.
		 */
		data: XOR<TokenBlocklistUpdateInput, TokenBlocklistUncheckedUpdateInput>;
		/**
		 * Choose, which TokenBlocklist to update.
		 */
		where: TokenBlocklistWhereUniqueInput;
	};

	/**
	 * TokenBlocklist updateMany
	 */
	export type TokenBlocklistUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update TokenBlocklists.
		 */
		data: XOR<
			TokenBlocklistUpdateManyMutationInput,
			TokenBlocklistUncheckedUpdateManyInput
		>;
		/**
		 * Filter which TokenBlocklists to update
		 */
		where?: TokenBlocklistWhereInput;
		/**
		 * Limit how many TokenBlocklists to update.
		 */
		limit?: number;
	};

	/**
	 * TokenBlocklist updateManyAndReturn
	 */
	export type TokenBlocklistUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the TokenBlocklist
		 */
		select?: TokenBlocklistSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the TokenBlocklist
		 */
		omit?: TokenBlocklistOmit<ExtArgs> | null;
		/**
		 * The data used to update TokenBlocklists.
		 */
		data: XOR<
			TokenBlocklistUpdateManyMutationInput,
			TokenBlocklistUncheckedUpdateManyInput
		>;
		/**
		 * Filter which TokenBlocklists to update
		 */
		where?: TokenBlocklistWhereInput;
		/**
		 * Limit how many TokenBlocklists to update.
		 */
		limit?: number;
	};

	/**
	 * TokenBlocklist upsert
	 */
	export type TokenBlocklistUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the TokenBlocklist
		 */
		select?: TokenBlocklistSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the TokenBlocklist
		 */
		omit?: TokenBlocklistOmit<ExtArgs> | null;
		/**
		 * The filter to search for the TokenBlocklist to update in case it exists.
		 */
		where: TokenBlocklistWhereUniqueInput;
		/**
		 * In case the TokenBlocklist found by the `where` argument doesn't exist, create a new TokenBlocklist with this data.
		 */
		create: XOR<TokenBlocklistCreateInput, TokenBlocklistUncheckedCreateInput>;
		/**
		 * In case the TokenBlocklist was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<TokenBlocklistUpdateInput, TokenBlocklistUncheckedUpdateInput>;
	};

	/**
	 * TokenBlocklist delete
	 */
	export type TokenBlocklistDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the TokenBlocklist
		 */
		select?: TokenBlocklistSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the TokenBlocklist
		 */
		omit?: TokenBlocklistOmit<ExtArgs> | null;
		/**
		 * Filter which TokenBlocklist to delete.
		 */
		where: TokenBlocklistWhereUniqueInput;
	};

	/**
	 * TokenBlocklist deleteMany
	 */
	export type TokenBlocklistDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which TokenBlocklists to delete
		 */
		where?: TokenBlocklistWhereInput;
		/**
		 * Limit how many TokenBlocklists to delete.
		 */
		limit?: number;
	};

	/**
	 * TokenBlocklist without action
	 */
	export type TokenBlocklistDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the TokenBlocklist
		 */
		select?: TokenBlocklistSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the TokenBlocklist
		 */
		omit?: TokenBlocklistOmit<ExtArgs> | null;
	};

	/**
	 * Enums
	 */

	export const TransactionIsolationLevel: {
		ReadUncommitted: 'ReadUncommitted';
		ReadCommitted: 'ReadCommitted';
		RepeatableRead: 'RepeatableRead';
		Serializable: 'Serializable';
	};

	export type TransactionIsolationLevel =
		(typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

	export const UserScalarFieldEnum: {
		id: 'id';
		name: 'name';
		email: 'email';
		password: 'password';
		isAdmin: 'isAdmin';
		createdAt: 'createdAt';
		updatedAt: 'updatedAt';
	};

	export type UserScalarFieldEnum =
		(typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

	export const ItemScalarFieldEnum: {
		id: 'id';
		name: 'name';
		price: 'price';
		content: 'content';
		image: 'image';
		createdAt: 'createdAt';
		updatedAt: 'updatedAt';
	};

	export type ItemScalarFieldEnum =
		(typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum];

	export const CartScalarFieldEnum: {
		id: 'id';
		userId: 'userId';
		itemId: 'itemId';
		quantity: 'quantity';
		createdAt: 'createdAt';
		updatedAt: 'updatedAt';
		createdBy: 'createdBy';
		updatedBy: 'updatedBy';
	};

	export type CartScalarFieldEnum =
		(typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum];

	export const TokenBlocklistScalarFieldEnum: {
		id: 'id';
		token: 'token';
		expiresAt: 'expiresAt';
		createdAt: 'createdAt';
	};

	export type TokenBlocklistScalarFieldEnum =
		(typeof TokenBlocklistScalarFieldEnum)[keyof typeof TokenBlocklistScalarFieldEnum];

	export const SortOrder: {
		asc: 'asc';
		desc: 'desc';
	};

	export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

	export const QueryMode: {
		default: 'default';
		insensitive: 'insensitive';
	};

	export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

	export const NullsOrder: {
		first: 'first';
		last: 'last';
	};

	export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

	/**
	 * Field references
	 */

	/**
	 * Reference to a field of type 'Int'
	 */
	export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		'Int'
	>;

	/**
	 * Reference to a field of type 'Int[]'
	 */
	export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		'Int[]'
	>;

	/**
	 * Reference to a field of type 'String'
	 */
	export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		'String'
	>;

	/**
	 * Reference to a field of type 'String[]'
	 */
	export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		'String[]'
	>;

	/**
	 * Reference to a field of type 'Boolean'
	 */
	export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		'Boolean'
	>;

	/**
	 * Reference to a field of type 'DateTime'
	 */
	export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		'DateTime'
	>;

	/**
	 * Reference to a field of type 'DateTime[]'
	 */
	export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		'DateTime[]'
	>;

	/**
	 * Reference to a field of type 'Float'
	 */
	export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		'Float'
	>;

	/**
	 * Reference to a field of type 'Float[]'
	 */
	export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		'Float[]'
	>;

	/**
	 * Deep Input Types
	 */

	export type UserWhereInput = {
		AND?: UserWhereInput | UserWhereInput[];
		OR?: UserWhereInput[];
		NOT?: UserWhereInput | UserWhereInput[];
		id?: IntFilter<'User'> | number;
		name?: StringFilter<'User'> | string;
		email?: StringFilter<'User'> | string;
		password?: StringFilter<'User'> | string;
		isAdmin?: BoolFilter<'User'> | boolean;
		createdAt?: DateTimeFilter<'User'> | Date | string;
		updatedAt?: DateTimeFilter<'User'> | Date | string;
		carts?: CartListRelationFilter;
	};

	export type UserOrderByWithRelationInput = {
		id?: SortOrder;
		name?: SortOrder;
		email?: SortOrder;
		password?: SortOrder;
		isAdmin?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		carts?: CartOrderByRelationAggregateInput;
	};

	export type UserWhereUniqueInput = Prisma.AtLeast<
		{
			id?: number;
			email?: string;
			AND?: UserWhereInput | UserWhereInput[];
			OR?: UserWhereInput[];
			NOT?: UserWhereInput | UserWhereInput[];
			name?: StringFilter<'User'> | string;
			password?: StringFilter<'User'> | string;
			isAdmin?: BoolFilter<'User'> | boolean;
			createdAt?: DateTimeFilter<'User'> | Date | string;
			updatedAt?: DateTimeFilter<'User'> | Date | string;
			carts?: CartListRelationFilter;
		},
		'id' | 'email'
	>;

	export type UserOrderByWithAggregationInput = {
		id?: SortOrder;
		name?: SortOrder;
		email?: SortOrder;
		password?: SortOrder;
		isAdmin?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		_count?: UserCountOrderByAggregateInput;
		_avg?: UserAvgOrderByAggregateInput;
		_max?: UserMaxOrderByAggregateInput;
		_min?: UserMinOrderByAggregateInput;
		_sum?: UserSumOrderByAggregateInput;
	};

	export type UserScalarWhereWithAggregatesInput = {
		AND?:
			| UserScalarWhereWithAggregatesInput
			| UserScalarWhereWithAggregatesInput[];
		OR?: UserScalarWhereWithAggregatesInput[];
		NOT?:
			| UserScalarWhereWithAggregatesInput
			| UserScalarWhereWithAggregatesInput[];
		id?: IntWithAggregatesFilter<'User'> | number;
		name?: StringWithAggregatesFilter<'User'> | string;
		email?: StringWithAggregatesFilter<'User'> | string;
		password?: StringWithAggregatesFilter<'User'> | string;
		isAdmin?: BoolWithAggregatesFilter<'User'> | boolean;
		createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
		updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
	};

	export type ItemWhereInput = {
		AND?: ItemWhereInput | ItemWhereInput[];
		OR?: ItemWhereInput[];
		NOT?: ItemWhereInput | ItemWhereInput[];
		id?: IntFilter<'Item'> | number;
		name?: StringFilter<'Item'> | string;
		price?: IntFilter<'Item'> | number;
		content?: StringFilter<'Item'> | string;
		image?: StringNullableFilter<'Item'> | string | null;
		createdAt?: DateTimeFilter<'Item'> | Date | string;
		updatedAt?: DateTimeFilter<'Item'> | Date | string;
		carts?: CartListRelationFilter;
	};

	export type ItemOrderByWithRelationInput = {
		id?: SortOrder;
		name?: SortOrder;
		price?: SortOrder;
		content?: SortOrder;
		image?: SortOrderInput | SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		carts?: CartOrderByRelationAggregateInput;
	};

	export type ItemWhereUniqueInput = Prisma.AtLeast<
		{
			id?: number;
			AND?: ItemWhereInput | ItemWhereInput[];
			OR?: ItemWhereInput[];
			NOT?: ItemWhereInput | ItemWhereInput[];
			name?: StringFilter<'Item'> | string;
			price?: IntFilter<'Item'> | number;
			content?: StringFilter<'Item'> | string;
			image?: StringNullableFilter<'Item'> | string | null;
			createdAt?: DateTimeFilter<'Item'> | Date | string;
			updatedAt?: DateTimeFilter<'Item'> | Date | string;
			carts?: CartListRelationFilter;
		},
		'id'
	>;

	export type ItemOrderByWithAggregationInput = {
		id?: SortOrder;
		name?: SortOrder;
		price?: SortOrder;
		content?: SortOrder;
		image?: SortOrderInput | SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		_count?: ItemCountOrderByAggregateInput;
		_avg?: ItemAvgOrderByAggregateInput;
		_max?: ItemMaxOrderByAggregateInput;
		_min?: ItemMinOrderByAggregateInput;
		_sum?: ItemSumOrderByAggregateInput;
	};

	export type ItemScalarWhereWithAggregatesInput = {
		AND?:
			| ItemScalarWhereWithAggregatesInput
			| ItemScalarWhereWithAggregatesInput[];
		OR?: ItemScalarWhereWithAggregatesInput[];
		NOT?:
			| ItemScalarWhereWithAggregatesInput
			| ItemScalarWhereWithAggregatesInput[];
		id?: IntWithAggregatesFilter<'Item'> | number;
		name?: StringWithAggregatesFilter<'Item'> | string;
		price?: IntWithAggregatesFilter<'Item'> | number;
		content?: StringWithAggregatesFilter<'Item'> | string;
		image?: StringNullableWithAggregatesFilter<'Item'> | string | null;
		createdAt?: DateTimeWithAggregatesFilter<'Item'> | Date | string;
		updatedAt?: DateTimeWithAggregatesFilter<'Item'> | Date | string;
	};

	export type CartWhereInput = {
		AND?: CartWhereInput | CartWhereInput[];
		OR?: CartWhereInput[];
		NOT?: CartWhereInput | CartWhereInput[];
		id?: IntFilter<'Cart'> | number;
		userId?: IntFilter<'Cart'> | number;
		itemId?: IntFilter<'Cart'> | number;
		quantity?: IntFilter<'Cart'> | number;
		createdAt?: DateTimeFilter<'Cart'> | Date | string;
		updatedAt?: DateTimeFilter<'Cart'> | Date | string;
		createdBy?: IntFilter<'Cart'> | number;
		updatedBy?: IntFilter<'Cart'> | number;
		user?: XOR<UserScalarRelationFilter, UserWhereInput>;
		item?: XOR<ItemScalarRelationFilter, ItemWhereInput>;
	};

	export type CartOrderByWithRelationInput = {
		id?: SortOrder;
		userId?: SortOrder;
		itemId?: SortOrder;
		quantity?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		createdBy?: SortOrder;
		updatedBy?: SortOrder;
		user?: UserOrderByWithRelationInput;
		item?: ItemOrderByWithRelationInput;
	};

	export type CartWhereUniqueInput = Prisma.AtLeast<
		{
			id?: number;
			userId_itemId?: CartUserIdItemIdCompoundUniqueInput;
			AND?: CartWhereInput | CartWhereInput[];
			OR?: CartWhereInput[];
			NOT?: CartWhereInput | CartWhereInput[];
			userId?: IntFilter<'Cart'> | number;
			itemId?: IntFilter<'Cart'> | number;
			quantity?: IntFilter<'Cart'> | number;
			createdAt?: DateTimeFilter<'Cart'> | Date | string;
			updatedAt?: DateTimeFilter<'Cart'> | Date | string;
			createdBy?: IntFilter<'Cart'> | number;
			updatedBy?: IntFilter<'Cart'> | number;
			user?: XOR<UserScalarRelationFilter, UserWhereInput>;
			item?: XOR<ItemScalarRelationFilter, ItemWhereInput>;
		},
		'id' | 'userId_itemId'
	>;

	export type CartOrderByWithAggregationInput = {
		id?: SortOrder;
		userId?: SortOrder;
		itemId?: SortOrder;
		quantity?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		createdBy?: SortOrder;
		updatedBy?: SortOrder;
		_count?: CartCountOrderByAggregateInput;
		_avg?: CartAvgOrderByAggregateInput;
		_max?: CartMaxOrderByAggregateInput;
		_min?: CartMinOrderByAggregateInput;
		_sum?: CartSumOrderByAggregateInput;
	};

	export type CartScalarWhereWithAggregatesInput = {
		AND?:
			| CartScalarWhereWithAggregatesInput
			| CartScalarWhereWithAggregatesInput[];
		OR?: CartScalarWhereWithAggregatesInput[];
		NOT?:
			| CartScalarWhereWithAggregatesInput
			| CartScalarWhereWithAggregatesInput[];
		id?: IntWithAggregatesFilter<'Cart'> | number;
		userId?: IntWithAggregatesFilter<'Cart'> | number;
		itemId?: IntWithAggregatesFilter<'Cart'> | number;
		quantity?: IntWithAggregatesFilter<'Cart'> | number;
		createdAt?: DateTimeWithAggregatesFilter<'Cart'> | Date | string;
		updatedAt?: DateTimeWithAggregatesFilter<'Cart'> | Date | string;
		createdBy?: IntWithAggregatesFilter<'Cart'> | number;
		updatedBy?: IntWithAggregatesFilter<'Cart'> | number;
	};

	export type TokenBlocklistWhereInput = {
		AND?: TokenBlocklistWhereInput | TokenBlocklistWhereInput[];
		OR?: TokenBlocklistWhereInput[];
		NOT?: TokenBlocklistWhereInput | TokenBlocklistWhereInput[];
		id?: StringFilter<'TokenBlocklist'> | string;
		token?: StringFilter<'TokenBlocklist'> | string;
		expiresAt?: DateTimeFilter<'TokenBlocklist'> | Date | string;
		createdAt?: DateTimeFilter<'TokenBlocklist'> | Date | string;
	};

	export type TokenBlocklistOrderByWithRelationInput = {
		id?: SortOrder;
		token?: SortOrder;
		expiresAt?: SortOrder;
		createdAt?: SortOrder;
	};

	export type TokenBlocklistWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			token?: string;
			AND?: TokenBlocklistWhereInput | TokenBlocklistWhereInput[];
			OR?: TokenBlocklistWhereInput[];
			NOT?: TokenBlocklistWhereInput | TokenBlocklistWhereInput[];
			expiresAt?: DateTimeFilter<'TokenBlocklist'> | Date | string;
			createdAt?: DateTimeFilter<'TokenBlocklist'> | Date | string;
		},
		'id' | 'token'
	>;

	export type TokenBlocklistOrderByWithAggregationInput = {
		id?: SortOrder;
		token?: SortOrder;
		expiresAt?: SortOrder;
		createdAt?: SortOrder;
		_count?: TokenBlocklistCountOrderByAggregateInput;
		_max?: TokenBlocklistMaxOrderByAggregateInput;
		_min?: TokenBlocklistMinOrderByAggregateInput;
	};

	export type TokenBlocklistScalarWhereWithAggregatesInput = {
		AND?:
			| TokenBlocklistScalarWhereWithAggregatesInput
			| TokenBlocklistScalarWhereWithAggregatesInput[];
		OR?: TokenBlocklistScalarWhereWithAggregatesInput[];
		NOT?:
			| TokenBlocklistScalarWhereWithAggregatesInput
			| TokenBlocklistScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<'TokenBlocklist'> | string;
		token?: StringWithAggregatesFilter<'TokenBlocklist'> | string;
		expiresAt?: DateTimeWithAggregatesFilter<'TokenBlocklist'> | Date | string;
		createdAt?: DateTimeWithAggregatesFilter<'TokenBlocklist'> | Date | string;
	};

	export type UserCreateInput = {
		name: string;
		email: string;
		password: string;
		isAdmin?: boolean;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		carts?: CartCreateNestedManyWithoutUserInput;
	};

	export type UserUncheckedCreateInput = {
		id?: number;
		name: string;
		email: string;
		password: string;
		isAdmin?: boolean;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		carts?: CartUncheckedCreateNestedManyWithoutUserInput;
	};

	export type UserUpdateInput = {
		name?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		password?: StringFieldUpdateOperationsInput | string;
		isAdmin?: BoolFieldUpdateOperationsInput | boolean;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		carts?: CartUpdateManyWithoutUserNestedInput;
	};

	export type UserUncheckedUpdateInput = {
		id?: IntFieldUpdateOperationsInput | number;
		name?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		password?: StringFieldUpdateOperationsInput | string;
		isAdmin?: BoolFieldUpdateOperationsInput | boolean;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		carts?: CartUncheckedUpdateManyWithoutUserNestedInput;
	};

	export type UserCreateManyInput = {
		id?: number;
		name: string;
		email: string;
		password: string;
		isAdmin?: boolean;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type UserUpdateManyMutationInput = {
		name?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		password?: StringFieldUpdateOperationsInput | string;
		isAdmin?: BoolFieldUpdateOperationsInput | boolean;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type UserUncheckedUpdateManyInput = {
		id?: IntFieldUpdateOperationsInput | number;
		name?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		password?: StringFieldUpdateOperationsInput | string;
		isAdmin?: BoolFieldUpdateOperationsInput | boolean;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ItemCreateInput = {
		name: string;
		price: number;
		content: string;
		image?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		carts?: CartCreateNestedManyWithoutItemInput;
	};

	export type ItemUncheckedCreateInput = {
		id?: number;
		name: string;
		price: number;
		content: string;
		image?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		carts?: CartUncheckedCreateNestedManyWithoutItemInput;
	};

	export type ItemUpdateInput = {
		name?: StringFieldUpdateOperationsInput | string;
		price?: IntFieldUpdateOperationsInput | number;
		content?: StringFieldUpdateOperationsInput | string;
		image?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		carts?: CartUpdateManyWithoutItemNestedInput;
	};

	export type ItemUncheckedUpdateInput = {
		id?: IntFieldUpdateOperationsInput | number;
		name?: StringFieldUpdateOperationsInput | string;
		price?: IntFieldUpdateOperationsInput | number;
		content?: StringFieldUpdateOperationsInput | string;
		image?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		carts?: CartUncheckedUpdateManyWithoutItemNestedInput;
	};

	export type ItemCreateManyInput = {
		id?: number;
		name: string;
		price: number;
		content: string;
		image?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type ItemUpdateManyMutationInput = {
		name?: StringFieldUpdateOperationsInput | string;
		price?: IntFieldUpdateOperationsInput | number;
		content?: StringFieldUpdateOperationsInput | string;
		image?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ItemUncheckedUpdateManyInput = {
		id?: IntFieldUpdateOperationsInput | number;
		name?: StringFieldUpdateOperationsInput | string;
		price?: IntFieldUpdateOperationsInput | number;
		content?: StringFieldUpdateOperationsInput | string;
		image?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type CartCreateInput = {
		quantity: number;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		createdBy?: number;
		updatedBy?: number;
		user: UserCreateNestedOneWithoutCartsInput;
		item: ItemCreateNestedOneWithoutCartsInput;
	};

	export type CartUncheckedCreateInput = {
		id?: number;
		userId: number;
		itemId: number;
		quantity: number;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		createdBy?: number;
		updatedBy?: number;
	};

	export type CartUpdateInput = {
		quantity?: IntFieldUpdateOperationsInput | number;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		createdBy?: IntFieldUpdateOperationsInput | number;
		updatedBy?: IntFieldUpdateOperationsInput | number;
		user?: UserUpdateOneRequiredWithoutCartsNestedInput;
		item?: ItemUpdateOneRequiredWithoutCartsNestedInput;
	};

	export type CartUncheckedUpdateInput = {
		id?: IntFieldUpdateOperationsInput | number;
		userId?: IntFieldUpdateOperationsInput | number;
		itemId?: IntFieldUpdateOperationsInput | number;
		quantity?: IntFieldUpdateOperationsInput | number;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		createdBy?: IntFieldUpdateOperationsInput | number;
		updatedBy?: IntFieldUpdateOperationsInput | number;
	};

	export type CartCreateManyInput = {
		id?: number;
		userId: number;
		itemId: number;
		quantity: number;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		createdBy?: number;
		updatedBy?: number;
	};

	export type CartUpdateManyMutationInput = {
		quantity?: IntFieldUpdateOperationsInput | number;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		createdBy?: IntFieldUpdateOperationsInput | number;
		updatedBy?: IntFieldUpdateOperationsInput | number;
	};

	export type CartUncheckedUpdateManyInput = {
		id?: IntFieldUpdateOperationsInput | number;
		userId?: IntFieldUpdateOperationsInput | number;
		itemId?: IntFieldUpdateOperationsInput | number;
		quantity?: IntFieldUpdateOperationsInput | number;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		createdBy?: IntFieldUpdateOperationsInput | number;
		updatedBy?: IntFieldUpdateOperationsInput | number;
	};

	export type TokenBlocklistCreateInput = {
		id?: string;
		token: string;
		expiresAt: Date | string;
		createdAt?: Date | string;
	};

	export type TokenBlocklistUncheckedCreateInput = {
		id?: string;
		token: string;
		expiresAt: Date | string;
		createdAt?: Date | string;
	};

	export type TokenBlocklistUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		token?: StringFieldUpdateOperationsInput | string;
		expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type TokenBlocklistUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		token?: StringFieldUpdateOperationsInput | string;
		expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type TokenBlocklistCreateManyInput = {
		id?: string;
		token: string;
		expiresAt: Date | string;
		createdAt?: Date | string;
	};

	export type TokenBlocklistUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		token?: StringFieldUpdateOperationsInput | string;
		expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type TokenBlocklistUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		token?: StringFieldUpdateOperationsInput | string;
		expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type IntFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntFilter<$PrismaModel> | number;
	};

	export type StringFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?: NestedStringFilter<$PrismaModel> | string;
	};

	export type BoolFilter<$PrismaModel = never> = {
		equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
		not?: NestedBoolFilter<$PrismaModel> | boolean;
	};

	export type DateTimeFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
	};

	export type CartListRelationFilter = {
		every?: CartWhereInput;
		some?: CartWhereInput;
		none?: CartWhereInput;
	};

	export type CartOrderByRelationAggregateInput = {
		_count?: SortOrder;
	};

	export type UserCountOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		email?: SortOrder;
		password?: SortOrder;
		isAdmin?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type UserAvgOrderByAggregateInput = {
		id?: SortOrder;
	};

	export type UserMaxOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		email?: SortOrder;
		password?: SortOrder;
		isAdmin?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type UserMinOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		email?: SortOrder;
		password?: SortOrder;
		isAdmin?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type UserSumOrderByAggregateInput = {
		id?: SortOrder;
	};

	export type IntWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
		_count?: NestedIntFilter<$PrismaModel>;
		_avg?: NestedFloatFilter<$PrismaModel>;
		_sum?: NestedIntFilter<$PrismaModel>;
		_min?: NestedIntFilter<$PrismaModel>;
		_max?: NestedIntFilter<$PrismaModel>;
	};

	export type StringWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedStringFilter<$PrismaModel>;
		_max?: NestedStringFilter<$PrismaModel>;
	};

	export type BoolWithAggregatesFilter<$PrismaModel = never> = {
		equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
		not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedBoolFilter<$PrismaModel>;
		_max?: NestedBoolFilter<$PrismaModel>;
	};

	export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedDateTimeFilter<$PrismaModel>;
		_max?: NestedDateTimeFilter<$PrismaModel>;
	};

	export type StringNullableFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null;
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?: NestedStringNullableFilter<$PrismaModel> | string | null;
	};

	export type SortOrderInput = {
		sort: SortOrder;
		nulls?: NullsOrder;
	};

	export type ItemCountOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		price?: SortOrder;
		content?: SortOrder;
		image?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type ItemAvgOrderByAggregateInput = {
		id?: SortOrder;
		price?: SortOrder;
	};

	export type ItemMaxOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		price?: SortOrder;
		content?: SortOrder;
		image?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type ItemMinOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		price?: SortOrder;
		content?: SortOrder;
		image?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type ItemSumOrderByAggregateInput = {
		id?: SortOrder;
		price?: SortOrder;
	};

	export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null;
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?:
			| NestedStringNullableWithAggregatesFilter<$PrismaModel>
			| string
			| null;
		_count?: NestedIntNullableFilter<$PrismaModel>;
		_min?: NestedStringNullableFilter<$PrismaModel>;
		_max?: NestedStringNullableFilter<$PrismaModel>;
	};

	export type UserScalarRelationFilter = {
		is?: UserWhereInput;
		isNot?: UserWhereInput;
	};

	export type ItemScalarRelationFilter = {
		is?: ItemWhereInput;
		isNot?: ItemWhereInput;
	};

	export type CartUserIdItemIdCompoundUniqueInput = {
		userId: number;
		itemId: number;
	};

	export type CartCountOrderByAggregateInput = {
		id?: SortOrder;
		userId?: SortOrder;
		itemId?: SortOrder;
		quantity?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		createdBy?: SortOrder;
		updatedBy?: SortOrder;
	};

	export type CartAvgOrderByAggregateInput = {
		id?: SortOrder;
		userId?: SortOrder;
		itemId?: SortOrder;
		quantity?: SortOrder;
		createdBy?: SortOrder;
		updatedBy?: SortOrder;
	};

	export type CartMaxOrderByAggregateInput = {
		id?: SortOrder;
		userId?: SortOrder;
		itemId?: SortOrder;
		quantity?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		createdBy?: SortOrder;
		updatedBy?: SortOrder;
	};

	export type CartMinOrderByAggregateInput = {
		id?: SortOrder;
		userId?: SortOrder;
		itemId?: SortOrder;
		quantity?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		createdBy?: SortOrder;
		updatedBy?: SortOrder;
	};

	export type CartSumOrderByAggregateInput = {
		id?: SortOrder;
		userId?: SortOrder;
		itemId?: SortOrder;
		quantity?: SortOrder;
		createdBy?: SortOrder;
		updatedBy?: SortOrder;
	};

	export type TokenBlocklistCountOrderByAggregateInput = {
		id?: SortOrder;
		token?: SortOrder;
		expiresAt?: SortOrder;
		createdAt?: SortOrder;
	};

	export type TokenBlocklistMaxOrderByAggregateInput = {
		id?: SortOrder;
		token?: SortOrder;
		expiresAt?: SortOrder;
		createdAt?: SortOrder;
	};

	export type TokenBlocklistMinOrderByAggregateInput = {
		id?: SortOrder;
		token?: SortOrder;
		expiresAt?: SortOrder;
		createdAt?: SortOrder;
	};

	export type CartCreateNestedManyWithoutUserInput = {
		create?:
			| XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
			| CartCreateWithoutUserInput[]
			| CartUncheckedCreateWithoutUserInput[];
		connectOrCreate?:
			| CartCreateOrConnectWithoutUserInput
			| CartCreateOrConnectWithoutUserInput[];
		createMany?: CartCreateManyUserInputEnvelope;
		connect?: CartWhereUniqueInput | CartWhereUniqueInput[];
	};

	export type CartUncheckedCreateNestedManyWithoutUserInput = {
		create?:
			| XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
			| CartCreateWithoutUserInput[]
			| CartUncheckedCreateWithoutUserInput[];
		connectOrCreate?:
			| CartCreateOrConnectWithoutUserInput
			| CartCreateOrConnectWithoutUserInput[];
		createMany?: CartCreateManyUserInputEnvelope;
		connect?: CartWhereUniqueInput | CartWhereUniqueInput[];
	};

	export type StringFieldUpdateOperationsInput = {
		set?: string;
	};

	export type BoolFieldUpdateOperationsInput = {
		set?: boolean;
	};

	export type DateTimeFieldUpdateOperationsInput = {
		set?: Date | string;
	};

	export type CartUpdateManyWithoutUserNestedInput = {
		create?:
			| XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
			| CartCreateWithoutUserInput[]
			| CartUncheckedCreateWithoutUserInput[];
		connectOrCreate?:
			| CartCreateOrConnectWithoutUserInput
			| CartCreateOrConnectWithoutUserInput[];
		upsert?:
			| CartUpsertWithWhereUniqueWithoutUserInput
			| CartUpsertWithWhereUniqueWithoutUserInput[];
		createMany?: CartCreateManyUserInputEnvelope;
		set?: CartWhereUniqueInput | CartWhereUniqueInput[];
		disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[];
		delete?: CartWhereUniqueInput | CartWhereUniqueInput[];
		connect?: CartWhereUniqueInput | CartWhereUniqueInput[];
		update?:
			| CartUpdateWithWhereUniqueWithoutUserInput
			| CartUpdateWithWhereUniqueWithoutUserInput[];
		updateMany?:
			| CartUpdateManyWithWhereWithoutUserInput
			| CartUpdateManyWithWhereWithoutUserInput[];
		deleteMany?: CartScalarWhereInput | CartScalarWhereInput[];
	};

	export type IntFieldUpdateOperationsInput = {
		set?: number;
		increment?: number;
		decrement?: number;
		multiply?: number;
		divide?: number;
	};

	export type CartUncheckedUpdateManyWithoutUserNestedInput = {
		create?:
			| XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
			| CartCreateWithoutUserInput[]
			| CartUncheckedCreateWithoutUserInput[];
		connectOrCreate?:
			| CartCreateOrConnectWithoutUserInput
			| CartCreateOrConnectWithoutUserInput[];
		upsert?:
			| CartUpsertWithWhereUniqueWithoutUserInput
			| CartUpsertWithWhereUniqueWithoutUserInput[];
		createMany?: CartCreateManyUserInputEnvelope;
		set?: CartWhereUniqueInput | CartWhereUniqueInput[];
		disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[];
		delete?: CartWhereUniqueInput | CartWhereUniqueInput[];
		connect?: CartWhereUniqueInput | CartWhereUniqueInput[];
		update?:
			| CartUpdateWithWhereUniqueWithoutUserInput
			| CartUpdateWithWhereUniqueWithoutUserInput[];
		updateMany?:
			| CartUpdateManyWithWhereWithoutUserInput
			| CartUpdateManyWithWhereWithoutUserInput[];
		deleteMany?: CartScalarWhereInput | CartScalarWhereInput[];
	};

	export type CartCreateNestedManyWithoutItemInput = {
		create?:
			| XOR<CartCreateWithoutItemInput, CartUncheckedCreateWithoutItemInput>
			| CartCreateWithoutItemInput[]
			| CartUncheckedCreateWithoutItemInput[];
		connectOrCreate?:
			| CartCreateOrConnectWithoutItemInput
			| CartCreateOrConnectWithoutItemInput[];
		createMany?: CartCreateManyItemInputEnvelope;
		connect?: CartWhereUniqueInput | CartWhereUniqueInput[];
	};

	export type CartUncheckedCreateNestedManyWithoutItemInput = {
		create?:
			| XOR<CartCreateWithoutItemInput, CartUncheckedCreateWithoutItemInput>
			| CartCreateWithoutItemInput[]
			| CartUncheckedCreateWithoutItemInput[];
		connectOrCreate?:
			| CartCreateOrConnectWithoutItemInput
			| CartCreateOrConnectWithoutItemInput[];
		createMany?: CartCreateManyItemInputEnvelope;
		connect?: CartWhereUniqueInput | CartWhereUniqueInput[];
	};

	export type NullableStringFieldUpdateOperationsInput = {
		set?: string | null;
	};

	export type CartUpdateManyWithoutItemNestedInput = {
		create?:
			| XOR<CartCreateWithoutItemInput, CartUncheckedCreateWithoutItemInput>
			| CartCreateWithoutItemInput[]
			| CartUncheckedCreateWithoutItemInput[];
		connectOrCreate?:
			| CartCreateOrConnectWithoutItemInput
			| CartCreateOrConnectWithoutItemInput[];
		upsert?:
			| CartUpsertWithWhereUniqueWithoutItemInput
			| CartUpsertWithWhereUniqueWithoutItemInput[];
		createMany?: CartCreateManyItemInputEnvelope;
		set?: CartWhereUniqueInput | CartWhereUniqueInput[];
		disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[];
		delete?: CartWhereUniqueInput | CartWhereUniqueInput[];
		connect?: CartWhereUniqueInput | CartWhereUniqueInput[];
		update?:
			| CartUpdateWithWhereUniqueWithoutItemInput
			| CartUpdateWithWhereUniqueWithoutItemInput[];
		updateMany?:
			| CartUpdateManyWithWhereWithoutItemInput
			| CartUpdateManyWithWhereWithoutItemInput[];
		deleteMany?: CartScalarWhereInput | CartScalarWhereInput[];
	};

	export type CartUncheckedUpdateManyWithoutItemNestedInput = {
		create?:
			| XOR<CartCreateWithoutItemInput, CartUncheckedCreateWithoutItemInput>
			| CartCreateWithoutItemInput[]
			| CartUncheckedCreateWithoutItemInput[];
		connectOrCreate?:
			| CartCreateOrConnectWithoutItemInput
			| CartCreateOrConnectWithoutItemInput[];
		upsert?:
			| CartUpsertWithWhereUniqueWithoutItemInput
			| CartUpsertWithWhereUniqueWithoutItemInput[];
		createMany?: CartCreateManyItemInputEnvelope;
		set?: CartWhereUniqueInput | CartWhereUniqueInput[];
		disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[];
		delete?: CartWhereUniqueInput | CartWhereUniqueInput[];
		connect?: CartWhereUniqueInput | CartWhereUniqueInput[];
		update?:
			| CartUpdateWithWhereUniqueWithoutItemInput
			| CartUpdateWithWhereUniqueWithoutItemInput[];
		updateMany?:
			| CartUpdateManyWithWhereWithoutItemInput
			| CartUpdateManyWithWhereWithoutItemInput[];
		deleteMany?: CartScalarWhereInput | CartScalarWhereInput[];
	};

	export type UserCreateNestedOneWithoutCartsInput = {
		create?: XOR<
			UserCreateWithoutCartsInput,
			UserUncheckedCreateWithoutCartsInput
		>;
		connectOrCreate?: UserCreateOrConnectWithoutCartsInput;
		connect?: UserWhereUniqueInput;
	};

	export type ItemCreateNestedOneWithoutCartsInput = {
		create?: XOR<
			ItemCreateWithoutCartsInput,
			ItemUncheckedCreateWithoutCartsInput
		>;
		connectOrCreate?: ItemCreateOrConnectWithoutCartsInput;
		connect?: ItemWhereUniqueInput;
	};

	export type UserUpdateOneRequiredWithoutCartsNestedInput = {
		create?: XOR<
			UserCreateWithoutCartsInput,
			UserUncheckedCreateWithoutCartsInput
		>;
		connectOrCreate?: UserCreateOrConnectWithoutCartsInput;
		upsert?: UserUpsertWithoutCartsInput;
		connect?: UserWhereUniqueInput;
		update?: XOR<
			XOR<
				UserUpdateToOneWithWhereWithoutCartsInput,
				UserUpdateWithoutCartsInput
			>,
			UserUncheckedUpdateWithoutCartsInput
		>;
	};

	export type ItemUpdateOneRequiredWithoutCartsNestedInput = {
		create?: XOR<
			ItemCreateWithoutCartsInput,
			ItemUncheckedCreateWithoutCartsInput
		>;
		connectOrCreate?: ItemCreateOrConnectWithoutCartsInput;
		upsert?: ItemUpsertWithoutCartsInput;
		connect?: ItemWhereUniqueInput;
		update?: XOR<
			XOR<
				ItemUpdateToOneWithWhereWithoutCartsInput,
				ItemUpdateWithoutCartsInput
			>,
			ItemUncheckedUpdateWithoutCartsInput
		>;
	};

	export type NestedIntFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntFilter<$PrismaModel> | number;
	};

	export type NestedStringFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?: NestedStringFilter<$PrismaModel> | string;
	};

	export type NestedBoolFilter<$PrismaModel = never> = {
		equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
		not?: NestedBoolFilter<$PrismaModel> | boolean;
	};

	export type NestedDateTimeFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
	};

	export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
		_count?: NestedIntFilter<$PrismaModel>;
		_avg?: NestedFloatFilter<$PrismaModel>;
		_sum?: NestedIntFilter<$PrismaModel>;
		_min?: NestedIntFilter<$PrismaModel>;
		_max?: NestedIntFilter<$PrismaModel>;
	};

	export type NestedFloatFilter<$PrismaModel = never> = {
		equals?: number | FloatFieldRefInput<$PrismaModel>;
		in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		lt?: number | FloatFieldRefInput<$PrismaModel>;
		lte?: number | FloatFieldRefInput<$PrismaModel>;
		gt?: number | FloatFieldRefInput<$PrismaModel>;
		gte?: number | FloatFieldRefInput<$PrismaModel>;
		not?: NestedFloatFilter<$PrismaModel> | number;
	};

	export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedStringFilter<$PrismaModel>;
		_max?: NestedStringFilter<$PrismaModel>;
	};

	export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
		equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
		not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedBoolFilter<$PrismaModel>;
		_max?: NestedBoolFilter<$PrismaModel>;
	};

	export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedDateTimeFilter<$PrismaModel>;
		_max?: NestedDateTimeFilter<$PrismaModel>;
	};

	export type NestedStringNullableFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null;
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?: NestedStringNullableFilter<$PrismaModel> | string | null;
	};

	export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null;
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?:
			| NestedStringNullableWithAggregatesFilter<$PrismaModel>
			| string
			| null;
		_count?: NestedIntNullableFilter<$PrismaModel>;
		_min?: NestedStringNullableFilter<$PrismaModel>;
		_max?: NestedStringNullableFilter<$PrismaModel>;
	};

	export type NestedIntNullableFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel> | null;
		in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntNullableFilter<$PrismaModel> | number | null;
	};

	export type CartCreateWithoutUserInput = {
		quantity: number;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		createdBy?: number;
		updatedBy?: number;
		item: ItemCreateNestedOneWithoutCartsInput;
	};

	export type CartUncheckedCreateWithoutUserInput = {
		id?: number;
		itemId: number;
		quantity: number;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		createdBy?: number;
		updatedBy?: number;
	};

	export type CartCreateOrConnectWithoutUserInput = {
		where: CartWhereUniqueInput;
		create: XOR<
			CartCreateWithoutUserInput,
			CartUncheckedCreateWithoutUserInput
		>;
	};

	export type CartCreateManyUserInputEnvelope = {
		data: CartCreateManyUserInput | CartCreateManyUserInput[];
		skipDuplicates?: boolean;
	};

	export type CartUpsertWithWhereUniqueWithoutUserInput = {
		where: CartWhereUniqueInput;
		update: XOR<
			CartUpdateWithoutUserInput,
			CartUncheckedUpdateWithoutUserInput
		>;
		create: XOR<
			CartCreateWithoutUserInput,
			CartUncheckedCreateWithoutUserInput
		>;
	};

	export type CartUpdateWithWhereUniqueWithoutUserInput = {
		where: CartWhereUniqueInput;
		data: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>;
	};

	export type CartUpdateManyWithWhereWithoutUserInput = {
		where: CartScalarWhereInput;
		data: XOR<
			CartUpdateManyMutationInput,
			CartUncheckedUpdateManyWithoutUserInput
		>;
	};

	export type CartScalarWhereInput = {
		AND?: CartScalarWhereInput | CartScalarWhereInput[];
		OR?: CartScalarWhereInput[];
		NOT?: CartScalarWhereInput | CartScalarWhereInput[];
		id?: IntFilter<'Cart'> | number;
		userId?: IntFilter<'Cart'> | number;
		itemId?: IntFilter<'Cart'> | number;
		quantity?: IntFilter<'Cart'> | number;
		createdAt?: DateTimeFilter<'Cart'> | Date | string;
		updatedAt?: DateTimeFilter<'Cart'> | Date | string;
		createdBy?: IntFilter<'Cart'> | number;
		updatedBy?: IntFilter<'Cart'> | number;
	};

	export type CartCreateWithoutItemInput = {
		quantity: number;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		createdBy?: number;
		updatedBy?: number;
		user: UserCreateNestedOneWithoutCartsInput;
	};

	export type CartUncheckedCreateWithoutItemInput = {
		id?: number;
		userId: number;
		quantity: number;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		createdBy?: number;
		updatedBy?: number;
	};

	export type CartCreateOrConnectWithoutItemInput = {
		where: CartWhereUniqueInput;
		create: XOR<
			CartCreateWithoutItemInput,
			CartUncheckedCreateWithoutItemInput
		>;
	};

	export type CartCreateManyItemInputEnvelope = {
		data: CartCreateManyItemInput | CartCreateManyItemInput[];
		skipDuplicates?: boolean;
	};

	export type CartUpsertWithWhereUniqueWithoutItemInput = {
		where: CartWhereUniqueInput;
		update: XOR<
			CartUpdateWithoutItemInput,
			CartUncheckedUpdateWithoutItemInput
		>;
		create: XOR<
			CartCreateWithoutItemInput,
			CartUncheckedCreateWithoutItemInput
		>;
	};

	export type CartUpdateWithWhereUniqueWithoutItemInput = {
		where: CartWhereUniqueInput;
		data: XOR<CartUpdateWithoutItemInput, CartUncheckedUpdateWithoutItemInput>;
	};

	export type CartUpdateManyWithWhereWithoutItemInput = {
		where: CartScalarWhereInput;
		data: XOR<
			CartUpdateManyMutationInput,
			CartUncheckedUpdateManyWithoutItemInput
		>;
	};

	export type UserCreateWithoutCartsInput = {
		name: string;
		email: string;
		password: string;
		isAdmin?: boolean;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type UserUncheckedCreateWithoutCartsInput = {
		id?: number;
		name: string;
		email: string;
		password: string;
		isAdmin?: boolean;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type UserCreateOrConnectWithoutCartsInput = {
		where: UserWhereUniqueInput;
		create: XOR<
			UserCreateWithoutCartsInput,
			UserUncheckedCreateWithoutCartsInput
		>;
	};

	export type ItemCreateWithoutCartsInput = {
		name: string;
		price: number;
		content: string;
		image?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type ItemUncheckedCreateWithoutCartsInput = {
		id?: number;
		name: string;
		price: number;
		content: string;
		image?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type ItemCreateOrConnectWithoutCartsInput = {
		where: ItemWhereUniqueInput;
		create: XOR<
			ItemCreateWithoutCartsInput,
			ItemUncheckedCreateWithoutCartsInput
		>;
	};

	export type UserUpsertWithoutCartsInput = {
		update: XOR<
			UserUpdateWithoutCartsInput,
			UserUncheckedUpdateWithoutCartsInput
		>;
		create: XOR<
			UserCreateWithoutCartsInput,
			UserUncheckedCreateWithoutCartsInput
		>;
		where?: UserWhereInput;
	};

	export type UserUpdateToOneWithWhereWithoutCartsInput = {
		where?: UserWhereInput;
		data: XOR<
			UserUpdateWithoutCartsInput,
			UserUncheckedUpdateWithoutCartsInput
		>;
	};

	export type UserUpdateWithoutCartsInput = {
		name?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		password?: StringFieldUpdateOperationsInput | string;
		isAdmin?: BoolFieldUpdateOperationsInput | boolean;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type UserUncheckedUpdateWithoutCartsInput = {
		id?: IntFieldUpdateOperationsInput | number;
		name?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		password?: StringFieldUpdateOperationsInput | string;
		isAdmin?: BoolFieldUpdateOperationsInput | boolean;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ItemUpsertWithoutCartsInput = {
		update: XOR<
			ItemUpdateWithoutCartsInput,
			ItemUncheckedUpdateWithoutCartsInput
		>;
		create: XOR<
			ItemCreateWithoutCartsInput,
			ItemUncheckedCreateWithoutCartsInput
		>;
		where?: ItemWhereInput;
	};

	export type ItemUpdateToOneWithWhereWithoutCartsInput = {
		where?: ItemWhereInput;
		data: XOR<
			ItemUpdateWithoutCartsInput,
			ItemUncheckedUpdateWithoutCartsInput
		>;
	};

	export type ItemUpdateWithoutCartsInput = {
		name?: StringFieldUpdateOperationsInput | string;
		price?: IntFieldUpdateOperationsInput | number;
		content?: StringFieldUpdateOperationsInput | string;
		image?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ItemUncheckedUpdateWithoutCartsInput = {
		id?: IntFieldUpdateOperationsInput | number;
		name?: StringFieldUpdateOperationsInput | string;
		price?: IntFieldUpdateOperationsInput | number;
		content?: StringFieldUpdateOperationsInput | string;
		image?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type CartCreateManyUserInput = {
		id?: number;
		itemId: number;
		quantity: number;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		createdBy?: number;
		updatedBy?: number;
	};

	export type CartUpdateWithoutUserInput = {
		quantity?: IntFieldUpdateOperationsInput | number;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		createdBy?: IntFieldUpdateOperationsInput | number;
		updatedBy?: IntFieldUpdateOperationsInput | number;
		item?: ItemUpdateOneRequiredWithoutCartsNestedInput;
	};

	export type CartUncheckedUpdateWithoutUserInput = {
		id?: IntFieldUpdateOperationsInput | number;
		itemId?: IntFieldUpdateOperationsInput | number;
		quantity?: IntFieldUpdateOperationsInput | number;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		createdBy?: IntFieldUpdateOperationsInput | number;
		updatedBy?: IntFieldUpdateOperationsInput | number;
	};

	export type CartUncheckedUpdateManyWithoutUserInput = {
		id?: IntFieldUpdateOperationsInput | number;
		itemId?: IntFieldUpdateOperationsInput | number;
		quantity?: IntFieldUpdateOperationsInput | number;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		createdBy?: IntFieldUpdateOperationsInput | number;
		updatedBy?: IntFieldUpdateOperationsInput | number;
	};

	export type CartCreateManyItemInput = {
		id?: number;
		userId: number;
		quantity: number;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		createdBy?: number;
		updatedBy?: number;
	};

	export type CartUpdateWithoutItemInput = {
		quantity?: IntFieldUpdateOperationsInput | number;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		createdBy?: IntFieldUpdateOperationsInput | number;
		updatedBy?: IntFieldUpdateOperationsInput | number;
		user?: UserUpdateOneRequiredWithoutCartsNestedInput;
	};

	export type CartUncheckedUpdateWithoutItemInput = {
		id?: IntFieldUpdateOperationsInput | number;
		userId?: IntFieldUpdateOperationsInput | number;
		quantity?: IntFieldUpdateOperationsInput | number;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		createdBy?: IntFieldUpdateOperationsInput | number;
		updatedBy?: IntFieldUpdateOperationsInput | number;
	};

	export type CartUncheckedUpdateManyWithoutItemInput = {
		id?: IntFieldUpdateOperationsInput | number;
		userId?: IntFieldUpdateOperationsInput | number;
		quantity?: IntFieldUpdateOperationsInput | number;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		createdBy?: IntFieldUpdateOperationsInput | number;
		updatedBy?: IntFieldUpdateOperationsInput | number;
	};

	/**
	 * Batch Payload for updateMany & deleteMany & createMany
	 */

	export type BatchPayload = {
		count: number;
	};

	/**
	 * DMMF
	 */
	export const dmmf: runtime.BaseDMMF;
}
