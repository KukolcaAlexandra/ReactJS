import React from 'react';
import Header from '../components/header/header.component';
import createFooter from '../components/footer/footer.component';
import Main from '../components/main/main.component';
//import styles from './mainPage';
import styles from './mainPage.css';
import { title, genre, releaseDate, rating } from '../consts';
import movies from '../mock-data';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.onClickEnterButton = this.onClickEnterButton.bind(this);
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    this.onClickSearchButton = this.onClickSearchButton.bind(this);
    this.onClickFilterButton = this.onClickFilterButton.bind(this);
    this.state = {
      searchInput: '',
      searchBy: title,
      searchResult: [],
      sortBy: releaseDate,
    }
    this.searchValue = '';
  }
  
  onClickSearchButton() {
    console.log('onClickSearchButton');
    console.log(this.searchValue);
    console.log(movies);
  }

  onClickFilterButton(event) {
    console.log('onClickFilterButton');
    console.log(event.target.value);
    this.setState({ searchBy: event.target.value});
  }
  onClickEnterButton(event) {
    console.log('onClickEnterButton');
    console.log(event.keyCode);
  }

  onInputChangeHandler(event) {
    console.log('onInputChangeHandler');
    console.log(event.target.value);
    this.searchValue = event.target.value;
  }

  render() {
    return (
      <div className={styles.container}>
        <Header
          onClickFilterButton={this.onClickFilterButton}
          onClickSearchButton={this.onClickSearchButton}
          onClickEnterButton={this.onClickEnterButton}  
          onInputChangeHandler={this.onInputChangeHandler}
          searchBy = {this.state.searchBy}
        />
        <Main/>
        {createFooter()}
      </div>
    );
  }
}

export default MainPage;
