import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ErrorBoundary from '../common/errorBoundary/errorBoundary.component';
import MainHeader from './mainHeader/mainHeader.component';
import DescriptionHeader from './descriptionHeader/descriptionHeader.component';
import { title } from '../../consts';
import { loadSearchedMovies } from '../../actions/movieActions';

class Header extends React.Component {
  state = {
    searchValue: '',
    searchBy: title,
  }

  onClickEnterButton = (event) => {
    if (event.keyCode === 13) {
      this.props.onClickSearchButton(this.state.searchValue);
    }
  }
  
  onInputChangeHandler = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  }

  onClickFilterButton = (event) => {
    this.setState({ searchBy: event.target.value});
  }

  render() {
    const { 
      selectedMovie,
      onBackButton,
      onClickSearchButton
    } = this.props;
    
    return (
      <ErrorBoundary>
        {selectedMovie ? (
          <DescriptionHeader
            data={selectedMovie}
            onClick={onBackButton}
          />
        ):(
          <MainHeader
            onInputChange={this.onInputChangeHandler}
            onClickEnterButton={this.onClickEnterButton}
            onClickSearchButton={()=>/*onClickSearchButton*/this.props.loadMovies(this.state.searchValue, this.state.searchBy)}
            onClickFilterButton={this.onClickFilterButton}
            searchBy={this.state.searchBy}
            onSearchButton={this.props.loadMovies}
          />
        )}
      </ErrorBoundary>
    );
  }
}


Header.propTypes = {
  selectedMovie: PropTypes.object,
  onBackButton: PropTypes.func,
  onClickSearchButton: PropTypes.func,
  loadMovies: PropTypes.func
}

function mapStateToProps(state) {
  return { 
    searchResult: state.loadedMovies.moviesList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadMovies: (searchValue, searchBy) => {
      dispatch(loadSearchedMovies(searchValue, searchBy))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
