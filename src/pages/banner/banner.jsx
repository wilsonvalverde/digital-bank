import { Grid, Button, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import colors from "../../styles/theme/base/colors";

export const Banner = () => {
  return (
    <Grid
      className="banner"
      container
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      boxShadow={"1"}
    >
      <img src="/assets/images/tike.png" alt="" width={"15%"} height={"15%"} />
      <Typography
        variant="h3"
        fontFamily={"DarkerGrotesque"}
        sx={{ color: colors.dark.main }}
        textAlign={"center"}
      >
        Llegar a tus clientes nunca fué tan fácil
      </Typography>
    </Grid>
  );
};
