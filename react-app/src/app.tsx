import React, { useEffect, useState } from "react";

import { Layout } from "./components/layout";
import { BPMCalculator } from "./components/bpm-calculator";

export interface PWAEvent extends Event {
  prompt(): Promise<void>;
}

export const App: React.FC = () => {
  const [pwaEvt, setPwaEvt] = useState<PWAEvent | undefined>(undefined);

  useEffect(() => {
    const beforePWAInstall = (event: Event) => {
      event.preventDefault();
      setPwaEvt(event as PWAEvent);
    };
    window.addEventListener("beforeinstallprompt", beforePWAInstall);

    const afterPWAInstall = () => {
      setPwaEvt(undefined);
    };
    window.addEventListener("appinstalled", afterPWAInstall);

    return () => {
      window.removeEventListener("beforeinstallprompt", beforePWAInstall);
      window.removeEventListener("appinstalled", afterPWAInstall);
    };
  }, []);

  return (
    <Layout pwaEvt={pwaEvt}>
      <BPMCalculator />
    </Layout>
  );
};
