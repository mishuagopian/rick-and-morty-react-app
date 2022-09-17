import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { appBarHeight } from "../../../../components/AppBar";

import { styles } from "./styles";

const ResponsiveDrawer = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  console.log(mobileOpen);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List sx={{ paddingTop: appBarHeight }}>
      {["Filter 1", "Filter 2", "Filter 3"].map((text) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box sx={{ flex: 1 }}>
      <Box component="nav" sx={styles.nav} aria-label="mailbox folders">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={styles.temporary}
        >
          {drawer}
        </Drawer>
        <Drawer variant="permanent" sx={styles.permanent} open>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default ResponsiveDrawer;
