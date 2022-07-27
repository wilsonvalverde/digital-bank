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
import MDButton from "../../components/MDButton";

export const Index = () => {
  const fondo = { 0: "/assets/images/myv.png" };
  return (
    <MDBox display="flex" alignItems="center" width="100%" height="100%">
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item lg={12} xs={12}>
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <Grid item lg={12} xs={12}>
              <MainBody />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MDBox>
  );
};
