import React from 'react'
import styles from './Card.module.scss'

const card = ({item}) => {
    return (
      <div className={styles.card}>
        <div className={styles.img}>
          <img src={item.image} alt="" />
        </div>
        <div className={styles.bottom}>
            <span>{item.title}</span>
            <span>{"$" + item.price}</span>
          
        </div>    
            
      </div>
    )
  }

export default card
