import React from 'react';

const Favorites = ({ favorites }) => {
  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul>
          {favorites.map((item, index) => (
            <li key={index}>
            <div>
                <img src={item.image} alt="" width={"150px"}/>
              </div>
              <div>
                {item.title}
              </div>
              <div>
                {item.price}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;