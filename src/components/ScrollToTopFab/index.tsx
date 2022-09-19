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

import useScrollTo from "../../hooks/useScrollTo";

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
  const scrollTo = useScrollTo();

  const handleClick = useCallback(() => {
    scrollTo(anchorSelector);
  }, [scrollTo, anchorSelector]);

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
