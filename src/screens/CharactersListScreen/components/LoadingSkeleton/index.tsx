import React from "react";
import { Box } from "@mui/material";

import LoadingCharacterCard from "../CharacterCard/LoadingCharacterCard";
import { styles } from "../../styles";

const LoadingSkeleton = (): JSX.Element => (
  <Box sx={styles.list}>
    {[1, 2, 3].map(() => (
      <LoadingCharacterCard />
    ))}
  </Box>
);

export default LoadingSkeleton;
