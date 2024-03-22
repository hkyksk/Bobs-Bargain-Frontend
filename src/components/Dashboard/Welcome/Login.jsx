/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const ErrorMessage = ({ message }) => (
  <div style={{ color: 'red', margin: '10px 0' }}>{message}</div>
)

const Login = ({ onSignIn, setIsSignedIn }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const onButtonClick = async () => {
    setErrorMessage('')

    if ('' === email) {
      setErrorMessage('Please enter your email')
      return
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setErrorMessage('Please enter a valid email')
      return
    }

    if ('' === password) {
      setErrorMessage('Please enter a password')
      return
    }

    if (password.length < 8) {
      setErrorMessage('The password must be 8 characters or longer')
      return
    }

    try {
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        throw new Error('Failed to sign in')
      }

      const data = await response.json()
      const token = data.token

      localStorage.setItem('token', token)

      onSignIn(token)
      setIsSignedIn(true)

      console.log('User signed in successfully!')
    } catch (error) {
      console.error('Error occurred while signing in:', error)
      setErrorMessage('Failed to sign in')
    }
  }

  return (
    <div className="mainContainer">
      <br />
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <Row className="mb-3">
        <Col md={12}>
          <label htmlFor="Login" className="form-label">
            Login
          </label>
          <input
            type="email"
            value={email}
            placeholder="Enter your email here"
            onChange={(ev) => setEmail(ev.target.value)}
            className="form-control"
            required
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={12}>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={password}
            placeholder="Enter your password here"
            onChange={(ev) => setPassword(ev.target.value)}
            className="form-control"
            required
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={12} md={12}>
          <Button className="btn-lg" type="button" onClick={onButtonClick}>
            Log in
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default Login
