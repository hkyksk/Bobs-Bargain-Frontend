import { useState, useEffect } from 'react'
import { BrowserRouter as Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import data from './products.json'

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState(null)
  const [products, setProducts] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [userData, setUserData] = useState({
    username: 'johndoe123',
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Main Street',
    streetNumber: '123',
    zipCode: '12345',
    email: 'john.doe@example.com',
  })
  
  const handleLogout = () => {
    localStorage.clear()
    setIsSignedIn(prevIsSignedIn => !prevIsSignedIn)
    console.log('User logged out! localStorage:', localStorage.getItem('token'), 'isSignedIn:', !isSignedIn)
  }
  
  
  useEffect(() => {
    setProducts(data)
    setSearchResults(data)
  }, [])

  const handleFooterButtonClick = (component) => {
    setSelectedComponent(component)
  }

  const handleSearch = (query) => {
    if (!query) {
      setSearchResults(products)
      return
    }

    const filteredProducts = products.filter((product) => {
      const {
        product_category,
        product_category_type,
        product_category_type_brand,
        product_category_type_brand_description,
        product_category_type_brand_information,
      } = product
      return (
        product_category.toLowerCase().includes(query) ||
        product_category_type.toLowerCase().includes(query) ||
        product_category_type_brand.toLowerCase().includes(query) ||
        product_category_type_brand_description.toLowerCase().includes(query) ||
        product_category_type_brand_information.toLowerCase().includes(query)
      )
    })

    setSearchResults(filteredProducts)
  }

  const handleSignUp = async (formData) => {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to sign up')
      }

      console.log('User signed up successfully!')
    } catch (error) {
      console.error('Error occurred while signing up:', error)
    }
  }

  const handleSignIn = async (formData) => {
    try {
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to sign in')
      }

      const data = await response.json()
      const token = data.token

      localStorage.setItem('token', token)

      setIsSignedIn(true)
      fetchUserData(token)

      console.log('User signed in successfully!')
    } catch (error) {
      console.error('Error occurred while signing in:', error)
    }
  }

  const fetchUserData = async (token) => {
    try {
      const response = await fetch('/api/userdata', {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      })

      if (!response.ok) {
        throw new Error('Failed to fetch user data')
      }

      const userData = await response.json()

      setUserData(userData)
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }

  return (
    
    <Routes>
      <Header className="header" onSearch={handleSearch} />
      <Dashboard
        className="dashboard"
        products={products}
        searchResults={searchResults}
        selectedComponent={selectedComponent}
        onSignUp={handleSignUp}
        onSignIn={handleSignIn}
        isSignedIn={isSignedIn}
        setIsSignedIn={setIsSignedIn}
        userData={userData} 
        handleLogout={handleLogout}
      />
      <Footer className="footer" onButtonClick={handleFooterButtonClick} />
    </Routes>
  )
}

export default App
