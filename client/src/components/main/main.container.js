import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MoviesList from './moviesList/moviesList.component';
import { releaseDate, rating } from '../../consts';
import SortBar from './sortBar/sortBar.component';
import { sortByDate, sortByRating } from '../../utils/filterMethods';
import styles from './main.css';

class Main extends React.Component {
  
  state = {
    sortBy: releaseDate,
    sortMethod: sortByDate
  }

  onChangeSortBy = (event) => {
    let sortMethod;
    let sortBy;

    if (event.target.innerText.toLowerCase() === releaseDate.toLowerCase()) {
      sortBy = releaseDate;
      sortMethod = sortByDate;
    } else if (event.target.innerText.toLowerCase() === rating.toLowerCase()) {
      sortBy = rating;
      sortMethod = sortByRating;
    }

    this.setState({
      sortBy,
      sortMethod
    });
  }

  render() {
    //let sortedResult = this.props.searchResult.sort(this.state.sortMethod);
    console.log(this.props.searchResult);
    return (
      <div className={styles.container}>
        
        <SortBar
          selectedMovie={this.props.selectedMovie}
          count={this.props.total}
          sortBy={this.state.sortBy}
          onChangeSortBy={this.onChangeSortBy}
        />

        <MoviesList
          data={/*sortedResult*/this.props.searchResult}
          onMovieClick={this.props.onMovieClick}
        />
        
      </div>
    );
  }
}

Main.propTypes = {
  selectedMovie: PropTypes.object,
  searchResult: PropTypes.array,
  onMovieClick: PropTypes.func,
  total: PropTypes.number
}

function mapStateToProps(state) {
  return { 
    searchResult: state.loadedMovies.moviesList,
    total: state.loadedMovies.total
  }
}

export default connect(mapStateToProps, null)(Main);
