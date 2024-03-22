/* eslint-disable react/prop-types */
// ProductList.jsx
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const ProductList = ({ handleCart, wishlist, setWishlist, products, searchResults }) => {

  const [quantities, setQuantities] = useState(Array(products.length).fill(0))
  const [incremented, setIncremented] = useState(Array(products.length).fill(false))
  const [heartColors, setHeartColors] = useState(Array(products.length).fill('black'))

  const handleHeartClick = (index) => {
    const isAlreadyInWishlist = wishlist.some(item => item.product_id === index)
    if (isAlreadyInWishlist) {
      const updatedWishlist = wishlist.filter(item => item.product_id !== index)
      setWishlist(updatedWishlist)
      const updatedHeartColors = [...heartColors]
      updatedHeartColors[index] = 'black'
      setHeartColors(updatedHeartColors)
    } else {
      const product = products[index]
      const newWishlistItem = {
        product_id: index,
        product_name: product.product_category,
        product_weight: product.product_category_type,
        product_price: product.product_category_type_price
      }
      const updatedWishlist = [
        ...wishlist,
        newWishlistItem
      ]
      setWishlist(updatedWishlist)
      const updatedHeartColors = [...heartColors]
      updatedHeartColors[index] = 'orangered'
      setHeartColors(updatedHeartColors)
    }
  }

  const handleIncrement = (index) => {
    const newQuantities = [...quantities]
    newQuantities[index] += 1
    setQuantities(newQuantities)

    const newIncremented = [...incremented]
    newIncremented[index] = true
    setIncremented(newIncremented)

    handleCart(products[index], 1)
  }

  const handleDecrement = (index) => {
    const newQuantities = [...quantities]
    if (newQuantities[index] > 0) {
      newQuantities[index] -= 1
      setQuantities(newQuantities)
    }
    if (newQuantities[index] === 0) {
      const newIncremented = [...incremented]
      newIncremented[index] = false
      setIncremented(newIncremented)
    }
    handleCart(products[index], -1)
  }

  const groupProductsByCategory = (products) => {
    const groupedProducts = {};
    products.forEach(product => {
      if (!groupedProducts[product.product_category]) {
        groupedProducts[product.product_category] = [];
      }
      groupedProducts[product.product_category].push(product);
    });
    return groupedProducts;
  }

  return (
<Container>
  <div className="product-list">
    {/* Group products by category */}
    {Object.entries(groupProductsByCategory(searchResults)).map(([category, productsInCategory]) => (
      <div key={category}>
        {/* Render category title */}
        <h3>{category}</h3>
{/* Render products in this category */}
<Row xs={2} md={3} lg={6} className="g-4">
  {productsInCategory.map((product, index) => (
    <Col key={index} lg={2} md={3} sm={6}>
      <div className="product-card">
        <img
          src={`/${product.product_category_type_brand === 'NoBrand' ? product.product_category_type : product.product_category_type_brand}_Iconic.jpg`}
          alt="Product Image"
        />
        <div className="product-details">
          {/* Update product name based on conditions */}
          <p>
          {product.product_category_type_brand === 'NoBrand'? product.product_category_type : product.product_category === 'Fruit'
            ? product.product_category_type_brand + ' ' + product.product_category_type : product.product_category_type_brand}
          </p>
          <p className="price">{product.product_category_type_price}</p>
          <p className="weight">{product.product_category_type_brand}</p>
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
        <div className="heart-icon" style={{ color: heartColors[index] }} onClick={() => handleHeartClick(index)}>&#x2665;</div>
      </div>
    </Col>
  ))}
</Row>

      </div>
    ))}
  </div>
</Container>

  )
}

export default ProductList
