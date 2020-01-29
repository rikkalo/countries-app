import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CountriesPage from "../src/pages/CountriesPage";
import CountryPage from "../src/pages/CountryPage";
import RegionsPage from "../src/pages/RegionsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <RegionsPage />
        </Route>
        <Route path="/countries">
          <CountriesPage />
        </Route>
        <Route path="/country">
          <CountryPage />
        </Route>
        <Route path="*">404</Route>
      </Switch>
    </Router>
  );
};

export default App;
