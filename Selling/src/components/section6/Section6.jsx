import React from 'react'
import styles from './Section6.module.scss'

const Section6 = () => {
  return (
    <div className={styles.container}>

        <div className={styles.content}>
         
            <div className={styles.titles}>

                <h3>Special Promo</h3>
                <h2>Summer Sale</h2>
                <p>Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut <br /> eveniet aut consequatur laboriosam ipsam.</p>

            </div>

            <div className={styles.countdown}>
             
                <div className={styles.card}>
                 
                    <span id={styles.num}>00</span>
                    <span id={styles.per}>weeks</span>

                </div>

                <div className={styles.card}>

                    <span id={styles.num}>00</span>
                    <span id={styles.per}>days</span>

                </div>

                <div className={styles.card}>
                 
                    <span id={styles.num}>00</span>
                    <span id={styles.per}>hr</span>


                </div>

                <div className={styles.card}>
                 
                    <span id={styles.num}>00</span>
                    <span id={styles.per}>min</span>

                </div>

                <div className={styles.card}>
                 
                    <span id={styles.num}>00</span>
                    <span id={styles.per}>sec</span>

                </div>

            </div>

            <div className={styles.btn}>
             
                <button>SHOP NOW</button>

            </div>

        </div>

    </div>
  )
}

export default Section6
