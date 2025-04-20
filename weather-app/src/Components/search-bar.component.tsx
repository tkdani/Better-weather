const SearchBar = (props: any) => {
  const { placeholderText } = props;

  return (
    <div className="flex flex-row items-center my-10 border-2 rounded  bg-white">
      <input
        type="search"
        placeholder={placeholderText}
        className="outline-none text-sm p-2 w-56 border-r-2 rounded-tl-md rounded-bl-md"
      />
      <button className="p-1">
        <img
          src="Assets/icons/ei-search.svg"
          alt="searchIcon"
          className="w-6"
        />
      </button>
    </div>
  );
};
export default SearchBar;
