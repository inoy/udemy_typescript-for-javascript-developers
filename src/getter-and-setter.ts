export {};

class MyNumberCard {
  /**
    @param _owner 所有者。初期化時に設定。変更不可。参照可。
    @param _secretNumber 個人番号。初期化時に設定。変更可。参照不可。
  */
  constructor(private _owner: string, private _secretNumber: number) {}

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }
}

const card = new MyNumberCard('はむさん', 1234567890);

// Cannot assign to 'owner' because it is a read-only property.ts(2540)
// card.owner = 'Ham';
console.log(card.owner);

card.secretNumber = 9876543210;
// Property '_secretNumber' is private and only accessible within class 'MyNumberCard'.ts(2341)
// card._secretNumber;

console.log({ card });
