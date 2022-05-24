import styled from 'styled-components'
import { Link } from 'react-scroll'
export const ShiftContainer = styled.div`
    height: auto; 
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    //align-items: center;
    background: #172A3A;
    // align-items: right;
    padding-bottom: 60px;
    font-family:'Bebas Neue', cursive;

    @media screen and (max-width: 768px) {
        height: auto;
    }

    @media screen and (max-width: 480px) {
        height: auto;
    }
`

export const ShiftWrapper = styled.div` 
    width: auto;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    //align-items: center;
    grid-gap: 16px;
    padding: 0 20px;  

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
    max-height: 500px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
    @media screen and (max-width: 768px) {
        width:300px;
    }

`

export const ShiftIcon = styled.img`
    height: 180px;
    width: 300px; 
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        height: 120px;
        width:250px;
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
    font-size: 24px;
    margin-bottom:10px; 
    text-align: left;
    font-family:'Bebas Neue', cursive;

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



export const ModalContainer = styled.div`
    width: 380px;
    height: 420px;
    border-radius: 12px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding: 25px;
`
  
export const Title = styled.h1`
    display: inline-block;
    text-align: center;
    margin-top: 10px;
    font-family:'Bebas Neue', cursive;
`
  
export const TitleCloseBtn = styled.div`
    display: flex;
    justify-content: flex-end;
`
  
export const ButtonClose = styled.div`
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
`


export const Body = styled.p`
    flex: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
    text-align: center;
`
  
export const ModalOptions = styled.div`
    flex: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`
  
  export const ButtonContinue = styled.div`
    width: 220px;
    height: 50px;
    margin: 10px;
    border: none;
    padding: 12px 18px;
    text-align: center;
    background-color: #04AA6D;
    color: white;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #0454A4;
        color: #FFF;
    }
`
  
  export const ButtonCancel= styled.div`
    width: 150px;
    height: 50px;
    border: none;
    padding: 12px 18px;
    text-align: center;
    background-color: #F19A3E ;
    color: white;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer; 

    &:hover {
        transition: all 0.2s ease-in-out;
        background: crimson;
        color: #FFF;
    }
`

