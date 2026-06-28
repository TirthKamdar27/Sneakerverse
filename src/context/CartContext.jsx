import {createContext, useState} from "react";
const CartContext = createContext();
export function CartProvider({children}) {
    const [cartItems, setCartItems] = useState([]);
    return (
        <CartContext.Provider value={{cartItems}}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContext;