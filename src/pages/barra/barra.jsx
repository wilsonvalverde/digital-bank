import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import colors from "../../styles/theme/base/colors";

export const BarraMenu = () => {
  const navItems = ["Home", "About", "Contact"];
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: colors.light.main,
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h5"
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "block", color: colors.green.main },
          }}
        >
          TIKE
        </Typography>
        <Stack spacing={2} direction="row">
          <Button variant="text" sx={{ color: colors.green.main }}>
            Nosotros
          </Button>
          <Button variant="text" sx={{ color: colors.green.main }}>
            Nuestros productos
          </Button>
          <Button variant="text" sx={{ color: colors.green.main }}>
            Contáctenos
          </Button>
          <Button
            variant="outlined"
            sx={{ color: colors.green.main, borderColor: colors.green.main }}
          >
            Acceder
          </Button>
          <Button
            variant="contained"
            sx={{ color: colors.white.main, backgroundColor: colors.green.main }}
          >
            Crear cuenta
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
