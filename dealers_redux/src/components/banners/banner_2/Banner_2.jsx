import React from 'react'
import styles from './Banner_2.module.scss'

const Banner_2 = () => {
  return (
    <div className={styles.container}>
    
      <div className={styles.content}>

        <div className={styles.left}>
            <img src="https://preview.colorlib.com/theme/dealers/images/model_5.png.webp" alt="" />
        </div>

        <div className={styles.right}>
        
            <div className={styles.title}>
                <h2>#New Summer Collection 2019</h2>
                <h1>New Denim Coat</h1>
                <button>Shop Now</button>
            </div>

        </div>

      </div>

    </div>
  )
}

export default Banner_2
