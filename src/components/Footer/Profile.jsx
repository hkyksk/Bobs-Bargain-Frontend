import ProfileSVG from '../../assets/profile.svg'

const Profile = () => {
  return (
    <button className="footer-button">
        <img src={ProfileSVG} alt="Profile" className="footer-icon" />
        <p>Profile</p>
    </button>
  )
}

export default Profile
