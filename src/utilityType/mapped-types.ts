export {};

// Mapped Type
// 一つずつ型を取り出して新しい型を作成するテクニック
// in keyof ある型から要素を一つずつ取り出す

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;

// どのようにPatialに変換しているのか
/**
 * Partialの型定義
 * Make all properties in T optional
 */
type Partial<T> = {
  // keyof T : Tというオブジェクトの型のすべてのプロパティを文字列リテラル型のユニオン型で引っ張ってくる
  // P : keyofで取り出された型を格納。inで１個ずつ取り出してPとして扱うことができる。あるときはname,あるときはage
  // TはProfile型なのでそれぞれのプロパティ nameのstring,ageのnumberを当て、プロパティに ? をつけてオプショナルに
  [P in keyof T]?: T[P];
};

// 自作も可能 オプショナルな上、Nullも許容したい
type OPtionalNullable<T> = { [P in keyof T]?: T[P] | null };

//
