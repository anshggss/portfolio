// Layout.jsx
import React from "react";
import Navbar from "./Navbar";
import "./effect.css";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col ">
      <div className="sticky">
        <Navbar />
      </div>

      <div className="flex-1 flex p-4 bg-[#171010]">{children}</div>
    </div>
  );
}

export default Layout;
