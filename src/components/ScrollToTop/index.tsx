import React, { useCallback } from "react";
import {
  Box,
  Button,
  Fade,
  useScrollTrigger,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { styles } from "./styles";

interface ScrollToTopProps {
  anchorSelector: string;
}

const ScrollToTop = ({ anchorSelector }: ScrollToTopProps): JSX.Element => {
  const theme = useTheme();
  const fullscreen = useMediaQuery(theme.breakpoints.up("md"));

  const trigger = useScrollTrigger({ disableHysteresis: true });

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const anchor = (
        (event.target as HTMLDivElement).ownerDocument || document
      ).querySelector(anchorSelector);

      if (anchor) {
        anchor.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    },
    [anchorSelector]
  );

  return (
    <Fade in={trigger}>
      <Box onClick={handleClick} sx={styles.button(fullscreen)}>
        <Button variant="contained">Take me up!</Button>
      </Box>
    </Fade>
  );
};

export default ScrollToTop;
