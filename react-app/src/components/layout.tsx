import React from "react";

import "./layout.scss";
import { usePWA } from "../contexts/pwa";

const version = require("../../package.json").version;

export const Layout: React.FC = ({ children }) => {
  const pwaEvt = usePWA();
  return (
    <>
      <header className="header">
        <h1 className="app-title">Beats Calculator</h1>
        {pwaEvt ? (
          <button className="pwa-install-btn" onClick={() => pwaEvt.prompt()}>
            Install Version {version}
          </button>
        ) : (
          <div className="version-box">
            <span>Version {version}</span>
          </div>
        )}
      </header>

      <main className="main">
        <article className="article">
          A digital metronome with beat and note length metrics
        </article>

        {children}
      </main>

      <footer className="footer">
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
