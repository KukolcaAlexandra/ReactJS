import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MoviesList from './moviesList/moviesList.component';
import { apiParams } from '../../consts';
import SortBar from './sortBar/sortBar.component';
import Button from '../../components/common/button/button.component';
import { setSortBy } from '../../actions/searchActions';
import { loadMovies, loadMovieById } from '../../actions/movieActions';
import { loadMore } from '../../actions/loadMoreActions';
import { increaseOffset } from '../../actions/offsetActions';
import styles from './main.css';

class Main extends React.Component {

  onChangeSortBy = (event) => {
    this.props.setSortBy(event.target.innerText);
    this.props.loadMovies();
  }

  onMovieClick = (id) => {
    window.scrollTo(0, 0);
    this.props.loadMovieById(id);
  }

  onClickLoadMore = () => {
    this.props.increaseOffset();
    this.props.loadMore();
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
  loadMovies: PropTypes.func,
  loadMovieById: PropTypes.func,
  increaseOffset: PropTypes.func,
  loadMore: PropTypes.func,
}

function mapStateToProps(state) {
  return { 
    searchResult: state.loadedMovies.moviesList,
    total: state.loadedMovies.total,
    sortBy: apiParams.getKeyByValue(state.searchParams.sortBy),
    selectedMovie: state.selectedMovie.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSortBy: (sortBy) => dispatch(setSortBy(sortBy)),
    loadMovies: () => dispatch(loadMovies()),
    loadMovieById: (id) => dispatch(loadMovieById(id)),
    increaseOffset: () => dispatch(increaseOffset()),
    loadMore: () => dispatch(loadMore()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
