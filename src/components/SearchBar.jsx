const SearchBar = ({ setSearchQuery }) => (
    <input
      type="text"
      placeholder="Search products..."
      onChange={e => setSearchQuery(e.target.value)}
      className="border rounded-lg px-4 py-2 w-full sm:w-1/3"
    />
  );
  
  export default SearchBar;
  