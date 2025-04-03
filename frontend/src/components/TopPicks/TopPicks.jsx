import React, {useContext} from 'react'
import './TopPicks.css'
import { StoreContext } from '../../Context/StoreContext'
import TopPicksItems from '../TopPicksItems/TopPicksItems'


const TopPicks = () => {

  const {products_lists}=useContext(StoreContext)
  return (
    <div className='top-picks' id='top-picks'>
        <h2 className='top-products'>Top Products</h2>
        <hr className='breaker'/>
        <div className="top-products-list">
          {products_lists.map((item,index)=>{
            return <TopPicksItems key={index} id={item.id} name={item.name} quantity={item.quantity} price={item.price}  image={item.image} />
          })

          }
            
        </div>

    </div>
  )
}

export default TopPicks