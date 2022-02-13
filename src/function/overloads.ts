export {};

function double(value: number): number;
function double(value: string): string;

// オーバーロードは関数の実態では型制約を行わないのでunion型でなくany型
// すべての型を受け取れるようにするため。型の宣言、制約はシグネチャー側でのみ行う
function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
    // シグネチャーによってnum以外はstrしかない
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('Go '));
