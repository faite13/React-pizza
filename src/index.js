//Main imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

//Redux
import store from './redux/store';

//Styles
import './scss/app.scss';

//Components
import { App } from './components';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider 
        store={store}
      >
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);