import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Pagination, useMediaQuery, useTheme } from "@mui/material";
import { debounce } from "lodash";

import useScrollTo from "../../hooks/useScrollTo";
import { getCharacters, setPage } from "../../feature/charactersSlice";
import { AppDispatch, RootState } from "../../app/store";
import ScrollToTopFab from "../../components/ScrollToTopFab";

import NoResults from "../../components/NoResults";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import CharacterCard from "./components/CharacterCard";

import LoadingSkeleton from "./components/LoadingSkeleton";
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
  const scrollTo = useScrollTo();
  const scrollToTopFabAnchorId = "scroll-to-top-anchor";
  const scrollToTopFabAnchorSelector = `#${scrollToTopFabAnchorId}`;

  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.up("sm"));

  const handlePageChange = useCallback(
    (_event: React.ChangeEvent<unknown>, page: number) => {
      dispatch(setPage(page));
    },
    [dispatch]
  );

  const debouncedGetCharacters = useMemo(
    () => debounce(async () => dispatch(getCharacters()), 300),
    [dispatch]
  );

  useEffect(() => {
    debouncedGetCharacters();
  }, [dispatch, currentPage, filters, debouncedGetCharacters]);

  useEffect(() => {
    scrollTo(scrollToTopFabAnchorSelector);
  }, [characters, scrollToTopFabAnchorSelector, scrollTo]);

  return (
    <>
      <div id={scrollToTopFabAnchorId} />
      <ResponsiveDrawer />
      <Box sx={styles.container(responsive, drawerWidth)}>
        {loading && !characters?.length ? (
          <LoadingSkeleton />
        ) : error ? (
          <NoResults />
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
                color="primary"
                disabled={loading}
              />
            )}
          </>
        )}
      </Box>
      <ScrollToTopFab anchorSelector={scrollToTopFabAnchorSelector} />
    </>
  );
};

export default CharactersListScreen;
