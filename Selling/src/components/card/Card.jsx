import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import styles from './Card.module.scss'

const Card = ({item}) => {
  return (
    <div className={styles.card}>
    
        <div className={styles.img}>
          <img src={item.image} alt="" />
          <div className={styles.border}></div>
        </div>
        <div className={styles.bottom}>

          <div className={styles.name}>

            <h3>{item.title}</h3>

          </div>

          <div className={styles.iconbox}>

                <div className={styles.leftico}>
                    <FaStar id={styles.star} />
                    <span>5.0</span>
                </div>

                <div className={styles.rightico}>
                    <FaHeart id={styles.heart}/>
                    <span>29</span>
                </div>

          </div>

          <div className={styles.par}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>

        </div>    

        <div className={styles.btn}>
          <button id={styles.cart}>CART</button>
          <button id={styles.view}>VIEW</button>
        </div>
            
    </div>
  )
}

export default Card
