import { Typography, Grid, Button } from "@mui/material";
import colors from "../../styles/theme/base/colors";
import LoginIcon from "@mui/icons-material/Login";
import { Ingreso } from "../ingreso/Ingreso";

export const MainBody = () => {
  const fondo = { 0: "/assets/images/myv.png" };
  return (
    <Grid
      container
      width="100%"
      height="100%"
      minHeight="0"
      justifyContent={"center"}
      alignItems={"center"}
      marginBottom={"50px"}
      boxShadow={"1"}
    >
      <Grid item xs={6}>
        <img src="/assets/images/dataFintech.png" alt="" />
      </Grid>
      <Grid item xs={6}>
        <Grid container direction={"column"} alignItems={"center"}>
          <Grid item paddingBottom={"50px"}>
            <Typography
              variant="h1"
              fontFamily={"SunFlower"}
              sx={{ color: colors.dark.main }}
              textAlign={"center"}
            >
              Escoge la plantilla que más se adapte a tus gustos y necesidades
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: colors.dark.main }}
              textAlign={"center"}
            >
              ¡Existen plantillas pre-diseñadas, héchales un vistazo!
            </Typography>
          </Grid>
          <Button
            variant="contained"
            startIcon={<LoginIcon />}
            sx={{ color: colors.light.main, backgroundColor: colors.green.main }}
          >
            Ver temas
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
