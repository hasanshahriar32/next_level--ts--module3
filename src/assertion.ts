let emni: any;

emni = "next level web dev";
console.log(emni);
console.log((emni as string).length);

function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `the converted value is ${value} gram`;
  }
  if (typeof param === "number") {
    const value = param * 1000;
    return value;
  }
}

const resultToBeNumber = kgToGram(1000) as number;
console.log(resultToBeNumber);
const resultToBeString = kgToGram("1000") as string;
console.log(resultToBeString);
console.log(typeof resultToBeString);
type CustomErrorType = {
  message: string;
};
try {
} catch (error) {
  console.log((error as CustomErrorType).message);
  //or
  console.log(<string>error.message);
}

//we can also write (name as string) in following format
let name2: any;
name2 = "web dev";
const name3 = <string>name2;
console.log(
  typeof name2, //any
  typeof name3, //string
  <string>name2.length //number
);
