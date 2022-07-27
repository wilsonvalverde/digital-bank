import React from "react";
import MDBox from "../../components/MDBox";
import { Grid } from "@mui/material";
import { MainBody } from "../mainBody/mainBody"
import { BarraMenu } from "../barra/barra";

export const Index = () => {
  return (
    <MDBox
      display="flex"
      alignItems="center"
      width="100%"
      height="100%"
      //bgColor={colors.mint.main}
      sx={{
        backgroundImage: `url('/assets/images/newfnd.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}>
        <BarraMenu />
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
