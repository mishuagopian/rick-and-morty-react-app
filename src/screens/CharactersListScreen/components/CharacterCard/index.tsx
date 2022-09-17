import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { styles } from "./styles";

interface CharacterCardProps {
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  image: string;
}

const CharacterCard = ({
  name,
  status,
  species,
  image,
}: CharacterCardProps): JSX.Element => (
  <Card sx={styles.card}>
    <CardActionArea sx={styles.cardActionArea}>
      <CardMedia component="img" image={image} alt={name} height="240" />
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
    </CardActionArea>
    <CardActions>
      <Button color="primary">See more details</Button>
    </CardActions>
  </Card>
);

export default CharacterCard;
