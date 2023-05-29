interface CrushInterface<T> {
  name: string;
  husband: T;
  //   salary: number
}

const crush1: CrushInterface<string> = {
  name: "kate",
  husband: "hasan",
  //   salary: 4
};

const crush2: CrushInterface<object> = {
  name: "hasan",

  husband: {
    salary: 54,
  },
};
