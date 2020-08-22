import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../../axios";

// Style
const RowTitle = styled.h2`
color:white;
`;
const RowImg = styled.img`
  height: 10rem;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.18);
  }
  padding: 0.625rem;
  ${({ style}) =>
    style &&
    `
  height:20rem;
  &:hover {
    transform: scale(1.22);
  }
  `}
`;
const RowContainer = styled.div``;
const RowPosters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  scrollbar-width:none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
// React

// API
const base_url = "https://image.tmdb.org/t/p/w500/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(fetchUrl).then((response) => {
        setMovies(response.data.results);
      });
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <RowContainer>
      <RowTitle>{title}</RowTitle>
      <RowPosters>
        {movies.map((movie, id) => {
          return (
            <RowImg
              style={isLargeRow}
              key={id}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </RowPosters>
    </RowContainer>
  );
}

export default Row;
