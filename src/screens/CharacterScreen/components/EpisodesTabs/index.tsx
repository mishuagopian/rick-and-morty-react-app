import React, { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Divider, Tabs, Tab, useTheme } from "@mui/material";

import { AppDispatch, RootState } from "../../../../app/store";
import { getEpisode } from "../../../../feature/characterSlice";

import Loading from "../../../../components/Loading";
import Description from "../Description";

import { styles } from "./styles";

const EpisodesTabs = (): JSX.Element | null => {
  const theme = useTheme();
  const dispatch = useDispatch<AppDispatch>();

  const [episodeIndex, setEpisodeIndex] = useState(0);
  const { episode: episodes } = useSelector(
    (state: RootState) => state.character.value
  );
  const episode = useSelector((state: RootState) => state.character.episode);
  const episodeLoading = useSelector(
    (state: RootState) => state.character.episodeLoading
  );

  const handleClick = useCallback(
    (_: any, index: number) => {
      if (episodeLoading) return;
      setEpisodeIndex(index);
      dispatch(getEpisode(episodes[index]));
    },
    [dispatch, episodes, episodeLoading]
  );

  useEffect(() => {
    if (episodes?.length) {
      dispatch(getEpisode(episodes[0]));
    }
  }, [dispatch, episodes]);

  if (!episodes?.length) return null;

  const loadingStyles = episodeLoading ? styles.loading : {};

  return (
    <Box sx={{ ...styles.tabs(theme), ...loadingStyles }}>
      <Tabs
        value={episodeIndex}
        onChange={handleClick}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="episodes tabs"
      >
        {episodes.map((currentEpisode, index) => (
          <Tab
            disabled={episodeLoading}
            key={currentEpisode}
            label={`Episode ${index + 1}`}
          />
        ))}
      </Tabs>
      <Divider sx={styles.divider} />
      {episodeLoading ? (
        <Loading />
      ) : (
        <>
          <Description center title="Episode ID" value={episode.id} />
          <Description center title="Episode Name" value={episode.name} />
          <Description
            center
            title="Episode Air Date"
            value={episode.air_date}
          />
          <Description center title="Episode Code" value={episode.episode} />
        </>
      )}
    </Box>
  );
};

export default EpisodesTabs;
