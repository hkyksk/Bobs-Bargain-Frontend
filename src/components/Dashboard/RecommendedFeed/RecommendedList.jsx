import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const RecommendedList = () => {
  return (
    <Container>
      <Row xs={2} md={2} lg={3} className="g-4">
        <Col lg={6} md={4} sm={6} className="">
          <div className="product-card">
            <div className="product-details">
              <h3>Product A</h3>
              <p>Weight: 250g</p>
              <p>Price: $10</p>
            </div>
            <button className="add-to-cart-btn">+</button>
          </div>
        </Col>
        <Col lg={6} md={4} sm={6}>
          <div className="product-card">
            <div className="product-details">
              <h3>Product B</h3>
              <p>Weight: 500g</p>
              <p>Price: $15</p>
            </div>
            <button className="add-to-cart-btn">+</button>
          </div>
        </Col>
        <Col lg={6} md={4} sm={6}>
          <div className="product-card">
            <div className="product-details">
              <h3>Product C</h3>
              <p>Weight: 1kg</p>
              <p>Price: $20</p>
            </div>
            <button className="add-to-cart-btn">+</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RecommendedList;
