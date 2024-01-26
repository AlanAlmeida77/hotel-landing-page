
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Nav from './components/Nav';
import CarrouselContainer from './components/carrousel/food/FoodCarrouselContainer';
import DesCenaContainer from './components/carrousel/des_cenas/DesCenaContainer';
import PostresContainer from './components/carrousel/postres/PostresContainer';
import BebidasContainer from './components/carrousel/bebidas/BebidasContainer';
import Habitaciones from './components/habitaciones/Habitaciones';
import Eventos from './components/eventos/Eventos';


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
      <PostresContainer />
      <BebidasContainer />
      <Habitaciones />
      <Eventos />
      {/* Contenido adicional de la página principal */}
    </ThemeProvider>
  );
}

export default App;
