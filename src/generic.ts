// generic means making generalize
type Rollnumbertype = number[];
// type Rollnumbertype2 = { number; string };
const rollNumbers3: Rollnumbertype = [44, 45, 46];
// or
const rollNumbers5: Array<number> = [44, 45, 46];

const rollNumbers4: string[] = ["2", "3", "5"];

const rollNumbers6: Array<string> = ["3", "4"];

const isPresent: Array<Boolean> = [true, false];

const userNameAndRollNumbers: Array<{ name: string; roll: number }> = [
  {
    name: "sagar",
    roll: 41,
  },
  {
    name: "sagar2",
    roll: 42,
  },
];

type GenericArray = Array<number>;
const genericArray: GenericArray = [2, 3, 5];

type GenericArray2<T> = Array<T>;
// here T is generic type. it will work like a parameter of a function.
// we can pass any type of data in it.

const genericArray2: GenericArray2<string> = ["2", "3", "5"];

// generic array using reason:
// we are using generic array because we want to use multiple type of data in a single array.
// so, we can use generic array.

// generic function:
// generic function

type GenericTuple<x, y> = [x, y];
const relation: GenericTuple<string, string> = ["hasan", "shahriar"];

type NameRollType = {
  name: string;
  roll: number;
};

const student: GenericTuple<NameRollType, string> = [
  {
    name: "jaa",
    roll: 4,
  },
  "cr",
];
console.log(student);

console.log(typeof student);
