import { Grid, Button, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import colors from "../../styles/theme/base/colors";

export const Banner = () => {
  const fondo = { 0: "/assets/image/bgBody.png" };
  return (
    <Grid
      className="banner"
      container
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      boxShadow={'1'}
    >
      <img src="/assets/images/tike.png" alt="" width={"25%"} height={"25%"} />
      <Typography
        variant="h3"
        fontFamily={"SunFlower"}
        sx={{ color: colors.dark.main }}
        textAlign={"center"}
      >
        Llegar a tus clientes nunca fué tan fácil
      </Typography>
    </Grid>
  );
};
