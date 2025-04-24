import React from 'react'
import styles from './Basket.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../redux/reducers/basketSlice';

const Basket = () => {

    const dispatch = useDispatch();
    const basket = useSelector((state) => state.products.basket);

    const disRemoveFromBasket = (productId) => {
        dispatch(removeItem(productId));
    }

  return (
    <div className={styles.container}>
      {basket.map(item => (
        <div key={item.id} className={styles.item}>

            <div className={styles.img}>
                    <img src={item.image} alt="image" />
                  </div>
                  <div className={styles.description}>
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                  </div>
                  <button onClick={disRemoveFromBasket}>Remove from Basket</button>

        </div>
      ))}
    </div>
  )
}

export default Basket
