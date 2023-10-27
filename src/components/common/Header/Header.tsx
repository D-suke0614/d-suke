import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>site logo</div>
      <div className={styles.headerRight}>
        <div className={styles.snsIcons}>
          <ul>
            <li>
              <Link href="https://twitter.com/0614d_suke" target="_blank">
                <Image alt="x" src="/images/sns/x.png" width={30} height={30} />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/D-suke0614" target="_blank">
                <Image
                  alt="GitHub"
                  src="/images/code/github-mark.png"
                  width={30}
                  height={30}
                />
              </Link>
            </li>
            <li>
              <Link href="https://qiita.com/D_suke" target="_blank">
                <Image
                  alt="Qiita"
                  src="/images/code/qiita.png"
                  width={30}
                  height={30}
                />
              </Link>
            </li>
            <li>
              <Link href="https://zenn.dev/d_suke0614" target="_blank">
                <Image
                  alt="Zenn"
                  src="/images/code/zenn.svg"
                  width={30}
                  height={30}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.menus}>
          <MenuIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Header;
