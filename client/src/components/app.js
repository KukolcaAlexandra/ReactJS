import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Main from './main/main.container';
import Header from './header/header.container';
import Footer from './footer/footer.component';
import styles from './app.css';
//import MainHeader from './header/mainHeader/mainHeader.component';
//import DescriptionHeader from './header/descriptionHeader/descriptionHeader.component';
import DescriptionHeaderContainer from './header/descriptionHeaderContainer/descriptionHeader.container';
import MainHeaderContainer from './header/mainHeaderContainer/mainHeader.container';

function MainPage() {
  return (
    <>
      <MainHeaderContainer />
      <div>Not Found</div>
    </>
  )
}

function SearchResultsPage() {
  return (
    <>
      <MainHeaderContainer />
      <Main />
    </>
  )
}

function DescriptionPage() {
  return (
    <>
      <DescriptionHeaderContainer />
      <Main />
    </>
  )
}

/*const App = withRouter(({ history, children }) => (
  <div className={styles.container}>
    <Header/>
    <Switch>
      <Route exact path="/" component={MainHeaderContainer} />
      <Route path="/film" component={DescriptionHeaderContainer} />
      <Redirect from="*" to="/error" />
    </Switch>
    <Main />
    <Footer/>    
  </div>
))

export default App;*/


class App extends React.Component {
  
  render() {
    console.log(this.props);
    return (
      <div className={styles.container}>
        
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/search/:query" component={SearchResultsPage} />
          <Route exact path="/film/:id" component={DescriptionPage} />
          <Redirect from="*" to="/error" />
        </Switch>
        
        <Footer/>
        
      </div>
    );
    /*return (
      <div className={styles.container}>
        
        <Switch>
          <Route exact path="/" component={MainHeaderContainer} />
          <Route exact path="/search/:query" component={MainHeaderContainer} />
          <Route path="/film/id" component={DescriptionHeaderContainer} />
          <Redirect from="*" to="/error" />
        </Switch>
        <Main/>
        <Footer/>
        
      </div>
    );*/
  }
}

export default App;

/*

<Header/>

<Header/>
        <Main/>
        <Footer/>


        <Switch>
          <Route exact path="/" component={MainHeaderContainer} />
          <Route path="/film" component={DescriptionHeaderContainer} />
        </Switch>
        */
