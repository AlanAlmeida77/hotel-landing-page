// Experiencia.jsx

import { Box, Typography, Button } from '@mui/material';

const Experiencia = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto', 
        marginTop: '50px',
        marginBottom: '24px', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Texto "Califica tu experiencia" */}
      <Typography
        variant="h3"
        sx={{
          width: '347px',
          height: '46px',
          fontSize: '32px',
          fontWeight: 700,
          lineHeight: '46px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: '#AE9672',
          '&:hover': {
            background: '#000000',
          }
        }}
      >
        Califica tu experiencia
      </Typography>

      {/* Botón "Calificar" */}
      <Button
        variant="contained"
        sx={{
          width: '338px',
          height: '39px',
          padding: '8px 16px',
          borderRadius: '10px',
          gap: '10px',
          background: '#000000',
          color: '#FFFFFF', // Añadido para evitar que el texto cambie de color al hacer hover
          '&:hover': {
            background: '#AE9672', // Mantener el color al hacer hover
          },
          boxShadow: [
            '0px 2.77px 2.21px 0px #00000005',
            '0px 6.65px 5.32px 0px #00000007',
            '0px 12.52px 10.02px 0px #00000009',
            '0px 22.34px 17.87px 0px #0000000B',
            '0px 41.78px 33.42px 0px #0000000D',
            '0px 100px 80px 0px #00000012',
          ].join(','),
        }}
      >
        Calificar
      </Button>
    </Box>
  );
};

export default Experiencia;

