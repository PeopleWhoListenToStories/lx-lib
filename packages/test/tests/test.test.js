'use strict';

const test = require('../src/index');

describe('test function Case', () => {
  it('tests sum', () => {
    expect(test()).toBe('Hello from test');
  });
});

