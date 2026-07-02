import { useContext } from "react";
import CartContext from "../context/CartContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


function Cart () {
    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    const subTotal = cartItems.reduce((total, item) => {
        return total+item.price*item.quantity
    }, 0);
    if(cartItems.length === 0){
        return (
            <div className="flex flex-col bg-gray-500 min-h-screen px-4 py-4 ">
            <h1 className="flex text-white text-3xl font-bold">
                Cart is empty
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
        {cartItems.map((item) => {  
            return (
            <div className="flex flex-col gap-4 mt-12 text-white bg-gray-700 h-max rounded-xl p-5 shadow-lg w-max " 
            key={item.id}>
                <img className="w-70 h-50 object-cover rounded-xl" src={item.image} alt={item.name}/>
                <h2 className="text-2xl text-red-300 font-bold">{item.brand}</h2>
                <p className="text-xl font-semibold ">{item.name}</p>
                <p className="text-lg font-semibold">Price : ₹{item.price}</p>
                <p className="text-lg font-semibold">Size : {item.size}</p>
                <p className="text-lg font-semibold">Color : {item.color}</p>
                <div className="flex gap-4">
                <button 
                    onClick = {() => decreaseQuantity(item.id, item.size, item.color)}
                className=" font-bold cursor-pointer">-</button>
                <p className="flex text-lg font-semibold items-center">Quantity : {item.quantity}</p>
                <button 
                    onClick = {() => increaseQuantity(item.id, item.size, item.color)}    
                    className=" font-bold cursor-pointer">+</button>
                </div>
                <p className="flex text-lg font-semibold">Subtotal : ₹{item.price * item.quantity}</p>
                <button 
                onClick={() => removeFromCart(item.id)}
                className=" rounded-lg px-2 h-max bg-yellow-500 cursor-pointer w-max text-lg text-black font-semibold">Remove</button>
            </div>
            )
        })}
                <div className="absolute right-5 top-1 flex bg-green-500 rounded-xl mt-4 px-2 py-2 w-max h-max">
                    <p className="text-xl text-black font-bold">Grand Total : ₹{subTotal}</p>
                </div>
        </div>
    )
}
export default Cart;