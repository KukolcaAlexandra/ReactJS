import React from 'react';
import styles from '../header.css';
import createButton from '../../common/button/button.component';

export default function createDescriptionHeader (data, onClickSearchButton) {
  
  const release_date = new Date(data.release_date);
  return (
    <div className={styles.header}>
      <div className={styles.buttonBlock}>
        {createButton('SEARCH', onClickSearchButton, 'medium')}
      </div>
      <div className={styles.container}>
        <img className={styles.image} src={data.poster_path}/>
        <div className={styles.descriptionBlock}>
          <h1>{data.title}</h1>
          <h2>{data.tagline}</h2>
          <div className={styles.dateBlock}>
            <p>{release_date.getFullYear()}</p>
            <p>{data.runtime} min</p>
          </div>
          <p className={styles.description}>{data.overview}</p>
        </div>
      </div>
    </div>
  )
}
