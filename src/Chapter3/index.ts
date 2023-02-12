// index signature
type PriceData = {
  [key: string]: number;
};

const data: PriceData = {
  apple: 220,
  coffee: 120,
  bento: 500,
};

const num: number = 0;
type T = typeof num;
const foo: T = 123;

// Subtyping relation

type FooBar = {
  foo: string;
  bar: number;
};

type FooBarBaz = {
  foo: string;
  bar: number;
  baz: boolean;
};

const obj: FooBarBaz = {
  foo: "hi",
  bar: 10,
  baz: false,
};

const obj2: FooBar = obj;

console.log(obj2.foo, obj2.bar); // hi 10
// console.log(obj2.foo, obj2.bar, obj2.baz); // Compile error

// Type Parameters

type Family<T, S> = {
  mother: T;
  father: T;
  child: S;
};

type Child = {
  name: string;
};
type PastAdult = {
  name: string;
  work?: string;
};
const tanaka: Family<PastAdult, Child> = {
  mother: { name: "mom" },
  father: { name: "papa", work: "Developer" },
  child: { name: "taro" },
};

type NewEraAdult = {
  name: string;
  work: string;
};

const sato: Family<NewEraAdult, Child> = {
  mother: { name: "mom", work: "Accountant" },
  father: { name: "papa", work: "Developer" },
  child: { name: "jiro" },
};

// Practice

type User = {
  name: string;
  age: number;
  premiumUser: boolean;
};

const inputData: string = `
uhyo, 26, 1
John Smith, 17, 0
Mary Sue, 14, 1
`;

const lines = inputData.split(/\n/);

const users = lines.slice(1, lines.length - 1).map<User>((row) => ({
  name: row.split(",")[0],
  age: Number(row.split(",")[1]),
  premiumUser: Boolean(row.split(",")[2]),
}));

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name}(${user.age}) はプレミアムユーザーです`);
  } else {
    console.log(`${user.name}(${user.age}) はプレミアムユーザーはありません`);
  }
}

const users2 = inputData
  .split(/\n/)
  .filter((row) => row !== "")
  .map<User>((line) => {
    const [name, ageString, premiumUserString] = line.split(",");

    return {
      name,
      age: Number(ageString),
      premiumUser: premiumUserString === "1",
    };
  });
