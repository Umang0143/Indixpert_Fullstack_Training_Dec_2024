import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/Rootlayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Categories from "../pages/Categories";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Wishlist from "../pages/WishList";
import MyAccount from "../pages/MyAccount";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "categories", element: <Categories /> },
      { path: "about", element: <About /> },
      { path: "produdctdetails", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "myaccount", element: <MyAccount /> },
      { path: "checkout", element: <Checkout />},
      { path: "login", element: <Login /> },
    ],
  },
]);

export default router;
