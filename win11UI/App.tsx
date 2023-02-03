import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './src';


const colors = {
  main: "#0078d4",
  dark: "#001a68",
  light: "#dddddd",
  grey: "#333333",
  darkgrey: "#232425",
};

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {...colors},
    background: {...colors},
  }
});

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App
