import styled from 'styled-components';

export const Power = styled.button`
    position: fixed;
    top: 2rem;
    left: 95%;
    transform: translate(-50%, 0);
    background-color: #0000;
    
     
    border-radius: 50%;
    border: 1px solid #FCF6F4;
    width: 2.5rem;
    height: 2.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;

    cursor: pointer;

    &:hover{
        background-color: rgba(0,255,0,0.4);
        box-shadow: 0 0 8px 6px rgba(0,255,0,0.2);
    }
  
    &>*:first-child{
        text-decoration: none;
        color: inherit;
    }

    @media (max-width: 50em){
        background-color: #1A202C;
        position: relative;
    }
`;
