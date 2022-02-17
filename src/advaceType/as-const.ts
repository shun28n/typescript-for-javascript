export {};

// constアサーション
// データの書き換えは行わない

let name = 'Shun';

name = 'Naka';

let nickName = 'Shun' as const;

// ネストされているプロパティもすべてreadonlyに書き換えてくれる
let profile = {
  name: 'Shun',
  height: 168,
} as const;

// profile.name = 'aaa';
// profile.height = 180;
