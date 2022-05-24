import React from 'react'
import { ReviewContainer, ReviewH1, ReviewWrapper, ReviewCard, ReviewIcon, ReviewH2, ReviewP, ReviewDate} from './ReviewElements'
import Icon1 from '../../images/propic1.png'
import Icon2 from '../../images/propic2.png'
import Icon3 from '../../images/propic3.png'

const Review = () => {
  return (
    <ReviewContainer id="review"> 
        <ReviewH1>Our Reviews</ReviewH1>
            <ReviewWrapper>
                <ReviewCard>
                    <ReviewIcon src={Icon1} />
                    
                    <ReviewP>Will definitely be using this all the time. I loved how I could connect with different care homes everywhere.</ReviewP>
                    <ReviewH2>Sarah Banks</ReviewH2>
                    <ReviewDate>January 4, 2020</ReviewDate>
                </ReviewCard>

                <ReviewCard>
                    <ReviewIcon src={Icon2} />
                    <ReviewP> Spectacular service! Very easy to use. Efficient and effective, I was able to select shifts which were accessible. </ReviewP>
                    <ReviewH2>Antony Rogers</ReviewH2>
                    <ReviewDate>April 7, 2020</ReviewDate>
                </ReviewCard>

                <ReviewCard>
                    <ReviewIcon src={Icon3} />
                    <ReviewP>I really enjoyed using this app. It allowed me to fill in the gaps in my schedule which my agencies couldn't.</ReviewP>
                    <ReviewH2>Georgina Sparks</ReviewH2>
                    <ReviewDate>October 3, 2020</ReviewDate>
                </ReviewCard>
            </ReviewWrapper>
    </ReviewContainer>
  )
}

export default Review