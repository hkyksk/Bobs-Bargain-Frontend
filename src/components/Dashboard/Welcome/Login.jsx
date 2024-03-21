import { useState } from 'react'
import { Button, Row, Col } from 'react-bootstrap'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const onButtonClick = () => {
    // Set initial error values to empty
    setEmailError('')
    setPasswordError('')

    // Check if the user has entered both fields correctly
    if ('' === email) {
      setEmailError('Please enter your email')
      return
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email')
      return
    }

    if ('' === password) {
      setPasswordError('Please enter a password')
      return
    }

    if (password.length < 8) {
      setPasswordError('The password must be 8 characters or longer')
      return
    }
    // Authentication calls will be made here...
  }

  return (
    <div className="mainContainer">
      <br />
      <Row className="mb-3">
        <Col md={12}>
          <label htmlFor="Login" className="form-label">Login</label>
          <input
            type="email"
            value={email}
            placeholder="Enter your email here"
            onChange={(ev) => setEmail(ev.target.value)}
            className="form-control"
          />
          <label className="errorLabel">{emailError}</label>
        </Col>
      </Row>
      <Row className="mb-3">
         <Col md={12}>
         <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            value={password}
            placeholder="Enter your password here"
            onChange={(ev) => setPassword(ev.target.value)}
            className="form-control"
          />
          <label className="errorLabel">{passwordError}</label>
        </Col>
      </Row>
      <Row className="mb-3">
      <Col xs={12} md={12}>
        
          <Button className="inputButton" type="button" onClick={onButtonClick}>Log in</Button>
        </Col>
      </Row>
    </div>
  )
}

export default Login
