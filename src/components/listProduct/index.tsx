import { Product } from "../../type/product";
import ProductItem from "./partials/ProductItem";

type ListProductType = {
  data: Product[];
  lastProductElementRef: (node: HTMLElement | null) => void;
};
export default function ListProduct({
  data,
  lastProductElementRef,
}: ListProductType) {
  return (
    <section className="mt-nav-height max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.length > 0 && (
          <>
            {data?.map((product, index) => {
              if (data.length === index + 1) {
                // Last product
                return (
                  <ProductItem
                    lastProductElementRef={lastProductElementRef}
                    key={product?.id}
                    id={product?.id}
                    brand={product?.brand}
                    images={product?.images}
                    price={product?.price}
                    title={product?.title}
                  />
                );
              }
              return (
                <ProductItem
                  key={product?.id}
                  id={product?.id}
                  brand={product?.brand}
                  images={product?.images}
                  price={product?.price}
                  title={product?.title}
                />
              );
            })}
          </>
        )}
      </div>
    </section>
  );
}
