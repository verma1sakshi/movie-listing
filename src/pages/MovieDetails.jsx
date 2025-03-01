import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails } from "../api/api";
import { Card, CardMedia, CardContent, Typography, Button, CircularProgress } from "@mui/material";
import React from "react";
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieDetails(id);
      setMovie(data);
      setLoading(false);
    };
    fetchMovie();
  }, [id]);

  if (loading) return <CircularProgress sx={{ m: 2 }} />;

  return (
    <Card sx={{ maxWidth: 600, m: "auto", mt: 4 }}>
      <CardMedia component="img"  image={movie.Poster} alt={movie.Title}sx={{border:"2px solid black", margin:"2px", borderRadius:"10px", width:"100%",
  height: "100%",
  objectFit: "cover"}} />
      <CardContent sx={{border:"2px solid black", margin:"5px", borderRadius:"10px" }}>
        <Typography variant="h4">{movie.Title}</Typography>
        <Typography><strong>Year:</strong> {movie.Year}</Typography>
        <Typography><strong>Genre:</strong> {movie.Genre}</Typography>
        <Typography><strong>Plot:</strong> {movie.Plot}</Typography>
        <Button component={Link} to="/" variant="contained" sx={{ mt: 2 }}>Back to Home</Button>
      </CardContent>
    </Card>
  );
};

export default MovieDetails;
