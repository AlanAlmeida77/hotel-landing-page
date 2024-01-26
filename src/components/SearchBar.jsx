

import { Box, Typography, InputBase } from "@mui/material";

const SearchBar = () => {
  const containerStyles = {
    width: "100%",
    height: "auto", 
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "25px",
    padding: "0 16px",
  };

  const hotelNameStyles = {
    width: "100%",
    height: "69px",
    marginTop: "35px",
    textAlign: "center",
    fontSize: "45px",
    fontWeight: 900,
    lineHeight: "1.2", 
    letterSpacing: "0em",
    color: "#F5F5F5",
  };

  const searchBarStyles = {
    width: "100%", 
    maxWidth: "350px",
    height: "35px",
    backgroundColor: "#FFFFFF",
    marginTop: "25px",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "1.5", 
    letterSpacing: "0em",
    textAlign: "center",
    color: "#AE9672",
  };

  return (
    <Box sx={containerStyles}>
      <Typography sx={hotelNameStyles}>Nombre del Hotel</Typography>
      <Box sx={searchBarStyles}>
        <InputBase placeholder="Hacer reserva" fullWidth />
      </Box>
    </Box>
  );
};

export default SearchBar;
