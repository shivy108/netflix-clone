import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiPlay } from "react-icons/fi";
import YouTube from "react-youtube";

import axios from "../../axios";
import requests from "../../axios/requests";
import styled from "styled-components";
import {IoIosCloseCircleOutline} from "react-icons/io";
const movieTrailer = require("movie-trailer");

// Style
const truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};
const Header = styled.header`
  height: 28rem;
  width:100%;
  background-size: cover;
  object-fit: cover;
  ${({ image }) =>
    image &&
    `
background-image:url("https://image.tmdb.org/t/p/original/${image?.backdrop_path}")

`}
`;
const HeaderTitle = styled.h1`
  font-family: "Bebas Neue", cursive;
  font-size: 3rem;
  font-weight: 800;
`;
const HeaderDescription = styled.h3`
  font-family: "Quicksand", sans-serif;
  width: 45rem;
  line-height: 1.5;
  padding-top: 1rem;
  font-size: 0.8rem;
  max-width: 360px;
  height: 80px;
`;
const HeaderContent = styled.div`
  height: 100%;
  color: whitesmoke;
  margin-top: 2rem;
  margin-left: 2rem;
`;
const ButtonContainer = styled.div`
  margin-left: 3rem;
  margin-top: 10px;
`;
const HeaderButton = styled.button`
  font-weight: 400;
  font-size: 1rem;
  opacity: 0.7;
  border-radius: 3px;
  height: 2rem;
  width: 6rem;
  border: none;
  color: whitesmoke;
  background-color: #111;
  margin-left: 10px;
  font-family: "Quicksand", sans-serif;

  &:hover {
    transform: scale(1.07);
    border: solid 1.5px;
    background-color: whitesmoke;
    border-color: #111;
    color: #111;
  }
`;
const HeaderFade = styled.div`
height:7rem;
width:100%;
position:absolute;
z-index: 1;
background-image: linear-gradient(180deg,transparent,rgba(37,37,37,0.61),#111);
margin-top:21rem;
`;


// React
function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState();

  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(requests.getNetflixOriginals)
        .then((response) =>
          setMovie(
            response.data.results[
              Math.floor(Math.random() * response.data.results.length - 1)
            ]
          )
        );
    };
    fetchData();
  }, []);
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
    <Header image={movie} >
      <HeaderFade></HeaderFade>
      {trailerUrl?<div  onClick={()=>setTrailerUrl("")}><IoIosCloseCircleOutline/></div>:<></>}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      <HeaderContent>
        <HeaderTitle>
          {movie?.name || movie?.title || movie?.original_name}
        </HeaderTitle>
        <HeaderDescription>{truncate(movie?.overview, 200)}</HeaderDescription>
        <ButtonContainer>
          <HeaderButton
            onClick={() => {
              onCLickHandler(movie);
            }}
          >
            Play <FiPlay />
          </HeaderButton>
          <HeaderButton>
            My List <AiOutlinePlus />
          </HeaderButton>
        </ButtonContainer>
        
      </HeaderContent>
      
    </Header>
  );
}

export default Banner;
