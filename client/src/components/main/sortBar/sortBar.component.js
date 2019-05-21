// @flow

import React from 'react';
import { releaseDate, rating } from '../../../consts';
import ErrorBoundary from '../../common/errorBoundary/errorBoundary.component';
import styles from './sortBar.css';

type Data = {
  id: number,
  release_date: string,
  poster_path: string,
  title: string,
  tagline: string,
  runtime: number,
  overview: string,
  genres: Array<string>,
}

type Props = {
  selectedMovie: Data,
  count: number,
  sortBy: string,
  onChangeSortBy: Function,
}
export default function SortBar(props: Props) {
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
      { renderItem('release date', props.sortBy === releaseDate ? selectedStyle : unselectedStyle, props.onChangeSortBy) }
      { renderItem('rating', props.sortBy === rating ? selectedStyle : unselectedStyle, props.onChangeSortBy) }
    </>
  );

  return (
    <ErrorBoundary>
      <div className={styles.sortBar}>
        { props.count > 0
          && ((props.selectedMovie && renderGenreItem()) || sortFilter())}
      </div>
    </ErrorBoundary>
  );
}
