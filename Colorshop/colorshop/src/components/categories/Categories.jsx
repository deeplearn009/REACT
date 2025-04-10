import React from 'react'
import styles from './Categories.module.scss'

const Categories = () => {
  return (
    <div className={styles.container}>

        <div className={styles.categories}>


            <button id={styles.fbtn}>ALL</button>
            <button>WOMEN'S</button>
            <button>ACCESSORIES</button>
            <button>MEN'S</button>



        </div>

      
    </div>
  )
}

export default Categories
