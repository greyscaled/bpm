import React from "react";
import { BPMCalculator } from "./components/bpm-calculator";
import { Layout } from "./components/layout";
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
