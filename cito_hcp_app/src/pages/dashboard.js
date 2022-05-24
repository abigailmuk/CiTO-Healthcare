import React from 'react'
import styled from 'styled-components'
import Sidebar from "../components/DashboardComponents/Sidebar/Sidebar"
import MainContent from "../components/DashboardComponents/MainContent/MainContent"

const dashboard = () => {
  return (
    <Container>
      <Sidebar />
      <MainContent />
    </Container>
  )
}

const Container = styled.div`
  height: 1000px;
  padding: 30px;
  display: flex;
  font-family:'Bebas Neue', cursive;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 820px) and (max-width: 1080px) {
    flex-direction: column;
    height: auto;
    
  }
`;
export default dashboard