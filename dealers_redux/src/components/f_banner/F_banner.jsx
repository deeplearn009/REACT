import React from 'react'
import styles from './F_banner.module.scss'

const F_banner = () => {
  return (
    <div className={styles.container}>

        <div className={styles.content}>
        
            <div className={styles.left}>

                <h1>Madewell</h1>
                <h4>Summer Collection</h4>

                <div className={styles.price}>
                    <strong>1,499</strong>
                    <del>$1,999</del>
                </div>

                <div className={styles.btn}>
                  <button>Shop Now</button>
                  <button id={styles.sec}>Shop Now</button>
                </div>

            </div>

            <div className={styles.right}>
                  <img src="https://preview.colorlib.com/theme/dealers/images/new/person_transparent.png.webp" alt="" />
                </div>

        </div>
        
    </div>
  )
}

export default F_banner
