import React, { useState } from 'react'
import Sidebar from '../components/SideBar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Footer from '../components/Footer'

import Map from '../components/Map/Map'

import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Review from '../components/Review'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>  
      <HeroSection />
      <InfoSection {...homeObjOne}/> 
      <InfoSection {...homeObjTwo}/> 
      <Review />
      <Map />
      <InfoSection {...homeObjThree}/> 
      <Footer />

    </>
  )
}

export default Home