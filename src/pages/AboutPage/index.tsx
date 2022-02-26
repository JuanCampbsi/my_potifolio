import React, { useState } from "react";
import ButtonPower from "../../components/Buttons/ButtonPower";
import ButtonSocialIcons from "../../components/Buttons/ButtonSocialIcons";
import LogoComponent from "../../components/LogoComponent";
import Particules from "../../components/Particules";
import SoundBar from "../../components/SoundBar";
import astronaut from "../../data/spaceman.png";

import { BoxParticule, Container, Header, Main, Spaceman } from "./styles";

const AboutPage: React.FC = () => {
  const [click, setClick] = useState(false);

  return (
    <Container>
      <Header>
        <ButtonPower />
        <LogoComponent />
        <SoundBar clicks={click} />
      </Header>
      <ButtonSocialIcons />
      <BoxParticule>
        <Particules />
      </BoxParticule>
      <Spaceman>
        <img src={astronaut} alt="astronaut" />
      </Spaceman>
      <Main>
        I'm an enthusiastic developer, passionate about technology, driven by
        results and a better user experience.
        <br /> <br />
        I live in Brazil.
        <br /> <br />You can connect with me through social links.
      </Main>
    </Container>
  );
};

export default AboutPage;
