import React, { useEffect, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Hello from '../../components/Hello';
import styles from './MoviesPage.css';
import Users from '../../components/Users';
import Loader from '../../components/Loader';

class MainPage extends PureComponent {

  componentWillMount() {
    this.props.fetchMovies();
  }

  render() {
    const { loading, movies } = this.props;
    return (
      <div>
        <h2 className={styles.title}>Movies Page</h2>
        <Hello name="you are on Movies Page" />
        <Loader loading={loading} />
        <Users users={movies} />
      </div>
    );
  }
};

MoviesPage.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({})),
};
MoviesPage.defaultProps = {
  movies: [],
};

export default MoviesPage;
