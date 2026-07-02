import sneakers from '../data/sneakers';
import ProductCard from './ProductCard';
import TrendingCarousel from './TrendingCarousel';


function FeaturedSection(){
    return (
       <section className="px-8 py-4">
        <h2 className="text-4xl mt-4 font-bold mb-10 text-center">
            Featured Sneakers
        </h2>
        <div className="grid grid-cols-4 mb-10 gap-6">
            {sneakers.map((sneaker) => 
                (
                    <ProductCard
                    key={sneaker.id}
                    id={sneaker.id}
                    image={sneaker.image}
                    name={sneaker.name}
                    brand={sneaker.brand}
                    price={sneaker.price}
                    rating = {sneaker.rating}
                    reviews = {sneaker.reviews}
                    />
                )
            )}
        </div>
       </section>
    );
}

export default FeaturedSection;