export {};

let bmi = (height: number, weight: number): number => {
  return weight / (height * height);
};

console.log(bmi(1.7, 60));

let bmi2: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);
