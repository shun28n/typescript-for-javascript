export {};

// Nullabel Types 何か値を設定するときに、まだ確定でない時に使用
// 型付けした変数にnullを使用したい時
// tsconfig.jsonのプロパティの'strictNullChecks'をfalseにすることでnullを代入できるが
// なんにでもnullを入れることは望ましくないので一般的にはよくない。
// union型を利用してnullを許容する。

let profile: { name: string; age: number | null } = {
  name: 'Shun',
  age: null,
};
