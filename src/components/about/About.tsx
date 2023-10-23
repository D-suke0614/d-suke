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
            <div className={styles.content}></div>
          </div>
          <div className={styles.intro}></div>
        </div>
      </div>
    </div>
  );
}

export default About;
