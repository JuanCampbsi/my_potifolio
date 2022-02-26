import { useState } from "react";
import ButtonPower from "../../components/Buttons/ButtonPower";
import ButtonSocialIcons from "../../components/Buttons/ButtonSocialIcons";
import Intro from "../../components/Intro";
import { Code } from "../../components/svg/AllSvgs";

import {
  Center,
  Container,
  DarkDiv,
  LogoComponent,
  MainContainer,
} from "./styles";

export default function Main() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <ButtonPower />
        <LogoComponent click={click}>Juan Campos</LogoComponent>
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
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
}
