import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.footer}>
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
      <div className={styles.copyRight}>© 2023 D.suke - Front Developer</div>
    </div>
  );
}

export default Footer;
