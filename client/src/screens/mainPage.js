import React from 'react';
import Header from '../components/header/header.component';
import createFooter from '../components/footer/footer.component';
import MoviesList from '../components/moviesList/moviesList.component';
//import styles from './mainPage';
import styles from './mainPage.css';
import { title, genre, releaseDate, rating } from '../consts';
import movies from '../mock-data';
import createSortBar from '../components/sortBar/sortBar.component';
import { filterByTitle, filterByGenre, sortByDate, sortByRating } from '../utils/filterMethods';


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
    console.log('onClickSearchButton');
    console.log(this.searchValue);
    if (this.searchValue) {
      const filterFunction = this.state.searchBy === title ? filterByTitle : filterByGenre;
      const foundMovies = movies.data.filter((movie) => filterFunction(movie, this.searchValue));

      this.setState({
        searchResult: foundMovies.length > 0 ? foundMovies.sort(sortByDate) : foundMovies,
        searchInput: this.searchValue
      }); 
    }
  }

  onClickFilterButton(event) {
    console.log('onClickFilterButton');
    console.log(event.target.value);
    this.setState({ searchBy: event.target.value});
  }

  onClickEnterButton(event) {
    if (event.keyCode === 13) {
      this.onClickSearchButton();
    }
  }

  onInputChangeHandler(event) {
    console.log('onInputChangeHandler');
    console.log(event.target.value);
    this.searchValue = event.target.value;
  }

  onMovieClick(data) {
    console.log('onMovieClick');
    console.log(`data = ${data}`);
    //console.log('for id');
    //console.log(this.state.searchResult[data.id]);
    //console.log(this.state.searchResult);
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
    console.log("back!!!");
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
