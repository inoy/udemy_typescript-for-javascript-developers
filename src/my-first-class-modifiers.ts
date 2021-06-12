export {};

class Person {
  public name: string;
  private age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}
const taro = new Person('Taro', 30, 'Japan');
console.log(taro);
console.log(taro.profile());

console.log(taro.name);
// Property 'age' is private and only accessible within class 'Person'.ts(2341)
// console.log(taro.age);

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    // Property 'age' is private and only accessible within class 'Person'.ts(2341)
    // return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
    return `name: ${this.name}, nationality: ${this.nationality}`;
  }
}

const xiaomi = new Android('Xiaomi', 20, 'China');
console.log(xiaomi);
console.log(xiaomi.profile());
