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
