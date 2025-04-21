import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";

const SearchBar = (props: any) => {
  const { placeholderText } = props;

  return (
    <div className="w-1/2 h-14 flex flex-row justify-between bg-white/60 border-2 rounded-sm my-10">
      <div className="flex flex-row">
        <input
          type="search"
          placeholder={placeholderText}
          className="outline-none p-2 w-64 rounded-tl-sm rounded-bl-sm"
        />
        <button className="px-2 bg-white border-x-2">
          <SearchIcon />
        </button>
      </div>
      <div className="flex flex-row items-center px-2">
        <button className="mr-2">Favourites</button>
        <Avatar className="ml-2" />
      </div>
    </div>
  );
};
export default SearchBar;
