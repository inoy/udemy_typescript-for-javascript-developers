export {};

// 以下の型指定では配列要素の型順序は制限できない
// let profile: (string | number)[] = ['Ham', 43];
// profile = [43, 'Ham'];

// 以下のtuple型を利用することで順序を制限できる
let profile: [string, number] = ['Ham', 43];
// profile = [43, 'Ham'];
