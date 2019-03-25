import { title } from '../consts';

const filterByTitle = function(data, searchValue) {
  console.log('filterByTitle');
  const dataString = data && data.title && data.title.toLowerCase();
  return dataString.indexOf(searchValue.toLowerCase()) === -1 ? false : true;
}

const filterByGenre = function(data, searchValue) {
  console.log('filterByGenre');
  const dataArray = data && data.genres;
  return dataArray.some((elem) => {
    const res = elem.toLowerCase().indexOf(searchValue.toLowerCase());
    return res === -1 ? false : true;
  });
}

const sortByDate = function(a, b) {
  a = new Date(a.release_date);
  b = new Date(b.release_date);
  return a > b ? -1 : a < b ? 1 : 0;
}

const sortByRating = function(a, b) {
  return a.vote_average > b.vote_average ? -1 : a.vote_average < b.vote_average ? 1 : 0;
}

export { filterByTitle, filterByGenre, sortByDate, sortByRating };
