import { Box, IconButton } from "@mui/material";
import BebidasCarrousel from "./BebidasCarrousel.jsx";
import { bebidas } from "./bebidas.js";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const BebidasContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        top: "20px",
        width: "100%",
        gap: "20px",
        position: "relative",
        marginBottom: "20px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "300px",
          top: "50px",
          fontFamily: "helvetica",
          fontSize: { xs: "18px", sm: "20px", md: "25px" },
          fontWeight: 800,
          lineHeight: "36px",
          letterSpacing: "0em",
          textAlign: "left",
          color: "#000000",
        }}
      >
        Bebidas
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "50px",
          width: "100%",
          maxWidth: "888px",
          height: "min(273px, 32vw)",
          gap: "24px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <IconButton
          sx={{ position: "absolute", left: 0 }}
          onClick={() => console.log("Izquierda")}
        >
          <KeyboardArrowLeftIcon />
        </IconButton>

        <BebidasCarrousel bebidas={bebidas} />

        <IconButton
          sx={{ position: "absolute", right: 0 }}
          onClick={() => console.log("Derecha")}
        >
          <KeyboardArrowRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default BebidasContainer;
