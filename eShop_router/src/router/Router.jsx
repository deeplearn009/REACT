import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from '../pages/home/Home';
import Basket from '../pages/basket/Basket';
import Header from '../components/header/Header';
import Favorites from '../pages/favorites/Favorites';

const Router = () => {
  const [basket, setBasket] = useState(() => {
    const saveBasket = localStorage.getItem('basket');
    return saveBasket ? JSON.parse(saveBasket) : [];
  });
  const [favorites, setFavorites] = useState(() => {
    const saveFavorites = localStorage.getItem('favorites');
    return saveFavorites ? JSON.parse(saveFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToBasket = (item) => {
    setBasket((prevBasket) => (prevBasket.find((i) => i.id === item.id) ? prevBasket : [...prevBasket, item]));
  };

  const addToFavorites = (item) => {
    setFavorites((prevFavorites) => (prevFavorites.find((i) => i.id === item.id) ? prevFavorites : [...prevFavorites, item]));
  };

  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home addToBasket={addToBasket} addToFavorites={addToFavorites} />} />
          <Route path="/basket" element={<Basket basket={basket} />} />
          <Route path="/favorites" element={<Favorites favorites={favorites} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;