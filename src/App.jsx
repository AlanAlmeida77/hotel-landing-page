
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Nav from './components/Nav';
import CarrouselContainer from './components/carrousel/food/FoodCarrouselContainer';
import DesCenaContainer from './components/carrousel/des_cenas/DesCenaContainer';

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
      <DesCenaContainer />
      {/* Contenido adicional de la página principal */}
    </ThemeProvider>
  );
}

export default App;
