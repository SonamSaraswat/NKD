import React, { useContext } from 'react'
import './ColorInspo.css'
import { StoreContext } from '../../Context/StoreContext';



const ColorInspo = () => {
    const {images}=useContext(StoreContext)

  return (
    <div>
    <h2 className='heading' id='color-inspo'>Color Combo Inspirations</h2>
    <div className="image-grid-container">
      <div className="image-grid">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`image-${index}`} className="image-item" />
        ))}
      </div>
    </div>
    </div>
  );
}

export default ColorInspo