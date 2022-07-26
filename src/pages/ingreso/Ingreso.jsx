import { Grid, Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import colors from "../../styles/theme/base/colors";

export const Ingreso = () => {
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
