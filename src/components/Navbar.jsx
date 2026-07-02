import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { FaHeart } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

function Navbar({ searchItem, setSearchItem }) {
  const [searchBar, setSearchBar] = useState(false);
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
      <motion.button
        onClick={() => {
          setSearchItem("");
          setSearchBar(false);
        }}
        {...navAnimation}
        className="text-2xl font-bold cursor-pointer"
      >
        <Link to={"/"}>SneakerVerse</Link>
      </motion.button>
      <div className="flex gap-6">
        <MotionLink to="/men" {...navAnimation}>
          Men
        </MotionLink>
        <MotionLink to="/women" {...navAnimation}>
          Women
        </MotionLink>
        <MotionLink to="/brand/Nike" {...navAnimation}>
          Nike
        </MotionLink>
        <MotionLink to="/brand/Adidas" {...navAnimation}>
          Adidas
        </MotionLink>
        <MotionLink to="/brand/Jordan" {...navAnimation}>
          Jordan
        </MotionLink>
        <MotionLink to="/brand/Yeezy" {...navAnimation}>
          Yeezy
        </MotionLink>
        <MotionLink to="/newarrivals" {...navAnimation}>
          New Arrivals
        </MotionLink>
      </div>
      <div className="relative flex text-xl items-center gap-6">
        <motion.button
          whileHover={{ scale: 1.2, color: "#1788eb" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSearchBar(true)}
          className="cursor-pointer"
        >
          <FaSearch />
        </motion.button>
        <AnimatePresence mode="wait">
          {searchBar && (
            <>
              <motion.input
                initial={{
                  opacity: 0,
                  width: 0,
                }}
                animate={{
                  opacity: 1,
                  width: 220,
                }}
                exit={{
                  opacity: 0,
                  width: 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    setSearchBar(false);
                    setSearchItem("");
                  }
                }}
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                placeHolder="Search sneakers"
                className="absolute items-center overflow-hidden right-45 text-white px-2 py-1 rounded-lg bg-gray-800 border border-gray-700 shadow-[0_0_10px_rgba(239,68,68,0.8)]"
              />
              <motion.button
                className="cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  setSearchBar(false);
                  setSearchItem("");
                }}
              >
                <FaTimes />
              </motion.button>
            </>
          )}
        </AnimatePresence>
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
