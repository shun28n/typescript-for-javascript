export {};

// exclude:ユニオン型からある型だけ除外したい時

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// Exclude<T, U>   // T:全体のユニオン型, U:不要な型
type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>; // 関数の型を全て除外

// extract: 抽出する
// Extract<T, U>   // T:全体のユニオン型, U:抽出したい型
type FunctionTypeExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeExtract = Extract<SomeTypes, string | number>;
type TypeExtractFunction = Extract<SomeTypes, FunctionType>;

// nonnullable: ユニオン型からNull, undefinedを排除する
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
