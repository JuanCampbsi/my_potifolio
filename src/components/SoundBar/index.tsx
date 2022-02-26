import { useRef, useState } from 'react';

import { Container, Line } from './styles';

import music from "../../data/u-said-it-v13-1167.mp3"

export interface ClickProps {
    clicks?: boolean;
}

const SoundBar = ({clicks}: ClickProps) => {
    const ref = useRef<any>(null);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);

        if(!click){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    }
  return (
      <Container onClick={() => handleClick()}>
            <Line click={click} clicks={clicks}/>
            <Line click={click} clicks={clicks}/>
            <Line click={click} clicks={clicks}/>
            <Line click={click} clicks={clicks}/>
            <Line click={click} clicks={clicks}/>
            <Line click={click} clicks={clicks}/>
            <Line click={click} clicks={clicks}/>

            <audio src={music} ref={ref}  loop />
      </Container>
  );
}

export default SoundBar;