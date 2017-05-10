const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('de-dups a list of songs', () => {
    const songs = {
      heyJude: 1,
      anotherSong: 2,
      andAnotherSong: 1,
    };
    expect(_.uniq(songs)).toEqual([1, 2]);
  });
});
