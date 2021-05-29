import * as React from "react";
import { containerFull, content } from "./layout.module.css";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={containerFull}>
        <div className={content}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
