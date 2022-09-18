import React from "react";
import { Box, Container, Skeleton } from "@mui/material";

import { styles } from "../../styles";

const LoadingSkeleton = (): JSX.Element => (
  <Container sx={styles.container}>
    <Skeleton
      animation="wave"
      variant="rectangular"
      width={300}
      height={300}
      sx={styles.card}
    />
    <Box sx={styles.description}>
      <Skeleton animation="wave" width={200} height={64} variant="text" />
      {[1, 2, 3, 4].map(() => (
        <Skeleton animation="wave" width={200} height={32} variant="text" />
      ))}
      {[1, 2].map(() => (
        <Skeleton animation="wave" width={300} height={32} variant="text" />
      ))}
    </Box>
  </Container>
);

export default LoadingSkeleton;
