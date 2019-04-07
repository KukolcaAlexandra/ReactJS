import React from 'react';
import Main from './main/main.container';
import Header from './header/header.container';
import Footer from './footer/footer.component';
import styles from './app.css';

class App extends React.Component {
  
  render() {
    return (
      <div className={styles.container}>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
