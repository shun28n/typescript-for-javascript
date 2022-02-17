export {};

// 型アサーション
// 型推論がanyでもnumberにstringを代入するのはいかがなものか
// 型アサーションで制約を加える
// 右辺からくる式で型を断定できたらスマート
// 型が自明の場合はより早い段階で指定する方が型システムではより健全と言える
// 型アサーション：このデータはこの型と示してあげること

let name: any = 'Shun';

// as推奨  <T>だとReactの文法と似てしまうため
// let length: number = name.length;
// let length = name.length as number;
let length = (name as string).length;
// let length = (<string>name).length;

// length = 'foo';
