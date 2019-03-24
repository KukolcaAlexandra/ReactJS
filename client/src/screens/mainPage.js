import React from 'react';
import Header from '../components/header/header.component';
import createFooter from '../components/footer/footer.component';
import Main from '../components/main/main.component';
import styles from './mainPage';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.onClickEnterButton = this.onClickEnterButton.bind(this);
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    this.onClickSearchButton = this.onClickSearchButton.bind(this);
    this.onClickFilterButton = this.onClickFilterButton.bind(this);
  }
  
  onClickSearchButton() {
    console.log('onClickSearchButton');
  }

  onClickFilterButton(event) {
    console.log('onClickFilterButton');
    console.log(event.target.value);
  }
  onClickEnterButton(event) {
    console.log('onClickEnterButton');
    console.log(event.keyCode);
  }

  onInputChangeHandler() {
    console.log('onInputChangeHandler');
  }

  render() {
    return (
      <div className={styles.mainPage}>
        <Header
          onClickFilterButton={this.onClickFilterButton}
          onClickSearchButton={this.onClickSearchButton}
          onClickEnterButton={this.onClickEnterButton}  
          onInputChangeHandler={this.onInputChangeHandler}
        />
        <Main/>
        {createFooter()}
      </div>
    );
  }
}

export default MainPage;
