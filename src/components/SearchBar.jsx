
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
    marginTop: "15px",
    textAlign: "center",
    fontFamily: "Mosk",
    fontSize: "32px", 
    fontWeight: 900,
    lineHeight: "1.2", 
    letterSpacing: "0em",
    color: "#F5F5F5",
  };

  const searchBarStyles = {
    width: "100%", 
    maxWidth: "250px",
    height: "50px",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    fontFamily: "Mosk",
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
