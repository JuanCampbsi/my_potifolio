import { extendTheme, ChakraProvider} from "@chakra-ui/react";
import { createBreakpoints } from '@chakra-ui/theme-tools';
import Main from "./pages/Main";

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

// const breakPoints = createBreakpoints({
//   smm: '280px',
//   sm: '320px',
//   md: '436px',
//   lg: '960px',
//   xl: '1200px',
//   '2xl': '1536px',
// })

function App() {   
  const theme = extendTheme({ config })
  
  return (
    <ChakraProvider theme={ theme }>
      <Main />
    </ChakraProvider>
  )
}

export default App
