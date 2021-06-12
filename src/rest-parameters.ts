export {};

const sum = (...values: number[]): number => {
  return values.reduce((accumulator, currentValue) => {
    console.log({ accumulator, currentValue });
    return accumulator + currentValue;
  });
};

console.log(sum(1, 2, 3, 4, 5));
