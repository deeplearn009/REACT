import React from "react";
import styles from "./Section2.module.scss";
const Section2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card1}>
        <div className={styles.banner}>
            <a href="#">WOMEN'S</a>
        </div>
      </div>

      <div className={styles.card2}>
        <div className={styles.banner}>
            <a href="#">ACCESSORIE'S</a>
        </div>
        
      </div>
      <div className={styles.card3}>
        <div className={styles.banner}>
            <a href="#">MEN'S</a>
        </div>
      </div>
    </div>
  );
};

export default Section2;
