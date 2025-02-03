import React from "react";

function Projects() {
  return (
    <>
      <div className="flex-1 w-full bbg-[#171010] grid grid-cols-4 max-sm:grid-cols-1 grid-rows-2 max-sm:grid-rows-4 gap-4 text-white">
        <a
          href="https://github.com/anshggss/Chat-WebApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#423F3E] flex flex-col justify-between h-full rounded-2xl p-4 hover:-translate-y-1 transition-all">
            <div className="text-2xl text-bold">Chatting WebApp</div>
            <div className="">
              WebApp made from React for UI and Expressjs with Nodejs for
              Server.
            </div>
          </div>
        </a>

        <a
          href="https://github.com/anshggss/notes-webapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#423F3E] flex flex-col justify-between h-full rounded-xl p-4 hover:-translate-y-1 transition-all">
            <div className="text-2xl text-bold">Notes WebApp</div>
            <div className="">WebApp to store your Notes.</div>
          </div>
        </a>

        <a
          href="https://github.com/anshggss/Movies-WebApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#423F3E] flex flex-col justify-between h-full rounded-xl p-4 hover:-translate-y-1 transition-all">
            <div className="text-2xl text-bold">Movies WebApp</div>
            <div className="">
              WebApp to search and store your favorite movies.
            </div>
          </div>
        </a>

        <a
          href="https://github.com/anshggss/netflix-clone"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#423F3E] flex flex-col justify-between h-full rounded-xl p-4 hover:-translate-y-1 transition-all">
            <div className="text-2xl text-bold">Low-Level Netflix Clone</div>
            <div className="">
              A low-level Netflix clone made using basic html, css and
              javascript.
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Projects;
