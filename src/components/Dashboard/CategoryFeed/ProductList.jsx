import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductList = () => {
  return (
    <Container>
      <div className="product-list">
    <Row xs={2} md={2} lg={6} className="g-4">
        <Col lg={3} md={6} sm={6} className="">
          <div className="product-card">
            <div className="product-details">
              <h3>Product A</h3>
              <p>Weight: 250g</p>
              <p>Price: $10</p>
            </div>
            <button className="add-to-cart-btn">+</button>
          </div>
        </Col>
        <Col lg={3} md={4} sm={6}>
          <div className="product-card">
            <div className="product-details">
              <h3>Product B</h3>
              <p>Weight: 500g</p>
              <p>Price: $15</p>
            </div>
            <button className="add-to-cart-btn">+</button>
          </div>
        </Col>
        <Col lg={3} md={4} sm={6}>
          <div className="product-card">
            <div className="product-details">
              <h3>Product C</h3>
              <p>Weight: 1kg</p>
              <p>Price: $20</p>
            </div>
            <button className="add-to-cart-btn">+</button>
          </div>
        </Col>
        <Col lg={3} md={4} sm={6}>
          <div className="product-card">
            <div className="product-details">
              <h3>Product D</h3>
              <p>Weight: 1.5kg</p>
              <p>Price: $25</p>
            </div>
            <button className="add-to-cart-btn">+</button>
          </div>
        </Col>
      </Row>
      </div>
    </Container>
  );
};

export default ProductList;
