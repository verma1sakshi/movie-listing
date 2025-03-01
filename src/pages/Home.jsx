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
        sx={{ mb: 2 }}
        onChange={(e) => setQuery(e.target.value)}
      />
           <div className="flex justify-between mt-4 mb-6" >
        <Button variant="contained" disabled={page === 1} onClick={() => setPage(page - 1)} sx={{ml:1}}>
          Previous
        </Button>
        <Button variant="contained" onClick={() => setPage(page + 1)} sx={{mr:3}}>
          Next
        </Button>
      </div>
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

     
    </Container>
  );
};

export default Home;
