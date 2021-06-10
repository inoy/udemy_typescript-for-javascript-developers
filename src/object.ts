export {};

let profile1: object = { name: 'Ham' };
profile1 = { birthYear: 1976 };

let profile2: { name: string } = { name: 'Ham' };
// Type '{ birthYear: number; }' is not assignable to type '{ name: string; }'.
//   Object literal may only specify known properties, and 'birthYear' does not exist in type '{ name: string; }'.ts(2322)
// profile2 = { birthYear: 1976 };
profile2 = { name: 'Ham2' };
