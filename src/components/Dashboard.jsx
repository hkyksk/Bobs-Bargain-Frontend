import RecommendedFeed from './Dashboard/RecommendedFeed/RecommendedFeed'
import CategoryFeed from './Dashboard/CategoryFeed/CategoryFeed'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <RecommendedFeed />
      <CategoryFeed />
    </div>
  )
}

export default Dashboard
