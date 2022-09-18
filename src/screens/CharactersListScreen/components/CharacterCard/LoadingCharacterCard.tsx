import React, { useCallback } from "react";
import { Card, Skeleton } from "@mui/material";

import { styles } from "./styles";

const LoadingCharacterCard = () => (
  <Card sx={styles.card}>
    <Skeleton animation="wave" variant="rectangular" height={240} />
    <Skeleton animation="wave" variant="rectangular" height={220} />
  </Card>
);

export default LoadingCharacterCard;
