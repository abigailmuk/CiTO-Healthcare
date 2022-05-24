import React from 'react'
import CareHomeImage1 from "../../../images/carehome3.png"
import CareHomeImage2 from "../../../images/carehome2.png"
import { YourShifts, ShiftContainer, CareHomeImage, Detail, Title, SubTitle, AllShifts } from './PreviousShiftsElements'

const PreviousShifts = () => {
  return (
    <YourShifts>
    <ShiftContainer>
      <CareHomeImage>
        <img src={CareHomeImage1} alt="" />
      </CareHomeImage>
      <Detail>
        <Title>Ellesmere House Care Home</Title>
        <SubTitle>Night Shift</SubTitle>
      </Detail>
    </ShiftContainer>
    <ShiftContainer>
      <CareHomeImage>
        <img src={CareHomeImage2} alt="" />
      </CareHomeImage>
      <Detail>
        <Title>Garside House Nursing Home</Title>
        <SubTitle>All Day Shift </SubTitle>
      </Detail>
    </ShiftContainer>
    <ShiftContainer>
      <CareHomeImage>
        <img src={CareHomeImage2} alt="" />
      </CareHomeImage>
      <Detail>
        <Title>Garside House Nursing Home</Title>
        <SubTitle>All Day Shift </SubTitle>
      </Detail>
    </ShiftContainer>
    <AllShifts>See all Shifts</AllShifts>
  </YourShifts>
  )
}

export default PreviousShifts