export {};

// return型
// 関数の戻り値の型を返してくれる,取得できる utility型

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));

// 関数の型をReturnTypeの方引数に渡してあげる
type ReturnTypeFromAdd = ReturnType<typeof add>;
