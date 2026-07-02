import ProductCard from "./ProductCard";

function ProductGrid ({products, title}) {
    return (
        <section >
            {title && <h2 className="flex text-white justify-center -mt-12 font-bold text-4xl px-4">{title}</h2>}
                {products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 mt-6">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            image = {product.image}
                            name = {product.name}
                            brand = {product.brand}
                            price = {product.price}
                            rating = {product.rating}
                            reviews = {product.reviews}
                            id={product.id}
                            />))
                        }
                        </div>
                    ) : (
                        <section >
                        <p className="text-white text-xl text-center mt-6">No sneakers found.</p>
                        <p className="text-white text-xl text-center mt-2">Please try searching for something else.</p>
                        </section>
                    )}
        </section>
    );
}
export default ProductGrid;