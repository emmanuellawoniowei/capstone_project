import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductCard from "./ProductCard";

export default function Products() {
  const { products, loading } = useFetchProducts();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const isSkincareProduct = (p) => {
    const text =
      `${p.title} ${p.description} ${p.category}`.toLowerCase();

    return (
      text.includes("cream") ||
      text.includes("moisturizer") ||
      text.includes("lotion") ||
      text.includes("serum") ||
      text.includes("skin") ||
      text.includes("face")
    );
  };

  const filtered = products
    .filter((p) =>
      (p.title || "").toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) => {
      if (category === "all") return true;

      if (category === "skincare") return isSkincareProduct(p);

      if (category === "beauty") return true;

      return true;
    });

  return (
    <section id="shop" className="max-w-7xl mx-auto px-6 py-24">

      <div className="text-center mb-12">

        <span className="uppercase tracking-widest text-pink-500 font-medium">
          Our Collection
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-3 text-[#2D2D2D]">
          Luxury Skincare Collection
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Premium skincare products designed to nourish, hydrate and glow.
        </p>
      </div>

      <div className="flex justify-center gap-3 mb-10">
        {["all", "skincare", "beauty"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              category === cat
                ? "bg-pink-500 text-white border-pink-500"
                : "border-pink-200 text-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="relative max-w-xl mx-auto mb-12">
        <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-4 rounded-2xl border border-pink-100"
        />
      </div>

      {!loading && (
        <p className="text-center text-gray-500 mb-6">
          Showing {filtered.length} products
        </p>
      )}

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-10 h-10 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"></div>
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          No products found
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={setSelectedProduct}
            />
          ))}
        </div>
      )}

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-md rounded-3xl p-6 relative">

            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-500"
            >
              ✕
            </button>

            <img
              src={selectedProduct.thumbnail}
              className="h-48 w-full object-contain"
            />

            <h2 className="text-xl font-bold mt-4">
              {selectedProduct.title}
            </h2>

            <p className="text-gray-500 mt-2">
              {selectedProduct.description}
            </p>

            <p className="text-pink-600 font-bold text-2xl mt-4">
              ${selectedProduct.price}
            </p>

            <button className="w-full mt-5 bg-pink-500 text-white py-3 rounded-xl">
              Add to Cart
            </button>

          </div>
        </div>
      )}

    </section>
  );
}