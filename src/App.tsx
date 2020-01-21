import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import RegionsPage from '../src/pages/RegionsPage';
import CountriesPage from '../src/pages/CountriesPage';
import CountryPage from '../src/pages/CountryPage';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <RegionsPage />
        </Route>  
        <Route path="/сountries">
          <CountriesPage />
        </Route>
        <Route path="/сountry">
          <CountryPage />
        </Route>  
        <Route path="*">
          404
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
