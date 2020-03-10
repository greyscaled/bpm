import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Layout } from "./components/layout";
import { Calculator } from "./components/calculator";

export const App: React.FC = () => {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/">
            <Calculator />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
};
