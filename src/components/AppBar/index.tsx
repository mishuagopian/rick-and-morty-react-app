import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppBar as MaterialAppBar, Box, Toolbar } from "@mui/material";

import rickAndMortyPng from "../../assets/rick-and-morty.png";
import { RootState } from "../../app/store";
import { homePath } from "../../constants/routes";

import BackButton from "../BackButton/";
import MenuButton from "../MenuButton/";
import { styles } from "./styles";

export const appBarHeight = "64px";

const AppBar = (): JSX.Element => {
  const { showBackButton, showMenuButton } = useSelector(
    (state: RootState) => state.appBar
  );

  return (
    <MaterialAppBar sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <Box sx={styles.leftButtons}>
          {showBackButton && <BackButton />}
          {showMenuButton && <MenuButton />}
        </Box>
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
};

export default AppBar;
