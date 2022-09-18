import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import WestIcon from "@mui/icons-material/West";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <IconButton aria-label="back" color="inherit" onClick={() => navigate(-1)}>
      <WestIcon />
    </IconButton>
  );
};

export default BackButton;
