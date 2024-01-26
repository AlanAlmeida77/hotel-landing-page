import { Box } from '@mui/material';
import Reservas from './Reservas';

const Habitaciones = () => {
  return (
    <Box
      sx={{
        width: '1,451px',
        height: '366px',
        padding: '40px 0',
        gap: '8px',
        background: '#AE9672',
        marginTop: '80px',
      }}
    >
      {/* Contenido de las habitaciones */}
      <Reservas />
    </Box>
  );
};

export default Habitaciones;
