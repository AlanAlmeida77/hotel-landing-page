
import { Box, IconButton, Typography } from "@mui/material";
import FoodCard from "./FoodCard";
import { foodData } from "./foodData";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const FoodCarrouselContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        gap: "20px",
        position: "relative",
        marginBottom: "20px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "helvetica",
          fontSize: { xs: "24px", sm: "28px", md: "31px" },
          fontWeight: 800,
          lineHeight: { xs: "36px", md: "50px" },
          letterSpacing: "0em",
          textAlign: "left",
          color: "#000000",
        }}
      >
        Tus recomendaciones
      </Typography>

      <Box
        sx={{
          position: "absolute",
          left: "300px",
          top: "120px", 
          fontFamily: "helvetica",
          fontSize: { xs: "18px", sm: "20px", md: "25px" },
          fontWeight: 800,
          lineHeight: "36px",
          letterSpacing: "0em",
          textAlign: "left",
          color: "#000000",
        }}
      >
        Almuerzos
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

        {/* Mostrar tarjetas en el carrusel */}
        {foodData.map((food, index) => (
          <FoodCard key={index} image={food.image} name={food.name} price={food.price} />
        ))}

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

export default FoodCarrouselContainer;

