import { Box, Typography } from '@mui/material';

const ServiciosCard = ({ imagePath, serviceName }) => {
  const cardStyles = {
    width: '166px',
    height: '211px',
    padding: '16px',
    borderRadius: '20px',
    boxShadow: [
      '0px 2.77px 2.21px 0px #AE967205',
      '0px 6.65px 5.32px 0px #AE967207',
      '0px 12.52px 10.02px 0px #AE967209',
      '0px 22.34px 17.87px 0px #AE96720B',
      '0px 41.78px 33.42px 0px #AE96720D',
      '0px 100px 80px 0px #AE967212',
    ].join(','),
    gap: '16px',
    background: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const imageStyles = {
    width: '134px',
    height: '134px',
    borderRadius: '50%',
  };

  const serviceNameStyles = {
    width: '62px',
    height: '29px',
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '29px',
    letterSpacing: '0em',
    textAlign: 'left',
    color: '#000000',
  };

  return (
    <Box sx={cardStyles}>
      <img src={imagePath} alt={serviceName} style={imageStyles} />
      <Typography sx={serviceNameStyles}>{serviceName}</Typography>
    </Box>
  );
};

export default ServiciosCard;
