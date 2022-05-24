import styled from 'styled-components'
import { Link } from 'react-scroll'
export const ShiftContainer = styled.div`
    height: auto; 
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #172A3A;
    // align-items: right;
    padding-bottom: 60px;


    @media screen and (max-width: 768px) {
        height: auto;
    }

    @media screen and (max-width: 480px) {
        height: auto;
    }
`

export const ShiftWrapper = styled.div` 
    width: auto;
    margin: 0 700px 0 700px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 20px 20px;  

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr; 
        margin: 0 auto;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr; 
        padding: 0 20px;
    }

`

export const ShiftCard = styled.div`
    background: #fff;
    display: flex; 
    flex-direction: column;
    justify-content: flex-start;
    //align-items: center;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    width: 1000px;
    height: auto;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
    
    @media screen and (max-width: 768px) {
        width: max-content;
    }

`

export const ShiftIcon = styled.img`
    height: 180px;
    width: 180px; 
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        height: 120px;
        width:120px;
    }

`

export const ShiftH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-top: 82px;
    margin-bottom: 64px;
    text-align: center;
    font-family:'Bebas Neue', cursive;  

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ShiftH2 = styled.h2`
    font-size: 1rem;
    margin-bottom:10px; 
    text-align: left;

`

export const ShiftP = styled.p`
    font-sixe: 1rem;
    text-align: left;
`

export const Button = styled(Link)`
    width: 180px;
    text-align: center;
    border-radius: 10px;
    background: #04AA6D;
    padding: 12px 18px;
    color: #FFF;
    font-size: 20px;
    cursor: pointer;
    
    margin-top: 10px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #0454A4;
        color: #FFF;
    }
 
`
export const ButtonSmallToggle = styled.button`
    width: 120px;
    text-align: center;
    border-radius: 10px;
    background: darkgray;
    padding: 10px 20px;
    margin: 10px;
    color: #FFF;
    font-size: 20px;
    cursor: pointer;
    
    margin-top: 10px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #04AA6D;
        color: #FFF;
    }

`

export const ButtonSmall = styled.button`
    width: 180px;
    text-align: center;
    border-radius: 10px;
    background: #04AA6D;
    padding: 10px 20px;
    margin: 10px;
    color: #FFF;
    font-size: 20px;
    cursor: pointer;
    
    margin-top: 10px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #0454A4;
        color: #FFF;
    }

`
export const ButtonSmallDelete = styled.button`
    width: 120px;
    text-align: center;
    border-radius: 10px;
    background: #F19A3E;
    padding: 10px 12px;
    margin: 10px;
    color: #FFF;
    font-size: 20px;
    cursor: pointer;
    
    margin-top: 10px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: crimson;
        color: #FFF;
    }

`

export const Form = styled.form`
//background: #172A3A;
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

export const InputGroup = styled.form`
    border: none;
    border-radius: 4px;
    font-size: 18px;
    height: 70px;


`
