export {};

class Person {
  public name: string;
  // private age: number;
  protected age: number;
  protected nationality: string;

  // コンストラクターは戻り値の型は指定しない。returnしないため
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name},age: ${this.age}, nationality: ${this.nationality}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality); // 親クラスの同名のメソッドを使うことができる
  }

  profile(): string {
    // 継承してきたprivateにはアクセスできない。protectedは可能
    return `name: ${this.name},age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let taro = new Person('Taro', 30, 'Japan');
console.log(taro.profile());
console.log(taro.name);
// console.log(taro.age); //privateはインスタンスからのアクセスはできない
