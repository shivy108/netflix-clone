import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../../axios";
import YouTube from "react-youtube";
const movieTrailer = require("movie-trailer");

// Style
const RowTitle = styled.h2`
  color: whitesmoke;
  margin-left: 2rem;
  font-family: "Bebas Neue", cursive;
`;
const RowScrollLeft = styled.div`
  height: 100px;
  width: 100px;
  float: left;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1000;
  margin-top: 10rem;
`;

const RowImg = styled.img`
  height: 10rem;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.18);
  }
  padding: 0.825rem;
  ${({ style }) =>
    style &&
    `
  height:20rem;
  &:hover {
    transform: scale(1.20);
  }
  `}
`;
const RowContainer = styled.div`
  position: relative;
`;
const RowPosters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
// React

// API
const base_url = "https://image.tmdb.org/t/p/w500/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState();

  const scrollRow = () => {
    // console.log("hello")
    // document.getElementById("1").scroll({
    //   top: 0,
    //   left: 100,
    //   behaviour: 'smooth'
    //  })
  };

  const opts = {
    height: "550",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(fetchUrl).then((response) => {
        setMovies(response.data.results);
      });
    };
    fetchData();
  }, [fetchUrl]);

  const onCLickHandler = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name , "")
        .then(response => {
          console.log(response)
          const urlParams = new URLSearchParams(new URL(response).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    
    <RowContainer>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      <RowTitle>{title}</RowTitle>
      <RowPosters>
        {movies.map((movie, id) => {
          return (
            <RowImg
              onClick={() => {
                onCLickHandler(movie);
              }}
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
      
      <RowScrollLeft onMouseOver={scrollRow} />
    </RowContainer>
  );
}

export default Row;
