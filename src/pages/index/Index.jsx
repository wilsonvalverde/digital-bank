import React from "react";
import MDBox from "../../components/MDBox";
import { Grid, Typography } from "@mui/material";
import { Slider } from "../slider/Slider";
import { MainBody } from "../mainBody/mainBody";
import { Ingreso } from "../ingreso/Ingreso";
import { BarraMenu } from "../barra/barra";
import colors from "../../styles/theme/base/colors";
import { Banner } from "../banner/banner";
import { Footer } from "../footer/footer";

export const Index = () => {
  const fondo = { 0: "/assets/images/myv.png" };
  return (
    <MDBox
      display="flex"
      alignItems="center"
      width="100%"
      height="100%"
      // sx={{
      //   backgroundImage: `url("/assets/images/fondo2.jpg")`,
      //   backgroundSize: "cover !important",
      // }}
    >
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
          <Banner />
        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={"0.5%"}
          >
            <Grid item xs={12}>
              <MainBody />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MDBox>
  );
};
