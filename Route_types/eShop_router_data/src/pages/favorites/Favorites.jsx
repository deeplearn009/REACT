import React, { useContext } from "react";
import Card from "../../components/card/Card";
import { BasketFavoritesContext } from '../../context/BasketFavoritesContext';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useContext(BasketFavoritesContext);

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
          {favorites.map((item) => (
            <Card
              key={item.id}
              item={item}
              removeFromFavorites={removeFromFavorites}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;