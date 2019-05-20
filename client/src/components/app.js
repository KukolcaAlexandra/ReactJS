import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import Main from './main/main.container';
import Footer from './footer/footer.component';
import styles from './app.css';
// import DescriptionHeaderContainer from './header/descriptionHeaderContainer/descriptionHeader.container';
// import MainHeaderContainer from './header/mainHeaderContainer/mainHeader.container';
// import SortBar from './main/sortBar/sortBar.component';
// import NoFilmFound from './main/noFilmFound/noFilmFound.component';
import MainPage from './pages/mainPage';
import SearchResultsPage from './pages/searchResultsPage';
import DescriptionPage from './pages/descriptionPage';

export default class App extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>

        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/search/:query" component={SearchResultsPage} />
          <Route path="/search" component={SearchResultsPage} />
          <Route path="/film/:id" component={DescriptionPage} />
          <Redirect from="*" to="/error" />
        </Switch>
        <Footer/>

      </div>
    );
  }
}
