import React from 'react'
import Badge from '../Badge/Badge'
import { TimesheetsContainer, CardContent, Invoice, Info, CareHome, TextContainer, Title, SubTitle, Container, Earnings } from './TimesheetsElements'
import CareHomeImage1 from "../../../images/carehome10.png"
import CareHomeImage2 from "../../../images/carehome3.png"

const Timesheets = () => {
  return (
    <TimesheetsContainer>
    <CardContent>
      <Invoice>
        <Info>
          <CareHome>
            <img src={CareHomeImage1} alt="" />
          </CareHome>
          <TextContainer>
            <Title>Berkeley Home Care</Title>
            <SubTitle>All Day Shift</SubTitle>
          </TextContainer>
        </Info>
        <Container>
          <Badge content="Paid" paid />
          <Earnings>£ 336</Earnings>
        </Container>
      </Invoice>
      <Invoice>
        <Info>
          <CareHome>
            <img src={CareHomeImage2} alt="" />
          </CareHome>
          <TextContainer>
            <Title>Ellesmere House Care Home</Title>
            <SubTitle>All Day Shift</SubTitle>
          </TextContainer>
        </Info>
        <Container>
          <Badge content="Late" late />
          <Earnings>£ 384</Earnings>
        </Container>
      </Invoice>
    </CardContent>
  </TimesheetsContainer>
  )
}

export default Timesheets