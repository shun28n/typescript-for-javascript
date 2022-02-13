export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);

  if (printable) {
    console.log(bmi);
  }
  return bmi;
};

bmi(1.7, 60, true);

// bmi(身長, 体重, console.logで出力するかどうか)
// bmi(168, 60, true);
// bmi(168, 60, false);
// bmi(168, 60)
