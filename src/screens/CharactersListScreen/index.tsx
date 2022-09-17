import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Pagination, useMediaQuery, useTheme } from "@mui/material";

import { getCharacters, setPage } from "../../feature/charactersSlice";
import { AppDispatch, RootState } from "../../app/store";
import PageContainer from "../../components/PageContainer";

import ResponsiveDrawer from "./components/ResponsiveDrawer";
import { drawerWidth } from "./components/ResponsiveDrawer/styles";
import CharacterCard from "./components/CharacterCard";
import { styles } from "./styles";

const CharactersListScreen = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const characters = useSelector((state: RootState) => state.characters.values);
  const pagesInfo = useSelector((state: RootState) => state.characters.info);
  const filters = useSelector((state: RootState) => state.characters.filters);
  const currentPage = useSelector(
    (state: RootState) => state.characters.currentPage
  );
  const loading = useSelector((state: RootState) => state.characters.loading);

  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.up("sm"));

  const handlePageChange = useCallback(
    (_event: React.ChangeEvent<unknown>, page: number) => {
      dispatch(setPage(page));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch, currentPage, filters]);

  return (
    // TODO: Implement Left button to open Responsive Drawer
    <PageContainer>
      <ResponsiveDrawer />
      <Box sx={styles.container(responsive, drawerWidth)}>
        <Box sx={styles.list}>
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
        <Pagination
          sx={styles.pagination}
          page={currentPage}
          count={pagesInfo.pages}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
          color="primary"
          disabled={loading}
        />
      </Box>
    </PageContainer>
  );
};

export default CharactersListScreen;
