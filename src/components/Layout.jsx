import React from "react";
import Navbar from "./Navbar";
import "./effect.css";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="sticky top-0 w-full z-50">
        <Navbar />
      </div>

      <div className="flex-1 flex p-4 bg-[#171010] overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export default Layout;
