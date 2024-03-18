import React from 'react'
import './App.css';
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header className="header" />
      <div className="container">
        <Dashboard className="dashboard" />
      </div>
      <Footer className="footer" />
    </div>
  )
}

export default App
