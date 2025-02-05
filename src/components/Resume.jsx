import React from "react";
import resumePDF from "../assets/resume.pdf"; // Ensure the PDF is accessible

function Resume() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      {/* PDF Embed */}
      <iframe
        src={resumePDF}
        className="w-full max-w-3xl h-[500px] border rounded-lg shadow-md"
        title="Resume"
      ></iframe>

      {/* Download Button - Directly Under PDF */}
      <a
        href={resumePDF}
        download="Ansh_Mani_Tripathi_Resume.pdf"
        className="mt-4 px-4 py-2 bg-[#423F3E] text-white rounded-lg shadow hover:bg-[#2e2c2b] hover:underline transition-all"
      >
        Download Resume
      </a>
    </div>
  );
}

export default Resume;
