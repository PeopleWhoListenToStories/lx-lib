const sum = (...args: number[]): number => {
  return args.reduce((pre, next) => (pre += next), 0);
};

const createRandom = (num: number = 10) =>
  Math.random()
    .toString()
    .slice(2, num + 2);

const isString = (str: string): boolean =>
  Object.prototype.toString.call(str) === '[object String]';

export { sum, isString, createRandom };
export default { sum, isString, createRandom };
