import React from "react";
import { Typography } from "@mui/material";

import { styles } from "./styles";

interface DescriptionProps {
  title: string;
  value: string | number;
  center?: boolean;
}

const Description = ({
  title,
  value,
  center,
}: DescriptionProps): JSX.Element | null => {
  if (!value) return null;
  const centerStyle = center ? styles.center : {};

  return (
    <Typography sx={{ ...styles.container, ...centerStyle }}>
      <Typography variant="body1" sx={styles.title}>
        {title}:
      </Typography>
      <Typography variant="body1" sx={styles.value}>
        {value}
      </Typography>
    </Typography>
  );
};

export default Description;
