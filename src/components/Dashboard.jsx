import RecommendedFeed from './Dashboard/RecommendedFeed/RecommendedFeed'
import CategoryFeed from './Dashboard/CategoryFeed/CategoryFeed'
import Cart from './Dashboard/Cart.jsx'
import ViewProfile from './Dashboard/ViewProfile.jsx'

const Dashboard = ({ selectedComponent }) => {

  return (
    <div className="dashboard">

      {selectedComponent === 'home' && (
        <>
          <RecommendedFeed />
          <CategoryFeed />
        </>
      )}
      {selectedComponent === 'login' && <ViewProfile />}
      {selectedComponent === 'cart' && <Cart />}
      {selectedComponent !== 'home' && selectedComponent !== 'login' && selectedComponent !== 'cart' && (
        <>
          <RecommendedFeed />
          <CategoryFeed />
        </>
      )}
    </div>
  )
}

export default Dashboard
