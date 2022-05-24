import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import ScrollToTop from '../components/ScrollToTop'
import InfoSection from '../components/InfoSection'
import Footer from '../components/Footer'
import { NewsOne, NewsTwo } from '../components/InfoSection/Data'
import Stories from '../components/Stories'
import InfoSection2 from '../components/InfoSection/index2'

const NewsPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


  return (
    <>
      
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>  
      
      <InfoSection2 {...NewsTwo}/>
      
      <Stories />
      <InfoSection {...NewsOne}/> 
      <Footer />
    </>
    

  )
}

export default NewsPage