import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from '../../common/errorBoundary/errorBoundary.component';
import MainHeader from '../mainHeader/mainHeader.component';
import { apiParams } from '../../../consts';
import { loadMovies } from '../../../actions/movieActions';
import { resetOffset } from '../../../actions/offsetActions';
import { resetSelectedMovie } from '../../../actions/selectedMovieActions';
import { setSearchValue, setSearchBy } from '../../../actions/searchActions';
import { fetchMovies } from '../../../modules/movies';

export class MainHeaderContainer extends React.Component {

  /*componentDidMount() {
    if (this.props.match.path === '/') {
      this.props.setSearchValue('');
    } else {
      this.props.setSearchValue(this.props.match.params.query);  
    }
    //this.props.loadMovies();
  }*/

  componentWillMount() {
    if (this.props.match.path === '/') {
      this.props.setSearchValue('');
    } else {
      this.props.setSearchValue(this.props.match.params.query);  
    }
    //this.props.loadMovies();
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
    //this.props.loadMovies();
    this.props.fetchMovies();
    this.props.history.push(`/search/${this.props.searchValue}`);
  }

  render() {
    const {
      searchBy,
      //loadMovies
    } = this.props;
  
    return (
      <ErrorBoundary>
        <MainHeader
          onInputChange={this.onInputChangeHandler}
          onClickEnterButton={this.onClickEnterButton}
          onClickSearchButton={this.onClickSearchButton}
          onClickSearchByButton={this.onClickSearchByButton}
          searchBy={searchBy}
          onSearchButton={loadMovies}
          searchValue={this.props.searchValue}
        />
      </ErrorBoundary>
    );
    /*return (
      <ErrorBoundary>
        <MainHeader
          onInputChange={this.onInputChangeHandler}
          onClickEnterButton={this.onClickEnterButton}
          onClickSearchButton={this.onClickSearchButton}
          onClickSearchByButton={this.onClickSearchByButton}
          searchBy={searchBy}
          onSearchButton={loadMovies}
          searchValue={this.props.searchValue}
        />
      </ErrorBoundary>
    );*/
  }
}

MainHeaderContainer.propTypes = {
  searchResult: PropTypes.array,
  searchBy: PropTypes.string,
  searchValue: PropTypes.string,
  //loadMovies: PropTypes.func,
  setSearchValue: PropTypes.func,
  setSearchBy: PropTypes.func,
  resetOffset: PropTypes.func,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  fetchMovies: PropTypes.func,
}

function mapStateToProps(state) {
  console.log('!!!!!!!!! state');
  console.log(state);
  return { 
    searchResult: state.movies.moviesList,
    searchBy: apiParams.getKeyByValue(state.searchParams.searchBy),
    searchValue: state.searchParams.searchValue
  }
}

function mapDispatchToProps(dispatch) {
  return {
    //loadMovies: () => dispatch(loadMovies()),
    setSearchValue: (searchValue) => dispatch(setSearchValue(searchValue)),
    setSearchBy: (searchBy) => dispatch(setSearchBy(searchBy)),
    resetSelectedMovie: () => dispatch(resetSelectedMovie()),
    resetOffset: () => dispatch(resetOffset()),
    fetchMovies: () => dispatch(fetchMovies())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainHeaderContainer));
