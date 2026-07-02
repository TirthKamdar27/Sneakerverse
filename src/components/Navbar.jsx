import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { FaHeart } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { motion } from "framer-motion";

function Navbar({searchItem, setSearchItem}) {
    const MotionLink = motion(Link);
  const { cartItems } = useContext(CartContext);
  const navAnimation = {
    whileHover: { scale: 1.2, color: "#ef4444" },
    whileTap: { scale: 0.95 },
  };
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-5 border-b border-gray-800 bg-black ">
      <MotionLink to="/" className="text-2xl font-bold" {...navAnimation}>
            SneakerVerse
    </MotionLink>
      <div className="flex gap-6">
        <MotionLink to="/men" {...navAnimation}>
          Men
        </MotionLink>
        <MotionLink to="/women" {...navAnimation}>
          Women
        </MotionLink>
        <MotionLink to="/brand/nike" {...navAnimation}>
          Nike
        </MotionLink>
        <MotionLink to="/brand/adidas" {...navAnimation}>
          Adidas
        </MotionLink>
        <MotionLink to="/brand/jordan" {...navAnimation}>
          Jordan
        </MotionLink>
        <MotionLink to="/newarrivals" {...navAnimation}>
          New Arrivals
        </MotionLink>
      </div>
      <div className="relative flex text-xl items-center gap-6">
        <motion.button
          whileHover={{ scale: 1.2, color: "#1788eb" }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <FaSearch />
        </motion.button>
        <input value={searchItem} onChange={(e) => setSearchItem(e.target.value)} className="absolute items-center right-45 bg-white text-black px-2 py-1 rounded-lg shadow-md shadow-red-500"/>
        <motion.button
          whileHover={{ scale: 1.2, color: "#ef4444" }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <Link to="/wishlist" className="relative text-2xl cursor-pointer">
          <FaHeart />
          </Link>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2, color: "#f8bb2c" }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <Link to="/cart" className="relative text-2xl cursor-pointer">
            <FaOpencart />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {totalItems}
              </span>
            )}
          </Link>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2, color: "#17eb25" }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer text-2xl"
        >
          <CiLogin />
        </motion.button>
      </div>
    </nav>
  );
}

export default Navbar;
