import { Box} from '@mui/material';

import PostresCard from './PostresCard';

const PostresCarrousel = ({ postresData }) => {
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
        {postresData.map((card, index) => (
          <PostresCard
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

export default PostresCarrousel;
