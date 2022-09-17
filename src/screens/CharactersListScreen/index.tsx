import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, useMediaQuery, useTheme } from "@mui/material";

import { getCharacters } from "../../feature/charactersSlice";
import { AppDispatch, RootState } from "../../app/store";
import PageContainer from "../../components/PageContainer";

import ResponsiveDrawer from "./components/ResponsiveDrawer";
import { drawerWidth } from "./components/ResponsiveDrawer/styles";
import CharacterCard from "./components/CharacterCard";
import { styles } from "./styles";

const CharactersListScreen = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const characters = useSelector((state: RootState) => state.characters.values);

  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    // TODO: Implement Left button to open Responsive Drawer
    <PageContainer>
      <ResponsiveDrawer />
      <Box sx={styles.list(responsive, drawerWidth)}>
        {characters.map(({ id, name, status, species, image }) => (
          <CharacterCard
            key={id}
            name={name}
            status={status}
            species={species}
            image={image}
          />
        ))}
      </Box>
    </PageContainer>
  );
};

export default CharactersListScreen;
