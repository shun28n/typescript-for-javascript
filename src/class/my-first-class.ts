export {};

class Person {
  name: string;
  age: number;

  // コンストラクターは戻り値の型は指定しない。returnしないため
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name},age: ${this.age}`;
  }
}
let taro = new Person('Taro', 30);
console.log(taro.profile());
