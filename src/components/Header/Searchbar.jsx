const Searchbar = () => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Perform search action here
      console.log('Search triggered!')
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a product..."
        className="search-bar"
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default Searchbar
