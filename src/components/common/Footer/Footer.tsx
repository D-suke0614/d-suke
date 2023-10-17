import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.snsIcons}>sns icons</div>
      <div className={styles.copyRight}>© 2023 D.suke - Front Developer</div>
    </div>
  );
}

export default Footer;
