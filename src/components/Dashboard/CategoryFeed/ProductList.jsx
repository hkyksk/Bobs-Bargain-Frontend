import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductImage from '../../../assets/images/Alpro-Blueberry-Soyghurt_Iconic.jpg';


const ProductList = () => {
  const [quantities, setQuantities] = useState(Array(4).fill(0));
  const [incremented, setIncremented] = useState(Array(4).fill(false));

  const productData = [
    { name: "Product A", weight: "250g", price: "$10" },
    { name: "Product B", weight: "500g", price: "$15" },
    { name: "Product C", weight: "1kg", price: "$20" },
    { name: "Product D", weight: "1.5kg", price: "$25" }
  ];

  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
    if (!incremented[index]) {
      const newIncremented = [...incremented];
      newIncremented[index] = true;
      setIncremented(newIncremented);
    }
  };

  const handleDecrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
    if (newQuantities[index] === 0) {
      const newIncremented = [...incremented];
      newIncremented[index] = false;
      setIncremented(newIncremented);
    }
  };

  return (
    <Container>
      <div className="product-list">
        <Row xs={2} md={2} lg={6} className="g-4">
          {productData.map((product, index) => (
            <Col key={index} lg={3} md={4} sm={6}>
              <div className="product-card">
                <img src={ProductImage} alt="Product Image" /> {/* Render the imported image */}
                <div className="product-details">
                  <p>{product.name}</p>
                  <p className="price">{product.price}</p>
                  <p className="weight">{product.weight}</p>
                </div>
                <div className={`quantity-input-wrapper ${incremented[index] ? 'visible' : ''}`}>
                  <button className="add-to-cart-btn add-to-cart-btn-left" onClick={() => handleDecrement(index)}>-</button>
                  <input
                    type="number"
                    id={`quantity${index}`}
                    name={`quantity${index}`}
                    className="quantity-input"
                    value={quantities[index]}
                    readOnly
                  />
                </div>
                <button className="add-to-cart-btn add-to-cart-btn-right" onClick={() => handleIncrement(index)}>+</button>
                <div className="heart-icon">&#x2665;</div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default ProductList;
