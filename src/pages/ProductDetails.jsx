import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import sneakers from "../data/sneakers";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

function ProductDetails() {
  const { id } = useParams();
  const sneaker = sneakers.find((shoe) => shoe.id === Number(id));
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const sizes = [7, 8, 9, 10, 11];
  const stars = [1, 2, 3, 4, 5];
  const [color, setColor] = useState(null);

  if (sneaker) {
    return (
      <div className="flex flex-row min-h-screen bg-gray-600 px-6 py-2">
        <motion.div whileHover={{ x: -4 }} whileTap={{ scale: 1.05 }}>
          <Link
            to="/"
            className="flex items-center gap-2 text-white font-semibold text-lg"
          >
            <FaArrowLeft />
            <span className="w-max">Back to Collection</span>
          </Link>
        </motion.div>
        <div className="flex flex-row gap-20 items-start">
          <div className="flex ">
            <img
              src={sneaker.image}
              alt={sneaker.name}
              className="w-[70vh] h-[80vh] object-cover ml-20 mt-20 rounded-lg"
            />
          </div>

          <div className="mt-18">
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
              ₹{sneaker.price}
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
                    className={`text-white w-[5vh] text-xl py-2 rounded-lg mt-4 font-semibold
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
              <span className=" text-white mt-4 font-bold text-xl">
                🟢 In Stock
              </span>
              <p className="text-white mt-2 font-semibold text-xl">
                Only {sneaker.stock} left{" "}
              </p>
              <div className="flex">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    }
                  }}
                  className="text-white text-xl mt-3 font-bold cursor-pointer"
                >
                  —
                </motion.button>
                <p className="px-4 mt-3 text-2xl text-white font-semibold">
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
                  className="text-white text-3xl mt-2 font-bold cursor-pointer"
                >
                  +
                </motion.button>
              </div>
            </div>
            <div className="text-white mt-4 py-2 text-lg bg-gray-500 rounded-lg px-4 w-max">
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
                    className={`text-xl mt-4 rounded-full shadow-black shadow-md w-8 h-8 cursor-pointer
                                                ${
                                                  color === col.name
                                                    ? "ring-4 ring-green-500"
                                                    : ""
                                                }`}
                  ></motion.button>
                );
              })}
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
