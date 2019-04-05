import React from 'react';
import Main from './main/main.container';
import Header from './header/header.container';
import Footer from './footer/footer.component';
import { filterByTitle, filterByGenre, sortByDate } from '../utils/filterMethods';
import { title } from '../consts';
import movies from '../mock-data';
import styles from './app.css';

class App extends React.Component {
  
  state = {
    searchResult: [],
    selectedMovie: null
  }

  onClickSearchButton = (searchValue, searchBy) => {
    if (searchValue) {
      const filterFunction = searchBy === title ? filterByTitle : filterByGenre;
      const foundMovies = movies.data.filter((movie) => filterFunction(movie, searchValue));
      this.setState({
        searchResult: foundMovies.length > 0 ? foundMovies.sort(sortByDate) : foundMovies,
      }); 
    } else {
      this.setState({searchResult: []}); 
    }
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
      //searchResult: []
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
        />
        <Main
          selectedMovie={this.state.selectedMovie}
          //searchResult={this.state.searchResult}
          onMovieClick={this.onMovieClick}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;
