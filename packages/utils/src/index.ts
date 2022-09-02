const sum = (...args: number[]): number => {
  return args.reduce((pre, next) => (pre += next), 0);
};

const createRandom = (num: number = 10) =>
  Math.random()
    .toString()
    .slice(2, num + 2);

export { sum, createRandom };
export default { sum, createRandom };
