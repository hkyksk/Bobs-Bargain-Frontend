/* eslint-disable react/prop-types */
import { Container, Row, Col } from 'react-bootstrap'

const RecommendedList = ({ handleCart, products }) => {
  return (
    <Container>
      <Row xs={6} md={4} lg={1} className="g-4">
        <Col lg={4} md={4} sm={6} xs={12}className="">
          <div className="product-card">
            <div className="product-details">
              <h3>Product A</h3>
              <p>Weight: 250g</p>
              <p>Price: $10</p>
            </div>
            <button className="add-to-cart-btn" onClick={() => handleCart({ product_id: 1, name: "Product A", weight: "250g", price: "$10" }, 1)}>+</button>
          </div>
        </Col>
        <Col lg={4} md={4} sm={4} xs={6}>
          <div className="product-card">
            <div className="product-details">
              <h3>Product B</h3>
              <p>Weight: 500g</p>
              <p>Price: $15</p>
            </div>
            <button className="add-to-cart-btn" onClick={() => handleCart({ product_id: 2, name: "Product B", weight: "500g", price: "$15" }, 1)}>+</button>
          </div>
        </Col>
        <Col lg={4} md={4} sm={4}xs={6}>
          <div className="product-card">
            <div className="product-details">
              <h3>Product C</h3>
              <p>Weight: 1kg</p>
              <p>Price: $20</p>
            </div>
            <button className="add-to-cart-btn" onClick={() => handleCart({ product_id: 3, name: "Product C", weight: "1kg", price: "$20" }, 1)}>+</button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default RecommendedList
