import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import axios from "axios";
import Card from "../../components/card/Card";

const Home = ({ addToBasket, addToFavorites }) => {
  const [data, setData] = useState([
    { id: 1, title: "Mock Product", price: 10 },
  ]);

  const getData = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
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
