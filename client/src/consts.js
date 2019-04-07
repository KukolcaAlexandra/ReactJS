export const title = 'title';
export const genre = 'genre';
export const releaseDate = 'release date';
export const rating = 'rating';
export const apiParams = {
  [title]: 'title',
  [genre]: 'genres',
  [releaseDate]: 'release_date',
  [rating]: 'vote_average',
}
apiParams.getKeyByValue = function (value) {
  return Object.keys(this).find(key => this[key] === value);
}
