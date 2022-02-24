import styled, {keyframes } from "styled-components";

interface ClickProps {
    click?: boolean;
}

export const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
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
`;