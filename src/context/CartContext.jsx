import {createContext, useState, useEffect } from "react";
const CartContext = createContext();
export function CartProvider({children}) 
{
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        if(savedCart){
            return JSON.parse(savedCart);
        } return [];
    });
    useEffect(() => {localStorage.setItem("cart", JSON.stringify(cartItems));}, [cartItems]);
    
    function addToCart(product) {
    setCartItems(prev => {
        const updated = [...prev, product];
        return updated;
    });
}
    function removeFromCart(id) {
        setCartItems(prev => {
            return prev.filter(item => item.id !== id);
        });
    }

    function increaseQuantity(id, size, color){
        setCartItems(prev => {
            return prev.map(item => {
                    if(item.id === id && item.size === size && item.color === color){
                    return {
                        ...item, 
                        quantity : item.quantity+1
                    };
                }
            return item;
            })})
        }
    

    function decreaseQuantity(id, size, color){
        setCartItems(prev => {
            return prev.map(item => {
                    if(item.id === id && item.size === size && item.color === color && item.quantity > 1){
                    return {
                        ...item, 
                        quantity : item.quantity-1
                    };
                    }
            return item;
            })})
        }
    
    return (
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity}}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContext;