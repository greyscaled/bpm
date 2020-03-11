import React from "react";

import { Layout } from "./components/layout";
import { BPMCalculator } from "./components/bpm-calculator";

export const App: React.FC = () => {
  return (
    <Layout>
      <BPMCalculator />
    </Layout>
  );
};
