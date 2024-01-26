
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Nav from './components/Nav';
import CarrouselContainer from './components/carrousel/FoodCarrouselContainer';

const theme = createTheme({
  palette: {
    background: {
      default: '#FFFFFF',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />
      <CarrouselContainer />
      {/* Contenido adicional de la página principal */}
    </ThemeProvider>
  );
}

export default App;
