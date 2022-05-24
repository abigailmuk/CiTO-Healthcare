import React from 'react'
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri"
import { FaWallet } from "react-icons/fa"
import { AiOutlinePieChart } from "react-icons/ai"
import NurseImage1 from "../../../images/login.png"
import { Container, ProfileContainer, NurseImage, Name, LinksContainer, Links, Link, ContactContainer, ContactLink } from '../Sidebar/SidebarElements'
import Badge from '../Badge/Badge'


const Sidebar = () => {
  return (
    <Container>
    <ProfileContainer>
      <NurseImage src={NurseImage1} />
      <Name>Registered Nurse</Name>
      <Badge content="General Nurse" />
    </ProfileContainer>
    <LinksContainer>
      <Links>
        <Link>
          <RiHomeLine />
          <h3>Dashboard</h3>
        </Link>
        <Link>
          <RiFileCopyLine />
          <h3>Shifts</h3>
        </Link>
        <Link>
          <FaWallet />
          <h3>Timesheets</h3>
        </Link>
        <Link>
          <AiOutlinePieChart />
          <h3>Reports</h3>
        </Link>
      </Links>
      <ContactContainer>
        <span>Having troubles?</span>
        <ContactLink to="/contactus">Contact Us</ContactLink>
      </ContactContainer>
    </LinksContainer>
  </Container>
  )
}

export default Sidebar