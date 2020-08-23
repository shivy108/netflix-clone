import React, { useEffect, useState } from "react";
import {AiOutlinePlus} from 'react-icons/ai';
import {FiPlay} from 'react-icons/fi';

import axios from "../../axios";
import requests from "../../axios/requests";
import styled from "styled-components";

// Style
const truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};
const Header = styled.header`
  height: 28rem;
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
  height:100%;
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
const HeaderFade=styled.div`
`

// React
function Banner() {
  const [movie, setMovie] = useState([]);
  console.log(movie)

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

  return (
    <Header image={movie}>
      <HeaderContent>
        <HeaderTitle>
          {movie?.name || movie?.title || movie?.original_name}
        </HeaderTitle>
        <HeaderDescription>{truncate(movie?.overview, 200)}</HeaderDescription>
        <ButtonContainer>
          <HeaderButton>Play <FiPlay/></HeaderButton>
          <HeaderButton>My List <AiOutlinePlus/></HeaderButton>
        </ButtonContainer>
      </HeaderContent>
      <HeaderFade></HeaderFade>
    </Header>
  );
}

export default Banner;
