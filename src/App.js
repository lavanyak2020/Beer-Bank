import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import configureStore from './configureStore';
import Home from './Pages/home/home';
import Favorite from './Pages/favorite/favorite';

const store = configureStore();

function App() {
  return (
    <Provider store = {store}>
        <BrowserRouter>
            <Switch>
                <Route exact path = '/'>
                    <Home />
                </Route>
                <Route path = '/favorite'>
                    <Favorite />
                </Route>
            </Switch>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
