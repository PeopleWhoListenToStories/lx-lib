import { sum, createRandom } from '../src/index';

describe('utils', () => {
  it('tests sum', () => {
    expect(sum(1, 2, 3)).toBe(6);
  });

  it('tests createRandom', () => {
    expect(createRandom(10)).toHaveLength(10);
  });
});
