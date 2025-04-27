import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";

const SearchBar = (props: any) => {
  const { placeholderText, onSearch } = props;

  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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
  return (
    <div className="relative w-1/2 h-12 flex flex-row justify-between bg-white/60 border-2 rounded-sm mb-16">
      <div className="flex flex-row">
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
      </div>
      <button className="flex h-full items-center">
        <Avatar className="m-1 max-w-9 max-h-9" />
      </button>
      <ul className="absoulute left-0">
        <li>Favourites</li>
        <li>Profile</li>
      </ul>
    </div>
  );
};
export default SearchBar;
