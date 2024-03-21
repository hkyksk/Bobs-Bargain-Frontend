import searchIcon from '../../assets/search.svg';

const Searchbar = () => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Perform search action here
      console.log('Search triggered!')
    }
  };

  return (
    <div className="input-icons">
      <i>
      <img src={searchIcon} alt="Search" />
      </i>
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
