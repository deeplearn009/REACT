import React from 'react'
import styles from './Card.module.scss'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../redux/reducers/basketSlice'

const Card = ({product}) => {

    const dispatch = useDispatch();
    const disAddToBasket = () => {
        dispatch(addToBasket(product));
    }

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={product.image} alt="image" />
      </div>
      <div className={styles.description}>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>
      <button onClick={disAddToBasket}>Add to Basket</button>
    </div>
  )
}

export default Card
