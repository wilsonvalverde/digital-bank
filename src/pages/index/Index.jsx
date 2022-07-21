import React from "react";
import MDBox from "../../components/MDBox";
import { Typography, Grid, Paper } from "@mui/material";
import colors from "../../styles/theme/base/colors";
import { Slider } from "../slider/Slider";

export const Index = () => {
  return (
    <MDBox
      display="block"
      alignItems="center"
      bgColor="dark"
      width="100%"
      height="100%"
    >
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        direction={"column"}
        borderRadius={40}
      >
        {/* Slider */}
        <Grid item xs={12}>
          <Paper>
            <Slider />
          </Paper>
        </Grid>
        {/* Cuerpo */}
        <Grid item xs={12}>
          <Grid
            container
            spacing={8}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item xs={4}>
              <Typography
                variant="h1"
                sx={{ color: colors.light.main}}
                textAlign={"center"}
              >
                Misión
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Paper sx= {{borderRadius:5}}>
                <Typography
                  variant="h4"
                  sx={{ color: colors.info.main }}
                  textAlign={"center"}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veritatis suscipit numquam vitae veniam, nesciunt consequatur
                  repellendus necessitatibus ut soluta libero excepturi alias
                  beatae amet sunt reiciendis quidem! Suscipit, pariatur
                  numquam. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Voluptas incidunt quas illum, eveniet commodi dolorem
                  consectetur temporibus minima modi aspernatur ipsa corrupti
                  dicta ipsum facere quis voluptate assumenda totam. Debitis!
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MDBox>
  );
};
