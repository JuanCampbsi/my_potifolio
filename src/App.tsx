import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import GlobalStyle from "./GlobalStyle";
import Routes from "./routes";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

function App() {
  const theme = extendTheme({ config });

  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ChakraProvider>
  );
}

export default App;
