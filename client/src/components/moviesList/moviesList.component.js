import React from 'react';
import styles from './moviesList.css';
import createMovieBlock from './movieBlock/movieBlock.component';
import ErrorBoundary from '../common/errorBoundary/errorBoundary.component';

class MoviesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, onMovieClick } = this.props;
   
    const listItems = data.map((data) =>
      createMovieBlock(data, onMovieClick)
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
}

export default MoviesList;
