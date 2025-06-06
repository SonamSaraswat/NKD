
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Clothes from './pages/Clothes/Clothes'
import Paints from  './pages/Paints/Paints'
import Hardware from './pages/Hardware/Hardware'
import Grocery from './pages/Grocery/Grocery'
import ContactUs from './pages/ContactUs/ContactUs'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'


const App = () => {

  const [showLogin, setShowLogin]=useState(true);
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className="app">

      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Clothes' element={<Clothes/>}/>
        <Route path='/Paints' element={<Paints/>}/>
        <Route path='/Hardware' element={<Hardware/>}/>
        <Route path='/Grocery' element={<Grocery/>}/>
        <Route path='/ContactUs' element={<Contact-us/>}/>
        <Route path='/PlaceOrder' element={<PlaceOrder/>}/>

      </Routes>
      </div>
      <Footer/>

    </>
  )
}

export default App