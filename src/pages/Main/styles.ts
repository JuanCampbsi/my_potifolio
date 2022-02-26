import styled, {keyframes } from "styled-components";

interface ClickProps {
    click?: boolean;
}

export const MainContainer = styled.div`
  background: #1A202C;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2, h3, h4, h5, h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

export const Container = styled.div`
  padding: 2rem;
`;


export const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`;

export const Center = styled.button<ClickProps>`
  position: absolute;
  top: ${(props: any) => (props.click ? "85%" : "50%")};
  left: ${(props: any) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }
  & > :last-child {
    display: ${(props: any) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
  @media only screen and (max-width: 30em){    
    position: absolute;
    width: 40px;
    height: 40px;
    width: ${(props: any) => (props.click ? "10%" : "25%")};
    height: ${(props: any) => (props.click ? "10%" : "25%")};
    left: ${(props: any) => (props.click ? "85%" : "50%")};
  }
  @media only screen and (max-width: 50em){
    position: absolute; 
    width: ${(props: any) => (props.click ? "10%" : "25%")};
    height: ${(props: any) => (props.click ? "10%" : "25%")};
    left: ${(props: any) => (props.click ? "85%" : "50%")};
  }
`;

export const DarkDiv = styled.div<ClickProps>`
  position: absolute;
  top: 0;
  background-color: #ffff;
  bottom: 0;
  right: 50%;
  width: ${(props: any) => (props.click ? "50%" : "0%")};
  height: ${(props: any) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;

  @media (max-width: 50em){
    position: absolute;
    right: 0px;   
    width: ${(props: any) => (props.click ? "100%" : "0%")};
    height: ${(props: any) => (props.click ? "50%" : "0%")};
    transition: width 0.5s ease 0s, height 1s ease 0.5s;
  }
`;

export const LogoComponent = styled.h1<ClickProps>`
  display: inline;
  font-family: 'Pacifico',cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index:3;
  color: ${(props: any) => (props.click ? "#1A202C" : "#ffff 3s")};
  font-size: 32px;

  @media only screen and (max-width: 50em){
    position: absolute;
    font-size: 24px;
  }
`