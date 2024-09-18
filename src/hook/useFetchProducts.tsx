import { Product } from "../type/product";
import { useEffect, useState } from "react";
import { ApiResponse } from "../type/apiResponse";

type UseFetchProductType = {
  searchValue: string;
  skip: number;
  limit: number;
};

export default function useFetchProducts({
  searchValue,
  skip,
  limit = 20,
}: UseFetchProductType) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${searchValue}&limit=${limit}&skip=${skip}`
        );
        const data: ApiResponse<Product, "products"> = await res.json();

        setProducts((prevProducts) =>
          skip === 0 ? data.products : [...prevProducts, ...data.products]
        );

        setHasMore(skip + data.products.length < data.total);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchValue, skip, limit]);

  return { products, loading, error, hasMore };
}
