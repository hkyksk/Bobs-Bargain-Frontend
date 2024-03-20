import RecommendedFeed from './Dashboard/RecommendedFeed/RecommendedFeed'
import CategoryFeed from './Dashboard/CategoryFeed/CategoryFeed'
import Home from './Dashboard/Home.jsx'
import Login from './Dashboard/Login.jsx'
import Cart from './Dashboard/Cart.jsx'

const Dashboard = ({ selectedComponent }) => {

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      {selectedComponent === 'home' && (
        <>
          <RecommendedFeed />
          <CategoryFeed />
        </>
      )}
      {selectedComponent === 'login' && <Login />}
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
