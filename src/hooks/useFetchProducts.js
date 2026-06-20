import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const res = await axios.get("https://dummyjson.com/products");

        const filtered = res.data.products.filter((p) => {
          const text =
            `${p.title} ${p.description} ${p.category}`.toLowerCase();

          const isSkincare =
            text.includes("cream") ||
            text.includes("moisturizer") ||
            text.includes("lotion") ||
            text.includes("serum") ||
            text.includes("skin") ||
            text.includes("face") ||
            text.includes("beauty");

          const isFurniture =
            text.includes("bed") ||
            text.includes("sofa") ||
            text.includes("chair") ||
            text.includes("table") ||
            text.includes("furniture");

          return isSkincare && !isFurniture;
        });

        setProducts(filtered.slice(0, 12));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading };
}