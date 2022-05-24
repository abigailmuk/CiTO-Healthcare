import styled from "styled-components"

export const RecommendShift = styled.div`
  height: 500px;
  border-radius: 1rem;
  padding: 1rem;
  background-color: white;
  width: 27.5vw;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
  rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 80%;
    margin: 2rem 0;
  }
`;

export const CardContent = styled.div`
  margin: 0.4rem;
  padding-bottom: 20px;
`;

export const Detail = styled.div`
  padding-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.2rem;
    margin-bottom: 1rem;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const CareHomeImage = styled.div`
  margin-right: 1rem;
  img {
    height: 5rem;
    border-radius: 30px;
  }
`;
export const Info = styled.div``;
export const InfoName = styled.h3`
  font-weight: 500;
`;
export const InfoUpdate = styled.h5`
  font-weight: 300;
`;
export const Title = styled.h4`
  font-weight: 500;
`;
export const ShiftInfo = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  color: #3b3b3b;
  margin-bottom: 0.5em;
`;
export const ShiftPatternContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background-color: rgba(146, 166, 255, 0.3);
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 0.4rem;
  }
`;
export const ShiftPattern = styled.div``;
