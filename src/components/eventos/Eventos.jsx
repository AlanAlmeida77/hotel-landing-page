import { Box, Typography } from '@mui/material';
import EventosCard from './EventosCard';
import { eventos } from './eventosData.js';

const Eventos = () => {
  return (
    <Box
      sx={{
        width: '100%',
        gap: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Título de Eventos */}
      <Typography
        variant="h5"
        component="div"
        sx={{
          height: '36px',
          marginTop: '20px',
          marginRight: '700px',
          fontSize: '25px',
          fontWeight: 800,
          lineHeight: '36px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: '#000000',
        }}
      >
        Eventos
      </Typography>

      {/* Contenido de las tarjetas de eventos */}
      <Box
        sx={{
          display: 'flex',
          gap: '70px',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        {eventos.map((event, index) => (
          <EventosCard
            key={index}
            imagePath={event.image}
            eventName={event.name}
            dateTime={event.date}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Eventos;

