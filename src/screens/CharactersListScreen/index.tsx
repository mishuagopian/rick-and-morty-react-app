import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

import { getCharacters } from "../../feature/charactersSlice";
import { AppDispatch } from "../../app/store";

import PageContainer from "../../components/PageContainer";
import ResponsiveDrawer, { drawerWidth } from "./components/ResponsiveDrawer";

const CharactersListScreen = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    // TODO: Implement Left button to open Responsive Drawer
    <PageContainer>
      <ResponsiveDrawer />
      <Box sx={{ paddingLeft: responsive ? drawerWidth : 0 }}>
        <Typography>Rick and morty characters list should be here.</Typography>
      </Box>
    </PageContainer>
  );
};

export default CharactersListScreen;
