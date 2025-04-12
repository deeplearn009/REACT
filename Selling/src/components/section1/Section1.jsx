import React from 'react'
import styles from './Section1.module.scss'

const Section1 = () => {
  return (
    <div className={styles.container}>
      
        <div className={styles.background}></div>


        <div className={styles.box}>

            <h1>Shop With Us</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam <br /> assumenda ea quo cupiditate facere deleniti fuga officia.</p>

            <div className={styles.btns}>
                <button id={styles.shop}>SHOP NOW</button>
                <button id={styles.club}>CLUB MEMBERSHIP</button>
            </div>

        </div>




    </div>
  )
}

export default Section1
