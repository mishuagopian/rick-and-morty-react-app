import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Drawer,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";

import Select from "../../../../components/Select";
import {
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

import { styles } from "./styles";

const ResponsiveDrawer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector((state: RootState) => state.characters.filters);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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

  const filtersList = (
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
    </List>
  );

  return (
    <Box>
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
