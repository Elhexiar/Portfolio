import { useEffect, useRef } from "react";
import { Tooltip } from "bootstrap";
import styles from "./modules/Keyword.module.css";

interface KeywordProps {
  keyword: string;
}

function Keyword({ keyword }: KeywordProps) {
  return <span className={styles.Keyword}>{keyword}</span>;
}

export default Keyword;
