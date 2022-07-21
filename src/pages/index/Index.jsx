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
      >
        <Grid item xs={12}>
          <Paper>
            <Slider/>
          </Paper>
        </Grid>
        <Grid item>
          <Grid container spacing={2} justifyContent={"center"}>
            <Grid item xs={4}>
              <Paper>
                <Typography
                  variant="h1"
                  sx={{ color: colors.info.main }}
                  textAlign={"center"}
                >
                  Posi bebe
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper>
                <Typography
                  variant="h1"
                  sx={{ color: colors.info.main }}
                  textAlign={"center"}
                >
                  Posi bebe
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper>
                <Typography
                  variant="h1"
                  sx={{ color: colors.info.main }}
                  textAlign={"center"}
                >
                  Posi bebe
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MDBox>
  );
};
