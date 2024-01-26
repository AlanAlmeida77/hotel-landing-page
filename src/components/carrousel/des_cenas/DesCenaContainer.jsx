import { Box, IconButton } from "@mui/material";
import DesCenaCard from "./DesCenaCard";
import { desCena } from "./des_cenas.js";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const DesCenaContainer = () => {
  return (
    <Box
        sx={{
        display: "flex",
        top: "20px",
        flexDirection: "column",
        alignItems: "center",
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
            top: "30px", 
            fontFamily: "helvetica",
            fontSize: { xs: "18px", sm: "20px", md: "25px" },
            fontWeight: 800,
            lineHeight: "36px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#000000",
        }}
    >
        Desayunos y cenas
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
        {desCena.map((food, index) => (
            <DesCenaCard key={index} image={food.image} name={food.name} price={food.price} />
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

export default DesCenaContainer;

