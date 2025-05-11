import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useEffect, useRef, useState } from "react";

const SearchBar = (props: any) => {
  const { placeholderText, onSearch, onMainPage, isOnMain, icon } = props;

  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleInput = (event: any) => {
    setInputValue(event.target.value);
  };
  const handleSearch = () => {
    onSearch(inputValue);
  };
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className="w-1/2 h-12 flex flex-row justify-between bg-white/60 border-2  rounded-sm relative mb-16"
    >
      <div className="flex flex-row">
        {isOnMain ? (
          <>
            <input
              type="search"
              placeholder={placeholderText}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              className="outline-none p-2 w-64 rounded-tl-sm rounded-bl-sm text-sm"
            />
            <button onClick={handleSearch} className="px-2 bg-white border-x-2">
              <SearchIcon />
            </button>
          </>
        ) : (
          <button
            onClick={onMainPage}
            className="flex  border-r-2 hover:bg-white/30 items-center p-2"
          >
            <ArrowBackIcon />
            Back
          </button>
        )}
      </div>
      <div className="flex flex-row ">
        <button className="p-2" onClick={onMainPage}>
          {icon}
        </button>
        <button
          className="flex h-full items-center p-2"
          onClick={handleMenuOpen}
        >
          <SettingsIcon className="" />
        </button>
        <ol
          className={`absolute right-0 top-12 text-center cursor-pointer bg-white/30 rounded-sm border-2 ${
            isOpen ? "" : "hidden"
          }`}
        >
          <button>
            <li className="p-2 hover:bg-white/40">Light/Dark</li>
          </button>
        </ol>
      </div>
    </div>
  );
};
export default SearchBar;
