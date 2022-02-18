export {};
// exclude-extract-nonnullable.tsを元に仕組みを理解

/**
 * Exclude from T those types that are assignable to U
 * distributes conditional types ユニオン型を配布して条件によって変換
 */
// type MyExclude<T, U> = T extends U ? never : T;
// type MyExclude =
//   | (string extends string | number ? never : string) // (string extends string | number) == true → never
//   | (number extends string | number ? never : number) // (number extends string | number) == true → never
//   | (DebugType extends string | number ? never : DebugType); // (DebugType extends string | number) == false → DebugType
type MyExclude = never | never | DebugType;

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude;

type FunctionTypeExtract = Extract<SomeTypes, DebugType>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
