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

  return (
    <Router>
      <div className="grid-container">
        <Header className="header" />
        <div className="container">
          <Dashboard className="dashboard" products={products} selectedComponent={selectedComponent} />
        </div>
        <Footer className="footer" onButtonClick={handleFooterButtonClick} />
      </div>
    </Router>
  )
}

export default App;
