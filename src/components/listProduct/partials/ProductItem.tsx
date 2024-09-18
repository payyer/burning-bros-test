type ProductItemType = {
  id: number;
  images: string[];
  brand: string;
  title: string;
  price: number;
  lastProductElementRef?: React.LegacyRef<HTMLDivElement>;
};

export default function ProductItem({
  id,
  images,
  brand,
  title,
  price,
  lastProductElementRef,
}: ProductItemType) {
  return (
    <div
      ref={lastProductElementRef}
      key={id}
      className="flex flex-col gap-2 p-4 justify-center items-center border border-black rounded-lg"
    >
      <div className="flex justify-center w-[250px] h-[250px]">
        <img
          className=" object-contain w-full h-full"
          src={images[0]}
          alt={brand}
          loading="lazy"
        />
      </div>
      <h3 className="font-medium text-ellipsis line-clamp-1">{title}</h3>
      <div className="font-bold text-xl">{price} $</div>
    </div>
  );
}
