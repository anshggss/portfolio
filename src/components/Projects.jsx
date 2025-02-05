import "./effect.css";
import "animate.css";

function Projects() {
  return (
    <>
      <div className="flex-1 w-full bbg-[#171010] grid grid-cols-4 max-sm:grid-cols-1 grid-rows-2 max-sm:grid-rows-4 gap-4 text-white">
        <a
          href="https://github.com/anshggss/Chat-WebApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#423F3E] flex flex-col justify-between h-full rounded p-4 hover:-translate-y-1 transition-all animate__animated animate__backInLeft draw-border">
            <div className="text-3xl text-bold text-green-300">
              Chatting WebApp
            </div>
            <div className="text-lg">
              WebApp made from React for UI and Expressjs with Nodejs for
              Server.
            </div>
          </div>
        </a>

        <a
          href="https://github.com/anshggss/notes-webapp"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <div className="bg-[#423F3E] flex flex-col justify-between h-full rounded p-4 hover:-translate-y-1 transition-all animate__animated animate__backInDown draw-border ">
            <div className="text-3xl text-bold text-white">Notes WebApp</div>
            <div className="text-lg">WebApp to store your Notes.</div>
          </div>
        </a>

        <a
          href="https://github.com/anshggss/Movies-WebApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#423F3E] flex flex-col justify-between h-full rounded p-4 animate__animated animate__backInDown  hover:-translate-y-1 transition-all draw-border">
            <div className="text-3xl text-bold text-blue-500">
              Movies WebApp
            </div>
            <div className="text-lg">
              WebApp to search and store your favorite movies.
            </div>
          </div>
        </a>

        <a
          href="https://github.com/anshggss/netflix-clone"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#423F3E] flex flex-col justify-between h-full rounded p-4 hover:-translate-y-1 transition-all animate__animated animate__backInRight draw-border">
            <div className="text-3xl text-bold text-red-500">
              Low-Level Netflix Clone
            </div>
            <div className="text-lg">
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
