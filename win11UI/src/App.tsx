import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/'
import { DndProvider } from 'react-dnd/dist/core';
import { HTML5Backend } from 'react-dnd-html5-backend';

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
    primary: { ...colors },
    /*  background: { ...colors }, */
  }
});

function App() {

  return (
    <DndProvider backend={HTML5Backend}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </DndProvider>
  )
}

export default App
