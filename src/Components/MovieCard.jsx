import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
const MovieCard = ({ movie }) => {
  console.log(movie);
  
  return (
    <Card sx={{ maxWidth: 250, m: 1 ,boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2),", borderRadius: "12px",}}>
      <CardMedia component="img" height="350" image={movie.Poster} alt={movie.Title} />
      <CardContent>
        <Typography variant="h6">{movie.Title}</Typography>
        <Typography><strong>⏲️Year:</strong> {movie.Year}</Typography>
        <Typography><strong>💫Type:</strong> {movie.Type}</Typography>
        <Button variant="contained" component={Link} to={`/movie/${movie.imdbID}`} sx={{ mt: 1 }}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
