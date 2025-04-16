import React from 'react';

const Basket = ({ basket }) => {

  return (
    <div>
      <h2>Basket</h2>
      {basket.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <ul>
          {basket.map((item, index) => (
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

export default Basket;