import React, { useState } from "react";
import Pfp from "../assets/pfp.jpg"; // Importing the image correctly
import Soap from "../assets/soap.png";
import "./effect.css";

function About() {
  // State to track ball position
  const [ballPosition, setBallPosition] = useState({ top: "50%", left: "50%" });

  // Function to move ball randomly within the box
  const moveBall = () => {
    const maxX = 90; // Limit X movement to prevent overflow
    const maxY = 80; // Limit Y movement to prevent overflow

    const randomX = Math.floor(Math.random() * maxX) + "%";
    const randomY = Math.floor(Math.random() * maxY) + "%";

    setBallPosition({ top: randomY, left: randomX });
  };

  return (
    <>
      <div className="w-full h-fit grid grid-cols-4 max-sm:grid-cols-1 max-sm:grid-rows-2 grid-rows-2 gap-4 bg-[#171010] ">
        {/* Profile Section */}
        <div className="h-96 p-4 flex col-span-1 max-sm:col-span-1 justify-center bg-[#423F3E] rounded-sm items-center hover:shadow-xl transition-all ">
          <div className="flex rounded-full overflow-hidden w-64 h-64 justify-center items-center shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:drop-shadow-xl border-2 border-[#171010]">
            <img src={Pfp} alt="pfp" className="h-full w-full object-cover" />
          </div>
        </div>

        {/* About Me Text Section */}

        <div className="h-96 p-4 bg-[#423F3E] col-span-3 max-sm:col-span-1  rounded-sm text-[#EEEEEE] flex-1 overflow-auto cursor-default hover:shadow-xl transition-all ">
          <div className="flex text-5xl font-bold m-4 typing-effect ">
            About Me
          </div>
          <div className="mx-4 my-8 flex flex-col gap-3">
            <div className="text-3xl transition-all">Ansh Mani Tripathi</div>
            <div className="text-xl transition-all">
              <span className="text-green-600 hover:text-red-300 transition-all">
                Location📍
              </span>
              : Lucknow, Uttar Pradesh, India
            </div>
            <div className="text-xl text-[#EEEEEE] transition-all">
              Full Stack Web Developer
            </div>
            <div className="text-xl transition-all">
              I play games and like to code
            </div>
          </div>
        </div>

        {/* Box containing the moving ball */}
        <div className="w-full flex flex-col bg-[#423F3E] col-span-4 max-sm:hidden rounded-sm outline-2 outline-offset-2 outline-dashed outline-[#2B2B2B] ">
          <div className="m-4 text-[#EEEEEE] text-lg">Wash your hands</div>
          <div className="relative flex-1">
            <img
              src={Soap}
              alt="Soap"
              className="w-20 h-20 rounded-full absolute transition-all duration-200 ease-in-out cursor-pointer"
              style={{ top: ballPosition.top, left: ballPosition.left }}
              onMouseEnter={moveBall}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
