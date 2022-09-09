const sum = (...args: number[]): number => {
  return args.reduce((pre, next) => (pre += next), 0);
};

const createRandom = (num: number = 10) =>
  Math.random()
    .toString()
    .slice(2, num + 2);

const isString = (str: string): boolean =>
  Object.prototype.toString.call(str) === '[object String]';

const isNumber = (num: number): boolean =>
  Object.prototype.toString.call(num) === '[object Number]';

const isBoolean = (str: any): boolean => Object.prototype.toString.call(str) === '[object Boolean]';

export { sum, isString, isNumber, createRandom, isBoolean };
export default { sum, isString, isNumber, createRandom, isBoolean };
