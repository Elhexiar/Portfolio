import styles from "./modules/ResumeNLinks.module.css";
import { useLanguage } from "../i18n";

// stable url so it can be shared directly : mathis-miriel-dev.org/cv.pdf
// only a french version for now, an english one will come later
const resume = { file: "/cv.pdf", downloadName: "Mathis-Miriel-CV.pdf" };

const contactLinks = [
  {
    badge: "@",
    label: "Email",
    value: "miriel.mathis@gmail.com",
    href: "mailto:miriel.mathis@gmail.com",
  },
  {
    badge: "in",
    label: "LinkedIn",
    value: "in/mathis-miriel",
    href: "https://www.linkedin.com/in/mathis-miriel/",
  },
  {
    badge: "</>",
    label: "GitHub",
    value: "Elhexiar",
    href: "https://github.com/Elhexiar",
  },
];

function ResumeNLinks() {
  const { lang, tr } = useLanguage();

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          {tr({ fr: "Disponibilité", en: "Availability" })}
        </h3>
        <p className={styles.availability}>
          <span className={styles.statusDot} />
          {tr({
            fr: "Stage du 9 novembre 2026 au 29 janvier 2027, puis ouvert à une alternance ou un poste sur le long terme. Région de Rennes.",
            en: "Internship from November 9, 2026 to January 29, 2027, then open to a work-study contract or a long-term position. Rennes area, France.",
          })}
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          {tr({ fr: "Contact", en: "Contact" })}
        </h3>
        <div className={styles.linkGrid}>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={styles.linkCard}
            >
              <span className={styles.badge} aria-hidden="true">
                {link.badge}
              </span>
              <span className={styles.linkText}>
                <span className={styles.linkLabel}>{link.label}</span>
                <span className={styles.linkValue}>{link.value}</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.resumeSection}`}>
        <h3 className={styles.sectionTitle}>
          {tr({ fr: "CV", en: "Resume" })}
        </h3>
        <div className={styles.resumeActions}>
          <a
            href={resume.file}
            target="_blank"
            rel="noreferrer"
            className={styles.actionButton}
          >
            {tr({ fr: "Ouvrir le CV", en: "Open resume" })}
          </a>
          <a
            href={resume.file}
            download={resume.downloadName}
            className={styles.actionButton}
          >
            {tr({ fr: "Télécharger (PDF)", en: "Download (PDF)" })}
          </a>
          {lang === "en" && (
            <span className={styles.resumeNote}>
              (French only for now, an English version is coming)
            </span>
          )}
        </div>
        <div className={styles.resumePreview}>
          <iframe
            src={resume.file + "#zoom=page-width&toolbar=0&navpanes=0"}
            title={tr({ fr: "Aperçu du CV", en: "Resume preview" })}
          />
        </div>
      </section>
    </div>
  );
}

export default ResumeNLinks;
