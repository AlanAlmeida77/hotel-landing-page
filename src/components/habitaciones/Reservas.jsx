import { Box, Typography, Button, IconButton } from '@mui/material';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import habitacionImage from '../../assets/Habitaciones/habitacion.png';

const Reservas = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Carrousel con flechas */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <IconButton sx={{ width: '42px', height: '42px', color: '#FFFF' }}>
          <KeyboardArrowLeftIcon />
        </IconButton>

        {/* Contenido del carrousel */}
        <Box
          sx={{
            width: '874px',
            height: '286px',
            gap: '56px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* Imagen */}
          <Box
            component="img"
            src={habitacionImage}
            alt="Habitación"
            sx={{
              width: '448px',
              height: '286px',
              borderRadius: '10px',
            }}
          />

          {/* Texto y botón */}
          <Box
            sx={{
              width: '370px',
              height: '270px',
              gap: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            {/* Nombre de la habitación */}
            <Typography
              variant="h5"
              component="div"
              sx={{
                color: '#FFFF',
                fontWeight: 700,
                marginBottom: '16px',
              }}
            >
              Nombre de la habitación
            </Typography>

            {/* Descripción */}
            <Typography
              variant="body2"
              sx={{
                color: '#FFFF',
                fontSize: '14px',
                lineHeight: '20px',
                marginBottom: '16px',
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nemo autem.
            </Typography>

            {/* Botón de reserva */}
            <Button
              variant="contained"
              sx={{
                width: '100%',
                color: '#AE9672',
                backgroundColor: '#FFFF',
                borderRadius: '10px',
                '&:hover': {
                  backgroundColor: '#FFFF',
                },
              }}
            >
              Hacer reserva
            </Button>
          </Box>
        </Box>

        <IconButton sx={{ width: '42px', height: '42px', color: '#FFFF' }}>
          <KeyboardArrowRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Reservas;

