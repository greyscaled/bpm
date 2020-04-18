import React from "react";

import { Layout } from "./components/layout";
import { BPMCalculator } from "./components/bpm-calculator";
import { ClickTrackProvider } from "./contexts/clicktrack";
import { PWAProvider } from "./contexts/pwa";

export const App: React.FC = () => (
  <PWAProvider>
    <Layout>
      <ClickTrackProvider>
        <BPMCalculator />
      </ClickTrackProvider>
    </Layout>
  </PWAProvider>
);
