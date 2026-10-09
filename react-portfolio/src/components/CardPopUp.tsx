import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Rnd } from "react-rnd";
import styles from "./modules/CardPopUp.module.css";
import { useLanguage } from "../i18n";

interface CardPopUpProps {
  onClose?: () => void;
  content?: React.ReactNode;
  title?: string;
}

function CardPopUp({ onClose, content, title }: CardPopUpProps) {
  const { tr } = useLanguage();
  // on phones the window takes the whole screen and can't be dragged around
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  // TODO: Add a way to only close the latest focused pop-up when multiple are open currently it closes all
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && onClose) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  // on phones people use the back button / back swipe to close things :
  // add a history entry when the window opens, and close the window when going back
  useEffect(() => {
    if (!isMobile) return;
    window.history.pushState({ cardPopUp: true }, "");
    const handleBack = () => onClose?.();
    window.addEventListener("popstate", handleBack);
    return () => window.removeEventListener("popstate", handleBack);
    // only once per opening, onClose changes on every render of the card
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const close = () => {
    // on mobile go back in the history instead, the popstate listener above closes the window
    if (isMobile && window.history.state?.cardPopUp) {
      window.history.back();
    } else {
      onClose?.();
    }
  };

  return ReactDOM.createPortal(
    <Rnd
      default={
        isMobile
          ? { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight }
          : {
              x: window.innerWidth / 2 - window.innerWidth / 4,
              y: window.innerHeight / 4 - window.innerHeight / 6,
              width: window.innerWidth / 1.5,
              height: window.innerHeight / 1.2,
            }
      }
      disableDragging={isMobile}
      enableResizing={!isMobile}
      bounds="window"
      onClick={(e: React.MouseEvent) => e.stopPropagation()}
      className={styles.popUpRndContainer}
      cancel={`.${styles.popUpContent}, .${styles.popUpCloseButtonContainer}`}
    >
      <div className={styles.popUpContainer}>
        <div className={styles.popUpTopBar}>
          <div className={styles.popUpTitle}>{title}</div>
          <button
            type="button"
            className={styles.popUpCloseButtonContainer}
            aria-label={tr({ fr: "Fermer", en: "Close" })}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              close();
            }}
          >
            X
          </button>
        </div>
        <div className={styles.popUpContent} style={{ cursor: "default" }}>
          {content}
        </div>
      </div>
    </Rnd>,
    document.body,
  );
}

export default CardPopUp;
