export {};

// 型の互換性 の可否によって代入できるか否かが決まる

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible); // undefined

fooCompatible = barCompatible;

// String型を代入したことでany→stringに変化する
console.log(typeof fooCompatible); // string

let fooIncompatible: string;
let barIncompatible: number;

// fooIncompatible = barIncompatible; // 型に互換性がないからエラー

// string ⇨ string 当然OK
let fooString: string;
let barString: string = 'string';

fooString = barString;

// 文字列リテラル型→文字列型 OK 文字列リテラル型は文字列型の一部だから
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

// 数値リテラル型→数値型 OK 数値型は数値全体を許容するから
let fooNumber: number;
let fooNumberLiteral: 1967 = 1967;
fooNumber = fooNumberLiteral;

// オブジェクト間の代入でも型の互換性は評価される
// 各々の型が一致しているかは気にせず、
// 代入されるオブジェクトの内部で持つオブジェクトのメンバが
// 代入するオブジェクトのメンバにも存在するか
// そのメンバの型に互換性があるかを評価する　　これを『構造的部分型』という
interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(43, 'Shun');
