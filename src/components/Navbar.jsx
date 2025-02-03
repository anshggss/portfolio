import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#2B2B2B] w-full h-16 flex justify-end items-center shadow-lg gap-4 sticky top-0 z-50">
      {/* Desktop Menu */}
      <div className="flex items-center gap-4 max-sm:hidden h-full">
        {["/", "/projects", "/skills", "/contact", "/resume"].map((path) => {
          const pathName = path.split("/")[1];
          const displayName = pathName
            ? pathName.charAt(0).toUpperCase() + pathName.slice(1)
            : "";

          return (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-[#362222] bg-[#EEEEEE] font-bold text-xl h-full w-24 flex items-center justify-center transition-all"
                  : "h-full text-[#EEEEEE] font-bold text-xl hover:bg-[#362222] hover:text-[#EEEEEE] w-24 flex items-center justify-center transition-all"
              }
            >
              {displayName ? displayName : "About"}
            </NavLink>
          );
        })}
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden pr-4" ref={buttonRef}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white text-3xl cursor-pointer focus:outline-none"
        >
          {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:hidden absolute top-16 w-full left-0 bg-[#2B2B2B] z-50`}
      >
        {["/", "/projects", "/skills", "/contact", "/resume"].map((path) => {
          const pathName = path.split("/")[1];
          const displayName = pathName
            ? pathName.charAt(0).toUpperCase() + pathName.slice(1)
            : "About";

          return (
            <NavLink
              key={path}
              to={path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-[#362222] bg-[#EEEEEE] font-bold text-xl w-full py-2 text-center block"
                  : "text-[#EEEEEE] font-bold text-xl hover:bg-[#362222] hover:text-[#EEEEEE] w-full py-2 text-center block"
              }
            >
              {displayName}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
