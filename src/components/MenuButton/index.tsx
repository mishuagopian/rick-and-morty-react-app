import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { AppDispatch } from "../../app/store";
import { showMenu } from "../../feature/appBarSlice";

const MenuButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = useCallback(() => {
    dispatch(showMenu(true));
  }, [dispatch]);

  return (
    <IconButton aria-label="menu" color="inherit" onClick={handleClick}>
      <MenuIcon />
    </IconButton>
  );
};

export default MenuButton;
