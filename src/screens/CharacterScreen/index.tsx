import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Container, Card, CardMedia, Typography } from "@mui/material";

import { AppDispatch, RootState } from "../../app/store";
import { getCharacter, clearState } from "../../feature/characterSlice";
import { showBackButton } from "../../feature/appBarSlice";
import { charactersPath } from "../../constants/routes";

import Description from "./components/Description";
import EpisodesTabs from "./components/EpisodesTabs";
import LoadingSkeleton from "./components/LoadingSkeleton";

import { styles } from "./styles";

const CharacterScreen = (): JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const character = useSelector((state: RootState) => state.character.value);
  const loading = useSelector((state: RootState) => state.character.loading);
  const error = useSelector((state: RootState) => state.character.error);

  useEffect(() => {
    dispatch(getCharacter(id));
    dispatch(showBackButton(true));
    return () => {
      dispatch(showBackButton(false));
    };
  }, [dispatch, id]);

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    dispatch(clearState());
    navigate(charactersPath);
    return <LoadingSkeleton />;
  }

  return (
    <>
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
      <EpisodesTabs />
    </>
  );
};

export default CharacterScreen;
