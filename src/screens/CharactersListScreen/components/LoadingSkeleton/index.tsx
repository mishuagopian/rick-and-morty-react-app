import React from "react";
import { Box } from "@mui/material";

import LoadingCharacterCard from "../CharacterCard/LoadingCharacterCard";
import { styles } from "../../styles";

const LoadingSkeleton = (): JSX.Element => (
  <Box sx={styles.list}>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
      <LoadingCharacterCard />
    ))}
  </Box>
);

export default LoadingSkeleton;
