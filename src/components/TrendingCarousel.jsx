import sneakers from "../data/sneakers";
const carouselSneakers = [...sneakers, ...sneakers, ...sneakers,...sneakers, ...sneakers]; // Duplicate the sneakers array to create a longer carousel
import "../styles/carousel.css";
import ProductCard from "./ProductCard";

function TrendingCarousel() {
    return (
        <section className="overflow-hidden">
            <h2 className="text-4xl font-bold text-center -mt-2 mb-10">
                Trending Today
            </h2>
            <div>
                <div className="flex h-[64vh] w-max carousel-track gap-6">
                    {carouselSneakers.map((shoe, index) => (
                        <div key={`${shoe.id}-${index}`} className="w-[280px] flex-shrink-0">
                            <ProductCard
                            id={shoe.id}
                            image = {shoe.image}
                            name = {shoe.name}
                            brand = {shoe.brand}
                            price = {shoe.price}
                            rating = {shoe.rating}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default TrendingCarousel;