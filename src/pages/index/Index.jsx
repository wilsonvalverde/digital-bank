import React from "react";
import MDBox from "../../components/MDBox";
import { Grid, Paper } from "@mui/material";
import { Slider } from "../slider/Slider";
import { MainBody } from "../mainBody/mainBody";
import { Ingreso } from "../ingreso/Ingreso";

export const Index = () => {
  return (
    <MDBox
      display="block"
      alignItems="center"
      bgColor="ligth"
      width="100%"
      height="100%"
    >
      <Grid
        container
        spacing={4}
        justifyContent={"center"}
        direction={"column"}
        borderRadius={40}
      >
        {/* Slider */}
        <Grid item xs={12}>
          <Slider />
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item xs={8}>
          <MainBody />
        </Grid>
        <Grid item xs={4} justifyContent={"center"}>
          <Ingreso />
        </Grid>
      </Grid>
    </MDBox>
  );
};
