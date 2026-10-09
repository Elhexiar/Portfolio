import React from "react";
import { useLanguage, type Lang } from "../i18n";

const languages: Lang[] = ["fr", "en"];

interface NavbarProps {
  selectedIndex?: number;
  setSelectedIndex?: (index: number) => void;
  childrenList?: {
    tabChildren: React.ReactNode;
    contentChildren: React.ReactNode;
    contentStyle?: React.CSSProperties;
  }[];
}

function Navbar({
  selectedIndex: propSelectedIndex,
  setSelectedIndex: propSetSelectedIndex,
  childrenList,
}: NavbarProps) {
  const { lang, setLang, tr } = useLanguage();
  let [selectedIndex, setSelectedIndex] = React.useState(
    propSelectedIndex ?? -1,
  );

  // Use prop values if provided, otherwise use local state
  const actualSelectedIndex =
    propSelectedIndex !== undefined ? propSelectedIndex : selectedIndex;
  const actualSetSelectedIndex = propSetSelectedIndex ?? setSelectedIndex;

  return (
    <div className="content-overhaul-container">
      <nav
        className="navbar navbar-expand-lg"
        style={{ width: "100%", height: "fit-content" }}
      >
        <div className="container-fluid" style={{ justifyContent: "center" }}>
          <div
            className="lang-switch"
            role="group"
            aria-label={tr({ fr: "Langue", en: "Language" })}
          >
            {languages.map((language) => (
              <button
                key={language}
                type="button"
                className={lang === language ? "active" : ""}
                aria-pressed={lang === language}
                onClick={() => setLang(language)}
              >
                {language.toUpperCase()}
              </button>
            ))}
          </div>
          {childrenList?.map((child, index) => (
            <a
              key={index}
              style={{ marginRight: "30px" }}
              className={`nav-link${actualSelectedIndex === index ? " active" : ""}`}
              href="#"
              onClick={() => actualSetSelectedIndex(index)}
            >
              {child.tabChildren}
            </a>
          ))}
          {childrenList?.[actualSelectedIndex] ? (
            <div
              className="nav-close-button-container"
              style={{}}
              onClick={() => actualSetSelectedIndex(-1)}
            >
              <img
                src="/close-icon.png"
                alt={tr({ fr: "Fermer", en: "Close" })}
                className="nav-close-button"
                style={{}}
              />
            </div>
          ) : null}
        </div>
      </nav>

      {childrenList?.[actualSelectedIndex] ? (
        <div
          className="tab-content"
          style={childrenList?.[actualSelectedIndex]?.contentStyle}
        >
          {childrenList?.[actualSelectedIndex]?.contentChildren}
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
