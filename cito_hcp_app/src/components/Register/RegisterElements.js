import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    min-height: 2000px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #0454A4;
    
    
    // linear-gradient(
    //     108deg, 
    //     rgba(1, 147, 86, 1) 0%,
    //     rgba(10, 201, 122, 1) 100%
    // );
`

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;

    }
`

export const Icon = styled(Link)`
    margin-left: 32px; 
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;
    width: 800px;
    padding-bottom: 50px;
    font-family:'Bebas Neue', cursive;
    
    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`
export const RegisterIcon = styled.img`
    height: 160px;
    width: 160px; 
    margin: 0 auto;
    align-items: center;
    margin-bottom: 50px;
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;

    }
`

export const Form = styled.form`
    background: #172A3A;
    max-width: 600px;
    height: auto; 
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }

`
export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 48px; 
    font-weight: 400;
    text-align: center;
    font-family:'Bebas Neue', cursive;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    color: #fff;
    font-size: 22px; 

`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px; 
    border: none;
    border-radius: 4px;

`

export const FormButton = styled.button`
    background: #04AA6D;
    padding: 16px 0;
    border: none; 
    border-radius: 4px; 
    color: #fff;
    font-size: 20px;
    cursor: pointer;

`

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 20px;

`

export const SignInLink = styled(Link)`
    color: #04AA6D; 
    text-decoration: none; 
    cursor: pointer;

    &.hover {
        color: #F19A3E;
    }
`;