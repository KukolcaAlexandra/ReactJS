export function getMovies(searchValue, searchBy, sortBy, offset) {
  const url = `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&search=${searchValue}&searchBy=${searchBy}&offset=${offset}&limit=9`;
  return fetch(url)
    .then(res => res.json())
    .catch(error => error);
}

export function getMovieById(id) {
  const url = `https://reactjs-cdp.herokuapp.com/movies/${id}`;

  return fetch(url)
    .then(res => res.json())
    .catch(error => error);
}
