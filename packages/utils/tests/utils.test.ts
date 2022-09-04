import { sum, isString, isNumber, createRandom } from '../src/index';

describe('utils', () => {
  it('tests sum', () => {
    expect(sum(1, 2, 3)).toBe(6);
  });

  it('tests createRandom', () => {
    expect(createRandom(10)).toHaveLength(10);
  });

  it('tests isString', () => {
    expect(isString('123')).toBe(true);
  });

  it('tests isNumber', () => {
    expect(isNumber(10)).toBe(true);
  });
});
