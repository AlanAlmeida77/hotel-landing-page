import { Box, Typography } from '@mui/material';

const EventosCard = ({ imagePath, eventName, dateTime }) => {
  const cardStyles = {
    width: '210px',
    height: '337px',
    padding: '16px 8px',
    borderRadius: '10px',
    boxShadow: [
      '0px 2.77px 2.21px 0px #AE967205',
      '0px 6.65px 5.32px 0px #AE967207',
      '0px 12.52px 10.02px 0px #AE967209',
      '0px 22.34px 17.87px 0px #AE96720B',
      '0px 41.78px 33.42px 0px #AE96720D',
      '0px 100px 80px 0px #AE967212',
    ].join(','),
    gap: '88px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  };

  const imageStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    objectFit: 'cover',
  };

  const textContainerStyles = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
  };

  const eventNameStyles = {
    width: '114px',
    height: '36px',

    fontSize: '25px',
    fontWeight: 700,
    lineHeight: '36px',
    letterSpacing: '0em',
    textAlign: 'center',

    color: '#FFFFFF',
    marginBottom: '130px',  // Agregamos un margen inferior
  };

  const dateTimeStyles = {
    width: '43px',
    height: '46px',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '23px',
    letterSpacing: '0em',
    textAlign: 'center',
    color: '#FFFFFF',
  };

  return (
    <Box sx={cardStyles}>
      <img src={imagePath} alt={eventName} style={imageStyles} />
      <Box sx={textContainerStyles}>
        <Typography sx={eventNameStyles}>{eventName}</Typography>
        <Typography sx={dateTimeStyles}>{dateTime}</Typography>
      </Box>
    </Box>
  );
};

export default EventosCard;

