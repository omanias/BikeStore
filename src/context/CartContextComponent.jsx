import { useState } from "react";
import { CartContext } from "./CartContext";
const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextComponent;
