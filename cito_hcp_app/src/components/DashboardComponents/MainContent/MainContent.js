import React from 'react'
import { Container, SubContainer, SectionOne, ColumnOne1, ColumnTwo1, TitleText, SectionTwo, ColumnOne2, TimesheetsContainer, ColumnTwo2  } from './MainContentElements'
import Navbar from '../Navbar/Navbar'
import Earnings from '../Earnings/Earnings'
import Info from '../Info/Info'
import JoinSlack from '../JoinSlack/JoinSlack'
import ShiftRecommendation from '../ShiftRecommendations/ShiftRecommendations'
import PreviousShifts from '../PreviousShifts/PreviousShifts'
import Timesheets from '../Timesheets/Timesheets'

const MainContent = () => {
  return (
    <Container>
      <Navbar />
      <SubContainer>
        <SectionOne>
          <ColumnOne1>
            <Earnings />
            <Info />
          </ColumnOne1>
          <ColumnTwo1>
            <TitleText>Your Shifts</TitleText>
            <PreviousShifts />
          </ColumnTwo1>
        </SectionOne>
        <SectionTwo>
          <ColumnOne2>
            <TimesheetsContainer>
              <TitleText>Recent Timesheets</TitleText>
              <Timesheets />
            </TimesheetsContainer>
            <JoinSlack />
          </ColumnOne2>
          <ColumnTwo2>
            <TitleText>More Shifts</TitleText>
            <ShiftRecommendation />
          </ColumnTwo2>
        </SectionTwo>
      </SubContainer>
    </Container>
  )
}

export default MainContent