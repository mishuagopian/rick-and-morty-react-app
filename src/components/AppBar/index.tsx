import React from "react";
import { AppBar as MaterialAppBar, Box, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

import rickAndMortyPng from "../../assets/rick-and-morty.png";
import { homePath } from "../../constants/routes";

interface AppBarProps {
  LeftComponent?: React.ReactNode;
}

export const appBarHeight = "64px";

const AppBar = ({ LeftComponent }: AppBarProps): JSX.Element => (
  <MaterialAppBar
    sx={{
      alignItems: "center",
      flex: 1,
      justifyContent: "center",
      zIndex: (theme) => theme.zIndex.drawer + 1,
    }}
  >
    <Toolbar>
      {LeftComponent}
      <Link to={homePath}>
        <Box
          component="img"
          sx={{ height: 50 }}
          alt="Rick And Morty"
          src={rickAndMortyPng}
        />
      </Link>
    </Toolbar>
  </MaterialAppBar>
);

export default AppBar;
