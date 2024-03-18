const RecommendedList = () => {
  return (
    <div className="product-list">
      {/* Render product items as square cards */}
      <div className="product-card">
        <div className="product-details">
          <h3>Product A</h3>
          <p>Weight: 250g</p>
          <p>Price: $10</p>
        </div>
        <button className="add-to-cart-btn">+</button>
      </div>
      <div className="product-card">
        <div className="product-details">
          <h3>Product B</h3>
          <p>Weight: 500g</p>
          <p>Price: $15</p>
        </div>
        <button className="add-to-cart-btn">+</button>
      </div>
      <div className="product-card">
        <div className="product-details">
          <h3>Product C</h3>
        </div>
        <p>Weight: 1kg</p>
        <p>Price: $20</p>
        <button className="add-to-cart-btn">+</button>
      </div>
    </div>
  )
}

export default RecommendedList
