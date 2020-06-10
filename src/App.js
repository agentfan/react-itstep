import React from 'react';
import Store from './utils/store';
import { BrowserRouter as Router,  Switch,  Route } from "react-router-dom";
import {CssBaseline} from '@material-ui/core';
import Menu from './components/menu';
import Home from './components/home';
import ImgInfo from './components/imginfo';
import Period from './components/period';

const App = () => {
  return (
    <Store>
      <CssBaseline/>
      <Router>
        <Menu/>
        <Switch>
          <Route path="/:period/:work">
            <ImgInfo/>
          </Route>
          <Route path="/:period">
            <Period/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </Store>
  );
}

export default App;
