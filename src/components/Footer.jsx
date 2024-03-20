import { Link } from 'react-router-dom'
import HomeSVG from '../assets/home.svg'
import ProfileSVG from '../assets/profile.svg'
import CartSVG from '../assets/cart.svg'

const Footer = ({ onButtonClick }) => {
  return (
    <footer className="footer">
      <button className="footer-button" onClick={() => onButtonClick('home')}>
        <Link to="/home" className="footer-link">
          <img src={HomeSVG} alt="Home" className="footer-icon" />
          <p>Home</p>
        </Link>
      </button>

      <button className="footer-button" onClick={() => onButtonClick('cart')}>
        <Link to="/cart" className="footer-link">
          <img src={CartSVG} alt="Cart" className="footer-icon" />
          <p>Cart</p>
        </Link>
      </button>

      <button className="footer-button" onClick={() => onButtonClick('login')}>
        <Link to="/login" className="footer-link">
          <img src={ProfileSVG} alt="Profile" className="footer-icon" />
          <p>Profile</p>
        </Link>
      </button>
    </footer>
  )
}

export default Footer
