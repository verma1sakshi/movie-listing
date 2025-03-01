import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails } from "../api/api";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import React from "react";
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieDetails(id);
      console.log(data);

      setMovie(data);
      setLoading(false);
    };
    fetchMovie();
  }, [id]);

  if (loading) return <CircularProgress sx={{ m: 2 }} />;

  return (
    <Card sx={{ maxWidth: 600, m: "auto", mt: 4 , boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2),", borderRadius: "12px",}}>
      <CardMedia
        component="img"
        image={movie.Poster}
        alt={movie.Title}
        sx={{
         
          margin: "8px auto",
          borderRadius: "12px",
          width: "80%",
          height: "300px",
          objectFit: "contain",
        
          padding: "10px",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          display: "block",
          "&:hover": {
            transform: "scale(1.05)",
            
          },
        }}
      />

<CardContent
  sx={{
    border: "2px solid #ddd", // Softer border for a polished look
    margin: "10px",
    borderRadius: "12px",
    padding: "16px",
    backgroundColor: "#f9f9f9", // Light background for contrast
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
  }}
>
  <Typography variant="h4" sx={{ fontWeight: "bold", color: "#333", mb: 1 }}>
    {movie.Title}
  </Typography>
  
  <Typography sx={{ fontSize: "16px", color: "#444", mb: 1 }}>
    <strong>⏲️ Year:</strong> {movie.Year}
  </Typography>
  
  <Typography sx={{ fontSize: "16px", color: "#444", mb: 1 }}>
    <strong>🕒 Runtime:</strong> {movie.Runtime}
  </Typography>
  
  <Typography sx={{ fontSize: "16px", color: "#444", mb: 1 }}>
    <strong>🎭 Genre:</strong> {movie.Genre}
  </Typography>
  
  <Typography sx={{ fontSize: "16px", color: "#444", mb: 1 }}>
    <strong>📜 Plot:</strong> {movie.Plot}
  </Typography>
  
  <Typography sx={{ fontSize: "16px", color: "#444", mb: 1 }}>
    <strong>⭐ Rated:</strong> {movie.Rated}
  </Typography>
  
  <Typography sx={{ fontSize: "16px", color: "#444", mb: 1 }}>
    <strong>🌎 Language:</strong> {movie.Language}
  </Typography>
  
  <Typography sx={{ fontSize: "16px", color: "#444", mb: 2 }}>
    <strong>✍️ Writer:</strong> {movie.Writer}
  </Typography>
  
  <Typography sx={{ fontSize: "16px", color: "#444", mb: 2 }}>
    <strong>🎭 Actors:</strong> {movie.Actors}
  </Typography>

  <Button
    component={Link}
    to="/"
    variant="contained"
    sx={{
      mt: 2,
      backgroundColor: "#1976d2",
      color: "#fff",
      "&:hover": { backgroundColor: "#1565c0" },
    }}
  >
    Back to Home
  </Button>
</CardContent>

    </Card>
  );
};

export default MovieDetails;
