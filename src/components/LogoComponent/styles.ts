import styled from "styled-components";

export interface ClickProps {
  click?: boolean;
}

export const Container = styled.h1<ClickProps>`
  display: inline;
  position: fixed;
  left: 2rem;
  top: 1rem;
  z-index: 3;
  color: ${(props: any) => (props.click ? "#1A202C" : "#ffff 3s")};
  font-size: 35px;

  @media only screen and (max-width: 50em) {
    position: absolute;
    font-size: 24px;
    top: 3rem;
  }
`;