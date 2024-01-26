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
        gap: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Título de Servicios */}
      <Typography
        variant="h5"
        component="div"
        sx={{
          width: '100px',
          height: '36px',
          fontFamily: 'Jost',
          fontSize: '25px',
          fontWeight: 500,
          lineHeight: '36px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: '#000000',
          marginLeft: '-12px',  // Ajustar según sea necesario
        }}
      >
        Servicios
      </Typography>

      {/* Contenido de las tarjetas de servicios */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap', // Agregar flexWrap para que las tarjetas se muevan a la siguiente línea
          justifyContent: 'center',
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

