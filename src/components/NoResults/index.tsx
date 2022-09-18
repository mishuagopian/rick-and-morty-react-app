import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";

import { styles } from "./styles";

const NoResults = () => (
  <Box sx={styles.container}>
    <SearchOffIcon sx={styles.icon} />
    <Typography>No results found!</Typography>
  </Box>
);

export default NoResults;
