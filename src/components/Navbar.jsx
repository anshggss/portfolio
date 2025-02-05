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
    <div className="bg-[#171010] w-full h-16 flex justify-end items-center shadow-sm gap-4 sticky top-0 z-50 shadow-[#0D0B0B] ">
      {/* Desktop Menu */}
      <div className="flex items-center gap-4 max-sm:hidden h-full">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#362222] bg-[#EEEEEE] font-bold text-xl h-full w-24 flex items-center justify-center transition-all"
              : "h-full text-[#EEEEEE] font-bold text-xl hover:bg-[#362222] hover:text-[#EEEEEE] w-24 flex items-center justify-center transition-all"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-[#362222] bg-[#EEEEEE] font-bold text-xl h-full w-24 flex items-center justify-center transition-all"
              : "h-full text-[#EEEEEE] font-bold text-xl hover:bg-[#362222] hover:text-[#EEEEEE] w-24 flex items-center justify-center transition-all"
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive
              ? "text-[#362222] bg-[#EEEEEE] font-bold text-xl h-full w-24 flex items-center justify-center transition-all"
              : "h-full text-[#EEEEEE] font-bold text-xl hover:bg-[#362222] hover:text-[#EEEEEE] w-24 flex items-center justify-center transition-all"
          }
        >
          Skills
        </NavLink>

        <a
          href="https://linktr.ee/shadyggs"
          target="_blank"
          rel="noopener noreferrer"
          className="h-full text-[#EEEEEE] font-bold text-xl hover:bg-[#362222] hover:text-[#EEEEEE] w-24 flex items-center justify-center transition-all"
        >
          Contact
        </a>

        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive
              ? "text-[#362222] bg-[#EEEEEE] font-bold text-xl h-full w-24 flex items-center justify-center transition-all"
              : "h-full text-[#EEEEEE] font-bold text-xl hover:bg-[#362222] hover:text-[#EEEEEE] w-24 flex items-center justify-center transition-all"
          }
        >
          Resume
        </NavLink>
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
        <div className="flex flex-col items-center gap-4 w-full">
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-[#362222] bg-[#EEEEEE] font-bold text-xl h-full w-full py-2 text-center transition-all"
                : "h-full text-[#EEEEEE] font-bold text-xl hover:bg-[#362222] hover:text-[#EEEEEE] w-full py-2 text-center transition-all"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-[#362222] bg-[#EEEEEE] font-bold text-xl h-full w-full py-2 text-center transition-all"
                : "h-full text-[#EEEEEE] font-bold text-xl hover:bg-[#362222] hover:text-[#EEEEEE] w-full py-2 text-center transition-all"
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/skills"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-[#362222] bg-[#EEEEEE] font-bold text-xl h-full w-full py-2 text-center transition-all"
                : "h-full text-[#EEEEEE] font-bold text-xl hover:bg-[#362222] hover:text-[#EEEEEE] w-full py-2 text-center transition-all"
            }
          >
            Skills
          </NavLink>

          <a
            href="https://linktr.ee/shadyggs"
            target="_blank"
            rel="noopener noreferrer"
            className="h-full text-[#EEEEEE] font-bold text-xl hover:bg-[#362222] hover:text-[#EEEEEE] w-full py-2 text-center transition-all"
          >
            Contact
          </a>

          <NavLink
            to="/resume"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-[#362222] bg-[#EEEEEE] font-bold text-xl h-full w-full py-2 text-center transition-all"
                : "h-full text-[#EEEEEE] font-bold text-xl hover:bg-[#362222] hover:text-[#EEEEEE] w-full py-2 text-center transition-all"
            }
          >
            Resume
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
