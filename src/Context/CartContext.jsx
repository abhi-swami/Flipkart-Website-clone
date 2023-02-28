import { createContext, useState } from "react";
import { getProduct } from "../Utils/apiFunction";
import { base_url } from "../Utils/url";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const url = `${base_url}/cart`;
  const [cartCount, setCartCount] = useState(0);
  const cardProucts = () => {
    getProduct(url).then((res) => setCartCount(res.length));
  };

  return (
    <CartContext.Provider value={{ cartCount, cardProucts }}>
      {children}
    </CartContext.Provider>
  );
}
