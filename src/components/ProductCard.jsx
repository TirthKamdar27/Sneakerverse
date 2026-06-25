import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
function ProductCard ({image, name, brand, price}) {
    return (
<motion.div
    whileHover={{
        y: -8,
        transition: {
            duration: 0.3
        },
        boxShadow:
        "0px 20px 50px rgba(239,68,68,.18)"
    }}
        className="rounded-xl flex overflow-hidden shadow-xl hover:shadow-red-500/40 transition p-3 bg-[#111111] flex-col relative">
            <motion.img 
            whileHover={{ scale:1.05,  transition:{duration : 0.3}}} 
            src={image}
            alt={name}
            className="w-full h-55 flex rounded-lg"/>
            <motion.button
                whileHover={{scale:1.2}}
                whileTap={{scale:0.9}} className="text-red-500 text-xl rounded-lg cursor-pointer absolute top-4 left-5">
                <FaHeart className="text-white hover:text-red-500"/>
            </motion.button>
                <span className="absolute top-4 right-4 bg-red-400 text-black text-xs font-bold px-2 py-1 rounded-lg">
                Trending
                </span>
                <h2 className="font-bold flex uppercase tracking-widest text-red-500 text-sm mt-4">
                    {brand}
                </h2>
                <h3 className="font-semibold flex text-white text-lg mt-2">
                    {name}
                </h3>
                <div className="flex items-center mt-2 gap-2">
                <FaStar className="text-yellow-300 text-lg "/>
                <FaStar className="text-yellow-300 text-lg"/>
                <FaStar className="text-yellow-300 text-lg"/>
                <FaStar className="text-yellow-300 text-lg"/>
                <FaStar className="text-yellow-300 text-lg"/>
                <p className="text-white flex text-md">4.9</p>
                </div>
                <p className="text-white flex font-bold mt-2 text-lg">
                    ₹{price}    
                </p>
                <motion.div
                whileHover={{x:8}} className="flex gap-1 py-1 mt-1">
                <button className="flex items-center cursor-pointer gap-2 font-semibold text-red-500">View More</button>
                <FaArrowRight className="text-red-500 cursor-pointer text-md mt-1.5"/>
                </motion.div>
                
        </motion.div>
    );
}
export default ProductCard;