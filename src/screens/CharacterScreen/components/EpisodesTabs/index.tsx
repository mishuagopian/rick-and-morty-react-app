import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Tabs, Tab } from "@mui/material";

import { RootState } from "../../../../app/store";

import { styles } from "./styles";

const EpisodesTabs = (): JSX.Element | null => {
  const [episodeIndex, setEpisodeIndex] = useState(0);
  const { episode: episodes } = useSelector(
    (state: RootState) => state.character.value
  );

  const handleClick = useCallback((_: any, index: number) => {
    setEpisodeIndex(index);
  }, []);

  if (!episodes?.length) return null;

  return (
    <Tabs
      sx={styles.tabs}
      value={episodeIndex}
      onChange={handleClick}
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      aria-label="episodes tabs"
    >
      {episodes.map((episode, index) => (
        <Tab key={episode} label={`Episode ${index + 1}`} />
      ))}
    </Tabs>
  );
};

export default EpisodesTabs;
