import sneakers from '../data/sneakers';
import ProductCard from './ProductCard';
import TrendingCarousel from './TrendingCarousel';


function FeaturedSection(){
    return (
       <section className="px-8 py-16">
        <h2 className="text-4xl mt-8 font-bold mb-10 text-center">
            Featured Sneakers
        </h2>
        <div className="grid grid-cols-4 gap-6">
            {sneakers.map((sneaker) => 
                (

                    <ProductCard
                    key={sneaker.id}
                    image={sneaker.image}
                    name={sneaker.name}
                    brand={sneaker.brand}
                    price={sneaker.price}
                    />
                )
            )}
        </div>
       </section>
    );
}

export default FeaturedSection;