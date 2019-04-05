import React from 'react';
import PropTypes from 'prop-types';
import styles from './moviesList.css';
import MovieBlock from './movieBlock/movieBlock.component';
import ErrorBoundary from '../../common/errorBoundary/errorBoundary.component';

function MoviesList(props) {
  const { data, onMovieClick } = props;
  console.log(props);
  const listItems = data.map((data) =>
    <MovieBlock data={data} key={data.id} onMovieClick={onMovieClick}/>
  );

  return (
    <ErrorBoundary>
      { !data || data.length <= 0 ? (
          <div className={styles.center}>
            <p className={styles.noFound}>No films found</p>
          </div>
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
  onMovieClick: PropTypes.func
}

export default MoviesList;
