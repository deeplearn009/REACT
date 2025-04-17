import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/home/Home";
import Basket from "../pages/basket/Basket";
import Favorites from "../pages/favorites/Favorites";
import Notfound from "../pages/Notfound";
import Layout from "../layout/Layout";

const Router = () => {
  const [basket, setBasket] = useState(() => {
    const saveBasket = localStorage.getItem("basket");
    return saveBasket ? JSON.parse(saveBasket) : [];
  });
  const [favorites, setFavorites] = useState(() => {
    const saveFavorites = localStorage.getItem("favorites");
    return saveFavorites ? JSON.parse(saveFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToBasket = (item) => {
    setBasket((prevBasket) => {
      const existingItem = prevBasket.find((i) => i.id === item.id);
      if (existingItem) {
        return prevBasket.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevBasket, { ...item, quantity: 1 }];
    });
  };

  const removeFromBasket = (id) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== id));
  };

  const addToFavorites = (item) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.find((i) => i.id === item.id)) {
        return prevFavorites;
      }
      return [...prevFavorites, item];
    });
  };

  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== id)
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route
              path="/"
              element={
                <Home addToBasket={addToBasket} addToFavorites={addToFavorites} />
              }
            />
            <Route
              path="/basket"
              element={
                <Basket basket={basket} removeFromBasket={removeFromBasket} />
              }
            />
            <Route
              path="/favorites"
              element={
                <Favorites
                  favorites={favorites}
                  removeFromFavorites={removeFromFavorites}
                />
              }
            />
          </Route>
          <Route path="*" element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
