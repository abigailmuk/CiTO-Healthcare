import styled from 'styled-components'

export const ReviewContainer = styled.div`
    height: auto; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    padding: 50px;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height:1300px;
    }
`

export const ReviewWrapper = styled.div` 
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr; 
        
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr; 
        padding: 0 20px;
    }

`

export const ReviewCard = styled.div`
    background: #fff;
    display: flex; 
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: auto;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

`

export const ReviewIcon = styled.img`
    height: 160px;
    width: 160px; 
    margin-bottom: 10px;

`

export const ReviewH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
    font-family:'Bebas Neue', cursive;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ReviewH2 = styled.h2`
    font-size: 24px;
    margin-bottom:10px; 
    font-family:'Bebas Neue', cursive;

`

export const ReviewP = styled.p`
    font-size: 1rem;
    text-align: center;

`
export const ReviewDate = styled.p`
    font-size: 10px;
    text-align: center;
    color: grey;
    font-style: italic;
`