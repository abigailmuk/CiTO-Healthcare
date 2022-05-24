import React, { useState }  from 'react'
import Map from '../components/Map/Map'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import ScrollToTop from '../components/ScrollToTop'
import InfoSection from '../components/InfoSection'
import Footer from '../components/Footer'
import { homeObjOne } from '../components/InfoSection/Data'
import Dashboard from './dashboard'
import Shift from '../components/ShiftPosts'
//import Iframe from 'react-iframe'

const NursesPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
/*     const location = {
      address: '1600 Amphitheatre Parkway, Mountain View, california.',
      lat: 37.42216,
      lng: -122.08427,
    } */
    

  return (
    <>
      
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>  
      <InfoSection {...homeObjOne}/> 
      {/* <Iframe url="https://www.google.com/maps/d/u/0/embed?mid=1Y-j3ay3BDAbnZxLciecbKIjMb2R8wwTz&ehbc=2E312F"
        width="100%"
        height="500px"
        display="initial"
        position="relative"/> */}
      {/* <Map  location={location} zoomLevel={17} /> */}
      <Map />
      <Shift />
      <Dashboard />
      
      <Footer />
    </>
    

  )
}

export default NursesPage
