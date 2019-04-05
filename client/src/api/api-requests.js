export function getMovies (searchValue, searchBy, sortBy) {
  
  const url = `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy.toLowerCase()}&sortOrder=desc&search=${searchValue.toLowerCase()}&searchBy=${searchBy.toLowerCase()}&offset=0`;
  
  return fetch(url)
    .then((res) => res.json())
    .catch(error => error);
};
