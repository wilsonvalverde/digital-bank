import { Grid, Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import colors from "../../styles/theme/base/colors";

export const Ingreso = () => {
  const fondo = { 0: "/assets/image/bgBody.png" };
  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundImage: `url(./../../imagenes/myv.png)`,
        backgroundSize: "cover !important",
      }}
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
      <Grid item xs={6}>
        <Button
          variant="contained"
          endIcon={<AddToQueueIcon />}
          sx={{ color: colors.light.main }}
        >
          Registrarme
        </Button>
      </Grid>
    </Grid>
  );
};
