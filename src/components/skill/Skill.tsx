import React from "react";
import styles from "./Skill.module.scss";

function Skill() {
  return (
    <div className={styles.skill}>
      <div className="wrapper">
        <div className={styles.sectionTitle}>
          <h2>SKILL</h2>
        </div>
        <div className={styles.sectionContents}></div>
      </div>
    </div>
  );
}

export default Skill;
