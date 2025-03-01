import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: "none", color: "white",textAlign: "center", fontSize: "1.5rem", fontWeight: "bold", }}>
          🎬 Movie Finder
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
