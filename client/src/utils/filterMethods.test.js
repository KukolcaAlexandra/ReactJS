import {
  filterByTitle, filterByGenre, sortByDate, sortByRating,
} from './filterMethods';

describe('FilterByTitle', () => {
  let data;
  beforeAll(() => {
    data = { id: 1, title: 'Star Wars: The Last Jedi' };
  });

  it('should return true if search value found', () => {
    const searchValue = 'star';
    const filteredData = filterByTitle(data, searchValue);

    expect(filteredData).toBe(true);
  });

  it('should return false if search value not found', () => {
    const searchValue = 'first';
    const filteredData = filterByTitle(data, searchValue);

    expect(filteredData).toBe(false);
  });
});

describe('FilterByGenre', () => {
  let data;
  beforeAll(() => {
    data = {
      id: 1,
      genres: [
        'Fantasy',
        'Adventure',
        'Science Fiction',
      ],
    };
  });

  it('should return true if search value found', () => {
    const searchValue = 'fantasy';
    const filteredData = filterByGenre(data, searchValue);
    expect(filteredData).toBe(true);
  });

  it('should return false if search value not found', () => {
    const searchValue = 'action';
    const filteredData = filterByGenre(data, searchValue);
    expect(filteredData).toBe(false);
  });
});

describe('SortByDate', () => {
  let a;
  let b;

  beforeAll(() => {
    a = { release_date: '2017-12-13' };
    b = { release_date: '2018-02-13' };
  });

  it('should return 1 if first value smaller then second value', () => {
    const result = sortByDate(a, b);
    expect(result).toBe(1);
  });

  it('should return -1 if first value bigger then second value', () => {
    const result = sortByDate(b, a);
    expect(result).toBe(-1);
  });

  it('should return 0 if first value equal second value', () => {
    const result = sortByDate(a, a);
    expect(result).toBe(0);
  });
});

describe('SortByRating', () => {
  let a;
  let b;

  beforeAll(() => {
    a = { vote_average: 7.1 };
    b = { vote_average: 8.8 };
  });

  it('should return 1 if first value smaller then second value', () => {
    const result = sortByRating(a, b);
    expect(result).toBe(1);
  });

  it('should return -1 if first value bigger then second value', () => {
    const result = sortByRating(b, a);
    expect(result).toBe(-1);
  });

  it('should return 0 if first value equal second value', () => {
    const result = sortByRating(a, a);
    expect(result).toBe(0);
  });
});
