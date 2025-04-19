import React from "react";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.topcont}>
          <button>All</button>
          <button>Graphics</button>
          <button>UI/UX</button>
          <button>Branding</button>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomcont}>
          <div
            style={{
              backgroundImage:
                "url(https://themewagon.github.io/purple-buzz/assets/img/services-01.jpg)",
            }}
            className={styles.cont}
          >
            <div className={styles.par}>
              <button>UI/UX design</button>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url(https://themewagon.github.io/purple-buzz/assets/img/services-02.jpg)",
            }}
            className={styles.cont}
          >
            <div className={styles.par}>
              <button>Social Media</button>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url(https://themewagon.github.io/purple-buzz/assets/img/services-03.jpg)",
            }}
            className={styles.cont}
          >
            <div className={styles.par}>
              <button>Marketing</button>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url(https://themewagon.github.io/purple-buzz/assets/img/services-04.jpg)",
            }}
            className={styles.cont}
          >
            <div className={styles.par}>
              <button>Graphic</button>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url(https://themewagon.github.io/purple-buzz/assets/img/services-05.jpg)",
            }}
            className={styles.cont}
          >
            <div className={styles.par}>
              <button>Digital Marketing</button>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url(https://themewagon.github.io/purple-buzz/assets/img/services-06.jpg)",
            }}
            className={styles.cont}
          >
            <div className={styles.par}>
              <button>Market Research</button>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url(https://themewagon.github.io/purple-buzz/assets/img/services-07.jpg)",
            }}
            className={styles.cont}
          >
            <div className={styles.par}>
              <button>Business</button>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url(https://themewagon.github.io/purple-buzz/assets/img/services-08.jpg)",
            }}
            className={styles.cont}
          >
            <div className={styles.par}>
              <button>Branding</button>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
