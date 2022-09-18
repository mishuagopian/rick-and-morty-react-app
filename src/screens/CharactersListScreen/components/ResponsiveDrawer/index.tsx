import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Drawer,
  Link,
  List,
  ListItem,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import Select from "../../../../components/Select";
import {
  clearFilters,
  setNameFilter,
  setGenderFilter,
  setStatusFilter,
} from "../../../../feature/charactersSlice";
import { AppDispatch, RootState } from "../../../../app/store";
import {
  genders,
  status,
  CharacterGender,
  CharacterStatus,
} from "../../../../models/Character";
import {
  showMenuButton,
  showMenu as setShowMenu,
} from "../../../../feature/appBarSlice";

import { styles } from "./styles";

const ResponsiveDrawer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("sm"));

  const filters = useSelector((state: RootState) => state.characters.filters);
  const { showMenu } = useSelector((state: RootState) => state.appBar);

  const dismissMenu = useCallback(() => {
    dispatch(setShowMenu(false));
  }, [dispatch]);

  const handleClearFilters = useCallback(() => {
    dispatch(clearFilters());
  }, [dispatch]);

  // TODO: Add debounce/throttle
  // Couldn't create a single handler as MUI does not send target's name
  const handleNameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setNameFilter(event.target.value));
    },
    [dispatch]
  );
  const handleGenderChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setGenderFilter(event.target.value as CharacterGender));
    },
    [dispatch]
  );
  const handleStatusChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setStatusFilter(event.target.value as CharacterStatus));
    },
    [dispatch]
  );

  const filtersList = useMemo(
    () => (
      <List sx={styles.filtersList}>
        <Typography gutterBottom variant="h6">
          Filter by
        </Typography>
        <ListItem key="search">
          <TextField
            id="outlined-search"
            label="Name"
            type="search"
            value={filters.name}
            onChange={handleNameChange}
            fullWidth
          />
        </ListItem>
        <ListItem key="gender">
          <Select
            label="Gender"
            items={genders}
            value={filters.gender}
            onChange={handleGenderChange}
            fullWidth
          />
        </ListItem>
        <ListItem key="status">
          <Select
            label="Status"
            items={status}
            value={filters.status}
            onChange={handleStatusChange}
            fullWidth
          />
        </ListItem>
        <ListItem key="clear">
          <Link
            component="button"
            aria-label="clear filters"
            onClick={handleClearFilters}
          >
            Clear filters
          </Link>
        </ListItem>
        <ListItem key="dismiss" sx={styles.clearFilters}>
          <Link
            component="button"
            aria-label="dismiss filters menu"
            onClick={dismissMenu}
          >
            Dismiss menu
          </Link>
        </ListItem>
      </List>
    ),
    [
      filters.gender,
      filters.name,
      filters.status,
      handleGenderChange,
      handleNameChange,
      handleStatusChange,
      handleClearFilters,
      dismissMenu,
    ]
  );

  useEffect(() => {
    if (responsive) {
      dispatch(showMenuButton(true));
      return () => {
        dispatch(showMenuButton(false));
      };
    }
  }, [dispatch, responsive]);

  return (
    <Box>
      <Box component="nav" sx={styles.nav} aria-label="mailbox folders">
        <Drawer
          variant="temporary"
          open={showMenu}
          onClose={dismissMenu}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={styles.temporary}
        >
          {filtersList}
        </Drawer>
        <Drawer variant="permanent" sx={styles.permanent} open>
          {filtersList}
        </Drawer>
      </Box>
    </Box>
  );
};

export default ResponsiveDrawer;
