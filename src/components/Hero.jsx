import { motion } from "framer-motion";
import heroShoe from "../assets/images/hero_shoe_6.webp";
// import TrendingCarousel from "./TrendinCarousel";

function Hero() {
  return (
    <section className="relative min-h-[115vh] overflow-hidden flex items-center">

      {/* Background Glow */}
      {/* Large Glow */}
<div
  className="
    absolute
    top-1/2
    right-38
    -translate-y-1/2

    w-[650px]
    h-[650px]

    rounded-full
    bg-red-600/15
    blur-[160px]
  "
/>

{/* Small Glow */}
<div
  className="
    absolute
    top-1/2
    right-32
    -translate-y-1/2

    w-[300px]
    h-[300px]

    rounded-full
    bg-red-500/25
    blur-[100px]
  "
/>
      <div className="relative z-10 max-w-7xl mx-auto px-10 w-full flex flex-col lg:flex-row items-center justify-between">

        {/* LEFT */}

        <div className="max-w-xl">

          <motion.h1
            initial={{ opacity:0, y:50 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:1.0 }}
            className="text-7xl font-black leading-tight"
          >
            Built For
            <br />
            Performance.
            <br />
            Designed For Legends.
          </motion.h1>

          <motion.p
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:0.5, duration:0.8 }}
            className="text-gray-400 mt-8 text-xl text-semibold"
          >
            Premium sneakers from Nike, Adidas, Jordan and more.
          </motion.p>

          <motion.button
            whileHover={{
              scale:1.08
            }}
            whileTap={{
              scale:0.95
            }}
            className="
            mt-10
            px-8
            py-4
            rounded-xl
            bg-red-600
            hover:bg-red-500
            transition-0.1s
            font-semibold
            cursor-pointer
            "
          >
            Shop Now
          </motion.button>

        </div>

        {/* RIGHT */}

        <motion.img
          src={heroShoe}
          alt="Hero Shoe"
          animate={{
            y:[0,-20,0],
            rotate:[-3,3,-3]
          }}
          transition={{
            duration:3,
            repeat:Infinity,
            ease:"easeInOut"
          }}
          className="w-[300px] lg:w-[720px] md:w-[250px] drop-shadow-2xl z-20"
        />
      </div>

    </section>
  );
}

export default Hero;