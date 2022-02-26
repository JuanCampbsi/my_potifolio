import { Container, ClickProps } from './styles';

const LogoComponent = ({ click } : ClickProps) => {
  return (
      <Container click={click} >Juan Campos</Container>
  );
}

export default LogoComponent;