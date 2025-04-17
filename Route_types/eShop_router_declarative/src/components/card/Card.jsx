import React from "react";
import styles from "./Card.module.scss";

const Card = ({
  item,
  addToBasket,
  addToFavorites,
  quantity,
  removeFromBasket,
  removeFromFavorites,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={item.image} alt="" />
      </div>
      <div className={styles.bottom}>
        <span>{item.title}</span>
        <span>{"$" + item.price}</span>
        {quantity && <span>Quantity: {quantity}</span>}
        {addToBasket && (
          <button onClick={() => addToBasket(item)}>Add to Cart</button>
        )}
        {addToFavorites && (
          <button onClick={() => addToFavorites(item)}>Add to Favorites</button>
        )}
        {removeFromBasket && (
          <button onClick={() => removeFromBasket(item.id)}>
            Remove from Basket
          </button>
        )}
        {removeFromFavorites && (
          <button onClick={() => removeFromFavorites(item.id)}>
            Remove from Favorites
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
