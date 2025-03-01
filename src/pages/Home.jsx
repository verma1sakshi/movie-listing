import { useState, useEffect } from "react";
import { searchMovies } from "../api/api";
import { TextField, Container, Grid, Button, CircularProgress } from "@mui/material";
import MovieCard from "../Components/MovieCard";
import React from "react";
const Home = () => {
  const [query, setQuery] = useState("marvel");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const data = await searchMovies(query, page);
      setMovies(data.Search || []);
      setLoading(false);
    };
    fetchMovies();
  }, [query, page]);

  return (
    <Container sx={{ mt: 4 }}>
      
      <TextField
  label="Search Movies Here"
  fullWidth
  variant="outlined"
  sx={{
    mb: 2,
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px', 
      backgroundColor: '#f9f9f9', 
      '&:hover fieldset': {
        borderColor: '#007bff', 
      },
      '&.Mui-focused fieldset': {
        borderColor: '#007bff', 
      },
    },
    '& .MuiInputLabel-root': {
      color: '#555',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#007bff',
    },
  }}
  onChange={(e) => setQuery(e.target.value)}
/>


      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Grid item key={movie.imdbID} xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={movie} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <p style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: "bold", color: "gray" }}>
              No movies found 😞
            </p>
          </Grid>
        )}
      </Grid>
      
      )}

<div className="flex justify-center items-center space-x-2 mt-4 text-2xl font-semibold ">
      <Button variant="contained" disabled={page === 1} onClick={() => setPage(page - 1)} sx={{m:4}}>Previous</Button>
  <button className="join-item btn">Page {page}</button>
  <Button variant="contained" onClick={() => setPage(page + 1)} sx={{m:4}}>
          Next
        </Button>
</div>
    </Container>
  );
};

export default Home;
