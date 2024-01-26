
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Nav from './components/Nav';
import CarrouselContainer from './components/carrousel/food/FoodCarrouselContainer';
import DesCenaContainer from './components/carrousel/des_cenas/DesCenaContainer';
import PostresContainer from './components/carrousel/postres/PostresContainer';

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
      {/* Contenido adicional de la página principal */}
    </ThemeProvider>
  );
}

export default App;
