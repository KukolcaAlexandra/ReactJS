import React from 'react';
import styles from './sortBar.css';
import {releaseDate, rating} from '../../consts';

export default function createSortBar(selectedMovie, count, sortBy, onChangeSortBy) {
  console.log('createSortBar');
  console.log(count);
  console.log(sortBy);
  let selectedStyle = `${styles.item} ${styles.selected}`;
  const renderItem = (name, className, onClick) => {
    if (onClick) {
      return (
        <div
          className={className}
          onClick={onClick}
        >{name}</div>
      )
    } else {
      return (
        <div
          className={className}
        >{name}</div>
      )
    }
  };

  const renderGenreItem = () => (
    <div  className={styles.item}>Films by {selectedMovie.genres[0]} genre</div>
  );

  const sortFilter = () => (
    <>
      { renderItem(`${count} movies found`, styles.item) }
      { renderItem('Sort by', styles.item) }
      { renderItem('release date', sortBy === releaseDate ? selectedStyle : styles.item, onChangeSortBy) }
      { renderItem('rating', sortBy === rating ? selectedStyle : styles.item, onChangeSortBy) }
    </>
  );
  return (
    <div className={styles.sortBar}>
      {count > 0 && (selectedMovie && renderGenreItem() || sortFilter())}
    </div>
  );
}
