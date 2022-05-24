import React from 'react'
import Badge from '../Badge/Badge'
import { InfoCard, Card, CardContent, Row, Digit, InfoContainer, Title, SubTitle } from './InfoElements'

export const Info = () => {
  return (
    <InfoCard>
    <Card>
      <CardContent>
        <Row>
          <Digit>2</Digit>
          <InfoContainer>
            <Title>Upcomings Shifts</Title>
            <SubTitle>Find out more</SubTitle>
          </InfoContainer>
        </Row>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <Row>
          <Digit>4</Digit>
          <InfoContainer>
            <Title>Pending Shifts</Title>
            <SubTitle>12 this month</SubTitle>
          </InfoContainer>
        </Row>
        <Row justify>
          <Badge content="General" glow />
          <Badge content="Adult" glow />
        </Row>
      </CardContent>
    </Card>
  </InfoCard>
  )
}

export default Info