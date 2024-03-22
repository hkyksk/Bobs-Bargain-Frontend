import { useState } from 'react'
import ProfileSVG from '../../assets/profile.svg'
import EditProfile from './ViewProfile/EditProfile'
import ViewOrderHistory from './ViewProfile/ViewOrderHistory'
import ViewWishList from './ViewProfile/ViewWishList'

function ViewProfile({ userData, handleLogout }) {
  const [activeComponent, setActiveComponent] = useState(null)

  if (!userData) return null

  const { firstName, lastName, address } = userData

  let activeContent = null

  const handleSelectComponent = (component) => {
    setActiveComponent(component)
  }

  if (activeComponent === 'editprofile') {
    activeContent = <EditProfile userData={userData} />
  } else if (activeComponent === 'orderhistory') {
    activeContent = <ViewOrderHistory />
  } else if (activeComponent === 'viewwishlist') {
    activeContent = <ViewWishList />
  }

  return (
    <div className="profile-container">
      <div className="profile-info">
        <img src={ProfileSVG} alt="Profile" className="profile-icon" />
        <div>
          <h2>{firstName} {lastName}</h2>
          <p>{address}</p>
        </div>
      </div>
      <nav className="profile-nav">
        <ul className="no-bullets">
          {userData && (
            <>
              <li>
                {activeComponent !== 'editprofile' && (
                  <button onClick={() => handleSelectComponent('editprofile')} className="link-button">Edit Profile</button>
                )}
              </li>
              <li>
                {activeComponent !== 'orderhistory' && (
                  <button onClick={() => handleSelectComponent('orderhistory')} className="link-button">View Order History</button>
                )}
              </li>
              <li>
                {activeComponent !== 'viewwishlist' && (
                  <button onClick={() => handleSelectComponent('viewwishlist')} className="link-button">View Wishlist</button>
                )}
              </li>
              <li>
                <button onClick={handleLogout} className="link-button">Log Out</button>
              </li>
            </>
          )}
        </ul>
      </nav>
      {activeContent}
    </div>
  )
}

export default ViewProfile
