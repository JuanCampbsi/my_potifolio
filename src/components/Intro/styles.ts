import styled from "styled-components";
import { motion } from "framer-motion";

export const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 70vh;
  display: flex;

  background: linear-gradient(to right, #1a202c 50%, #fcf6f4 50%) bottom,
  linear-gradient(to right, #1a202c 50%, #fcf6f4 50%) top;

  border-left: 2px solid #1a202c;
  border-right: 2px solid #fcf6f4;

  background-repeat: no-repeat;
  background-size: 100% 2px;

  z-index: 1;

  @media only screen and (max-width: 50em) {
    height: 70vh;
    width: 70vw;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;

    background: linear-gradient(to top, #1a202c 50%, #ffff 50%) 0px 0px / 2px
        100% no-repeat,
    linear-gradient(to bottom, #ffff 50%, #1a202c 50%) 100% 0px !important;

    border-top: 2px solid #1a202c;
    border-bottom: 2px solid #fff;
    border-style: solid none;
    border-image: initial;
  }
  @media only screen and (max-width: 50em) {
    height: 50%;
    width: 50%;
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
    height: 100%;
    width: 100%;

    .pic {
      position: absolute;
      left: 50%;
      margin-top: auto;
      -webkit-transform: translate(-50%, 0%);
      -ms-transform: translate(-50%, 0%);
      transform: translate(-50%, 0%);
    }
  }
  @media only screen and (max-width: 65em) {
    .pic {
      width: 250px;
      height: 250px;
    }
  }
`;

export const Text = styled.div`  
  max-width: 100%;

  font-size:30px;
  text-align: center;
  color: #1a202c;
  padding: 2rem;
  margin-top: 20%;
  margin-bottom: 20%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
 
  @media only screen and(max-width: 425px) {
    margin-bottom: 80%;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem;
    margin-bottom: 60%;
    margin-top: 10%;
    font-size: 12px;
    flex-wrap: nowrap;
  }

`;
