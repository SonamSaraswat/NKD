import React from 'react'
import './ExploreMenu.css'

const ExploreMenu = () => {
  return (
    <div className='explore-menu'>
        <h1 className='explore-menu-heading'>Find What you are Looking For</h1>
        <p className='explore-menu-text'>Whether You're Looking For Home Paints, Hardware Items, Clothes, Grocery Items or Colour Recommendations, Nukad Ki Dukan Is Your One-Stop Destination!</p>
        <div className="explore-menu-list">
            <button className='explore-menu-items'>
              <a href='#color-inspo'>Color Inspo </a></button>
            <button className='explore-menu-items'>
              <a href='#footer'>Connect</a></button>
            <button className='explore-menu-items'>
              <a href='#top-picks'>Top Items </a></button>
        </div>


    </div>
  )
}

export default ExploreMenu