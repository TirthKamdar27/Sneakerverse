import { createContext, useContext, useState, useEffect } from "react";
const WishlistContext = createContext();
export function WishlistProvider({children}) {
    const [wishlistItems, setWishlistItems] = useState(() => {
        const savedWishlist = localStorage.getItem("wishlist");
        if(savedWishlist){
            return JSON.parse(savedWishlist);
        } return [];
    });
    useEffect(() => {localStorage.setItem("wishlist", JSON.stringify(wishlistItems));}, [wishlistItems]);
    
    function addToWishlist(product) {
        setWishlistItems(prev => {
            const updated = [...prev, product];
            return updated;
        });
    }
    function removeFromWishlist(id) {
        setWishlistItems(prev => {
            return prev.filter(item => item.id !== id);
        });
    }
    function increaseWishQuantity(id, size, color){
        setWishlistItems(prev => {
            return prev.map(item => {
                if(item.id === id && item.size === size && item.color === color){
                    return {
                        ...item, quantity:item.quantity+1
                    };
                }
                return item;
            })})
    }
    function decreaseWishQuantity(id, size, color){
        setWishlistItems(prev => {
            return prev.map(item => {
                if(item.id === id && item.size === size && item.color === color && item.quantity > 1){
                    return {
                        ...item, quantity:item.quantity-1
                    };
                }
                return item;
            })})
        }

    return (
        <WishlistContext.Provider value={{wishlistItems, addToWishlist, removeFromWishlist, increaseWishQuantity, decreaseWishQuantity}}>
            {children}
        </WishlistContext.Provider>
    );
}

export default WishlistContext;