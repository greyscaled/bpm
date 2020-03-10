import React from "react";

export const Layout: React.FC = ({ children }) => (
  <>
    <header>
      <h1>BPM Calculator</h1>
    </header>

    <main>{children}</main>

    <footer>
      <p>{`\u00A9 ${new Date().getFullYear()} vapurrmaid`}</p>
    </footer>
  </>
);
