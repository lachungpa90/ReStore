import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
function App() {
  const [darkMode, setDarkMode]=useState(false);
  const palatteType=darkMode?'dark':'light'
  const theme=createTheme({
    palette:{
      mode: palatteType,
      background:{
        default: palatteType === 'light'?'#eaeaea':'#121212'
      }
    }
  })
  function handleThemeChange(){
    setDarkMode(!darkMode)
  }

  return (     
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App
