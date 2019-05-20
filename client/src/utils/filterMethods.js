
const filterByTitle = function (data, searchValue) {
  const dataString = data && data.title && data.title.toLowerCase();
  return dataString.indexOf(searchValue.toLowerCase()) !== -1;
};

const filterByGenre = function (data, searchValue) {
  const dataArray = data && data.genres;
  return dataArray.some((elem) => {
    const res = elem.toLowerCase().indexOf(searchValue.toLowerCase());
    return res !== -1;
  });
};

const sortByDate = function (a, b) {
  const firstDate = new Date(a.release_date);
  const secondDate = new Date(b.release_date);
  const cond = firstDate < secondDate ? 1 : 0;
  return firstDate > secondDate ? -1 : cond;
};

const sortByRating = function (a, b) {
  const cond = a.vote_average < b.vote_average ? 1 : 0;
  return a.vote_average > b.vote_average ? -1 : cond;
};

export {
  filterByTitle, filterByGenre, sortByDate, sortByRating,
};
