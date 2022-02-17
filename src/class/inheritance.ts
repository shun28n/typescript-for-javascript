export {};

class Animal {
  constructor(public name: string) {}

  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal {
  public speed: number;
  // public name: stringだと親と子どちらでも初期化されるので
  // 親にも含まれるメンバはsuper, 含まれないのは子コンストラクタで初期化するのが可読性↑
  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }
  run(): string {
    return `${super.run()} ${this.speed}km/h`; // 親のrunを実行し使用
  }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());
console.log(new Animal('Mickey').run());
console.log(new Lion('Simba', 80).run());
