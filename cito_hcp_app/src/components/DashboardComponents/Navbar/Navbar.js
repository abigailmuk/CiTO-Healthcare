import React from 'react'
import { FiSearch } from "react-icons/fi"
import { NavbarContainer, Text, Icon, Input, InputContainer} from './NavbarElements'

const Navabar = () => {
  return (
    <NavbarContainer>
      <Text>
        Good morning,
        <span> Registered Nurse</span>
      </Text>
      <InputContainer>
        <Icon>
          <FiSearch />
        </Icon>
        <Input type="text" placeholder="Search for Shifts" />
      </InputContainer>
    </NavbarContainer>
  )
}

export default Navabar