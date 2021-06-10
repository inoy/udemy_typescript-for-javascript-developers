# [Udemy - ハンズオンで学ぶ TypeScript - JavaScript エンジニアのための TypeScript 徹底入門](https://hitachi-solutionsjp.udemy.com/course/ts-for-js-developers)

## tsconfig.json 作成

`npx tsc --init`

## VS Code が使用する TypeScript を指定

vscode で ts ファイルを開いて右下のバージョン表示部分をクリック、Select TypeScript Version...をクリック、Use Workspace Version をクリックで OK。

## tuple 型

[typescriptlang.org - playground - tuple](https://www.typescriptlang.org/ja/play#example/tuples)

## never 型

呼び元に戻ってこないことを示す型。

```ts
const error = (message: string): never => {
  throw new Error(message);
};
```

### void 型と never 型の違い

void 型は呼び元に戻ってくる。  
never 型は呼び元に戻ってこない。

```ts
const foo: void = undefined;
// const bar: never = undefined;
// const bar: never = null;
const bar: never = error('only me');
```

## 型エイリアス（Type Alias）

### typeof で既存オブジェクトから type を生成

```ts
const example1 = {
  name: 'Ham',
  age: 43,
};

type Profile2 = typeof example1;
// Profile2は以下の型定義となる
// type Profile2 = {
//   name: string;
//   age: number;
// }
```
