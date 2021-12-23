import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import { Provider } from 'react-redux';
// import { store } from './redux/store';
// import { store2 } from './redux2/store';
import { store3 } from './redux3/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store3}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

