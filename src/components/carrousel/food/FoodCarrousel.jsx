import { Box, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FoodCard from './FoodCard';

const cardsData = [
  {
    image: '../../assets/img_Almuerzos/Rectangle 159.png',
    name: 'Nombre del plato 1',
    price: '$0.00',
  },
  {
    image: '../../assets/img_Almuerzos/almuerzo2.png',
    name: 'Nombre del plato 2',
    price: '$0.00',
  },
  {
    image: '../../assets/img_Almuerzos/almuerzo3.png',
    name: 'Nombre del plato 3',
    price: '$0.00',
  },
];

const FoodCarrousel = () => {
  const cardWidth = '80%';

  return (
    <Box
      sx={{
        display: 'flex',
        overflow: 'hidden',
      }}
    >

      <IconButton onClick={() => {}}><ArrowBackIcon /></IconButton>

      {/* Contenedor de las tarjetas */}
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
        }}
      >
        {cardsData.map((card, index) => (
          <FoodCard
            key={index}
            image={card.image}
            name={card.name}
            price={card.price}
            width={cardWidth}
          />
        ))}
      </Box>

      {/* Flecha derecha */}
      <IconButton onClick={() => {}}><ArrowForwardIcon /></IconButton>
    </Box>
  );
};

export default FoodCarrousel;




