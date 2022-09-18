import React, { useCallback } from "react";
import {
  Box,
  Fab,
  Fade,
  useScrollTrigger,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { styles } from "./styles";

interface ScrollToTopFabProps {
  anchorSelector: string;
}

const ScrollToTopFab = ({
  anchorSelector,
}: ScrollToTopFabProps): JSX.Element => {
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
        <Fab size="small" color="primary" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
  );
};

export default ScrollToTopFab;
