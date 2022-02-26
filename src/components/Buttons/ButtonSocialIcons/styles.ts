import styled from "styled-components";
import { motion } from 'framer-motion';

export interface ClickProps {
    click?: boolean;
}

export const Icons = styled.button<ClickProps>`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;

    z-index: 3;

    &>*:not(:last-child){
        margin: 0.5rem 0;
    }
       
    color: ${(props) => props.click ? '#1A202C': 'currentColor'} ;

    @media (max-width: 40em){
        left: 1rem;
        color:  #ffff !important;
    }

`

export const Line = styled(motion.span)<ClickProps>`
    width: 2px;
    height: 8rem;
    background-color: ${(props) => props.click ? '#1A202C': 'currentColor'} ;

    @media (max-width: 40em){
        left: 1rem;
        background-color: #ffff !important;
    }
`
