import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.icon}>
          <p>
            <a href="#">adalene.</a>
          </p>
        </div>

        <div className={styles.center}>
          <div className={styles.first}>
            <p>
              <a href="#">Shop All</a>
            </p>
            <p>
              <a href="#">Our Story</a>
            </p>
            <p>
              <a href="#">Our Craft</a>
            </p>
            <p>
              <a href="#">Gift Card</a>
            </p>
            <p>
              <a href="#">Contact</a>
            </p>
          </div>

          <div className={styles.first}>
            <p>
              <a href="#">Shop All</a>
            </p>
            <p>
              <a href="#">Our Story</a>
            </p>
            <p>
              <a href="#">Our Craft</a>
            </p>
            <p>
              <a href="#">Gift Card</a>
            </p>
            <p>
              <a href="#">Contact</a>
            </p>
          </div>

          <div className={styles.first}>
            <p>
              <a href="#">Shop All</a>
            </p>
            <p>
              <a href="#">Our Story</a>
            </p>
            <p>
              <a href="#">Our Craft</a>
            </p>
            <p>
              <a href="#">Gift Card</a>
            </p>
          </div>
        </div>

        <div className={styles.end}>
          <h1>JOIN US!</h1>

          <p className={styles.email}>Email *</p>

          <input type="text" className={styles.inp} />

          <div>
            <input type="checkbox" />
            <p>Yes, subscribe me</p>
          </div>

          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
