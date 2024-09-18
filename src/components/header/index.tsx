import React, { useEffect } from "react";
import Logo from "./partials/Logo";
import SearchBar from "./partials/SearchBar";

type MyHeaderProps = {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
};

function MyHeader({ searchValue, setSearchValue }: MyHeaderProps) {
  useEffect(() => {
    console.log({ MyHeader: "Recall" });
  });
  return (
    <header className="fixed top-0 left-0 right-0 x h-nav-height px-4 border-b bg-white border-black">
      <div className="max-w-6xl h-full flex items-center gap-12 mx-auto">
        <Logo />
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
    </header>
  );
}

export default React.memo(MyHeader);
