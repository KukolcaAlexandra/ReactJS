// @flow

import React from 'react';
import styles from './moviesList.css';
import MovieBlock from './movieBlock/movieBlock.component';
import ErrorBoundary from '../../common/errorBoundary/errorBoundary.component';
import NoFilmFound from '../noFilmFound/noFilmFound.component';

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
  data: Array<Data>,
  onMovieClick: Function,
}

function MoviesList(props: Props) {
  const { data, onMovieClick } = props;
  const listItems = data.map(item => <MovieBlock data={item} key={item.id} onMovieClick={onMovieClick}/>);

  return (
    <ErrorBoundary>
      { !data || data.length <= 0 ? (
          <NoFilmFound />
      ) : (
          <div className={styles.main}>
            {listItems}
          </div>
      )
      }
    </ErrorBoundary>
  );
}

export default MoviesList;
