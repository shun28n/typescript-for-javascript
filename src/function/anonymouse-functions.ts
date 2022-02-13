export {};

let bmi1 = function (height: number, weight: number): number {
  return weight / (height * height);
};
console.log(bmi1(1.7, 60));

let bmi2: (height: number, weight: number) => number = function (
  height: number,
  weight: number
): number {
  return weight / (height * height);
};
console.log(bmi2(1.7, 60));
