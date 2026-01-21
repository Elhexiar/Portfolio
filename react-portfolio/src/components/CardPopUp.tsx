import React from "react";
import ReactDOM from "react-dom";
import { Rnd } from "react-rnd";
import styles from "./modules/CardPopUp.module.css";

interface CardPopUpProps {
  onClose?: () => void;
  content?: React.ReactNode;
  title?: string;
}

function CardPopUp({ onClose, content, title }: CardPopUpProps) {
  {
    return ReactDOM.createPortal(
      <Rnd
        default={{
          x: window.innerWidth / 2 - window.innerWidth / 4,
          y: window.innerHeight / 4 - window.innerHeight / 6,
          width: window.innerWidth / 2,
          height: window.innerHeight / 2,
        }}
        bounds="window"
        onClick={(e) => e.stopPropagation()}
        className={styles.popUpRndContainer}
      >
        <div className={styles.popUpContainer}>
          <div className={styles.popUpTopBar}>
            <div className={styles.popUpTitle}>{title}</div>
            <div
              className={styles.popUpCloseButtonContainer}
              onClick={(e) => {
                e.stopPropagation();
                if (onClose) {
                  onClose();
                }
              }}
            >
              <img src="" alt="X" />
            </div>
          </div>
          <div className={styles.popUpContent}>{content}</div>
        </div>
      </Rnd>,
      document.body,
    );
  }
}

export default CardPopUp;
