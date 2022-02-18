export {};

// constructor
// クラスのインスタンスを作る際の型を抽出する.コンストラクタの引数の型の抽出

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person('Taro', 30);
console.log(taro);

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ['Shun', 25];

const shun = new Person(...profile);
console.log(shun);
