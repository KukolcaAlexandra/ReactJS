import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoviesList from './moviesList/moviesList.component';
import { apiParams } from '../../consts';
import SortBar from './sortBar/sortBar.component';
import Button from '../../components/common/button/button.component';
import { setSortBy } from '../../actions/searchActions';
import { increaseOffset } from '../../actions/offsetActions';
import styles from './main.css';
import { fetchMovies, fetchLoadMore } from '../../modules/movies';

export class Main extends React.Component {
  
  componentWillMount() {
    this.props.fetchMovies();
  }

  onChangeSortBy = (event) => {
    this.props.setSortBy(event.target.innerText);
    this.props.fetchMovies();
  }

  onMovieClick = (id) => {
    window.scrollTo(0, 0);
    this.props.history.push(`/film/${id}`);
  }

  onClickLoadMore = () => {
    this.props.increaseOffset();
    this.props.fetchLoadMore();
  }

  render() {
    return (
      <div className={styles.container}>
        
        <SortBar
          selectedMovie={this.props.selectedMovie}
          count={this.props.total}
          sortBy={this.props.sortBy}
          onChangeSortBy={this.onChangeSortBy}
        />

        <MoviesList
          data={this.props.searchResult}
          onMovieClick={this.onMovieClick}
        />
        
        {this.props.total > 0 && !this.props.selectedMovie && (
          <Button title="Load More" onClick={this.onClickLoadMore} size="loadMore"/>
        )}

      </div>
    );
  }
}

Main.propTypes = {
  searchResult: PropTypes.array,
  total: PropTypes.number,
  sortBy: PropTypes.string,
  selectedMovie: PropTypes.object,
  setSortBy: PropTypes.func,
  increaseOffset: PropTypes.func,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  fetchLoadMore: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return { 
    searchResult: state.movies.moviesList,
    total: state.movies.total,
    sortBy: apiParams.getKeyByValue(state.searchParams.sortBy),
    selectedMovie: state.movies.selectedMovie
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSortBy: (sortBy) => dispatch(setSortBy(sortBy)),
    increaseOffset: () => dispatch(increaseOffset()),
    fetchMovies: () => dispatch(fetchMovies()),
    fetchLoadMore: () => dispatch(fetchLoadMore()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
