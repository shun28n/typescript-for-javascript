export {};

class Person {
  // TypeScriptの特殊な記法
  // コンストラクターにアクセス修飾子を書くと自動で初期化処理をしてくれる。
  constructor(public name: string, protected age: number) {}
}

const me = new Person('Shun', 25);

console.log(me);
