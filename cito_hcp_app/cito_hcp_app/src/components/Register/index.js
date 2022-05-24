import React from 'react'
import { Container, FormWrap, Icon, RegisterIcon, FormContent, Form, FormH1, FormLabel, FormButton, FormInput, Text, SignInLink } from './RegisterElements'
import Icon1 from '../../images/login.png'

const Register = () => {
  return (
    <Container>
        <FormWrap>
            <Icon to="/"><h1>CITO Healthcare Professionals</h1> </Icon>
            <FormContent>
                <Form action="#"> 
                        <RegisterIcon src={Icon1} />
                        <FormH1>Register now</FormH1>
                        <FormLabel htmlFor='for'> First Name</FormLabel>
                        <FormInput type='firstname' required/>
                        <FormLabel htmlFor='for'>Last Name</FormLabel>
                        <FormInput type='lastname' required/> 
                        <FormLabel htmlFor='for'> Email</FormLabel>
                        <FormInput type='email' required/>
                        <FormLabel htmlFor='for'>Telephone</FormLabel>
                        <FormInput type='number' required/>
                        <FormLabel htmlFor='for'> NMC PIN</FormLabel>
                        <FormInput type='nmcpin' required/>
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required/> 
                        <FormLabel htmlFor='for'> Confirm Password</FormLabel>
                        <FormInput type='password' required/> 
                        <FormButton type='submit'> Register </FormButton>
                        <Text>Already got an account? <SignInLink to="/login">Log In</SignInLink>...</Text>
                        
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
  )
}

export default Register