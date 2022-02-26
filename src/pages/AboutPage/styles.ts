import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  background-color: #1A202C;
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
 `;
export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row ;
  justify-content: space-between;

  @media only screen and (max-width: 50em) {
    top: 1rem;
    padding: 2rem; 
  }
`;


export const float = keyframes`
  0% { transform: translateY(-10px) }
  50% { transform: translateY(15px) translateX(15px) }
  100% { transform: translateY(-10px) }
`;
export const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 50em) {
    top: 75%;
    
  }
`;
export const Main = styled.div`
  border: 2px solid #fff;
  color: #fff;
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

export const BoxParticule = styled.div`
    position: absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
    z-index:0;

`
