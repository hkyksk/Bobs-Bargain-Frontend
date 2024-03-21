import { useState } from 'react'
import Searchbar from './Header/Searchbar'
import logo from '../assets/logo.svg'

const Header = () => {
  const [isWobbling, setIsWobbling] = useState(false);

  const handleMouseEnter = () => {
    setIsWobbling(true)
  }

  const handleMouseLeave = () => {
    setIsWobbling(false)
  }

  return (
          <div className="header">
            <div className="header-content">   
              <div className="header-content2 header-content3"><h1>Bobs</h1></div>
              <div className="logo-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={logo} alt="Search" className={isWobbling ? "logo wobble" : "logo"} />
              </div>
              <div className="header-content2 header-content4"><h1>Bargain</h1></div>
            </div>
            <div className="searchbar-container">
              <Searchbar />
            </div>
          </div>
  )
}

export default Header
