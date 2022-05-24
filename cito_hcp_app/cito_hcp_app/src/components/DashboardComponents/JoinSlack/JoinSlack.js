import React from 'react'
import { FaSlack } from "react-icons/fa"
import { JoinChannel, CardContent, Slack, SlackLogo, SlackText, SlackHead, SlackFoot, SlackJoin } from './JoinSlackElements'
const JoinSlack = () => {
  return (
    <JoinChannel>
    <CardContent flex={true}>
      <Slack>
        <SlackLogo>
          <FaSlack />
        </SlackLogo>
        <SlackText>
          <SlackHead>Engage with care homes</SlackHead>
          <SlackFoot>Join slack channel</SlackFoot>
        </SlackText>
      </Slack>
      <SlackJoin>Join Now</SlackJoin>
    </CardContent>
  </JoinChannel>
  )
}

export default JoinSlack