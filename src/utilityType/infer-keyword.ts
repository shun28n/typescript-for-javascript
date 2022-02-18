export {};

// return型
// 関数の戻り値の型を返してくれる,取得できる utility型

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));

// 関数の型をReturnTypeの方引数に渡してあげる
type ReturnTypeFromAdd = ReturnType<typeof add>;

/**
 * Obtain the return type of a function type
 *
 * infer : 推論する
 * 　　　　　条件を記載する部分に使用できる特殊なキーワード
 * 　　　　　条件としてジェネリクス型を記載できるようになる役割
 * 　　　　　普通は型の直後にしか書けない
 */
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
