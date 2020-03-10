import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Layout } from "./components/layout";
import { BPMCalculator } from "./components/bpm-calculator";

export const App: React.FC = () => {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/">
            <BPMCalculator />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
};
