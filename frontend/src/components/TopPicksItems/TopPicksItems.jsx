import React, { useContext, useState } from 'react'
import './TopPicksItems.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext.jsx'


const TopPicksItems = ({id,name,quantity,price,image}) => {

  const[itemCount, setItemCount]=useState(0);
  const {cartItems, removeFromCart, addToCart}=useContext(StoreContext);
  return (
    <div className='picks-item'>
        <div className="picks-item-img-container">
            <img className='picks-item-image' src={image} alt=""/>
            {!cartItems[id] ? <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
            : <div className="counter">
              <img onClick={()=>addToCart(id)} src={assets.add_icon_green}/>
              {cartItems[id]}
              <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red}/>

            </div>

            }
        </div>
       <div className="picks-item-info">
        <p className='name'>{name}</p>
        <p className='quantity'>{quantity}</p>
        <p className='price'>&#8377;{price}</p>
       </div>


    </div>
  )
}

export default TopPicksItems