// @flow

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from '../../common/errorBoundary/errorBoundary.component';
import MainHeader from '../mainHeader/mainHeader.component';
import { apiParams } from '../../../consts';
import { loadMovies } from '../../../actions/movieActions';
import { resetOffset } from '../../../actions/offsetActions';
import resetSelectedMovie from '../../../actions/selectedMovieActions';
import { setSearchValue, setSearchBy } from '../../../actions/searchActions';

type Data = {
  id: number,
  release_date: string,
  poster_path: string,
  title: string,
  tagline: string,
  runtime: number,
  overview: string,
  genres: Array<string>,
}

type Props = {
  searchResult: Array<Data>,
  searchBy: string,
  searchValue: string,
  loadMovies: Function,
  setSearchValue: Function,
  setSearchBy: Function,
  resetOffset: Function,
  match: any,
  location: any,
  history: any,
};

class MainHeaderContainer extends React.Component<Props> {
  componentDidMount() {
    if (this.props.match.path === '/') {
      this.props.setSearchValue('');
    } else {
      this.props.setSearchValue(this.props.match.params.query);
    }
    this.props.loadMovies();
  }

  onClickEnterButton = (event) => {
    if (event.keyCode === 13) {
      this.onClickSearchButton();
    }
  }

  onInputChangeHandler = (event) => {
    this.props.setSearchValue(event.target.value);
  }

  onClickSearchByButton = (event) => {
    this.props.setSearchBy(event.target.value);
  }

  onClickSearchButton = () => {
    this.props.loadMovies();
    this.props.history.push(`/search/${this.props.searchValue}`);
  }

  render() {
    const {
      searchBy,
    } = this.props;

    return (
      <ErrorBoundary>
        <MainHeader
          onInputChange={this.onInputChangeHandler}
          onClickEnterButton={this.onClickEnterButton}
          onClickSearchButton={this.onClickSearchButton}
          onClickSearchByButton={this.onClickSearchByButton}
          searchBy={searchBy}
          onSearchButton={this.props.loadMovies}
          searchValue={this.props.searchValue}
        />
      </ErrorBoundary>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchResult: state.loadedMovies.moviesList,
    searchBy: apiParams.getKeyByValue(state.searchParams.searchBy),
    searchValue: state.searchParams.searchValue,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadMovies: () => dispatch(loadMovies()),
    setSearchValue: searchValue => dispatch(setSearchValue(searchValue)),
    setSearchBy: searchBy => dispatch(setSearchBy(searchBy)),
    resetSelectedMovie: () => dispatch(resetSelectedMovie()),
    resetOffset: () => dispatch(resetOffset()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainHeaderContainer));
