import React, { useEffect, useState, useContext } from "react";
import styles from "./Home.module.scss";
import axios from "axios";
import Card from "../../components/card/Card";
import { BasketFavoritesContext } from '../../context/BasketFavoritesContext';

const Home = () => {
  const { addToBasket, addToFavorites } = useContext(BasketFavoritesContext);
  const [data, setData] = useState();

  const getData = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log("response", res.data);
      setData(res.data);
    })
    .catch((error) => {
      console.error("error", error)
    });
    
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexWrap: "wrap",
          width: "100%",
          gap: "40px",
        }}
      >
        {data &&
          data.map((item) => (
            <Card
              key={item.id}
              item={item}
              addToBasket={addToBasket}
              addToFavorites={addToFavorites}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;