import React from 'react'
import styles from './Section4.module.scss'
const Section4 = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.image}>
                <img src="https://preview.colorlib.com/theme/selling/images/about_1.jpg.webp" alt="" />
                <div className={styles.experience}>
                    <span id={styles.caption}>Trusted Merchant</span>
                    <span id={styles.year}>for 50 years</span>
                </div>
            </div>

            <div className={styles.titles}>
             
                <h3>Merchant Company</h3>

                <h2>About Us</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci alias eius vero vel!</p>

                <button>LEARN MORE</button>


            </div>


        </div>
    </div>
  )
}

export default Section4
