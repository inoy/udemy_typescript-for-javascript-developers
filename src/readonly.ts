export {};

class VisaCard {
  // readonly指定時はアクセス修飾子publicをすることはできる
  // constructor(public readonly owner: string) {}
  constructor(readonly owner: string) {}
}

const myVisaCard = new VisaCard('はむさん');
console.log(myVisaCard.owner);

// Cannot assign to 'owner' because it is a read-only property.ts(2540)
// myVisaCard.owner = 'べーこん';
