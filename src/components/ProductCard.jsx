import { FiStar, FiHeart } from "react-icons/fi";
import toast from "react-hot-toast";

export default function ProductCard({ product, onSelect }) {
  const addToCart = (e) => {
    e.stopPropagation();

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      toast("Already in cart");
      return;
    }

    cart.push({
      ...product,
      quantity: 1,
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    toast.success("Added to cart 🛒");
  };

  const addToWishlist = (e) => {
    e.stopPropagation();

    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.find((item) => item.id === product.id);

    if (!exists) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      toast.success("Saved to wishlist 💖");
    } else {
      toast("Already in wishlist");
    }
  };

  return (
    <div
      onClick={() => onSelect(product)}
      className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-pink-100 hover:shadow-xl transition-all duration-300"
    >
      <div className="relative bg-[#FFF7FA] p-6">

        <button
          onClick={addToWishlist}
          className="absolute top-4 right-4 p-2 rounded-full bg-white shadow"
        >
          <FiHeart className="text-pink-500" />
        </button>

        <img
          src={product.thumbnail}
          className="h-52 w-full object-contain"
        />
      </div>

      <div className="p-5">

        <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-xs font-medium">
          Skincare
        </span>

        <h3 className="font-semibold text-lg mt-3">
          {product.title}
        </h3>

        <p className="text-gray-500 text-sm mt-2">
          {product.description}
        </p>

        <p className="text-2xl font-bold text-pink-600 mt-4">
          ${product.price}
        </p>

        <button
          onClick={addToCart}
          className="mt-5 w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}