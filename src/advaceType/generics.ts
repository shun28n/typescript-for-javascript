export {};

// ジェネリクス：形容詞として一般的な汎用的なという意味
// 汎用的なクラス、メソッドに対して特定のクラスを紐づけるための仕組み

// 型が異なるだけでやっていることは同じ関数を共通化
// const echo = (arg: number): number => {
//   return arg;
// };
// const echo = (arg: string): string => {
//   return arg;
// };

// ジェネリクスな宣言 T:抽象的な型, 型引数
const echo = <T>(arg: T): T => {
  return arg;
};

//使ってみる
console.log(echo<number>(100));
console.log(echo<string>('Hello'));
console.log(echo<boolean>(true));

// クラスをジェネリクスに
// class Mirror {
//   constructor(public value: number) {}

//   echo(): number {
//     return this.value;
//   }
// }

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}
console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Hello, gene!').echo());
console.log(new Mirror<boolean>(true).echo());
