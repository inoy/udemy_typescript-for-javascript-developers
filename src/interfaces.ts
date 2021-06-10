export {};

// type ObjectType = { name: string; age: number };
// const object: ObjectType = {
//   name: 'Ham-san',
//   age: 43,
// };

interface ObjectInterface {
  name: string;
  age: number;
}

const object: ObjectInterface = {
  // Type 'boolean' is not assignable to type 'string'.ts(2322)
  //   interfaces.ts(10, 3): The expected type comes from property 'name' which is declared here on type 'ObjectInterface'
  // name: true,
  name: 'Ham-san',
  age: 43,
};
