export const getArrayFromTo = (from: number, to: number): number[] => {
  const output = [];

  for (let index = from; index <= to; index++) {
    output.push(index);
  }

  return output;
};
