import React from "react";
import { Box } from "@mui/material";

import AppBar, { appBarHeight } from "../AppBar";

interface PageContainerProps {
  children?: React.ReactNode;
  LeftComponent?: React.ReactNode;
}

const PageContainer = ({
  LeftComponent,
  children,
}: PageContainerProps): JSX.Element => (
  <>
    <AppBar LeftComponent={LeftComponent} />
    <Box component="main" sx={{ flex: 1, paddingTop: appBarHeight }}>
      {children}
    </Box>
  </>
);

export default PageContainer;
