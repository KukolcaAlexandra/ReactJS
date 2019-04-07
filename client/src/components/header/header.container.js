import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ErrorBoundary from '../common/errorBoundary/errorBoundary.component';
import MainHeader from './mainHeader/mainHeader.component';
import DescriptionHeader from './descriptionHeader/descriptionHeader.component';
import { apiParams } from '../../consts';
import { loadSearchedMovies } from '../../actions/movieActions';
import { resetOffset } from '../../actions/offsetActions';
import { resetSelectedMovie } from '../../actions/selectedMovieActions';
import { setSearchValue, setSearchBy } from '../../actions/searchActions';

class Header extends React.Component {
  state = {
    searchValue: '',
  }
  
  onClickEnterButton = (event) => {
    if (event.keyCode === 13) {
      this.onClickSearchButton();
    }
  }
  
  onInputChangeHandler = (event) => {
    console.log('onInputChangeHandler');
    this.setState({
      searchValue: event.target.value,
    });
  }

  onClickSearchByButton = (event) => {
    console.log('onClickSearchByButton');
    this.props.setSearchBy(event.target.value);
  }

  onClickSearchButton = () => {
    this.props.setSearchValue(this.state.searchValue);
    this.props.resetOffset();
    this.props.loadMovies();
  }

  onBackButton = () => {
    this.props.resetSelectedMovie();
    this.props.loadMovies();
    this.setState({ searchValue: this.props.searchValue});
  }

  render() {
    const {
      selectedMovie,
      searchBy,
      loadMovies
    } = this.props;
    return (
      <ErrorBoundary>
        {selectedMovie ? (
          <DescriptionHeader
            data={selectedMovie}
            onClick={this.onBackButton}
          />
        ):(
          <MainHeader
            onInputChange={this.onInputChangeHandler}
            onClickEnterButton={this.onClickEnterButton}
            onClickSearchButton={this.onClickSearchButton}
            onClickSearchByButton={this.onClickSearchByButton}
            searchBy={searchBy}
            onSearchButton={loadMovies}
            searchValue={this.state.searchValue}
          />
        )}
      </ErrorBoundary>
    );
  }
}

Header.propTypes = {
  searchResult: PropTypes.array,
  searchBy: PropTypes.string,
  selectedMovie: PropTypes.object,
  searchValue: PropTypes.string,
  loadMovies: PropTypes.func,
  setSearchValue: PropTypes.func,
  setSearchBy: PropTypes.func,
  resetSelectedMovie: PropTypes.func,
  resetOffset: PropTypes.func
}

function mapStateToProps(state) {
  return { 
    searchResult: state.loadedMovies.moviesList,
    searchBy: apiParams.getKeyByValue(state.searchParams.searchBy),
    selectedMovie: state.selectedMovie.data,
    searchValue: state.searchParams.searchValue
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadMovies: () => dispatch(loadSearchedMovies()),
    setSearchValue: (searchValue) => dispatch(setSearchValue(searchValue)),
    setSearchBy: (searchBy) => dispatch(setSearchBy(searchBy)),
    resetSelectedMovie: () => dispatch(resetSelectedMovie()),
    resetOffset: () => dispatch(resetOffset())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
