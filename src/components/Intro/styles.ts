import styled from "styled-components";
import { motion } from "framer-motion";

export const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(to right, #1a202c 50%, #fcf6f4 50%) bottom,
    linear-gradient(to right, #1a202c 50%, #fcf6f4 50%) top;

  border-left: 2px solid #1a202c;
  border-right: 2px solid #fcf6f4;

  background-repeat: no-repeat;
  background-size: 100% 2px;

  z-index: 1;

  @media only screen and (max-width: 800px) {
    width: 70vw;

    flex-direction: row;

    background: linear-gradient(to top, #1a202c 50%, #ffff 50%) 0px 0px / 2px
        100% no-repeat,
      linear-gradient(to bottom, #ffff 50%, #1a202c 50%) 100% 0px !important;

    border-top: 2px solid #1a202c;
    border-bottom: 2px solid #fff;
    border-style: solid none;
    border-image: initial;
  }
`;

export const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 50em) {
    height: 50%;
    width: 50%;

    .pic {
      position: relative;
      left: 50%;
      width: 300px;
      height: 200px;
      margin-top: 50%;
      transform: translate(-50%, 0%);
    }
  }
`;

export const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: #1a202c;
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: rgba(#fcf6f4, 0.6);
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
  @media only screen and (max-width: 50em) {
    height: 50%;
    padding: 0rem;
    margin-top: 3rem;
    margin-left: 2rem;
  }
`;
