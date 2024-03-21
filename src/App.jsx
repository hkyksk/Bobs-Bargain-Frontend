import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState(null)
  const handleFooterButtonClick = (component) => {
    setSelectedComponent(component)
  }

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Fetching products...')
        const response = await fetch('/db/products.json')
        console.log('Received response:', response)
        const data = await response.json()
        console.log('Data:', data)
        setProducts(data)
        console.log('Products set:', products)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [])

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

  return (
    <Router>
        <Header className="header" />
        <Dashboard className="dashboard" products={products} selectedComponent={selectedComponent} onSignUp={handleSignUp} />
        <Footer className="footer" onButtonClick={handleFooterButtonClick} />
    </Router>
  )
}

export default App
