import React from "react";
import { Typography } from "@mui/material";

import { styles } from "./styles";

interface DescriptionProps {
  title: string;
  value: string;
}

const Description = ({
  title,
  value,
}: DescriptionProps): JSX.Element | null => {
  if (!value) return null;

  return (
    <Typography sx={styles.container}>
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
