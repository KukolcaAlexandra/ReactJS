import React from 'react';
//import createSearchFilterBar from '../searchFilterBar/searchFilterBar.component';
import createSortBar from '../sortBar/sortBar.component';
import styles from './main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {createSortBar()}
        <div className={styles.main}>
          Main content
        </div>
      </>
    );
  }
}

export default Main;
