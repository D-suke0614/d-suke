import React from "react";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>site logo</div>
      <div className={styles.headerRight}>
        <div className={styles.snsIcons}>sns icons</div>
        <div className={styles.menus}>hamburger menu</div>
      </div>
    </div>
  );
}

export default Header;
