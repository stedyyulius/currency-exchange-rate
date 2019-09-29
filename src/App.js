import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import store from './store';

import Home from './containers/Home/Home';


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path={'/'} component={Home} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
