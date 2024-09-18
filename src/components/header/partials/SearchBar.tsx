import searchIcon from "../../../../public/search-icon.svg";

type SearchBarProps = {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
};

export default function SearchBar({
  searchValue,
  setSearchValue,
}: SearchBarProps) {
  return (
    <section className="relative flex-1 ">
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-full outline-none border border-gray-400 focus:border-black rounded-md px-4 py-2 pr-12"
        type="text"
        placeholder="Enter product..."
      />
      <img
        loading="lazy"
        className="absolute right-4 top-2 cursor-pointer text-2xl "
        src={searchIcon}
        alt="search-icon"
        width={24}
        height={24}
      />
    </section>
  );
}
