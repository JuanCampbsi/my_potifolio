import styled, { keyframes } from "styled-components";

export interface SoundProps {
  click?: boolean;
  clicks?: boolean;
}

export const Container = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 16rem;
  top: 2.4rem;
  z-index: 10;

  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.8s;
  }

  @media only screen and (max-width: 50em) {
    position: absolute;
    left: 12rem;
    width: 80px;
    height: 40px;
    top: 3.8rem;
  }
  @media only screen and (max-width: 30em) {
    width: 60px;
    height: 30px;
  }
`;

export const play = keyframes`
    0%{
        transform:scaleY(1);
    }
    50%{
        transform:scaleY(2);
    }
    100%{
        transform:scaleY(1);
    }
    `;
export const Line = styled.span<SoundProps>`
  background-color: ${(props: any) => (props.clicks ? "#1a202c": "#ffff")} ;
  
  border: 1px solid ${(props: any) => (props.clicks ? "#1a202c": "#ffff")};
  animation: ${play} 1s ease infinite;
  animation-play-state: ${(props) => (props.click ? "running" : "paused")};
  height: 1rem;
  width: 2px;
  margin: 0 0.1rem;
`;
