

function Navbar() {
    return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-5 border-b border-gray-800 bg-black ">
        <h1 className="text-2xl font-bold">SneakerVerse</h1>
        <div className="flex gap-6">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Nike</a>
            <a href="#">Adidas</a>
            <a href="#">Jordan</a>
            <a href="#">New Arrivals</a>
        </div>
        <div className="flex gap-4">
            <button>🔍</button>
            <button>♡</button>
            <button>🛒</button>
            <button>Login</button>
        </div>
    </nav>  
    );
}

export default Navbar;