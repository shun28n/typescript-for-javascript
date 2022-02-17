export {};

// 抽象メソッドは抽象クラス内でのみ
// *抽象クラス：抽象メソッドを有するクラス
abstract class Animal {
  abstract cry(): string;
}

// 抽象メソッドは必ずオーバーライドをしなければいけない
// 実装漏れはコンパイラが教えてくれる。
class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

class Tiger extends Animal {
  cry() {
    return 'grrr';
  }
}
