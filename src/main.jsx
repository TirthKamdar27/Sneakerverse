import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';
import { WishlistProvider } from './context/WishlistContext.jsx';
// import {ReactDOM} from 'react-dom/client'

createRoot(document.getElementById("root")).render(
    <CartProvider>
    <WishlistProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </WishlistProvider>
    </CartProvider>
);
