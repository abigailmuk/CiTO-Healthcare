import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import ScrollToTop from '../components/ScrollToTop'
import InfoSection from '../components/InfoSection'
import Footer from '../components/Footer'
import { NewsOne, homeObjTwo } from '../components/InfoSection/Data'
import Shift from '../components/PostShifts'
import EditShift from '../components/EditShifts'

const CareHomesPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


  return (
    <>
      
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>  
      <InfoSection {...homeObjTwo}/> 
      <EditShift />
      <Shift />
      
      <InfoSection {...NewsOne}/> 
      <Footer />
    </>
    

  )
}

export default CareHomesPage