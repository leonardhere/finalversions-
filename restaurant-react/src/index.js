import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/app';
import store from './redux/store';
import MoneyProvider from './context/money-context';
import history from './history';
import { ConnectedRouter } from 'connected-react-router'


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MoneyProvider>
        <App restaurants />
      </MoneyProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);