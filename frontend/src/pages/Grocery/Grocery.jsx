import React from 'react'
import './Grocery.css'
import { assets } from '../../assets/assets'

const Grocery = () => {
  return (
    <div className='clothes'>
         <div className="clothes-content">
           <img src={assets.oops}/>
           <p>
             We are Launching it Soon!
             <br/>
             Soon, U will get to see our collection and order your favourites.
           </p>
         </div>
   
       </div>
  )
}

export default Grocery