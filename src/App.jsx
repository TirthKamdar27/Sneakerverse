import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist'
import ProductGrid from './components/ProductGrid';
import BrandPages from './pages/BrandPages';

function App() {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products/:id" element={<ProductDetails />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/brand/:brand" element={<BrandPages />}/>
    <Route path="/wishlist" element={<Wishlist />} />
  </Routes>
  );
}

export default App;