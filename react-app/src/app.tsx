import React from "react";

import { Layout } from "./components/layout";
import { Calculator } from "./components/calculator";

export const App: React.FC = () => {
  return (
    <Layout>
      <Calculator />
    </Layout>
  );
};
