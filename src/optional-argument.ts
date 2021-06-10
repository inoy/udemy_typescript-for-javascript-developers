export {};

let bmi = (height: number, weight: number, printable?: boolean): number => {
  const bmi: number = weight / (height * height);
  if (printable) console.log({ bmi });
  return bmi;
};

// bmi(身長,　体重, console.logで出力するかどうか)
console.log(bmi(1.78, 86));
console.log(bmi(1.78, 86, true));
console.log(bmi(1.78, 86, false));
