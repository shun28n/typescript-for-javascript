export {};

// * owner
//  *所有者、
//   初期化時に設定できる。
//   途中で変更できない。
//   参照できる。

// * secretNumber
//  *個人番号
//   初期化時に設定できる。
//   途中で変更できる。
//   参照できない。

class MyNumberCard {
  private _owner: string; // アンダースコアにして重複を返す慣習 getterとの
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  // 参照専用のメソッド getキーワード
  get owner() {
    return this._owner;
  }

  // 値の設定専用のメソッド setキーワード
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('shun', 123456789);
console.log(card.debugPrint());

card.secretNumber = 1122334455;

console.log(card.debugPrint());
