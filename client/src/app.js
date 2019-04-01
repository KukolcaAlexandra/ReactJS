import React from 'react';
import Main from './components/main/main';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import { filterByTitle, filterByGenre, sortByDate } from './utils/filterMethods';
import { title } from './consts';
import movies from './mock-data';
import styles from './app.css';

class App extends React.Component {
  
  state = {
    searchBy: title,
    searchResult: [],
    selectedMovie: null
  }

  onClickSearchButton = (searchValue) => {
    if (searchValue) {
      const filterFunction = this.state.searchBy === title ? filterByTitle : filterByGenre;
      const foundMovies = movies.data.filter((movie) => filterFunction(movie, searchValue));

      this.setState({
        searchResult: foundMovies.length > 0 ? foundMovies.sort(sortByDate) : foundMovies,
      }); 
    } else {
      this.setState({searchResult: []}); 
    }
  }

  onClickFilterButton = (event) => {
    this.setState({ searchBy: event.target.value});
  }

  onMovieClick = (data) => {
    const sortedResult = this.state.searchResult.filter((movie) => {
      return filterByGenre(movie, data.genres[0]) && movie.id !== data.id;
    });

    this.setState({
      selectedMovie: data,
      searchResult:  sortedResult
    });
    window.scrollTo(0, 0);
  }

  onBackButton = () => {
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
          searchBy = {this.state.searchBy}
        />
        <Main
          selectedMovie={this.state.selectedMovie}
          searchResult={this.state.searchResult}
          onMovieClick={this.onMovieClick}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;
