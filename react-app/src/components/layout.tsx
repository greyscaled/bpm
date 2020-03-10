import React from "react";

export const Layout: React.FC = ({ children }) => (
  <>
    <header>
      <h1>Beats Calculator</h1>
    </header>

    <main>
      <article style={{ marginBottom: "20px" }}>
        A digital metronome with extended beat and note length metrics.
      </article>

      {children}
    </main>

    <footer style={{ marginTop: "40px" }}>
      <p>
        {`\u00A9 ${new Date().getFullYear()}`}{" "}
        <a
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
