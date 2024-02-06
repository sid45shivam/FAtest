import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer.jsx'
import Card from '../components/Card.jsx'
import Carousal from '../components/Carousal.jsx'

export default function Home() {
  return (
    <>
        <div>
          <Navbar/>
        </div>
        <div>
          <Carousal/>
        </div>
        <div className='m-3'>
          <Card/>
        </div>
        <div>
          <Footer/>
        </div>
    </>
  )
}
