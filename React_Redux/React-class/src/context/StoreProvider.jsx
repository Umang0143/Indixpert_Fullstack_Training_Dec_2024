import { createContext, useContext, useState } from "react";

const StoreContext = createContext(null);

export const useStore = () => useContext(StoreContext);

const StoreProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const addToWishlist = (product) => {
    const exists = wishlist.find(item => item.id === product.id);
    if (exists) {
      
      alert("Item already added in wishlist");
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (!exists) {
      setCart([...cart, { ...product, qty: 1 }]);
    } 
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };


  const incrementQty = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decrementQty = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 } : item
      )
    );
  };

  return (
    <StoreContext.Provider
      value={{
        wishlist,
        cart,
        addToWishlist,
        removeFromWishlist,
        addToCart,
        removeFromCart,
        incrementQty,
        decrementQty,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;