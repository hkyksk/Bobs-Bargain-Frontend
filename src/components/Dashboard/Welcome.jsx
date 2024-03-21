import { useState } from 'react'
import { Button } from 'react-bootstrap'
import SignUpForm from './Welcome/SignUpForm'
import Login from './Welcome/Login'

const Welcome = ({ onButtonClick, onSignUp }) => {
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

  return (
    <div className="welcome-container">
      <h2>Welcome to Bobs Bargain</h2>
      <p>Please select an option to proceed:</p>
      <div className="button-container">
        <Button variant="primary" className="btn-lg" onClick={handleLoginClick}>
          Login
        </Button>
        <Button variant="success" className="btn-lg" onClick={handleSignupClick}>
          Sign Up
        </Button>
      </div>
      {showForm && (showLogin ? <Login /> : <SignUpForm onSignUp={onSignUp} />)}
    </div>
  )
}

export default Welcome
