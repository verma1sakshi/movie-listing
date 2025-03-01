import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
const MovieCard = ({ movie }) => {
  return (
    <Card sx={{ maxWidth: 250, m: 1 }}>
      <CardMedia component="img" height="350" image={movie.Poster} alt={movie.Title} />
      <CardContent>
        <Typography variant="h6">{movie.Title}</Typography>
        <Typography><strong>Year:</strong> {movie.Year}</Typography>
        <Button variant="contained" component={Link} to={`/movie/${movie.imdbID}`} sx={{ mt: 1 }}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
