import styled from "styled-components"


export const YourShifts = styled.div`
  height: 240px;
  background-color: white;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
  rgba(0, 0, 0, 0.04) 0px 10px 10px -5px ;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 75%;
    margin-top: 1rem;
  }
`;

export const ShiftContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;
export const CareHomeImage = styled.div`
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
`;
export const Detail = styled.div`
  margin-left: 1rem;
`;
export const Title = styled.h3`
  font-weight: 500;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`;
export const SubTitle = styled.h5`
  font-weight: 300;
`;
export const AllShifts = styled.h5`
  padding: 10px;
  text-align: end;
  color: #6100d4;
  cursor: pointer;
`;