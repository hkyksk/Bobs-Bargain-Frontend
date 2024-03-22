/* eslint-disable react/prop-types */
import RecommendedList from './RecommendedList'

const RecommendedFeed = ({ handleCart, products}) => {
  return (
    <div>
      <h3>Recommended Feed</h3>
      <RecommendedList handleCart={handleCart} products={products} />
    </div>
  )
}

export default RecommendedFeed
