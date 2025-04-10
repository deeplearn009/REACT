import React from 'react'
import { CiHeart } from "react-icons/ci";
import styles from './Card.module.scss'

const card = ({item}) => {
    return (
      <div className={styles.card}>
        <div className={styles.img}>
          <CiHeart id={styles.heart}/>
          <img src={item.image} alt="" />
        </div>
        <div className={styles.bottom}>

          <div className={styles.name}>
            <h6>{item.title}</h6>
          </div>

          <div className={styles.price}>
            <span>{"$" + item.price}</span>
          </div>
        </div>    

        <div className={styles.btn}>
          <button>ADD TO CART</button>
        </div>
            
      </div>
    )
  }

export default card
