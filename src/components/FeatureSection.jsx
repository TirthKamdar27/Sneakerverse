function FeaturedSelection(){
    return (
        <section className="px-8 py-16">
            <h2 className="text-4xl font-bold mb-10">
                Featured Sneakers
            </h2>
            <div className="grid grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg">
                    Nike Air Max 270
                </div>
                <div className="p-6 border rounded-lg">
                    Adidas Ultraboost 21
                </div>
                <div className="p-6 border rounded-lg">
                    Jordan 1 Retro High
                </div>
            </div>
        </section>
    );
}

export default FeaturedSelection;