/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import RecommendedFeed from './Dashboard/RecommendedFeed/RecommendedFeed'
import CategoryFeed from './Dashboard/CategoryFeed/CategoryFeed'
import Cart from './Dashboard/Cart.jsx'
import Welcome from './Dashboard/Welcome.jsx'
import ViewProfile from './Dashboard/ViewProfile.jsx'

const Dashboard = ({ searchResults, selectedComponent, onButtonClick, onSignUp, onSignIn, isSignedIn, setIsSignedIn, userData, products, handleLogout }) => {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist'))
    if (storedWishlist) {
      setWishlist(storedWishlist)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
    console.log("Wishlist:", wishlist)
  }, [wishlist])

  const handleCart = (product, quantity) => {
    const existingItemIndex = cart.findIndex(item => item.product_id === product.product_id)

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart]
      updatedCart[existingItemIndex].quantity += quantity
      if (updatedCart[existingItemIndex].quantity <= 0) {
        updatedCart.splice(existingItemIndex, 1)
      }
      setCart(updatedCart)
    } else {
      const updatedCart = [...cart, { ...product, quantity }]
      setCart(updatedCart)
    }
  }

  const handleWishlist = (product) => {
    const isAlreadyInWishlist = wishlist.some(item => item.product_id === product.product_id)
    if (isAlreadyInWishlist) {
      const updatedWishlist = wishlist.filter(item => item.product_id !== product.product_id)
      setWishlist(updatedWishlist)
    } else {
      setWishlist([...wishlist, product])
    }
  }

  return (
<div className="dashboard">
      {(selectedComponent === 'home' || !selectedComponent) && (
        <>
          <RecommendedFeed handleCart={handleCart} handleWishlist={handleWishlist} products={products} />
          <CategoryFeed handleCart={handleCart} wishlist={wishlist} setWishlist={setWishlist} products={products} searchResults={searchResults} />
        </>
      )}
      {selectedComponent === 'login' && !isSignedIn && (
        <Welcome onButtonClick={onButtonClick} onSignUp={onSignUp} onSignIn={onSignIn} isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} userData={userData} handleLogout={handleLogout} />
      )}
      {isSignedIn && selectedComponent === 'login' && <ViewProfile userData={userData} handleLogout={handleLogout}/>}
      {selectedComponent === 'cart' && <Cart cart={cart} />}
    </div>
  )
}

export default Dashboard
