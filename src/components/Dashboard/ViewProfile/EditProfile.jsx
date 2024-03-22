import { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const ErrorMessage = ({ message }) => (
  <div style={{ color: 'red', margin: '10px 0' }}>{message}</div>
)

const SuccessMessage = ({ message }) => (
  <div style={{ color: 'green', margin: '10px 0' }}>{message}</div>
)

const EditProfile = ({ userData }) => {
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [formData, setFormData] = useState({
    username: userData.username,
    firstName: userData.firstName,
    lastName: userData.lastName,
    address: userData.address,
    streetNumber: userData.streetNumber,
    zipCode: userData.zipCode,
    email: userData.email,
    password: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/updateprofile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to update profile')
      }

      setSuccessMessage('Profile updated successfully!')
    } catch (error) {
      console.error('Error occurred while updating profile:', error)
      setErrorMessage('Failed to update profile. Please try again.')
    }
  }

  const handleDeleteProfile = async () => {
    try {
      const response = await fetch('/api/deleteprofile', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: formData.username }), 
      })

      if (!response.ok) {
        throw new Error('Failed to delete profile')
      }

      setSuccessMessage('Profile deleted successfully!')
    } catch (error) {
      console.error('Error occurred while deleting profile:', error)
      setErrorMessage('Failed to delete profile. Please try again.')
    }
  }

  return (
    <>
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {successMessage && <SuccessMessage message={successMessage} />}
      <form onSubmit={handleSubmit}>
        <br />
        <Row className="mb-3">
          <Col xs={12} md={6}>
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter email" required readOnly />
          </Col>
          <Col xs={12} md={6}>
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Enter new password" />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={12} md={6}>
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleInputChange} placeholder="Enter username" required />
          </Col>
          <Col xs={12} md={6}>
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Enter first name" required />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={12} md={6}>
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Enter last name" required />
          </Col>
          <Col xs={12} md={6}>
            <label htmlFor="address" className="form-label">Address</label>
            <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleInputChange} placeholder="Enter address" required />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={12} md={6}>
            <label htmlFor="streetNumber" className="form-label">Street Number</label>
            <input type="text" className="form-control" id="streetNumber" name="streetNumber" value={formData.streetNumber} onChange={handleInputChange} placeholder="Enter street number" required />
          </Col>
          <Col xs={12} md={6}>
            <label htmlFor="zipCode" className="form-label">Zip Code</label>
            <input type="text" className="form-control" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleInputChange} placeholder="Enter zip code" required />
          </Col>
          </Row>
        <div className='button-container2'>
          <Button variant="primary" type="submit" className="btn btn-primary btn-lg">
            Update Profile
          </Button>
          <Button variant="danger" onClick={handleDeleteProfile} className="btn btn-danger btn-lg">
            Delete Profile
          </Button>
        </div>
      </form>
    </>
  )
}

export default EditProfile
