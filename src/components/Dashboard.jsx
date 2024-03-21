import RecommendedFeed from './Dashboard/RecommendedFeed/RecommendedFeed'
import CategoryFeed from './Dashboard/CategoryFeed/CategoryFeed'
import Cart from './Dashboard/Cart.jsx'
import Welcome from './Dashboard/Welcome.jsx'

const Dashboard = ({ selectedComponent, onButtonClick, onSignUp }) => {

  return (
    <div className="dashboard">

      {selectedComponent === 'home' && (
        <>
          <RecommendedFeed />
          <CategoryFeed />
        </>
      )}
      {selectedComponent === 'login' && <Welcome onButtonClick={onButtonClick} onSignUp={onSignUp} />}
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
