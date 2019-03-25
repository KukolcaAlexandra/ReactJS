import React from 'react';
import styles from './sortBar.css';
import {releaseDate, rating} from '../../consts';

export default function createSortBar(count, sortBy, onChangeSortBy) {
  console.log('createSortBar');
  console.log(count);
  console.log(sortBy);
  let selectedStyle = `${styles.item} ${styles.selected}`;
   
  const sortFilter = () => (
    <>
      <div className={styles.item}>{count} movies found</div>
      <div className={styles.item}>Sort by</div>
      <div
        className={sortBy === releaseDate ? selectedStyle : styles.item}
        onClick={onChangeSortBy}
      >release date</div>
      <div
        className={sortBy === rating ? selectedStyle : styles.item}
        onClick={onChangeSortBy}
      >rating</div>
    </>
  );
  return (
    <div className={styles.sortBar}>
      {count > 0 && sortFilter()}
    </div>
  );
    /*
  return (
    <input
      type="button"
      name="button"
      value="press"
      onClick={onChangeSortBy}
    />  
  );*/
}