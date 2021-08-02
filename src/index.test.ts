import { findEvenIndex, encode, validateIP, add } from './';

describe('findEvenIndex', () => {
  it('returns 3 for [1, 2, 3, 4, 3, 2, 1]', () => {
    expect(findEvenIndex([1, 2, 3, 4, 3, 2, 1])).toBe(3);
  });

  it('returns 1 for [1, 100, 50, -51, 1, 1]', () => {
    expect(findEvenIndex([1, 100, 50, -51, 1, 1])).toBe(1);
  });

  it('returns 0 for [20, 10, -80, 10, 10, 15, 35]', () => {
    expect(findEvenIndex([20, 10, -80, 10, 10, 15, 35])).toBe(0);
  });

  it('returns -1 for [1, 1, 3]', () => {
    expect(findEvenIndex([1, 1, 3])).toBe(-1);
  });
});

describe('encode', () => {
  it('returns "(((" for "din"', () => {
    expect(encode('din')).toBe('(((');
  });

  it('returns "()()()" for "recede"', () => {
    expect(encode('recede')).toBe('()()()');
  });

  it('returns ")())())" for "Success"', () => {
    expect(encode('Success')).toBe(')())())');
  });

  it('returns "))((" for "(( @"', () => {
    expect(encode('(( @')).toBe('))((');
  });
});

describe('validateIP', () => {
  it('returns true for 1.2.3.4', () => {
    expect(validateIP('1.2.3.4')).toBe(true);
  });

  it('returns true for 123.45.67.89', () => {
    expect(validateIP('123.45.67.89')).toBe(true);
  });

  it('returns false for 1.2.3', () => {
    expect(validateIP('1.2.3')).toBe(false);
  });

  it('returns false for 1.2.3.4.5', () => {
    expect(validateIP('1.2.3.4.5')).toBe(false);
  });

  it('returns false for 123.456.78.90', () => {
    expect(validateIP('123.456.78.90')).toBe(false);
  });

  it('returns false for 123.045.067.089', () => {
    expect(validateIP('123.045.067.089')).toBe(false);
  });
});

describe('add', () => {
  it('returns 1001 for 111 and 10', () => {
    expect(add('111', '10')).toBe('1001')
  })

  it('returns 10010 for 1101 and 101', () => {
    expect(add('1101', '101')).toBe('10010')
  })

  it('returns 100100 for 1101 and 10111', () => {
    expect(add('1101', '10111')).toBe('100100')
  })
})