import React from "react";
import C_Logo from "../assets/C_Logo.png";
import Css_Logo from "../assets/css-logo.png";
import Exp_Logo from "../assets/express-js.png";
import HTML_Logo from "../assets/html.png";
import Java_Logo from "../assets/java.png";
import JS_Logo from "../assets/javascript.svg";
import Mongo_Logo from "../assets/mongodb.webp";
import SQL_Logo from "../assets/mysql-logo.svg";
import Node_Logo from "../assets/node.png";
import Python_Logo from "../assets/python.png";
import React_Logo from "../assets/React.png";
import Redux_Logo from "../assets/redux.png";
import Tailwind_Logo from "../assets/tailwind.png";
import Unity_Logo from "../assets/unity.svg";
import "animate.css";

function Skills() {
  return (
    <>
      <div className="flex justify-between flex-1">
        <div className="text-white w-[40%] text-5xl">
          <div className="flex flex-col gap-3 relative top-5 left-12">
            <div>All of my projects I have </div>{" "}
            <div>made uptil now majorly</div>
            <div>include these skills</div>
          </div>
        </div>
        <div className="grid grid-cols-4 w-[45%] items-center place-items-center bg-[#423F3E] rounded">
          <a
            href="https://en.wikipedia.org/wiki/C_(programming_language)"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white h-24 w-20 flex items-center p-2 rounded hover:-translate-y-2  transition-all flex-col hover:shadow-md hover:shadow-amber-700"
          >
            <img src={C_Logo} alt="C Logo" />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white h-24 w-20 flex items-center p-2 rounded hover:-translate-y-2 transition-all hover:shadow-md hover:shadow-amber-700"
          >
            <img src={Css_Logo} alt="CSS Logo" />
          </a>
          <a
            href="https://expressjs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white h-24 w-20 flex items-center p-2 rounded hover:-translate-y-2 transition-all hover:shadow-md hover:shadow-amber-700"
          >
            <img src={Exp_Logo} alt="Express.js Logo" />
          </a>
          <a
            href="https://www.java.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white h-24 w-20 flex items-center p-2 rounded hover:-translate-y-2 transition-all hover:shadow-md hover:shadow-amber-700"
          >
            <img src={Java_Logo} alt="Java Logo" />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white h-24 w-20 flex items-center p-2 rounded hover:-translate-y-2 transition-all hover:shadow-md hover:shadow-amber-700"
          >
            <img src={HTML_Logo} alt="HTML Logo" />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F0DB4F] h-24 w-20 flex items-center rounded hover:-translate-y-2 transition-all hover:shadow-md hover:shadow-amber-700"
          >
            <img src={JS_Logo} alt="JavaScript Logo" />
          </a>
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white h-24 w-20 flex items-center p-2 rounded hover:-translate-y-2 transition-all hover:shadow-md hover:shadow-amber-700"
          >
            <img src={Mongo_Logo} alt="MongoDB Logo" />
          </a>
          <a
            href="https://www.mysql.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white h-24 w-20 flex items-center p-2 rounded hover:-translate-y-2 transition-all hover:shadow-md hover:shadow-amber-700"
          >
            <img src={SQL_Logo} alt="SQL Logo" />
          </a>
          <a
            href="https://nodejs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white h-24 w-20 flex items-center p-2 rounded hover:-translate-y-2 transition-all hover:shadow-md hover:shadow-amber-700"
          >
            <img src={Node_Logo} alt="Node.js Logo" />
          </a>
          <a
            href="https://www.python.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white h-24 w-20 flex items-center p-2 rounded hover:-translate-y-2 transition-all hover:shadow-md hover:shadow-amber-700"
          >
            <img src={Python_Logo} alt="Python Logo" />
          </a>
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white h-24 w-20 flex items-center p-2 rounded hover:-translate-y-2 transition-all hover:shadow-md hover:shadow-amber-700"
          >
            <img src={React_Logo} alt="React Logo" />
          </a>
          <a
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white h-24 w-20 flex items-center p-2 rounded hover:-translate-y-2 transition-all hover:shadow-md hover:shadow-amber-700"
          >
            <img src={Redux_Logo} alt="Redux Logo" />
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white h-24 w-20 flex items-center p-2 rounded hover:-translate-y-2 transition-all hover:shadow-md hover:shadow-amber-700"
          >
            <img src={Tailwind_Logo} alt="Tailwind CSS Logo" />
          </a>
          <a
            href="https://unity.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white h-24 w-20 flex items-center p-2 rounded hover:-translate-y-2 transition-all hover:shadow-md hover:shadow-amber-700"
          >
            <img src={Unity_Logo} alt="Unity Logo" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Skills;
