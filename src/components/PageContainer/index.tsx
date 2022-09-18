import React from "react";
import { Box } from "@mui/material";

import AppBar, { appBarHeight } from "../AppBar";
import { styles } from "./styles";

interface PageContainerProps {
  children?: React.ReactNode;
}

const PageContainer = ({ children }: PageContainerProps): JSX.Element => (
  <>
    <AppBar />
    <Box component="main" sx={styles(appBarHeight)}>
      {children}
    </Box>
  </>
);

export default PageContainer;
