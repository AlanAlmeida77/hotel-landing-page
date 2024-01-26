import { Box } from '@mui/material';
import SearchBar from './SearchBar';
import Menu from './Menu';

const Nav = () => {
  const navContainerStyles = {
    width: '100%',
    height: '376px',
    padding: '24px 16px',
    backgroundColor: '#AF9673',
    margin: '0 auto',
    boxShadow: '0px 2.767256498336792px 2.2138051986694336px 0px #AE967205',
    '@media (min-width: 600px)': {
      padding: '24px 100px',
    },
  };

  return (
    <Box sx={navContainerStyles}>
      {/* Contenido del Nav */}
      <Menu />
      <SearchBar />
      {/* Otros componentes según tus necesidades */}
    </Box>
  );
};

export default Nav;


