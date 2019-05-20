import React from 'react';
import PropTypes from 'prop-types';
import styles from './moviesList.css';
import MovieBlock from './movieBlock/movieBlock.component';
import ErrorBoundary from '../../common/errorBoundary/errorBoundary.component';
import NoFilmFound from '../noFilmFound/noFilmFound.component';

function MoviesList(props) {
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

MoviesList.propTypes = {
  data: PropTypes.array,
  onMovieClick: PropTypes.func,
};

export default MoviesList;
