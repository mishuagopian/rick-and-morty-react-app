import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Container, Card, CardMedia, Typography } from "@mui/material";

import { AppDispatch, RootState } from "../../app/store";
import { getCharacter } from "../../feature/characterSlice";

import PageContainer from "../../components/PageContainer";
import Description from "./Description";

import { styles } from "./styles";

const CharacterScreen = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const character = useSelector((state: RootState) => state.character.value);
  console.log(character);

  useEffect(() => {
    dispatch(getCharacter(id));
  }, [dispatch, id]);

  return (
    // TODO: Implement Left button to go back in history
    <PageContainer>
      <Container sx={styles.container}>
        <Card sx={styles.card}>
          <CardMedia
            component="img"
            image={character.image}
            alt={character.name}
          />
        </Card>
        <Box sx={styles.description}>
          <Typography variant="h5">{character.name}</Typography>
          <Description title="Status" value={character.status} />
          <Description title="Species" value={character.species} />
          <Description title="Type" value={character.type} />
          <Description title="Gender" value={character.gender} />
          <Description title="Origin" value={character.origin?.name} />
          <Description
            title="Last know location"
            value={character.location?.name}
          />
          <Description title="Creation date" value={character.created} />
        </Box>
      </Container>
    </PageContainer>
  );
};

export default CharacterScreen;
