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

const resultToBeNumber = kgToGram(1000);
console.log(resultToBeNumber);
