import React , {useState, useEffect} from 'react'
import './Products.css'
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Products = () => {

  const [index, setIndex]=useState(0);

  const Images=[assets.product, assets.grocery, assets.hardware]

  const prevbtn=()=>{
    setIndex(index === 0 ? Images.length - 1 : index - 1);
    
  }
  const nextbtn=()=>{
    setIndex(index === Images.length - 1 ? 0 : index + 1);
   
  }
  useEffect(() => {
    const interval = setInterval(() => {
        nextbtn(); // Move to the next image
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
 // Cleanup when component unmounts
 const handleImageLoad = () => {
  setLoaded(true);
 }
}, [index]);

  return (
    <div className='products'>
        <h1 className='products-heading'>Products We Offer!</h1>
        <div className="products-container">
            <ul className="products-lists">
                <li className="products-lists-items"> <Link to='/Paints'>Paints </Link></li>
                <li className="products-lists-items"> <Link to='/Hardware'>Hardware</Link></li>
                <li className="products-lists-items"> <Link to='/Clothes'> Clothes </Link></li>
                <li className="products-lists-items"><Link to='/Grocery'>Grocery </Link></li>
            </ul>
            <div className="products-images">
              <img src={Images[index]} alt="products"/>
            

            </div>
        </div>


    </div>
  )
}

export default Products