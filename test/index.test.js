const FilterArray = require('../lib/index');

describe('filterArray', () => {
  it('removes numbers less than 5', () => {
    const arr = [1, 3, 5, 7, 9];
    const results = [1, 3, 'Wow'];
    
    FilterArray();
  
    expect(FilterArray(arr)).toEqual(results);
  });
});
