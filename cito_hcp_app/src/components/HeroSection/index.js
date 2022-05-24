import React, { useState } from 'react'
import Video from '../../videos/videonurses.mp4'
import { Button } from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight  } from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false) 

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <>
        <HeroContainer id='home'>
            <HeroBg>
              <VideoBg autoPlay loop muted src={Video} type='videonurses/mp4'/>
            </HeroBg>
            <HeroContent> 
              <HeroH1>Care Homes Pay Less & Nurses Earn More!</HeroH1>
              <HeroP>
                Cito – Health Care Professionals is an online platform designed to connect Care Homes to independent Registered Nurses (RNs).
              </HeroP>
              <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                primary='true'
                dark='true'
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true'
                 offset={-80}>
                  Get started{hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
              </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    </>
  )
}

export default HeroSection
