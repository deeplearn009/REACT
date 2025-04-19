import React from "react";
import { FaBox } from "react-icons/fa";
import styles from "./Works.module.scss";

const Works = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.topcont}>
          <FaBox style={{ fontSize: "64px" }} />
          <div className={styles.text}>
            <h2>Great transformations successful</h2>
            <h3>Quis ipsum suspendisse ultrices gravida.</h3>
          </div>
          <button>View Our Work</button>
        </div>
      </div>
      <div className={styles.bottom}>
        <h1>Recent Works</h1>
        <div className={styles.botcont}>
          <div
            style={{
              backgroundImage:
                "url(https://themewagon.github.io/purple-buzz/assets/img/recent-work-01.jpg)",
            }}
            className={styles.bg}
          >
            <div className={styles.card}>
              <h1>Social Media</h1>
              <p>Ullamco Laboris nisi ut aliquip ex</p>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url(https://themewagon.github.io/purple-buzz/assets/img/recent-work-02.jpg)",
            }}
            className={styles.bg}
          >
            <div className={styles.card}>
              <h1>Web Marketing</h1>
              <p>Psum Officia anim id est laborum</p>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url(https://themewagon.github.io/purple-buzz/assets/img/recent-work-03.jpg)",
            }}
            className={styles.bg}
          >
            <div className={styles.card}>
              <h1>R & D</h1>
              <p>Sum dolor sit consencur</p>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url(https://themewagon.github.io/purple-buzz/assets/img/recent-work-04.jpg)",
            }}
            className={styles.bg}
          >
            <div className={styles.card}>
              <h1>Public Relation</h1>
              <p>Lorem Ipsum dolor sit amet</p>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url(https://themewagon.github.io/purple-buzz/assets/img/recent-work-05.jpg)",
            }}
            className={styles.bg}
          >
            <div className={styles.card}>
              <h1>Branding</h1>
              <p>Put Enim ad minim veniam</p>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url(https://themewagon.github.io/purple-buzz/assets/img/recent-work-06.jpg)",
            }}
            className={styles.bg}
          >
            <div className={styles.card}>
              <h1>Creative design</h1>
              <p>Millit anim id est laborum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
