import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainHeaderContainer from './components/header/mainHeaderContainer/mainHeader.container';
import SortBar from './components/main/sortBar/sortBar.component';
import NoFilmFound from './components/main/noFilmFound/noFilmFound.component';
import Main from './components/main/main.container';
import DescriptionHeaderContainer from './components/header/descriptionHeaderContainer/descriptionHeader.container';

function MainPage() {
  return (
    <div>
      <MainHeaderContainer />
      <SortBar />
      <NoFilmFound />
    </div>
  )
}

function MoviesPage() {
  return (
    <div>
      <MainHeaderContainer />
      <Main />
    </div>
  )
}

function MoviePage() {
  return (
    <div>
      <DescriptionHeaderContainer />
      <Main />
    </div>  
  )
}

function NotFoundRoute() {
  return <h2>Not Found</h2>;
}

const Root = ({
  Router, location, context, store,
}) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/search/:query" component={MoviesPage} />
        <Route path="/search" component={MoviesPage} />
        <Route path="/film/:id" component={MoviePage} /> 
        <Route exact path="/error" component={NotFoundRoute}/>
        <Redirect from="*" to="/error" />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
};
Root.defaultProps = {
  location: null,
  context: null,
};

export default hot(module)(Root);

/*
<Redirect from="*" to="/error" />
*/

/*
<h1>Server Side Renderig</h1>
  <Hello name="World" />
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/users">Users</Link></li>
      <li><Link to="/search">MoviesPage</Link></li>
      <li><Link to="/film/:id">MoviePage</Link></li>
    </ul>
*/
