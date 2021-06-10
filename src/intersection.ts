export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const OchiaiHiromitsu: Batter1 = {
  // Type '{ throwingSpeed: number; battingAverage: number; }' is not assignable to type 'Batter1'.
  //   Object literal may only specify known properties, and 'throwingSpeed' does not exist in type 'Batter1'.ts(2322)
  // throwingSpeed: 154,
  battingAverage: 0.367,
};

type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShouhei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
