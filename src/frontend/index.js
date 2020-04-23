import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import reducer from './reducers';
import App from './routes/App';
import initialState from './initialState';

const history = createBrowserHistory();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;s
const store = createStore(reducer, initialState/* , composeEnhancers */, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>, document.getElementById('app'),
);
