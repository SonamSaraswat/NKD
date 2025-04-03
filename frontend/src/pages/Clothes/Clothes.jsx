import React from 'react'
import './Clothes.css'
import { assets } from '../../assets/assets'

const Clothes = () => {
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

export default Clothes