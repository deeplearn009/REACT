import React from "react";
import "./App.scss";
import { router } from "./router/Router";
import { BasketFavoritesProvider } from "./context/BasketFavoritesContext";
import { RouterProvider } from "react-router";

const App = () => {
  return (
    <div>
      <BasketFavoritesProvider>
        <RouterProvider router={router}/>
      </BasketFavoritesProvider>
    </div>
  );
};

export default App;