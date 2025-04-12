import React from 'react'
import styles from './Banner.module.scss'
const Banner = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.content}>
       
        <div className={styles.title}>

            <h2>Get notified on each updates.</h2>

        </div>


        <div className={styles.inputs}>
         
          <input type="text" placeholder='Enter your email address' />
          <button>SUBSCRIBE</button>

        </div>

        <div className={styles.par}>
         
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi veniam <br /> doloremque ducimus tempora.</p>

        </div>




      </div>



    </div>
  )
}

export default Banner

