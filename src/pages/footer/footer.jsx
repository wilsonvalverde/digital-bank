import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import colors from "../../styles/theme/base/colors";

export const Footer = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%", height: "1" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{backgroundColor:colors.light.main}}
      >
        {/* <BottomNavigationAction label="Recents" />
        <BottomNavigationAction label="Favorites" />
        <BottomNavigationAction label="Nearby" /> */}
      </BottomNavigation>
    </Box>
  );
};
