export {};

function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  console.log(typeof value);
  switch (typeof value) {
    case 'number':
      return value * 2;
    case 'string':
      return value + value;
    // number,string 以外の指定は不可のため定義しない。
    // default:
    //   throw 'numberでもstringでもないので、引数の型を確認してください。';
  }
}

console.log(double(100));
console.log(double('Go '));
// overload.ts(6, 10): The call would have succeeded against this implementation, but implementation signatures of overloads are not externally visible.
// console.log(double(true));
// console.log(double(null));
// console.log(double(undefined));

type Triple = {
  (value: number): number;
  (value: string): string;
};

const triple: Triple = (value: any): any => {
  console.log(typeof value);
  switch (typeof value) {
    case 'number':
      return value * 3;
    case 'string':
      return value + value + value;
    // number,string 以外の指定は不可のため定義しない。
    // default:
    //   throw 'numberでもstringでもないので、引数の型を確認してください。';
  }
};
console.log(triple(100));
console.log(triple('Go '));
