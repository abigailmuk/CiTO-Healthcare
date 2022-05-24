import styled from "styled-components"


export const JoinChannel = styled.div`
  background-color: #162349;
  height: 50%;
  margin-top: 6.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    height: max-content;
    width: 80%;
  }
`;

export const CardContent = styled.div`
  margin: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Slack = styled.div`
  display: flex;
`;

export const SlackLogo = styled.div`
  margin-right: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: white;
    height: 4rem;
    width: 4em;
  }
`;

export const SlackText = styled.div`
  color: white;
`;

export const SlackHead = styled.h2`
  font-weight: 500;
`;
export const SlackFoot = styled.h3`
  color: #e4e4e4;
  font-weight: normal;
`;
export const SlackJoin = styled.button`
  background-color:#04AA6D;
  border: none;
  outline: none;
  padding: 1rem 2rem;
  color: white;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;
