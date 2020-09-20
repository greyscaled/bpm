import React, { createContext, useContext, useEffect, useState } from "react";

interface PWAEvent extends Event {
  prompt(): Promise<void>;
}

const PWAContext = createContext<PWAEvent | undefined>(undefined);

export const usePWA = (): PWAEvent | undefined => useContext(PWAContext);

export const PWAProvider: React.FC = ({ children }) => {
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

  return <PWAContext.Provider value={pwaEvt}>{children}</PWAContext.Provider>;
};
