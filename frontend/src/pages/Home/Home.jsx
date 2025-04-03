import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Products from '../../components/Products/Products'
import TopPicks from '../../components/TopPicks/TopPicks'
import ColorInspo from '../../components/ColorInspo/ColorInspo'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <ExploreMenu/>
        <Products/>
        <TopPicks/>
        <ColorInspo/>
        

    </div>
  )
}

export default Home