import CartSVG from '../../assets/cart.svg';

const Cart = () => {
  return (
    <button className="footer-button">
        <img src={CartSVG} alt="Cart" className="footer-icon" />
        <p>Cart</p>
    </button>
  )
}

export default Cart
