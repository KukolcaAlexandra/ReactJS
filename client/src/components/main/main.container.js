// @flow

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoviesList from './moviesList/moviesList.component';
import { apiParams } from '../../consts';
import SortBar from './sortBar/sortBar.component';
import Button from '../common/button/button.component';
import { setSortBy } from '../../store/actions/searchActions';
import { loadMovies, loadMovieById } from '../../store/actions/movieActions';
import { loadMore } from '../../store/actions/loadMoreActions';
import { increaseOffset } from '../../store/actions/offsetActions';
import styles from './main.css';
import moviesListSelector from '../../selectors';

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
  searchResult: Array<Data>,
  total: number,
  sortBy: string,
  selectedMovie: Data,
  setSortBy: Function,
  loadMovies: Function,
  loadMovieById: Function,
  increaseOffset: Function,
  loadMore: Function,
  match: any,
  location: any,
  history: any,
};

class Main extends React.Component<Props> {
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
          <Button title="Load More" onClick={this.onClickLoadMore} size="loadMore">
            Load More
          </Button>
        )}

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchResult: moviesListSelector(state),
    total: state.loadedMovies.total,
    sortBy: apiParams.getKeyByValue(state.searchParams.sortBy),
    selectedMovie: state.selectedMovie.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSortBy: sortBy => dispatch(setSortBy(sortBy)),
    loadMovies: () => dispatch(loadMovies()),
    loadMovieById: id => dispatch(loadMovieById(id)),
    increaseOffset: () => dispatch(increaseOffset()),
    loadMore: () => dispatch(loadMore()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
