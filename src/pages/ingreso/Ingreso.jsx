import { Grid, Button, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import colors from "../../styles/theme/base/colors";

export const Ingreso = () => {
  const fondo = { 0: "/assets/image/bgBody.png" };
  return (
    <Grid
      container
      spacing={2}
      justifyContent={"center"}
      alignItems={"center"}
      marginBottom={"50px"}
    >
      <Grid item xs={6}>
        <Button
          variant="contained"
          startIcon={<LoginIcon />}
          sx={{ color: colors.light.main }}
        >
          Ingresar
        </Button>
      </Grid>
    </Grid>
  );
};
