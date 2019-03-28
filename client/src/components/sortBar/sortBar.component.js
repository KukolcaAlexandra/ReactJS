import React from 'react';
import {releaseDate, rating} from '../../consts';
import ErrorBoundary from '../common/errorBoundary/errorBoundary.component';
import styles from './sortBar.css';

export default function createSortBar(selectedMovie, count, sortBy, onChangeSortBy) {
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
    <ErrorBoundary>
      <div className={styles.sortBar}>
        {count > 0 && (selectedMovie && renderGenreItem() || sortFilter())}
      </div>
    </ErrorBoundary>
  );
}
