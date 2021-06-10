export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January); // 0
console.log(Months.February); // 1
console.log(Months.December); // 11

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
}

console.log(COLORS.GREEN);
// Property 'YELLOW' does not exist on type 'typeof COLORS'.ts(2339)
// console.log(COLORS.YELLOW);

enum COLORS {
  YELLOW = '#FFFF00',
  // Enum member must have initializer.ts(1061)
  // GRAY
}
console.log(COLORS.YELLOW);
