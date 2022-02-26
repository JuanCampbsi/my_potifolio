import { motion } from "framer-motion";
import { useState } from "react";
import ButtonPower from "../../components/Buttons/ButtonPower";
import ButtonSocialIcons from "../../components/Buttons/ButtonSocialIcons";
import Intro from "../../components/Intro";
import LogoComponent from "../../components/LogoComponent";
import SoundBar from "../../components/SoundBar";
import { Code } from "../../components/svg/AllSvgs";

import {
  About,
  BottomBar,
  Center,
  Container,
  DarkDiv,
  MainContainer,
  Works,
} from "./styles";

export default function Main() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <ButtonPower />
        <LogoComponent click={click} />
        <SoundBar clicks={click}/>
        <ButtonSocialIcons click={click} />
        <Center click={click}>
          <Code
            onClick={() => handleClick()}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          />
          <span>click here</span>
        </Center>
        <BottomBar>        
            <About to="/about" click={click}>
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }as any} 
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    About.
                </motion.h2>
            </About>
            <Works to="/works">
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }as any} 
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    My Works.
                </motion.h2>
            </Works>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
}
