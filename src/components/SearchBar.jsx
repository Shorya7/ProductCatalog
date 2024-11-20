const SearchBar = ({ setSearchQuery }) => (
    <input
      type="text"
      placeholder="Search products..."
      onChange={e => setSearchQuery(e.target.value)}
      className="border outline-none rounded-lg px-4 h-12 w-full sm:w-1/3"
    />
  );
  
  export default SearchBar;
  