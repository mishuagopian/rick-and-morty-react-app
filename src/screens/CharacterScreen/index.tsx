import React from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import PageContainer from "../../components/PageContainer";

const CharacterScreen = (): JSX.Element => {
  const { id } = useParams();

  return (
    // TODO: Implement Left button to go back in history
    <PageContainer>
      <Box>
        <Typography>{`Character ${id} screen.`}</Typography>
      </Box>
    </PageContainer>
  );
};

export default CharacterScreen;
