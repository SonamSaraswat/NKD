import React from 'react'
import './CustomerTestimonals.css'
import { assets } from '../../assets/assets'

const CustomerTestimonals = () => {
  return (
    <div className='customer-testimonials'>
        <h2>Customer Testimonials</h2>
        <div className="customer-pics">
            <div className="image-content">
            <img src={assets.customers}/>
            <p>500+ Customers</p>
            </div>
            <div className="image-content">
            <img src={assets.city} alt="" />
            <p>5+ Cities</p>
            </div>
            <div className="image-content">
            <img src={assets.client}/>
            <p>50+ Clients</p>
            </div>
        </div>


    </div>
  )
}

export default CustomerTestimonals