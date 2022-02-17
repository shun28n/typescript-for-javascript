export {};

// 普通のクラスはnew で具体的なオブジェクトからメンバを持たせることができた
// それぞれのオブジェクトはユニークなもの。動的なメンバ

// いつも決まった変化しないメンバ。newしなくてもアクセスしたい場合
// 静的なメンバを用いる。

class Me {
  // メンバそれぞれにstaticをつける
  static isProgrammer: boolean = true;
  static firstName: string = 'Shun';
  static lastName: string = 'Naka';

  static work() {
    // Me.firstNameで呼び出すと継承した際に修正が必要になる。thisで抽象的にがおすすめ
    return `Hey guys !!!! This is ${this.firstName}`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer);
console.log(Me.work());
