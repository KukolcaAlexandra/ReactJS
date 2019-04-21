import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from '../../common/errorBoundary/errorBoundary.component';
import MainHeader from '../mainHeader/mainHeader.component';
//import DescriptionHeader from './descriptionHeader/descriptionHeader.component';
import { apiParams } from '../../../consts';
import { loadMovies } from '../../../actions/movieActions';
import { resetOffset } from '../../../actions/offsetActions';
import { resetSelectedMovie } from '../../../actions/selectedMovieActions';
import { setSearchValue, setSearchBy } from '../../../actions/searchActions';

export class MainHeaderContainer extends React.Component {

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
    //this.props.resetOffset();
    console.log('onClickSearchButton');
    this.props.loadMovies();
    this.props.history.push('/search/quer');
  }

  /*onBackButton = () => {
    this.props.resetSelectedMovie();
    this.props.loadMovies();
  }*/

  render() {
    const {
      //selectedMovie,
      searchBy,
      loadMovies
    } = this.props;
    console.log('Main Header');
    console.log(this.props);
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
  }
}

MainHeaderContainer.propTypes = {
  searchResult: PropTypes.array,
  searchBy: PropTypes.string,
  //selectedMovie: PropTypes.object,
  searchValue: PropTypes.string,
  loadMovies: PropTypes.func,
  setSearchValue: PropTypes.func,
  setSearchBy: PropTypes.func,
  //resetSelectedMovie: PropTypes.func,
  resetOffset: PropTypes.func,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return { 
    searchResult: state.loadedMovies.moviesList,
    searchBy: apiParams.getKeyByValue(state.searchParams.searchBy),
    //selectedMovie: state.selectedMovie.data,
    searchValue: state.searchParams.searchValue
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadMovies: () => dispatch(loadMovies()),
    setSearchValue: (searchValue) => dispatch(setSearchValue(searchValue)),
    setSearchBy: (searchBy) => dispatch(setSearchBy(searchBy)),
    resetSelectedMovie: () => dispatch(resetSelectedMovie()),
    resetOffset: () => dispatch(resetOffset())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainHeaderContainer));
