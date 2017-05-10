const _ = require('../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    expect(_.reject(nums, num => num % 2 === 1)).toEqual([2, 4, 6, 8, 10]);
  });

  it('rejects null values from an object', () => {
    const order = {
      entree: 'burger',
      side: null,
      condiment: 'ketchup',
      drink: null,
      dessert: 'cookie',
    };

    const orderItems = _.reject(order, (value) => value === null);
    expect(orderItems).toEqual(['burger', 'ketchup', 'cookie']);
  });

  it('rejects non-numeric values from an object', () => {
    const order = {
      entree: 'burger',
      side: 1,
      condiment: 'ketchup',
      drink: 2,
      dessert: 'cookie',
      check: NaN,
    };

    const orderItems = _.reject(order, (value) => typeof (value) !== 'number');
    expect(orderItems).toEqual([1, 2, NaN]);
  });
});
