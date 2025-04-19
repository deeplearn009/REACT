import React from "react";
import styles from "../contact/Contact.module.scss";
import { BiNews } from "react-icons/bi";
import Form from "../../components/form/Form";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.con}>
        <div className={styles.contact}>
          <div className={styles.left}>
            <h1>Contact</h1>
            <h3>Elit, sed do eiusmod tempor</h3>
            <p>
              Vector illustration is from <a href="#">StorySet</a>. Incididunt
              ut labore et <br /> dolore magna aliqua. Quis ipsum suspendisse
              ultrices <br /> gravida.
            </p>
          </div>

          <div className={styles.right}>
            <img
              src="https://themewagon.github.io/purple-buzz/assets/img/banner-img-01.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      <section>
        <div className={styles.title}>
          <h1>Create success campaign with us!</h1>
          <h2>Elit, sed do eiusmod tempor</h2>
          <p>
            Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
            ultrices gravida. Risus commodo viverra maecenas <br /> accumsan
            lacus vel facilisis. Laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in <br />{" "}
            voluptate.
          </p>
        </div>

        <div className={styles.form_p}>
          <div className={styles.left}>
          
            <div className={styles.card}>

              <div className={styles.frame}>
                <BiNews id={styles.icon} />
              </div>

              <div className={styles.name}>
                <h5>Media Contact</h5>
                <p>Mr. John Doe</p>
                <p>010-020-0340</p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.frame}>
                <BiNews id={styles.icon} />
              </div>

              <div className={styles.name}>
                <h5>Media Contact</h5>
                <p>Mr. John Doe</p>
                <p>010-020-0340</p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.frame}>
                <BiNews id={styles.icon} />
              </div>

              <div className={styles.name}>
                <h5>Media Contact</h5>
                <p>Mr. John Doe</p>
                <p>010-020-0340</p>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <Form />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
