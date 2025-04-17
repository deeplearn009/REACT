import React, { useContext } from "react";
import Card from "../../components/card/Card";
import { BasketFavoritesContext } from '../../context/BasketFavoritesContext';

const Basket = () => {
  const { basket, removeFromBasket } = useContext(BasketFavoritesContext);

  return (
    <div>
      <h2>Basket</h2>
      {basket.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
          {basket.map((item) => (
            <Card
              key={item.id}
              item={item}
              quantity={item.quantity}
              removeFromBasket={removeFromBasket}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Basket;