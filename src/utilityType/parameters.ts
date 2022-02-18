export {};

// parameters
// ある関数があったときにその関数が受け取る引数と同じ構造の型を取り扱いたいときに重宝するUtility
// 他人が作った関数やライブラリなど容易に触れないものに使える

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('Shun', 25);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['Shune', 25];

debugProfile(...profile);
