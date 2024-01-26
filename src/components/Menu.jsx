import { Box, Typography, IconButton } from '@mui/material';

const Menu = () => {
  const searchBarStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '45px',
    padding: '0 16px',
    backgroundColor: 'transparent',
  };

  const logoStyles = {
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '45px',
    letterSpacing: '0em',
    textAlign: 'left',
  };

  const menuOptionsContainerStyles = {
    display: 'flex',
    gap: '20px',
  };

  const menuOptionStyles = {
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '20px',
    letterSpacing: '0em',
    textAlign: 'left',
    color: '#FFFFFF',
    textDecoration: 'none',
    transition: 'color 0.3s ease-in-out',
  };

  const userIconStyles = {
    color: '#333333',
  };

  const handleMouseEnter = (event) => {
    event.target.style.color = '#FFFFFF';
  };

  const handleMouseLeave = (event) => {
    event.target.style.color = '#333333';
  };

  return (
    <Box sx={searchBarStyles}>
      <Typography sx={logoStyles}>Logo</Typography>
      <Box sx={menuOptionsContainerStyles}>
        <Typography
          component="a"
          href="#home"
          sx={{ ...menuOptionStyles, ':hover': { color: '#4CAF50' } }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Home
        </Typography>
        <Typography
          component="a"
          href="#menu"
          sx={{ ...menuOptionStyles, ':hover': { color: '#4CAF50' } }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Menu
        </Typography>
        <Typography
          component="a"
          href="#eventos"
          sx={{ ...menuOptionStyles, ':hover': { color: '#4CAF50' } }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Eventos
        </Typography>
        <Typography
          component="a"
          href="#servicios"
          sx={{ ...menuOptionStyles, ':hover': { color: '#4CAF50' } }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Servicios
        </Typography>
      </Box>
      <IconButton sx={userIconStyles} aria-label="user icon">
      </IconButton>
    </Box>
  );
};

export default Menu;
