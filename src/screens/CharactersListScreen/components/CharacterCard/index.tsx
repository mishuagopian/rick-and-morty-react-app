import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { buildCharacterPath } from "../../../../constants/routes";
import { styles } from "./styles";

interface CharacterCardProps {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  image: string;
}

const CharacterCard = ({
  id,
  name,
  status,
  species,
  image,
}: CharacterCardProps): JSX.Element => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate(buildCharacterPath(id));
  }, [navigate, id]);

  return (
    <Card sx={styles.card}>
      <CardMedia
        onClick={handleClick}
        component="img"
        image={image}
        alt={name}
        height="240"
        sx={styles.image}
      />
      <CardContent sx={styles.cardContent}>
        <Typography gutterBottom variant="h5">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status:
        </Typography>
        <Typography mb={1} variant="body1">
          {status}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Species:
        </Typography>
        <Typography variant="body1">{species}</Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" onClick={handleClick} fullWidth>
          See more details
        </Button>
      </CardActions>
    </Card>
  );
};

export default CharacterCard;
