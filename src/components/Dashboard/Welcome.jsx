import { useState } from 'react'
import { Button } from 'react-bootstrap'
import SignUpForm from './Welcome/SignUpForm'
import Login from './Welcome/Login'
import ViewProfile from './ViewProfile'

const Welcome = ({ onButtonClick, onSignUp, onSignIn, isSignedIn, setIsSignedIn, userData, handleLogout }) => {
  const [showForm, setShowForm] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  const handleLoginClick = () => {
    setShowForm(true)
    setShowLogin(true)
  }

  const handleSignupClick = () => {
    setShowForm(true)
    setShowLogin(false)
  }

  {/*Remove negation when done testing */}
  return (
    <div className="welcome-container">
      {!isSignedIn ? ( 
        <ViewProfile userData={userData} handleLogout={handleLogout} />
      ) : (
        <>
          <h2>Welcome to Bobs Bargain</h2>
          <p>Please select an option to proceed:</p>
          <div className="button-container">
            <Button variant="primary" className="btn-lg welcome-btn" onClick={handleLoginClick}>
              Login
            </Button>
            <Button variant="success" className="btn-lg welcome-btn" onClick={handleSignupClick}>
              Sign Up
            </Button>
          </div>
          {showForm && (showLogin ? <Login onSignIn={onSignIn} setIsSignedIn={setIsSignedIn} /> : <SignUpForm onSignUp={onSignUp} />)}
        </>
      )}
    </div>
  )
}

export default Welcome
