// @flow

import React from 'react';
import styles from './movieBlock.css';

type Data = {
  id: number,
  release_date: string,
  poster_path: string,
  title: string,
  tagline: string,
  runtime: number,
  overview: string,
  genres: Array<string>,
  vote_average: number,
}

type Props = {
  data: Data,
  onMovieClick: Function,
};

function MovieBlock(props: Props) {
  const date = new Date(props.data.release_date);

  return (
    <div className={styles.container} onClick={() => props.onMovieClick(props.data.id)}>
      <img className={styles.image} src={props.data.poster_path}/>
      <div className={styles.titleBlock}>
        <h3>{props.data.title}</h3>
        <p className={styles.year}>{date.getFullYear()}</p>
      </div>
      <div className={styles.genreBlock}>
        <p className={styles.genre}>{props.data.genres.join(' & ')}</p>
      </div>
      <div className={styles.vote}>
        <p>{props.data.vote_average}</p>
      </div>
    </div>
  );
}

export default MovieBlock;
