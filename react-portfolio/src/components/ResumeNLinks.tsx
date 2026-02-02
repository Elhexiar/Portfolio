import React from "react";

// cache the resume files in the public folder for faster loading
const resumeFiles = ["/en-resume.pdf", "/fr-resume.pdf"];

function ResumeNLinks() {
  return (
    <div
      style={{
        padding: "20px",
        width: "100%",
        height: "auto",
        overflowY: "auto",

        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <h2>Links and Resume</h2>
      <h3>Links</h3>
      <ul>
        <li>
          <a
            href="
                https://www.linkedin.com/in/mathis-miriel/
                "
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="
                    https://github.com/Elhexiar
                "
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
      <h3>Resume</h3>
      <div
        style={{
          height: "100%",
          float: "right",
          marginRight: "20px",
          width: "45%",
        }}
      >
        <span>English resume</span>
        <div>
          <a href="/en-resume.pdf" target="_blank" rel="noreferrer">
            Open PDF
          </a>
        </div>
        <iframe
          src={resumeFiles[0] + "#zoom=page-fit&toolbar=0&scrollbar=0"}
          title="English resume"
          style={{
            width: "100%",
            height: "90%",
            border: "none",
            maxWidth: "600px",
          }}
        />
      </div>
      <div
        style={{
          height: "100%",
          float: "right",
          marginRight: "20px",
          width: "45%",
        }}
      >
        <span>French resume</span>
        <div>
          <a href="/fr-resume.pdf" target="_blank" rel="noreferrer">
            Open PDF
          </a>
        </div>
        <iframe
          src={resumeFiles[1] + "#zoom=page-fit&toolbar=0&scrollbar=0"}
          title="French resume"
          style={{
            width: "100%",
            height: "90%",
            border: "none",
            maxWidth: "600px",
          }}
        />
      </div>
    </div>
  );
}

export default ResumeNLinks;
