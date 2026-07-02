import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import TrendingCarousel from "../components/TrendingCarousel";
import ProductGrid from "../components/ProductGrid";
import FilterSidebar from "../components/FilterSidebar";
import sneakers from "../data/sneakers";

function Home() {
    const [searchItem, setSearchItem] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("All");
    const [sortOption, setSortOption] = useState("");
    const [selectedPrice, setPrice] = useState(Infinity);
    const [selectedRating, setRating] = useState(0);

    let filteredSneakers = sneakers;

    // Search Filter
    filteredSneakers = filteredSneakers.filter((product) => {
        const searchableText = `${product.name} ${product.brand}`;
        return searchableText
            .toLowerCase()
            .includes(searchItem.toLowerCase());
    });

    // Brand Filter
    filteredSneakers = filteredSneakers.filter((product) => {
        return (
            selectedBrand === "All" ||
            product.brand.toLowerCase() === selectedBrand.toLowerCase()
        );
    });

    // Price Filter
    filteredSneakers = filteredSneakers.filter((product) => {
        return (
            selectedPrice === Infinity ||
            product.price <= Number(selectedPrice)
        );
    });

    // Rating Filter
    filteredSneakers = filteredSneakers.filter((product) => {
        return product.rating >= Number(selectedRating);
    });

    // Sorting
    if (sortOption === "low-high") {
        filteredSneakers.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-low") {
        filteredSneakers.sort((a, b) => b.price - a.price);
    }

    return (
        <>
            <div className="min-h-screen bg-black text-white">
                <Navbar
                    searchItem={searchItem}
                    setSearchItem={setSearchItem}
                />

                {searchItem.trim() === "" ? (
                    <>
                        <Hero />
                        <TrendingCarousel />
                        <FeatureSection />
                    </>
                ) : (
                    <div className="flex gap-8 px-8 py-6 mt-10">
                        <FilterSidebar
                            selectedBrand={selectedBrand}
                            setSelectedBrand={setSelectedBrand}
                            sortOption={sortOption}
                            setSortOption={setSortOption}
                            selectedPrice={selectedPrice}
                            setPrice={setPrice}
                            selectedRating={selectedRating}
                            setRating={setRating}
                        />

                        <ProductGrid
                            title={brand}
                            products={filteredSneakers}
                        />
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
}

export default Home;