import React from "react";
import styles from "./About.module.scss";
import Image from "next/image";

function About() {
  return (
    <div className={styles.about}>
      <div className="wrapper">
        <div className={styles.sectionTitle}>
          <h2>About</h2>
        </div>
        <div className={styles.sectionContents}>
          <div className={styles.profile}>
            <div className={styles.icon}>
              <Image
                src="/profile.jpg"
                alt="profile pic"
                width={250}
                height={200}
              />
            </div>
            <div className={styles.content}>
              <ul>
                <li>名前　　D.suke</li>
                <li>職業　　Frontend Developer</li>
                <li>出身　　愛媛県生まれ愛媛県育ち</li>
                <li>趣味　　サッカー / 読書</li>
                <li>
                  リンク　
                  <a
                    className={styles.link}
                    href="https://twitter.com/0614d_suke"
                    target="_blank"
                  >
                    X
                  </a>
                  　
                  <a
                    className={styles.link}
                    href="https://github.com/D-suke0614"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.intro}></div>
        </div>
      </div>
    </div>
  );
}

export default About;
