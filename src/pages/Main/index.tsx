import { useState } from "react";
import { YinYang } from "../../components/svg/AllSvgs";

import { 
    Center, 
    Container, 
    DarkDiv, 
    MainContainer 
  } from "./styles";

 
export default function Main() {
  const [click, setClick] = useState(false);  

  const handleClick = () => setClick(!click);
 
  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <Center click={click}>
          <YinYang
            onClick={() => handleClick()}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          />
          <span>click here</span>
        </Center>
      </Container>
    </MainContainer>
  );
}
