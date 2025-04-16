import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
    });
  }, []);

  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingProduct = cart.find((x) => x.id == item.id);

    if (existingProduct) {
      existingProduct.count += 1;
    } else {
      cart = [...cart, { ...item, count: 1 }];
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const removeFromCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((x) => x.id !== item.id);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const addToWish = (item) => {
    let wish = JSON.parse(localStorage.getItem("wish")) || [];
    let existingProduct = wish.find((e) => e.id == item.id);

    if (existingProduct) {
      wish = wish.filter((x) => x.id !== item.id);
    } else {
      wish = [...wish, item];
    }
    setWishlist(wish);
    localStorage.setItem("wish", JSON.stringify(wish));
  };

  const inWish = (id) => {
    return wishlist.some((item) => item.id == id);
  };

  return (
    <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
      {data &&
        data.map((item) => {
          return (
            <div
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img style={{ width: "100px" }} src={item.image} alt="" />
              <span>{item.title}</span>
              <span>{item.price}</span>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
              <button onClick={() => removeFromCart(item)}>
                Remove from Cart
              </button>
              <button onClick={() => addToWish(item)}>
                {inWish(item.id) ? "remove" : "add"}
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default App;
