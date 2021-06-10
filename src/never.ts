export {};

const error = (message: string): never => {
  throw new Error(message);
};

let result;
try {
  result = error('test');
} catch (error) {
  console.log({ error });
} finally {
  console.log({ result });
}

const foo: void = undefined;
// Type 'undefined' is not assignable to type 'never'.ts(2322)
// const bar: never = undefined;
// Type 'null' is not assignable to type 'never'.ts(2322)
// const bar: never = null;
const bar: never = error('only me');
