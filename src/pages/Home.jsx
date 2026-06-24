import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';

function Home(){
    return (
        <>
        <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Hero />
        <FeatureSection />
        </div>
        <Footer/>
        </>
    )
}
export default Home;