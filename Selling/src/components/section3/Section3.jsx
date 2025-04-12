import React from "react";
import styles from "./Section3.module.scss";
const Section3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titles}>
        <h3>Popular Products</h3>
        <h2>Our Products</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
          consequatur laboriosam ipsam.
        </p>
      </div>

      <div className={styles.product1}>
        <div className={styles.card1}>
          <div className={styles.image}>
            <img
              src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg.webp"
              alt=""
            />
          </div>

          <div className={styles.description}>
            <h3>About This Product</h3>

            <span id={styles.bg}>01.</span>

            <p>
              Et tempora id nostrum saepe amet doloribus deserunt totam officiis
              cupiditate asperiores quasi accusantium voluptatum dolorem quae
              sapiente voluptatem ratione odio iure blanditiis earum fuga
              molestiae alias dicta perferendis inventore!
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              soluta assumenda sed optio, error at?
            </p>

            <h3 id={styles.price}>Price:</h3>

            <div className={styles.price}>
              <span id={styles.line_through}>$269.00</span>
              <span>$69.00</span>
            </div>

            <div className={styles.btns}>
              <button id={styles.details}>VIEW DETAILS</button>
              <button id={styles.cart}>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.product2}>
        <div className={styles.card2}>
          <div className={styles.description}>
            <h3>About This Product</h3>

            <span id={styles.bg}>02.</span>

            <p>
              Et tempora id nostrum saepe amet doloribus deserunt totam officiis
              cupiditate asperiores quasi accusantium voluptatum dolorem quae
              sapiente voluptatem ratione odio iure blanditiis earum fuga
              molestiae alias dicta perferendis inventore!
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              soluta assumenda sed optio, error at?
            </p>

            <h3 id={styles.price}>Price:</h3>

            <div className={styles.price}>
              <span id={styles.line_through}>$269.00</span>
              <span>$69.00</span>
            </div>

            <div className={styles.btns}>
              <button id={styles.details}>VIEW DETAILS</button>
              <button id={styles.cart}>ADD TO CART</button>
            </div>
          </div>

          <div className={styles.image}>
            <img
              src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
