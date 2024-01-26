// Servicios.jsx

import { Box, Typography } from '@mui/material';
import ServiciosCard from './ServiciosCard';
import { serviciosData } from './serviciosData';

const Servicios = () => {
  return (
    <Box
      sx={{
        width: '877px',
        height: '506px',
        marginTop: '30px',
        gap: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: '250px',
      }}
    >
      {/* Título de Servicios */}
      <Typography
        variant="h5"
        component="div"
        sx={{
          width: '100px',
          height: '36px',
          fontSize: '25px',
          fontWeight: 800,
          lineHeight: '36px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: '#000000',
          marginLeft: '-650px', 
        }}
      >
        Servicios
      </Typography>

      {/* Contenido de las tarjetas de servicios */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap', 
          justifyContent: 'center',
          gap: '24px',
        }}
      >
        {serviciosData.map((servicio, index) => (
          <ServiciosCard
            key={index}
            imagePath={servicio.image}
            serviceName={servicio.name}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Servicios;


