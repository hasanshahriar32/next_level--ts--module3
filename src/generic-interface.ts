interface CrushInterface<T> {
  name: string;
  husband: T;
}

const crush1: CrushInterface<string> = {
  name: "kate",
  husband: "hasan",
};

// const crush2: CrushInterface;
