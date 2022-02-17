export {};

// 既存のクラスと同様の名前をつけたい時の機能

// 名前空間　ファイル名でいうフォルダのような機能
namespace Japanese {
  // Japaneseという名前空間に属するPersonクラス
  // 外の空間からアクセスできるように export が必要
  export class Person {
    constructor(public name: string) {}
  }
}

namespace English {
  // Englishという名前空間に属するPersonクラス
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

// Japaneseという名前空間に属するPerson
const me = new Japanese.Person('shun');
console.log(me.name);

const micheal = new English.Person('Mike', 'Joseph', 'Jackson');
console.log(micheal);

// ネストさせてみる
namespace Chinese {
  export namespace Pekin {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Shanhai {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

const china1 = new Chinese.Pekin.Person('PakiPeki');
console.log(china1.name);

const china2 = new Chinese.Shanhai.Person('Shanya');
console.log(china2.name);
