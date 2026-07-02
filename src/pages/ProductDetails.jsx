import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import sneakers from "../data/sneakers";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useState, useContext } from "react";
import CartContext from "../context/CartContext";
import WishlistContext from "../context/WishlistContext";
// import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const sneaker = sneakers.find((shoe) => shoe.id === Number(id));
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const sizes = [7, 8, 9, 10, 11];
  const stars = [1, 2, 3, 4, 5];
  const [color, setColor] = useState(null);
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  // const navigate = useNavigate();
  const { removeFromCart } = useContext(CartContext);
  const { removeFromWishlist } = useContext(WishlistContext);

  function handleAddToCart() {
    if (!selectedSize) {
      setSuccess(false);
      setError("Please select the desired size");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    } else if (!color) {
      setSuccess(false);
      setError("Please select the desired color");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    } else {
      const cartProduct = {
        id: sneaker.id,
        name: sneaker.name,
        brand: sneaker.brand,
        image: sneaker.image,
        price: sneaker.price,
        size: selectedSize,
        color: color,
        quantity: quantity,
      };
      setError("");
      addToCart(cartProduct);
      setSuccess(true);
      // navigate("/");
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    }
  }

  
  function handleAddToWishlist() {
    if (!selectedSize) {
      setSuccess(false);
      setError("Please select the desired size");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    } else if (!color) {
      setSuccess(false);
      setError("Please select the desired color");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    } else {
      const wishlistProduct = {
        id: sneaker.id,
        name: sneaker.name,
        brand: sneaker.brand,
        image: sneaker.image,
        price: sneaker.price,
        size: selectedSize,
        color: color,
        quantity: quantity,
      };
      setError("");
      addToWishlist(wishlistProduct);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    }
}

  if (sneaker) {
    return (
      <div className="flex flex-row min-h-screen bg-gray-600 px-6 py-2">
        <motion.div whileHover={{ x: -4 }} whileTap={{ scale: 1.05 }}>
          <Link
            to="/"
            className="flex items-center gap-2 text-white font-semibold text-lg"
          >
            <FaArrowLeft className="h-auto"/>
            <span className="w-max">Back to Collection</span>
          </Link>
        </motion.div>
        <div className="flex flex-row gap-10 items-start">
          <div className="flex ">
            <img
              src={sneaker.image}
              alt={sneaker.name}
              className="w-[70vh] h-[88vh] object-cover ml-20 mt-14 rounded-lg"
            />
          </div>
          <div className="mt-12 ">
            <h2 className="font-bold flex uppercase tracking-widest text-red-500 text-5xl">
              {sneaker.brand}
            </h2>
            <h3 className="font-semibold flex text-white text-3xl mt-4">
              {sneaker.name}
            </h3>
            <div className="flex items-center mt-4 gap-2">
              {stars.map((star) => {
                return (
                  <FaStar key={star} className="text-yellow-300 text-1xl" />
                );
              })}
              <p className="text-white flex text-xl font-semibold">
                {sneaker.rating} ({sneaker.reviews} Reviews)
              </p>
            </div>
            <p className="text-white flex font-bold mt-4 text-xl">
              Price : ₹{sneaker.price}
            </p>
            <h3 className="font-bold flex text-white text-xl mt-4">Size</h3>
            <div className="flex gap-6 mt-1">
              {sizes.map((size) => {
                return (
                  <motion.button
                    key={size}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedSize(size)}
                    className={`text-white w-[5vh] text-xl py-2 cursor-pointer rounded-lg mt-4 font-semibold
                                    ${
                                      selectedSize === size
                                        ? "bg-red-500 text-white"
                                        : "bg-gray-500 text-white hover:bg-gray-400"
                                    }`}
                  >
                    {size}
                  </motion.button>
                );
              })}
            </div>

            <div className="flex flex-col gap-2 ">
              <div className="flex items-center mt-4 gap-4">
                <span className="flex text-white font-bold text-xl">
                  🟢 In Stock
                </span>
                <span className="flex text-white text-xl">
                  Only {sneaker.stock} left{" "}
                </span>
              </div>
              <div className="flex gap-4 py-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    }
                  }}
                  className="text-white text-xl bg-gray-500 rounded-lg px-2 mt-3 font-bold cursor-pointer"
                >
                  —
                </motion.button>
                <p className="px-2 mt-3 py-2 text-xl text-white font-bold">
                  {quantity}
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    if (quantity < sneaker.stock) {
                      setQuantity(quantity + 1);
                    }
                  }}
                  className="text-white bg-gray-500 rounded-lg px-2 text-3xl mt-2 h-12 font-bold cursor-pointer"
                >
                  +
                </motion.button>
              </div>
            </div>
            <div className="text-white mt-4 py-2 text-lg bg-gray-500 w-100 rounded-lg px-4 ">
              {sneaker.description}
            </div>
            <div className="flex items-center mt-2 gap-4">
              {sneaker.colors.map((col) => {
                return (
                  <motion.button
                    key={col.name}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setColor(col.name)}
                    style={{ backgroundColor: col.hex }}
                    className={`text-xl mt-4 rounded-full shadow-black shadow-md w-6 h-6 cursor-pointer
                                                ${
                                                  color === col.name
                                                    ? "ring-4 ring-green-500"
                                                    : ""
                                                }`}
                  ></motion.button>
                );
              })}
            </div>
            <div className="flex gap-4 mt-6 items-center">
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleAddToCart}
                className="flex text-black bg-yellow-500 rounded-lg w-max px-2 cursor-pointer font-semibold text-lg"
              >
                Add to cart
              </motion.button>
              <motion.button whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleAddToWishlist}
                className="flex text-black bg-yellow-500 rounded-lg w-max px-2 cursor-pointer font-semibold text-lg"
              > Add to Wishlist
              </motion.button>
              <div>
                <AnimatePresence mode="wait">
                  {error && (
                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 15,
                        scale: 0.95,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: -15,
                        scale: 0.95,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                      }}
                      className="px-4 py-2 rounded-lg bg-red-500/20 border border-red-500 text-red-300 font-semibold"
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  {success && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 15,
                        scale: 0.95,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: -15,
                        scale: 0.95,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                      }}
                      className="px-4 py-2 rounded-lg bg-green-500/20 border border-green-500 text-green-300 font-semibold"
                    >
                      ✓ Item added successfully
                    </motion.div>
                  )}
                </AnimatePresence>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!sneaker) {
    return (
      <div className="flex flex-row min-h-screen bg-gray-600 px-6 py-4">
        <motion.div whileHover={{ x: -4 }} whileTap={{ scale: 1.05 }}>
          <Link
            to="/"
            className="flex items-center gap-2 text-white font-semibold text-lg"
          >
            <FaArrowLeft />
            <span>Back to Collection</span>
          </Link>
        </motion.div>
        <div className="mt-14">
          <h1 className="text-white font-bold text-4xl">
            Product Not Found Please Return to the Homepage
          </h1>
        </div>
      </div>
    );
  }
}
export default ProductDetails;
