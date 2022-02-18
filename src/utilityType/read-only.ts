export {};

// Readonly
// 全プロパティ読み取り専用で複製
// Readonly<T>

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Shun',
  age: 25,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Maika',
  age: 25,
};

//friend.age++;

type Yomitorisenyou<T> = {
  readonly [P in keyof T]: T[P];
};
type YomitoriProfile = Yomitorisenyou<Profile>;
