type User = {
  name: string;
  age: number;
};

// we can declare that following like
interface User2 {
  name: string;
  age: number;
}

// we can use name alias in case of all type of data. but we can use name alias only for object

const userWithTypeAlias: User = {
  name: "hasan",
  age: 47,
};

const userWithInterface: User2 = {
  name: "hasan2",
  age: 74,
};

// pros of using interface
// we can exchange interface

interface extendedUser extends User2 {
  role: "string";
}
const user: extendedUser = {
  name: "hasan",
  age: 47,
  role: "string",
};

type addNumberType = (number1: number, number2: number) => number;

const addNumber: addNumberType = (number1, number2) => {
  return number1 + number2;
};

// we can use interface for function type

interface addNumberInterface {
  (number1: number, number2: number): number;
}

const addNumber2: addNumberInterface = (number1, number2) => {
  return number1 + number2;
};

// we can use interface for array as array is one kind of object
type rollnumbers = number[];
const rollNumbers: rollnumbers = [1, 2, 3, 4];
interface IRollNumbers {
  [index: number]: number;
}
// this is called indexing measure
const rollNumbers2: IRollNumbers = [1, 2, 3, 4];

// so we are gonna use interface for only object type and for other cases we're gonna use type alias
