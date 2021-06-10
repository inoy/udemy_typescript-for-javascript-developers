export {};

type Mojirestu = string;

const fooString: string = 'Hello';
// const fooMojirestu: string
const fooMojirestu: Mojirestu = 'Hello';

const example1 = {
  name: 'Ham',
  age: 43,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'Ham',
  age: 43,
};

type Profile2 = typeof example1;
// Profile2は以下の型定義となる
// type Profile2 = {
//   name: string;
//   age: number;
// }
