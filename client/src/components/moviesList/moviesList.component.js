import React from 'react';
import styles from './moviesList.css';
import createMovieBlock from '../movieBlock/movieBlock.component';

class MoviesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, onMovieClick } = this.props;
   
    /*let content;
    if (data && data.length > 0) {
      content = ""
    }*/
    const listItems = data.map((data) =>
      createMovieBlock(data, onMovieClick)
    );

    return (
      <>
        { !data || data.length <= 0 ? (
            <div className={styles.center}>
              <p>No films found</p>
            </div>
          ) : (
            <div className={styles.main}>
              {listItems}
            </div>
          )
        }
      </>
    );
  }
}

export default MoviesList;
