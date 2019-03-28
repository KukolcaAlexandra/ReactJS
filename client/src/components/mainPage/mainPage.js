import React from 'react';
import Header from '../header/header.component';
import createFooter from '../footer/footer.component';
import MoviesList from '../moviesList/moviesList.component';
import { title, releaseDate, rating } from '../../consts';
import movies from '../../mock-data';
import createSortBar from '../sortBar/sortBar.component';
import { filterByTitle, filterByGenre, sortByDate, sortByRating } from '../../utils/filterMethods';
import styles from './mainPage.css';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.onClickEnterButton = this.onClickEnterButton.bind(this);
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    this.onClickSearchButton = this.onClickSearchButton.bind(this);
    this.onClickFilterButton = this.onClickFilterButton.bind(this);
    this.onChangeSortBy = this.onChangeSortBy.bind(this);
    this.onMovieClick = this.onMovieClick.bind(this);
    this.onBackButton = this.onBackButton.bind(this);
    this.state = {
      searchInput: '',
      searchBy: title,
      searchResult: [],
      sortBy: releaseDate,
      selectedMovie: null
    }
    this.searchValue = '';
  }
  
  onClickSearchButton() {
    if (this.searchValue) {
      const filterFunction = this.state.searchBy === title ? filterByTitle : filterByGenre;
      const foundMovies = movies.data.filter((movie) => filterFunction(movie, this.searchValue));

      this.setState({
        searchResult: foundMovies.length > 0 ? foundMovies.sort(sortByDate) : foundMovies,
        searchInput: this.searchValue
      }); 
    } else {
      this.setState({searchResult: []}); 
    }
  }

  onClickFilterButton(event) {
    this.setState({ searchBy: event.target.value});
  }

  onClickEnterButton(event) {
    if (event.keyCode === 13) {
      this.onClickSearchButton();
    }
  }

  onInputChangeHandler(event) {
    this.searchValue = event.target.value;
  }

  onMovieClick(data) {
    this.setState({
      selectedMovie: data,
      searchResult: this.state.searchResult.filter((movie) => filterByGenre(movie, data.genres[0]))
    });
  } 

  onChangeSortBy(event) {
    let sortedResult;
    let sortBy;
    if (event.target.innerText.toLowerCase() === releaseDate.toLowerCase()) {
      sortedResult = this.state.searchResult.sort(sortByDate);
      sortBy = releaseDate;
    } else if (event.target.innerText.toLowerCase() === rating.toLowerCase()) {
      sortedResult = this.state.searchResult.sort(sortByRating);
      sortBy = rating;
    }

    this.setState({ 
      sortBy,
      searchResult: sortedResult
    });
  }

  onBackButton() {
    this.setState({
      selectedMovie: null,
      searchResult: []
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <Header
          selectedMovie={this.state.selectedMovie}
          onBackButton={this.onBackButton}
          onClickFilterButton={this.onClickFilterButton}
          onClickSearchButton={this.onClickSearchButton}
          onClickEnterButton={this.onClickEnterButton}  
          onInputChangeHandler={this.onInputChangeHandler}
          searchBy = {this.state.searchBy}
        />
        {createSortBar(this.state.selectedMovie, this.state.searchResult.length, this.state.sortBy, this.onChangeSortBy)}
        <MoviesList data={this.state.searchResult} onMovieClick={this.onMovieClick}/>
        {createFooter()}
      </div>
    );
  }
}

export default MainPage;
