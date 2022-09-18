import React from "react";
import { Box, CircularProgress } from "@mui/material";

import { styles } from "./styles";

const Loading = () => (
  <Box sx={styles.container}>
    <CircularProgress />
  </Box>
);

export default Loading;
