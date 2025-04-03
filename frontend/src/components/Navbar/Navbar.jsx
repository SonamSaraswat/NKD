import React, { useState, useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu]=useState("Home")
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <div className='navbar'>
        <Link to='/'> <img className='logo' src={assets.NKDlogo} alt="logo"></img></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu('Home')} className={menu==='Home'?'active':""}>Home</Link>
            <Link to='/Paints' onClick={()=>setMenu('Paints')} className={menu==='Paints'?'active':""}>Paints</Link>
            <Link to='/Clothes' onClick={()=>setMenu('Clothes')} className={menu==='Clothes'?'active':""}>Clothes</Link>
            <Link to='/Hardware' onClick={()=>setMenu('Hardware')}className={menu==='Hardware'?'active':""}>Hardware</Link>
            <Link to='/Grocery' onClick={()=>setMenu('Grocery')}className={menu==='Grocery'?'active':""}>Grocery</Link>
            <a href='#footer' onClick={()=>setMenu('Contact-us')}className={menu==='Contact-us'?'active':""}>Contact-us</a>
        </ul>
        <div className="navbar-right">
          
           
            <div className="navbar-search-icon">
            <Link to='/Cart'><img src={assets.basket_icon} alt="basket"/></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign In</button>
        </div>

    </div>
  )
}

export default Navbar