import React from 'react';
import styles from './movieBlock.css';

export default function createMovieBlock(data, onMovieClick) {

  const onClick = (data) => {
    onMovieClick(data);
  }

  const date = new Date(data.release_date);
  return (
    <div className={styles.container} key={data.id} onClick={()=>onClick(data)}>
      <img className={styles.image} src={data.poster_path}/>
      <div className={styles.titleBlock}>
        <h3>{data.title}</h3>
        <p className={styles.year}>{date.getFullYear()}</p>
      </div>
      <div className={styles.genreBlock}>
        <p className={styles.genre}>{data.genres.join(' & ')}</p>
      </div>
      <div className={styles.vote}>
        <p>{data.vote_average}</p>
      </div>
    </div>
  );
}
