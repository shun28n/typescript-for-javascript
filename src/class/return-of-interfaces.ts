export {};

//extends:継承する（単一） interface:実装する（複数）

class Mahotsukai {}
class Souryo {}

class Taro extends Mahotsukai {}

interface Kenja {
  // 処理の実態がわからないような宣言、シグネチャー
  ionazun(): void;
}
interface Senshi {
  kougeki(): void;
}
// implementsしたものの実装しないとエラーが出て実装忘れが減る。ランタイムエラーがなくなる。
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }
  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
