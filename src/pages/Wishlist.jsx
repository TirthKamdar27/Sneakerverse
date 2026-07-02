import { useContext } from "react";
import WishlistContext from "../context/WishlistContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import CartContext from "../context/CartContext";
import { useNavigate } from "react-router-dom";
function Wishlist () {
    const navigate = useNavigate();
    const { wishlistItems, removeFromWishlist, increaseWishQuantity, decreaseWishQuantity } = useContext(WishlistContext);
    if(wishlistItems.length === 0){
        return (
            <div className="flex flex-col bg-gray-500 min-h-screen px-4 py-4 ">
            <h1 className="flex text-white text-3xl font-bold">
                Wishlist is empty
            </h1>
            </div>
        );
    }
    return (
        <div className="relative flex flex-row bg-gray-500 min-h-screen gap-4 px-4 py-4">
            <motion.div whileHover={{ x: -4 }} whileTap={{ scale: 1.05 }}>
          <Link
            to="/"
            className="flex items-center gap-2 text-white font-semibold text-lg"
          >
            <FaArrowLeft className="h-auto"/>
            <span className="w-max">Back to Collection</span>
          </Link>
        </motion.div>
        {wishlistItems.map((item) => {  
            return (
            <div className="flex flex-col gap-4 mt-6 text-white bg-gray-700 h-max rounded-xl p-5 shadow-lg w-max " 
            key={item.id}>
                <img className="w-70 h-50 object-cover rounded-xl" src={item.image} alt={item.name}/>
                <h2 className="text-2xl text-red-300 font-bold">{item.brand}</h2>
                <p className="text-xl font-semibold ">{item.name}</p>
                <p className="text-lg font-semibold">Price : ₹{item.price}</p>
                <p className="text-lg font-semibold">Size : {item.size}</p>
                <p className="text-lg font-semibold">Color : {item.color}</p>
                <div className="flex gap-4">
                <button 
                    onClick = {() => decreaseWishQuantity(item.id, item.size, item.color)}
                className=" font-bold cursor-pointer">-</button>
                <p className="flex text-lg font-semibold items-center">Quantity : {item.quantity}</p>
                <button 
                    onClick = {() => increaseWishQuantity(item.id, item.size, item.color)}    
                    className=" font-bold cursor-pointer">+</button>
                </div>
                <p className="flex text-lg font-semibold">Subtotal : ₹{item.price * item.quantity}</p>
                <motion.button 
                whileHover={{scale:1.2}}                
                whileTap={{scale:0.9}}
                onClick={() => removeFromWishlist(item.id)}
                className=" rounded-lg px-2 h-max bg-yellow-500 cursor-pointer w-max text-lg text-black font-semibold">
                    Remove
                </motion.button>

            </div>
            )
        })}
        </div>
    )
}
export default Wishlist;