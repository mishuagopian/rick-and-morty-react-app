import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Pagination,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { getCharacters, setPage } from "../../feature/charactersSlice";
import { AppDispatch, RootState } from "../../app/store";
import PageContainer from "../../components/PageContainer";
import ScrollToTop from "../../components/ScrollToTop";

import ResponsiveDrawer from "./components/ResponsiveDrawer";
import CharacterCard from "./components/CharacterCard";

import { drawerWidth } from "./components/ResponsiveDrawer/styles";
import { styles } from "./styles";

const CharactersListScreen = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const characters = useSelector((state: RootState) => state.characters.values);
  const pagesInfo = useSelector((state: RootState) => state.characters.info);
  const filters = useSelector((state: RootState) => state.characters.filters);
  const error = useSelector((state: RootState) => state.characters.error);
  const errorMessage = useSelector(
    (state: RootState) => state.characters.errorMessage
  );
  const currentPage = useSelector(
    (state: RootState) => state.characters.currentPage
  );
  const loading = useSelector((state: RootState) => state.characters.loading);
  const scrollToTopAnchorId = "scroll-to-top-anchor";

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
      <div id={scrollToTopAnchorId} />
      <ResponsiveDrawer />
      <Box sx={styles.container(responsive, drawerWidth)}>
        {error ? (
          <Typography sx={styles.error}>{errorMessage}</Typography>
        ) : (
          <>
            <Box sx={styles.list}>
              {characters.map(({ id, name, status, species, image }) => (
                <CharacterCard
                  id={id}
                  key={id}
                  name={name}
                  status={status}
                  species={species}
                  image={image}
                />
              ))}
            </Box>
            {!!pagesInfo?.pages && pagesInfo?.pages > 1 && (
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
            )}
          </>
        )}
      </Box>
      <ScrollToTop anchorSelector={`#${scrollToTopAnchorId}`} />
    </PageContainer>
  );
};

export default CharactersListScreen;
