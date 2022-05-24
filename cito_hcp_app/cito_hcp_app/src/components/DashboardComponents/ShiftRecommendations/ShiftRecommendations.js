import React from 'react'
import Badge from "../Badge/Badge";
import CareHomeImage1 from "../../../images/carehome6.png";
import { RecommendShift, CardContent, Detail, InfoContainer, CareHomeImage, Info, InfoName, InfoUpdate, Title, ShiftInfo, ShiftPatternContainer, ShiftPattern } from './ShiftRecommendationsElements'

const ShiftRecommendations = () => {
  return (
    <RecommendShift>
      <CardContent>
        <Detail>
          <InfoContainer>
            <CareHomeImage>
              <img src={CareHomeImage1} alt="" />
            </CareHomeImage>
            <Info>
              <InfoName>Garside House Nursing Home</InfoName>
              <InfoUpdate>Updated 10m ago</InfoUpdate>
            </Info>
          </InfoContainer>
          <Badge content="General Nurse" />
        </Detail>
        <Title>
        Adult Nurse | All Day Shift | 08:00 - 20:00 
        </Title>
        <ShiftInfo>
        October 3, 2020
        </ShiftInfo>
        <ShiftPatternContainer>
          <ShiftPattern>08:00 - 20:00</ShiftPattern>
          <Badge content="All Day" clean />
        </ShiftPatternContainer>
      </CardContent>
      <CardContent>
        <Detail>
          <InfoContainer>
            <CareHomeImage>
              <img src={CareHomeImage1} alt="" />
            </CareHomeImage>
            <Info>
              <InfoName>Garside House Nursing Home</InfoName>
              <InfoUpdate>Updated 10m ago</InfoUpdate>
            </Info>
          </InfoContainer>
          <Badge content="General Nurse" />
        </Detail>
        <Title>
        Adult Nurse | All Day Shift | 08:00 - 20:00 
        </Title>
        <ShiftInfo>
        October 3, 2020
        </ShiftInfo>
        <ShiftPatternContainer>
          <ShiftPattern>08:00 - 20:00</ShiftPattern>
          <Badge content="All Day" clean />
        </ShiftPatternContainer>
      </CardContent>
    </RecommendShift>
  )
}

export default ShiftRecommendations