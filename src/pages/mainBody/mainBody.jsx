import React, { useRef, useState } from "react";
import { Typography, Grid, Button } from "@mui/material";
import colors from "../../styles/theme/base/colors";
import LoginIcon from "@mui/icons-material/Login";
import { Slider } from "../slider/Slider";

export const MainBody = () => {
  const [gadget, setGadget] = useState([
    {
      label: "Bot",
      imgPath: "/assets/images/gadget1.png",
    },
    {
      label: "Banca virtual",
      imgPath: "/assets/images/gadget2.png",
    },
    {
      label: "Wallet",
      imgPath: "/assets/images/gadget3.png",
    },
    {
      label: "Apertura de cuenta",
      imgPath: "/assets/images/gadget4.png",
    },
    {
      label: "Blockchain",
      imgPath: "/assets/images/gadget5.png",
    },
    {
      label: "App móvil",
      imgPath: "/assets/images/gadget6.png",
    },
    {
      label: "Corresponsale",
      imgPath: "/assets/images/gadget7.png",
    },
  ]);
  return (
    <Grid
      container
      spacing={2}
      width="95%"
      height="95%"
      justifyContent={"center"}
      alignItems={"center"}
      margin={"auto"}
      marginBottom={"50px"}
    >
      <Grid item lg={12} xs={12}>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          boxShadow={2}
        >
          <Grid item lg={6} xs={12}>
            <Grid container direction={"column"} alignItems={"center"}>
              <Grid item paddingBottom={"50px"}>
                <Typography
                  variant="h1"
                  fontFamily={"DarkerGrotesque"}
                  sx={{ color: colors.dark.main }}
                  textAlign={"center"}
                >
                  ¿Cómo trabajamos?
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: colors.dark.main }}
                  textAlign={"center"}
                >
                  En la siguiente imagen te lo explicamos
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Grid container alignItems={"center"}>
              {gadget &&
                gadget.map((gdt, index) => (
                  <Grid item xs={4}>
                    <Grid container direction={"column"} alignItems={"center"}>
                      {gadget.length > 0 ? (
                        <img
                          src={gdt.imgPath}
                          alt={gdt.label}
                          width={"25%"}
                          height={"25%"}
                        />
                      ) : null}
                      {gadget.length > 0 ? (
                        <Typography
                          variant="h4"
                          fontFamily={"DarkerGrotesque"}
                          sx={{ color: colors.dark.main }}
                          textAlign={"center"}
                        >
                          {gdt.label}
                        </Typography>
                      ) : null}
                    </Grid>
                  </Grid>
                ))}
              {/* <Grid item xs={4}>
                <Grid container direction={"column"} alignItems={"center"}>
                  <img
                    src="/assets/images/gadget2.png"
                    alt=""
                    width={"30%"}
                    height={"30%"}
                  />
                  <Typography
                    variant="h3"
                    fontFamily={"DarkerGrotesque"}
                    sx={{ color: colors.dark.main }}
                    textAlign={"center"}
                  >
                    Banca en línea
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Grid container direction={"column"} alignItems={"center"}>
                  <img
                    src="/assets/images/gadget3.png"
                    alt=""
                    width={"30%"}
                    height={"30%"}
                  />
                  <Typography
                    variant="h3"
                    fontFamily={"DarkerGrotesque"}
                    sx={{ color: colors.dark.main }}
                    textAlign={"center"}
                  >
                    Wallet
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Grid container direction={"column"} alignItems={"center"}>
                  <img
                    src="/assets/images/gadget4.png"
                    alt=""
                    width={"30%"}
                    height={"30%"}
                  />
                  <Typography
                    variant="h3"
                    fontFamily={"DarkerGrotesque"}
                    sx={{ color: colors.dark.main }}
                    textAlign={"center"}
                  >
                    Apertura de cuenta
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Grid container direction={"column"} alignItems={"center"}>
                  <img
                    src="/assets/images/gadget5.png"
                    alt=""
                    width={"30%"}
                    height={"30%"}
                  />
                  <Typography
                    variant="h3"
                    fontFamily={"DarkerGrotesque"}
                    sx={{ color: colors.dark.main }}
                    textAlign={"center"}
                  >
                    Blockchain
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Grid container direction={"column"} alignItems={"center"}>
                  <img
                    src="/assets/images/gadget6.png"
                    alt=""
                    width={"30%"}
                    height={"30%"}
                  />
                  <Typography
                    variant="h3"
                    fontFamily={"DarkerGrotesque"}
                    sx={{ color: colors.dark.main }}
                    textAlign={"center"}
                  >
                    Aplicación móvil
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Grid
                  container
                  direction={"column"}
                  alignSelf={"center"}
                  alignItems={"center"}
                >
                  <img
                    src="/assets/images/gadget7.png"
                    alt=""
                    width={"30%"}
                    height={"30%"}
                  />
                  <Typography
                    variant="h3"
                    fontFamily={"DarkerGrotesque"}
                    sx={{ color: colors.dark.main }}
                    textAlign={"center"}
                  >
                    Corresponsales
                  </Typography>
                </Grid>
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={12} xs={12}>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          boxShadow={2}
        >
          <Grid item lg={6} xs={12}>
            <Slider />
          </Grid>
          <Grid item lg={6} xs={12}>
            <Grid container direction={"column"} alignItems={"center"}>
              <Grid item paddingBottom={"50px"}>
                <Typography
                  variant="h1"
                  fontFamily={"DarkerGrotesque"}
                  sx={{ color: colors.dark.main }}
                  textAlign={"center"}
                >
                  Escoge la plantilla que más se adapte a tus gustos y
                  necesidades
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: colors.dark.main }}
                  textAlign={"center"}
                >
                  ¡Existen plantillas pre-diseñadas, héchales un vistazo!
                </Typography>
              </Grid>
              <Button
                variant="contained"
                startIcon={<LoginIcon />}
                sx={{
                  color: colors.light.main,
                  backgroundColor: colors.green.main,
                }}
              >
                Ver plantillas
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
