import React from 'react'
import styles from './Products.module.scss'

const Products = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.content}>
       
        <div className={styles.card}>

          <div className={styles.img}>
            <img src="https://preview.colorlib.com/theme/dealers/images/product_1.jpg.webp" alt="" />
          </div>

          <div className={styles.info}>
            <h3>The Shoe</h3>
            <p>Summer Collection</p>
            <strong>$9.50</strong>
          </div>
          
        </div>

        <div className={styles.card}>

          <div className={styles.img}>
              <img src="https://preview.colorlib.com/theme/dealers/images/product_2.jpg.webp" alt="" />
            </div>

          <div className={styles.info}>
            <h3>Marc Jacobs Bag</h3>
            <p>Summer Collection</p>
            <strong>$9.50</strong>
            <del>$30.00</del>
          </div>
        
        </div>

        <div className={styles.card}>

          <div className={styles.img}>
            <img src="https://preview.colorlib.com/theme/dealers/images/product_3.jpg.webp" alt="" />
          </div>

          <div className={styles.info}>
            <h3>The Belt</h3>
            <p>Summer Collection</p>
            <strong>$9.50</strong>
          </div>

        </div>

        <div className={styles.card}>

          <div className={styles.img}>
            <img src="https://preview.colorlib.com/theme/dealers/images/product_1.jpg.webp" alt="" />
          </div>

          <div className={styles.info}>
            <h3>The Shoe</h3>
            <p>Summer Collection</p>
            <strong>$9.50</strong>

          </div>
        </div>

        <div className={styles.card}>

          <div className={styles.img}>
              <img src="https://preview.colorlib.com/theme/dealers/images/product_2.jpg.webp" alt="" />
            </div>

          <div className={styles.info}>
            <h3>Marc Jacobs Bag</h3>
            <p>Summer Collection</p>
            <strong>$9.50</strong>
            <del>$30.00</del>
          </div>
        
        </div>

        <div className={styles.card}>

          <div className={styles.img}>
            <img src="https://preview.colorlib.com/theme/dealers/images/product_3.jpg.webp" alt="" />
          </div>

          <div className={styles.info}>
            <h3>The Belt</h3>
            <p>Summer Collection</p>
            <strong>$9.50</strong>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Products
