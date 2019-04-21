import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import App from './components/app';
import { persistor, store } from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const rootElement = document.getElementById("root");
rootElement.style.height = '100%';

function NotFoundRoute() {
  return <h2>Not Found</h2>;
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          <Route exact path="/error" component={NotFoundRoute}/>
          <Route component={App}/>
        </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  rootElement
);

//<App/>
/*

<Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>*/
