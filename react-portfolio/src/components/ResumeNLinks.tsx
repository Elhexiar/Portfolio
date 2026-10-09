import { useLanguage } from "../i18n";

// cache the resume files in the public folder for faster loading
const resumeFiles = ["/en-resume.pdf", "/fr-resume.pdf"];

function ResumeNLinks() {
  const { tr } = useLanguage();

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
      <h2>{tr({ fr: "Liens et CV", en: "Links and Resume" })}</h2>
      <h3>{tr({ fr: "Liens", en: "Links" })}</h3>
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
      <h3>{tr({ fr: "CV", en: "Resume" })}</h3>
      <div
        style={{
          height: "100%",
          float: "right",
          marginRight: "20px",
          width: "45%",
        }}
      >
        <span>{tr({ fr: "CV en anglais", en: "English resume" })}</span>
        <div>
          <a href="/en-resume.pdf" target="_blank" rel="noreferrer">
            {tr({ fr: "Ouvrir le PDF", en: "Open PDF" })}
          </a>
        </div>
        <iframe
          src={resumeFiles[0] + "#zoom=page-fit&toolbar=0&scrollbar=0"}
          title={tr({ fr: "CV en anglais", en: "English resume" })}
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
        <span>{tr({ fr: "CV en français", en: "French resume" })}</span>
        <div>
          <a href="/fr-resume.pdf" target="_blank" rel="noreferrer">
            {tr({ fr: "Ouvrir le PDF", en: "Open PDF" })}
          </a>
        </div>
        <iframe
          src={resumeFiles[1] + "#zoom=page-fit&toolbar=0&scrollbar=0"}
          title={tr({ fr: "CV en français", en: "French resume" })}
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
