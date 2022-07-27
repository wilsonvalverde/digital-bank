import React from "react";
import MDBox from "../../components/MDBox";
import { Grid } from "@mui/material";
import { MainBody } from "../mainBody/mainBody"
export const Index = () => {
  return (
    <MDBox display="flex" alignItems="center" width="100%" height="100%">
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}>
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
