import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    address: '',
    streetNumber: '',
    zipCode: '',
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      username: '',
      firstName: '',
      lastName: '',
      address: '',
      streetNumber: '',
      zipCode: '',
      email: '',
      password: ''
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <Row className="mb-3">
        <Col xs={12} md={6}>
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter email" />
        </Col>
        <Col xs={12} md={6}>
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Enter password" />
        </Col>
      </Row>
      
      <Row className="mb-3">
        <Col xs={12} md={6}>
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleInputChange} placeholder="Enter username" />
        </Col>
        <Col xs={12} md={6}>
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Enter first name" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={12} md={6}>
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Enter last name" />
        </Col>
        <Col xs={12} md={6}>
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleInputChange} placeholder="Enter address" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={12} md={6}>
          <label htmlFor="streetNumber" className="form-label">Street Number</label>
          <input type="text" className="form-control" id="streetNumber" name="streetNumber" value={formData.streetNumber} onChange={handleInputChange} placeholder="Enter street number" />
        </Col>
        <Col xs={12} md={6}>
          <label htmlFor="zipCode" className="form-label">Zip Code</label>
          <input type="text" className="form-control" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleInputChange} placeholder="Enter zip code" />
        </Col>
      </Row>

      <Button variant="primary" type="submit" class="btn btn-primary btn-lg">
        Sign Up
      </Button>
    </form>
  )
}

export default SignUpForm
