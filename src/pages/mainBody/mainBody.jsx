import { Typography, Grid, Paper } from "@mui/material";
import colors from "../../styles/theme/base/colors";

export const MainBody = () => {
  const fondo = { 0: "./../../imagenes/myv.png" };
  return (
    <Grid
      container
      spacing={2}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        backgroundImage: `url(${fondo[0]})`,
        backgroundSize: "cover !important",
      }}
    >
      <Grid item xs={4}>
        <Typography
          variant="h1"
          sx={{ color: colors.dark.main }}
          textAlign={"center"}
        >
          Misión
        </Typography>
      </Grid>
      <Grid item xs={6}>
        {/* <Paper sx= {{borderRadius:5, backgroundColor:colors.transparent.main}}> */}
        <Typography
          variant="h5"
          sx={{ color: colors.dark.main }}
          textAlign={"center"}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          suscipit numquam vitae veniam, nesciunt consequatur repellendus
          necessitatibus ut soluta libero excepturi alias beatae amet sunt
          reiciendis quidem! Suscipit, pariatur numquam. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Voluptas incidunt quas illum,
          eveniet commodi dolorem consectetur temporibus minima modi aspernatur
          ipsa corrupti dicta ipsum facere quis voluptate assumenda totam.
          Debitis!
        </Typography>
        {/* </Paper> */}
      </Grid>
      <Grid item xs={6}>
        {/* <Paper sx= {{borderRadius:5, backgroundColor:colors.transparent.main}}> */}
        <Typography
          variant="h5"
          sx={{ color: colors.dark.main }}
          textAlign={"center"}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          suscipit numquam vitae veniam, nesciunt consequatur repellendus
          necessitatibus ut soluta libero excepturi alias beatae amet sunt
          reiciendis quidem! Suscipit, pariatur numquam. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Voluptas incidunt quas illum,
          eveniet commodi dolorem consectetur temporibus minima modi aspernatur
          ipsa corrupti dicta ipsum facere quis voluptate assumenda totam.
          Debitis!
        </Typography>
        {/* </Paper> */}
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="h1"
          sx={{ color: colors.dark.main }}
          textAlign={"center"}
        >
          Visión
        </Typography>
      </Grid>
    </Grid>
  );
};
