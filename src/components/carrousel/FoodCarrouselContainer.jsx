import { Box, IconButton } from '@mui/material';
import FoodCard from './FoodCard';
import { foodData } from './foodData';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const FoodCarrousel = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '273px',
        gap: '80px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >

      <IconButton
        sx={{ position: 'absolute', left: 0 }}
        onClick={() => console.log('Izquierda')}
      >
        <KeyboardArrowLeftIcon />
      </IconButton>

      {/* Mostrar tarjetas en el carrusel */}
      <FoodCard
        image={foodData[0].image}
        name={foodData[0].name}
        price={foodData[0].price}
      />
      <FoodCard
        image={foodData[1].image}
        name={foodData[1].name}
        price={foodData[1].price}
      />
      <FoodCard
        image={foodData[2].image}
        name={foodData[2].name}
        price={foodData[2].price}
      />

  
      <IconButton
        sx={{ position: 'absolute', right: 0 }}
        onClick={() => console.log('Derecha')}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
    </Box>
  );
};

export default FoodCarrousel;
