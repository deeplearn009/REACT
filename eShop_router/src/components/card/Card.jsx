import React from 'react'
import styles from './Card.module.scss'

const Card = ({item, addToBasket, addToFavorites}) => {
  return (
    <div className={styles.card}>

      <div className={styles.img}>
        <img src={item.image} alt="" />
      </div>

      <div className={styles.bottom}>
          <span>{item.title}</span>
          <span>{"$" + item.price}</span>
          <button onClick={() => addToBasket(item)}>Add to Cart</button>
          <button onClick={() => addToFavorites(item)}>Add to Favorites</button>
      </div>    
          
    </div>
  )
}

export default Card
