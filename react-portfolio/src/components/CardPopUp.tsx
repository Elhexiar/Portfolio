import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Rnd } from "react-rnd";
import styles from "./modules/CardPopUp.module.css";

interface CardPopUpProps {
  onClose?: () => void;
  content?: React.ReactNode;
  title?: string;
}

function CardPopUp({ onClose, content, title }: CardPopUpProps) {
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
  // on phones the window takes the whole screen and can't be dragged around
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

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
      cancel={`.${styles.popUpContent}`}
    >
      <div className={styles.popUpContainer}>
        <div className={styles.popUpTopBar}>
          <div className={styles.popUpTitle}>{title}</div>
          <div
            className={styles.popUpCloseButtonContainer}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              if (onClose) {
                onClose();
              }
            }}
          >
            <div style={{ cursor: "pointer" }}>X</div>
          </div>
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
