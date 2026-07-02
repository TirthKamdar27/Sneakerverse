import sneakers from "../data/sneakers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import {useParams} from "react-router-dom";

function BrandPages () {
    const {brand} = useParams();
    const filteredProducts = sneakers.filter((product) => {
        return product.brand.toLowerCase() === brand.toLowerCase();
    });
    return (
        <div className="text-white bg-gray-700 min-h-screen flex flex-col gap-15.5">
            <Navbar/>
            <ProductGrid title={brand} products={filteredProducts}/>
            <Footer/>
        </div>
    )
}
export default BrandPages;