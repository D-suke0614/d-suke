import React from "react";
import styles from "./History.module.scss";

function History() {
  return (
    <div className={styles.history}>
      <div className="wrapper">
        <div className={styles.sectionTitle}>
          <h2>HISTORY</h2>
        </div>
        <div className={styles.sectionContents}></div>
      </div>
    </div>
  );
}

export default History;
