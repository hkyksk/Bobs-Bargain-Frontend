/* eslint-disable react/prop-types */
import { useState } from 'react'
import searchIcon from '../../assets/search.svg'

const Searchbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('Search triggered!')
      onSearch(searchQuery.trim().toLowerCase()) 
    }
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value) 
  }

  return (
    <div className="input-icons">
      <i>
        <img src={searchIcon} alt="Search" />
      </i>
      <input
        type="text"
        placeholder="Search for a product..."
        className="search-bar"
        value={searchQuery}
        onKeyDown={handleKeyDown}
        onChange={handleChange} 
      />
    </div>
  )
}

export default Searchbar
