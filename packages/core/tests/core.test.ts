import { data, normalTask } from '../src/index';

describe('utils', () => {
  it('data is string Case', () => {
    expect(data).toBe('this is core');
  });

  it('fetchData Case', async () => {
    const result = await normalTask();
    expect(result.user).toBe('lx');
  });
});
