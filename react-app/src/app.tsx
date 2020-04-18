import React from "react";

import { Layout } from "./components/layout";
import { BPMCalculator } from "./components/bpm-calculator";
import { PWAProvider } from "./contexts/pwa";

export const App: React.FC = () => (
  <PWAProvider>
    <Layout>
      <BPMCalculator />
    </Layout>
  </PWAProvider>
);
