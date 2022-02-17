export {};

// インデックスシグネチャ
// オブジェクトのインデックスつまり<T>に該当する型の署名のこと
// 初期化時の未知のプロパティにも対応できる。

// インデックスシグネチャはコードが長いのでinterface化してもいい
// 既知のプロパティに対応する型もインデックスシグネチャに含める必要がある。
interface Profile {
  name: 'Shun';
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

// let profile: { [index: string]: string | number } = {};
let profile: Profile = { name: 'Shun', underTwenty: false };

// インデックスシグネチャの書き方
// { [index: typeForIndex]:typeForValue }  //index：仮の名前
profile.name = 'Shun';
profile.age = 25;
profile.nationality = 'Japan';
