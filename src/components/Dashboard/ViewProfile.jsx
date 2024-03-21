import React from 'react';
import { Link } from 'react-router-dom';
import ProfileSVG from '../../assets/profile.svg';

function ViewProfile() {
  // Dummy data
  const firstName = "John";
  const lastName = "Doe";
  const address = "123 Main St, City";

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
          <li>
            <Link to="/editprofile">Edit Profile</Link>
          </li>
          <li>
            <Link to="/orderhistory">View Order History</Link>
          </li>
          <li>
            <Link to="/viewwishlist">View Wishlist</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ViewProfile;
