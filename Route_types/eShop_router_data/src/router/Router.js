import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import Basket from "../pages/basket/Basket";
import Favorites from "../pages/favorites/Favorites";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([

    {
        path: '/',
        Component: Layout,
        children: [
            {
                path:'/',
                Component: Home
            },
            {
                path:'/basket',
                Component: Basket
            },
            {
                path: '/favorites',
                Component: Favorites
            }
        ]
    }
])