export {};

// クラスのプロパティを読み取り専用にするもの

class VisaCard {
  // readonly owner: string;

  // 初期化の簡略化の際には修飾子の次に書く
  constructor(public readonly owner: string) {}
}

let card = new VisaCard('shun');
console.log(card.owner);
// card.owner = 'sss';
