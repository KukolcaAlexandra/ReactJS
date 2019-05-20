import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from '../../common/errorBoundary/errorBoundary.component';
import MainHeader from '../mainHeader/mainHeader.component';
import { apiParams } from '../../../consts';
import { resetOffset } from '../../../actions/offsetActions';
import { resetSelectedMovie } from '../../../actions/selectedMovieActions';
import { setSearchValue, setSearchBy } from '../../../actions/searchActions';
import { fetchMovies } from '../../../modules/movies';

export class MainHeaderContainer extends React.Component {

  componentWillMount() {
    if (this.props.match.path === '/') {
      this.props.setSearchValue('');
    } else {
      this.props.setSearchValue(this.props.match.params.query);  
    }
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
    this.props.resetOffset();
    this.props.fetchMovies();
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
          searchValue={this.props.searchValue}
        />
      </ErrorBoundary>
    );
  }
}

MainHeaderContainer.propTypes = {
  searchResult: PropTypes.array,
  searchBy: PropTypes.string,
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
  setSearchBy: PropTypes.func,
  resetOffset: PropTypes.func,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  fetchMovies: PropTypes.func,
}

function mapStateToProps(state) {
  return { 
    searchResult: state.movies.moviesList,
    searchBy: apiParams.getKeyByValue(state.searchParams.searchBy),
    searchValue: state.searchParams.searchValue
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSearchValue: (searchValue) => dispatch(setSearchValue(searchValue)),
    setSearchBy: (searchBy) => dispatch(setSearchBy(searchBy)),
    resetSelectedMovie: () => dispatch(resetSelectedMovie()),
    resetOffset: () => dispatch(resetOffset()),
    fetchMovies: () => dispatch(fetchMovies())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainHeaderContainer));
