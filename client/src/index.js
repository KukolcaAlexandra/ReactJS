import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import store from './store/configureStore';

const rootElement = document.getElementById("root");
rootElement.style.height = '100%';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
);
