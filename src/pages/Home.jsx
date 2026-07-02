import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import TrendingCarousel from '../components/TrendingCarousel';
import {useState} from "react";

function Home(){
    const [searchItem, setSearchItem] = useState("");
    return (
        <>
        <div className="min-h-screen bg-black text-white">
        <Navbar searchItem={searchItem} setSearchItem={setSearchItem}/>
        <Hero />
        <TrendingCarousel/>
        <FeatureSection />
        </div>
        <Footer/>
        </>
    )
}
export default Home;