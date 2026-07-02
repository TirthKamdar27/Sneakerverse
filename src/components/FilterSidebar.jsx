function FilterSidebar({
  selectedBrand,
  setSelectedBrand,
  sortOption,
  setSortOption,
  selectedPrice,
  setPrice,
  selectedRating,
  setRating,
}) {
  return (
    <div className="flex flex-col px-4 py-2 text-white text-xl">
      <h1>Filter</h1>
      <section>
        <p>Brand</p>
        <label className="flex">
          <input
            type="radio"
            name="choice"
            value="All"
            checked={selectedBrand === "All"}
            onChange={(e) => setSelectedBrand(e.target.value)}
          />{" "}
          All
        </label>
        <label className="flex ">
          <input
            type="radio"
            name="choice"
            value="Nike"
            checked={selectedBrand === "Nike"}
            onChange={(e) => setSelectedBrand(e.target.value)}
          />
          Nike
        </label>
        <label className="flex ">
          <input
            type="radio"
            name="choice"
            value="Jordan"
            checked={selectedBrand === "Jordan"}
            onChange={(e) => setSelectedBrand(e.target.value)}
          />
          Jordan
        </label>
        <label className="flex ">
          <input
            type="radio"
            name="choice"
            value="Yeezy"
            checked={selectedBrand === "Yeezy"}
            onChange={(e) => setSelectedBrand(e.target.value)}
          />
          Yeezy
        </label>

        <label className="flex">
          <input
            type="radio"
            name="choice"
            value="Adidas"
            checked={selectedBrand === "Adidas"}
            onChange={(e) => setSelectedBrand(e.target.value)}
          />
          Adidas
        </label>
        <label className="flex">
          <input
            type="radio"
            name="choice"
            value="Yeezy"
            checked={selectedBrand === "Yeezy"}
            onChange={(e) => setSelectedBrand(e.target.value)}
          />
          Yeezy
        </label>
      </section>
      <section>
        <p>Price</p>
        <select
          className="flex "
          value={selectedPrice}
          onChange={(e) => setPrice(Number(e.target.value))}
        >
          <option className="text-black" value="All">
            All
          </option>
          <option className="text-black" value="10000">
            ₹0 - ₹10, 000
          </option>
          <option className="text-black" value="20000">
            ₹10,000 - ₹20,000
          </option>
          <option className="text-black" value="30000">
            ₹20,000 - ₹30,000
          </option>
        </select>
      </section>
      <section>
        <p>Rating</p>
        <select
          value={selectedRating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          <option className="text-black" value="">
            None
          </option>
          <option className="text-black" value="3">
            3 star
          </option>
          <option className="text-black" value="4">
            4 star
          </option>
          <option className="text-black" value="5">
            5 star
          </option>
        </select>
      </section>
      <section>
        <p>Sort</p>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option className="text-black" value="">
            None
          </option>
          <option className="text-black" value="high-low">
            High-Low
          </option>
          <option className="text-black" value="low-high">
            Low-High
          </option>
        </select>
      </section>
    </div>
  );
}
export default FilterSidebar;
