/* eslint-disable react/prop-types */
import ProductList from './ProductList'

const CategoryFeed = ({ handleCart, wishlist, setWishlist , products, searchResults }) => {
  return (
    <div>
      <h3>Category Feed</h3>
      <ProductList handleCart={handleCart} wishlist={wishlist} setWishlist={setWishlist} products={products} searchResults={searchResults} />
    </div>
  )
}

export default CategoryFeed