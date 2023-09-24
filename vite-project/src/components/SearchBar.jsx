function SearchBar({ searchQuery, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search for a country..."
      value={searchQuery}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}


export default SearchBar;