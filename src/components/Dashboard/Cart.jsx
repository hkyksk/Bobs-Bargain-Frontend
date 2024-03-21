import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductImage from '../../assets/images/Alpro-Blueberry-Soyghurt_Iconic.jpg';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Container>
      <div>
        <h3>Cart</h3>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={ProductImage} alt="Product" />
              <p>{item.name}</p>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Cart;
