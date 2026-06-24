function Hero() {
    return (
        <section className="min-h-80vh flex flex-col items-center justify-center text-center px-8 py-6">
            <h1 className="text-6xl font-bold mb-6">
                Discover the perfect pair
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
                Explore the latest sneakers from Nike, Adidas, Jordan and more.
            </p>
            <button className="mt-8 px-6 py-3 bg-white text-black rounded-lg">
                Shop Now
            </button>
        </section>
    );
}
export default Hero;