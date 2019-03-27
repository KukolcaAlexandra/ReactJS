import React from 'react';
import styles from './movieBlock.css';

export default function createMovieBlock(data, onMovieClick) {
  //console.log(onMovieClick);
  const onClick = (data) => {
    console.log(data);
    onMovieClick(data);
  }

  return (
    <div className={styles.container} key={data.id} onClick={()=>onClick(data)}>
      <img className={styles.image} src={data.poster_path}/>
      <h4>{data.title}</h4>
      <p className={styles.genre}>{data.genres.join(' & ')}</p>
      <p className={styles.genre}>{data.release_date}</p>
      <p className={styles.genre}>{data.vote_average}</p>
    </div>
  );
}
