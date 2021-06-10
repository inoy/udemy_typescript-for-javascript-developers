export {};

let dayOfTheWeek: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';
dayOfTheWeek = '月';
// Type '"31"' is not assignable to type '"日" | "月" | "火" | "水" | "木" | "金" | "土"'.ts(2322)
// dayOfTheWeek = '31';

let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
month = 12;
// Type '13' is not assignable to type '1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12'.ts(2322)
// month = 13;

// 実用シーンはないと考えられる
let TRUE: true = true;
// Type 'false' is not assignable to type 'true'.ts(2322)
// TRUE = false;
