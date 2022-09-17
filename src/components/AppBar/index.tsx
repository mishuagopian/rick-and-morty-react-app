import React from "react";
import { AppBar as MaterialAppBar, Box, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

import rickAndMortyPng from "../../assets/rick-and-morty.png";
import { homePath } from "../../constants/routes";

import { styles } from "./styles";

interface AppBarProps {
  LeftComponent?: React.ReactNode;
}

export const appBarHeight = "64px";

const AppBar = ({ LeftComponent }: AppBarProps): JSX.Element => (
  <MaterialAppBar sx={styles.appBar}>
    <Toolbar>
      {LeftComponent}
      <Link to={homePath}>
        <Box
          component="img"
          sx={styles.image}
          alt="Rick And Morty"
          src={rickAndMortyPng}
        />
      </Link>
    </Toolbar>
  </MaterialAppBar>
);

export default AppBar;
