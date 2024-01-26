import { Box } from '@mui/material';
import BebidasCard from './BebidasCard';

const BebidasCarrousel = ({ bebidas }) => {
  const cardWidth = '80%';

  return (
    <Box
      sx={{
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      {/* Contenedor de las tarjetas */}
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
        }}
      >
        {bebidas && bebidas.map((card, index) => (
          <BebidasCard
            key={index}
            image={card.image}
            name={card.name}
            price={card.price}
            width={cardWidth}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BebidasCarrousel;
