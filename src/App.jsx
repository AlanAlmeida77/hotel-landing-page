
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Nav from './components/Nav';
import CarrouselContainer from './components/carrousel/food/FoodCarrouselContainer';
import DesCenaContainer from './components/carrousel/des_cenas/DesCenaContainer';
import PostresContainer from './components/carrousel/postres/PostresContainer';
import BebidasContainer from './components/carrousel/bebidas/BebidasContainer';
import Habitaciones from './components/habitaciones/Habitaciones';
import Eventos from './components/eventos/Eventos';
import Servicios from './components/servicios/Servicios';
import Experiencia from './components/Experiencia';
import Footer from './components/Footer';



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
      <Servicios />
      <Experiencia />
      <Footer />
      {/* Contenido adicional de la página principal */}
    </ThemeProvider>
  );
}

export default App;
