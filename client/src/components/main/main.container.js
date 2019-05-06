import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoviesList from './moviesList/moviesList.component';
import { apiParams } from '../../consts';
import SortBar from './sortBar/sortBar.component';
import Button from '../../components/common/button/button.component';
import { setSortBy } from '../../actions/searchActions';
import { loadMovies, loadMovieById } from '../../actions/movieActions';
import { loadMore } from '../../actions/loadMoreActions';
import { increaseOffset } from '../../actions/offsetActions';
import styles from './main.css';

export class Main extends React.Component {
  
  componentWillMount() {
    if (this.props.match.path === '/film/:id') {
      this.props.loadMovieById(this.props.match.params.id);
    }
  }

  onChangeSortBy = (event) => {
    this.props.setSortBy(event.target.innerText);
    this.props.loadMovies();
  }

  onMovieClick = (id) => {
    window.scrollTo(0, 0);
    this.props.history.push(`/film/${id}`);
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
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
