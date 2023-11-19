import React, { Suspense, useState } from "react";
import styles from "./Contact.module.scss";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const data = {
    name: name,
    email: email,
    message: message,
  };

  const checkForm = () => {
    // console.log("name", name);
    // console.log("email", email);
    // console.log("message", message);
    setName("");
    setEmail("");
    setMessage("");
  };

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
              <input
                type="text"
                value={data.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.formItem}>
              <label>email</label>
              <input
                type="text"
                value={data.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.formItem}>
              <label>お問い合わせ内容</label>
              <textarea
                name=""
                id=""
                value={data.message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className={styles.formItem}>
              <button type="button" onClick={() => checkForm()}>
                送信
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
