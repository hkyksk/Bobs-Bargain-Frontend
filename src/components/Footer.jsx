import { Link, useLocation } from 'react-router-dom';
import HomeSVG from '../assets/home.svg';
import ProfileSVG from '../assets/profile.svg';
import CartSVG from '../assets/cart.svg';

const Footer = ({ onButtonClick }) => {
  const location = useLocation();

  return (
    <footer className="footer">
      <button
        className={`footer-button footer-icon ${location.pathname === '/home' ? 'active' : ''}`}
        onClick={() => onButtonClick('home')}
      >
        <Link to="/home" className="footer-link">
          <img src={HomeSVG} alt="Home" className="footer-icon" />
          <p>Home</p>
        </Link>
      </button>
      <div className="footer-gap">
        <button
          className={`footer-button-cart ${location.pathname === '/cart' ? 'active' : ''}`}
          onClick={() => onButtonClick('cart')}
        >
          <Link to="/cart" className="footer-link">
            <img src={CartSVG} alt="Cart" className="footer-icon" />
            <p>Cart</p>
          </Link>
        </button>
      </div>
      <button
        className={`footer-button ${location.pathname === '/login' ? 'active' : ''}`}
        onClick={() => onButtonClick('login')}
      >
        <Link to="/login" className="footer-link">
          <img src={ProfileSVG} alt="Profile" className="footer-icon" />
          <p>Profile</p>
        </Link>
      </button>
    </footer>
  );
};

export default Footer;
