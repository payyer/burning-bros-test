import MyHeader from "./components/header";
import useDebounce from "./hook/useDebounce";
import ListProduct from "./components/listProduct";
import useFetchProducts from "./hook/useFetchProducts";
import { useCallback, useState, useRef, useEffect } from "react";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [skip, setSkip] = useState<number>(0);
  const [limit] = useState<number>(20);

  const debounceSearch = useDebounce(searchValue, 300);
  const { products, loading, hasMore } = useFetchProducts({
    searchValue: debounceSearch,
    skip,
    limit,
  });

  const observer = useRef<IntersectionObserver | null>(null);
  const lastProductElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setSkip((prevSkip) => prevSkip + limit);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, limit]
  );

  const handleSetSearchValue = useCallback((value: string) => {
    setSearchValue(value);
    setSkip(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    setSkip(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [debounceSearch]);

  return (
    <main className="max-w-screen min-h-screen">
      <MyHeader
        searchValue={searchValue}
        setSearchValue={handleSetSearchValue}
      />
      <ListProduct
        data={products}
        lastProductElementRef={lastProductElementRef}
      />
      {loading && <div className="mt-4 text-center">Loading more...</div>}
      {!loading && products.length === 0 && (
        <div className="mt-4 text-center">No products found</div>
      )}
    </main>
  );
}

export default App;
