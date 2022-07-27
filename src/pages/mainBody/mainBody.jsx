import React, { useRef, useState } from "react";
import { Typography, Grid, Button } from "@mui/material";
import colors from "../../styles/theme/base/colors";
import LoginIcon from "@mui/icons-material/Login";
import { Slider } from "../slider/Slider";

export const MainBody = () => {
  const [gadget, setGadget] = useState([
    {
      label: "ChatBot",
      description: "Es un chatbotasasdasdasdad asfadadasd asfaaf asadas asasas",
      imgPath: "/assets/images/gadget1.png",
    },
    {
      label: "Banca virtual",
      description: "sdihgaskbfklsdkfasdkbskdlbfaskldfkjdsfk",
      imgPath: "/assets/images/gadget2.png",
    },
    {
      label: "Wallet",
      description: "sdihgaskbfklsdkfasdkbskdlbfaskldfkjdsfk",
      imgPath: "/assets/images/gadget3.png",
    },
    {
      label: "Apertura de cuenta",
      description: "sdihgaskbfklsdkfasdkbskdlbfaskldfkjdsfk",
      imgPath: "/assets/images/gadget4.png",
    },
    {
      label: "Blockchain",
      description: "sdihgaskbfklsdkfasdkbskdlbfaskldfkjdsfk",
      imgPath: "/assets/images/gadget5.png",
    },
    {
      label: "App móvil",
      description: "sdihgaskbfklsdkfasdkbskdlbfaskldfkjdsfk",
      imgPath: "/assets/images/gadget6.png",
    },
    {
      label: "Corresponsale",
      description: "sdihgaskbfklsdkfasdkbskdlbfaskldfkjdsfk",
      imgPath: "/assets/images/gadget7.png",
    },
  ]);
  return (
    <Grid
      container
      width="100%"
      height="100%"
      justifyContent={"center"}
      alignItems={"center"}
      margin={"0px"}
      marginBottom={"50px"}
      sx={{
        backgroundColor: colors.dark.main,
      }}
    >
      <Grid item xs={12}>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          boxShadow={2}
          sx={{
            backgroundColor: colors.light.main,
          }}
        >
          <Grid item lg={3} xs={12}>
            <Grid container direction={"column"} alignItems={"center"}>
              <Grid item paddingBottom={"50px"}>
                <Typography
                  variant="h1"
                  fontFamily={"DarkerGrotesque"}
                  sx={{ color: colors.dark.main }}
                  textAlign={"center"}
                >
                  Lo que tus clientes merecen
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: colors.dark.main }}
                  textAlign={"center"}
                >
                  El mas completo grupo de canales bancarios que toda empresa
                  financiera necesita tener.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Typography
        variant="h1"
        sx={{ color: colors.light.main }}
        textAlign={"center"}
        margin={"auto"}
        paddingTop={"10px"}
        paddingBottom={"25px"}
      >
        Soluciones para entidades financieras
      </Typography>
      <Grid item xs={12}>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          boxShadow={2}
          paddingTop={"50px"}
          paddingBottom={"50px"}
          sx={{
            backgroundColor: colors.light.main,
          }}
        >
          <Grid item xs={12}>
            <Grid container direction={"column"} alignItems={"center"}>
              <Grid item>
                <Typography
                  variant="h6"
                  sx={{ color: colors.dark.main }}
                  textAlign={"center"}
                >
                  Entidad Financiera + Cliente + Comodidad + Confort +
                </Typography>
                <Typography
                  variant="h1"
                  fontFamily={"DarkerGrotesque"}
                  sx={{ color: colors.dark.main }}
                  textAlign={"center"}
                >
                  Nuestros servicios
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              columnSpacing={2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {gadget &&
                gadget.map((gdt, index) => (
                  <Grid item xs={4}>
                    <Grid
                      container
                      columnSpacing={2}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Grid item xs={2}>
                        {gadget.length > 0 && (
                          <img
                            src={gdt.imgPath}
                            alt={gdt.label}
                            width={"90%"}
                            height={"90%"}
                          />
                        )}
                      </Grid>
                      <Grid item xs={8}>
                        <Grid
                          container
                          direction={"column"}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <Grid item>
                            {gadget.length > 0 && (
                              <Typography
                                variant="h4"
                                fontFamily={"DarkerGrotesque"}
                                sx={{ color: colors.dark.main }}
                                textAlign={"left"}
                              >
                                {gdt.label}
                              </Typography>
                            )}
                            {gadget.length > 0 && (
                              <Typography
                                variant="body1"
                                fontFamily={"DarkerGrotesque"}
                                sx={{ color: colors.dark.main }}
                                textAlign={"left"}
                              >
                                {gdt.description}
                              </Typography>
                            )}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid item xs={8}>
            <Typography
              variant="h1"
              sx={{ color: colors.light.main }}
              textAlign={"center"}
              margin={"auto"}
              paddingTop={"10px"}
              paddingBottom={"25px"}
            >
              Te presentamos variedad de plantillas que se adaptan a tus
              necesidades.
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: colors.light.main }}
              textAlign={"center"}
              paddingBottom={"25px"}
            >
              Plantillas prediseñadas y más!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          boxShadow={2}
        >
          <Grid item xs={12}>
            <Slider />
          </Grid>
          <Grid item xs={12}>
            <Grid container direction={"column"} alignItems={"center"}>
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
