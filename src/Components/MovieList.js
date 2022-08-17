import React from "react";
import MovieCard from "./MovieCard";
import { Container } from "react-bootstrap";

function MovieList({list}) {
  const styledDiv = {
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <Container>
      <div style={styledDiv}>
      {list.map(({ id, title, desc, url, rating }) => (
        <MovieCard key={id} title={title} desc={desc} url={url} rating={rating}></MovieCard>
      ))}
      </div>
    </Container>
  );
}

export default MovieList;
