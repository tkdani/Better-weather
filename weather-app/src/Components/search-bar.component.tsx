const SearchBar = (props: any) => {
  const { placeholderText } = props;

  return (
    <input
      type="search"
      placeholder={placeholderText}
      className="outline-none text-sm p-2 w-64"
    />
  );
};
export default SearchBar;
