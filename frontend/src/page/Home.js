import React from 'react'
import Card from '../component/Card'
import Carousel from '../component/Carousel'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import "../App.css"
// import { useLocation } from 'react-router-dom'

const Home = () => {
  // const location = useLocation()
  return (
    <div>
      {/* <input type='text' value={location.state.email}/> */}
        <Navbar/>
        <Carousel/>
        <Card/>
        <Footer/>
    </div>
  )
}

export default Home