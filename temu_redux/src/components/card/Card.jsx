import React from 'react'
import styles from './Card.module.scss'
import { FaCartArrowDown } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/reducers/basketSlice';

const Card = ({product}) => {

  const dispatch = useDispatch();
  const disAddToBasket = () => {
      dispatch(addToBasket(product))
  }

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={product.image} alt="" />
      </div>
      <div className={styles.description}>
        <div className={styles.title}>
          <p>{product.title}</p>
        </div>
        <div className={styles.shop}>
          <p>{product.price}</p>
          <button onClick={disAddToBasket}><FaCartArrowDown/></button>
        </div>
      </div>
    </div>
  )
}

export default Card
