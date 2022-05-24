import React from 'react'
import { Container, FormWrap, Icon, LoginIcon, FormContent, Form, FormH1, FormLabel, FormButton, FormInput, CheckBoxContainer, FormInputCheckBox, Text, RegisterLink } from './LoginElements'
import Icon1 from '../../images/login.png'
const LogIn = () => {
  return (
    <Container>
        <FormWrap>
        <Icon to="/"><h1>CITO Healthcare Professionals</h1> </Icon>
            <FormContent> 
                <Form action="#">
                  <LoginIcon src={Icon1} />
                    <FormH1>Log in to your account</FormH1>
                    <FormLabel htmlFor='for'> Email</FormLabel>
                        <FormInput type='email' required/>
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required/> 
                        <FormButton type='submit'>Log In</FormButton>
                        <CheckBoxContainer>
                        <FormInputCheckBox type='checkbox'/> <FormLabel htmlFor='for'>Remember me? </FormLabel>
                        </CheckBoxContainer>
                        <Text>Forgotten Password?...</Text>
                        <Text>Not a member yet? <RegisterLink to="/register">  Register Now</RegisterLink>...</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
  )
}

export default LogIn