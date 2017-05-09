const _ = require('../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 6, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(false);
    });

  });

  describe('procesing an object', () => {
    it('will return true if all the object.key are number type', () => {
      const obj = {
        0: 0,
        1: 'HelloWorld',
        2: 2,
      };
      expect(_.every(obj, value => typeof (value) === 'number')).toBe(false);
    });
  });
});
