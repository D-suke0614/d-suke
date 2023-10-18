import React from "react";
import styles from "./Contact.module.scss";

function Contact() {
  return (
    <div className={styles.contact}>
      <div className="wrapper">
        {/* sectionのタイトル */}
        <div className={styles.sectionTitle}>
          <h2>CONTACT</h2>
        </div>

        {/* sectionの中身 */}
        <div className={styles.sectionContents}>
          <div className={styles.contactTextArea}>
            <p className={styles.contactTextJa}>
              どのようなことでもかまいませんので、お気軽にお問い合わせください
            </p>
            <p className={styles.contactTextEn}>
              Please feel free to contact us for any inquiries or questions, no
              matter what the topic may be!
            </p>
          </div>
          <form className={styles.contactForm}>
            <div className={styles.formItem}>
              <label>your name</label>
              <input type="text" />
            </div>
            <div className={styles.formItem}>
              <label>email</label>
              <input type="text" />
            </div>
            <div className={styles.formItem}>
              <label>お問い合わせ内容</label>
              <textarea name="" id=""></textarea>
            </div>
            <div>
              <button type="submit">so-shin!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
