import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../../axios";
import YouTube from "react-youtube";
// import { HiOutlineArrowCircleLeft } from "react-icons/hi";
// import { HiOutlineArrowCircleRight } from "react-icons/hi";
const movieTrailer = require("movie-trailer");

// Style
const RowTitle = styled.h2`
  color: whitesmoke;
  margin-left: 2rem;
  font-family: "Bebas Neue", cursive;
`;

const RowImg = styled.img`
  
  height: 10rem;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.18);
    padding: 2px;
  }
  padding: 2px;
  ${({ style }) =>
    style &&
    `
  height:20rem;
  padding: 2px;
  &:hover {
    transform: scale(1.18);
    padding:2px;
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
// const Left = styled.div`
//   margin-top: 110px;
//   float: left;
//   position: absolute;
//   z-index: 1;
//   font-size: 80px;
//   color: transparent;
//   transition: 450ms;
//   &:hover {
//     transform: scale(1.08);
//     color: whitesmoke;
//     transition: 450ms;
//     opacity: 0.6;
//   }
// `;
// const Right = styled.div`
//   margin-left: 79rem;
//   position: absolute;
//   margin-top: 110px;
//   z-index: 1;
//   font-size: 80px;
//   color: transparent;
//   transition: 450ms;
//   &:hover {
//     transform: scale(1.08);
//     color: whitesmoke;
//     transition: 450ms;
//     opacity: 0.6;
//   }
//   &:hover {
//     transform: scale(1.08);
//     color: whitesmoke;
//     transition: 450ms;
//   }
// `;
// React

// API
const base_url = "https://image.tmdb.org/t/p/w500/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState();

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
      movieTrailer(movie?.name || movie?.title || movie?.original_name, "")
        .then((response) => {
          console.log(response);
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
        {/* <Left>
          <HiOutlineArrowCircleLeft />
        </Left>
        <Right>
          <HiOutlineArrowCircleRight />
        </Right> */}
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
    </RowContainer>
  );
}

export default Row;
