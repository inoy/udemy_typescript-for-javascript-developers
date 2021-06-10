export {};

const func = (): number => 43;

const numberAny: any = func();
const numberUnknown: unknown = func();

const sumAny = numberAny + 10;

// Object is of type 'unknown'.ts(2571)
// const sumUnknown = numberUnknown + 10;

// console.log(typeof numberUnknown); // number
if (typeof numberUnknown === 'number') {
  const sumUnknown = numberUnknown + 10;
}
