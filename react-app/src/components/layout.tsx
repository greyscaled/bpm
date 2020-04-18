import React from "react";

import { usePWA } from "../contexts/pwa";
import "./layout.scss";

export const Layout: React.FC = ({ children }) => {
  const pwaEvt = usePWA();
  return (
    <>
      <header className="header">
        <h1>Beats Calculator</h1>
        {pwaEvt && (
          <button className="pwa-install-btn" onClick={() => pwaEvt.prompt()}>
            Install
          </button>
        )}
      </header>

      <main className="main">
        <article className="article" style={{ marginBottom: "20px" }}>
          A digital metronome with extended beat and note length metrics.
        </article>

        {children}
      </main>

      <footer className="footer" style={{ marginTop: "40px" }}>
        <p>
          {`\u00A9 ${new Date().getFullYear()}`}{" "}
          <a
            className="link"
            href="https://github.com/vapurrmaid"
            rel="noreferrer noopener"
            target="_blank"
          >
            @vapurrmaid
          </a>
        </p>
      </footer>
    </>
  );
};
