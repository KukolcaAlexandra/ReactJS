import React from 'react';
import { release_date, rating } from '../../../consts';
import ErrorBoundary from '../../common/errorBoundary/errorBoundary.component';
import styles from './sortBar.css';

export default function SortBar(props) {
  const selectedStyle = `${styles.item} ${styles.selected} ${styles.cursor}`;
  const unselectedStyle = `${styles.item} ${styles.cursor}`;

  const renderItem = (name, className, onClick) => {
    if (onClick) {
      return (
        <div
          className={className}
          onClick={onClick}
        >{name}</div>
      );
    }
    return (
        <div
          className={className}
        >{name}</div>
    );
  };

  const renderGenreItem = () => (
    <div className={styles.item}>Films by {props.selectedMovie.genres && props.selectedMovie.genres[0]} genre</div>
  );

  const sortFilter = () => (
    <>
      { renderItem(`${props.count} movies found`, styles.item) }
      { renderItem('Sort by', styles.item) }
      { renderItem('release date', props.sortBy === release_date ? selectedStyle : unselectedStyle, props.onChangeSortBy) }
      { renderItem('rating', props.sortBy === rating ? selectedStyle : unselectedStyle, props.onChangeSortBy) }
    </>
  );

  console.log('props');
  console.log(props);
  return (
    <ErrorBoundary>
      <div className={styles.sortBar}>
        { props.count > 0
          && ((props.selectedMovie && renderGenreItem()) || sortFilter())}
      </div>
    </ErrorBoundary>
  );
}
