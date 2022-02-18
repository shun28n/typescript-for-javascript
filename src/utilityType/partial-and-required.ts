export {};

// 必須とオプショナルを瞬時にまとめて切り替えることができる。

// Partial型
// すべてが必須な型からすべてのプロパティがオプショナルな型を別途定義したくなった際に用いる。
// 丸コピ複製だと元の型に変更があった際に追従するのが難しい。保守性も悪い。

type Profile = {
  name: string;
  age: number;
  zipCode: number;
};

// Profileを型引数に各属性がオプショナルな型（Partial）を作成する
type PartialProfile = Partial<Profile>;

// Required型
// オプショナルなプロパティを含む型を元に全必須の型（Required）作成。
type Profile2 = {
  name: string;
  age?: number;
  zipCode: number;
};

type RequiredProfile = Required<Profile2>;
