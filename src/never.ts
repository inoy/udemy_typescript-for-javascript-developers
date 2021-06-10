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
// const bar: never = undefined;
// const bar: never = null;
const bar: never = error('only me');
