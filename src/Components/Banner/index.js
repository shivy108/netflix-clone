import React, { useEffect, useState } from "react";

import axios from "../../axios";
import requests from "../../axios/requests";
import styled from "styled-components";

// Style
const truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};
const Header = styled.header`
  height: 28rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  ${({ image }) =>
    image &&
    `
background-image:url("https://image.tmdb.org/t/p/original/${image?.backdrop_path}")
`}
`;
const HeaderTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
`;
const HeaderDescription = styled.h3`
  width: 45rem;
  line-height: 1.5;
  padding-top: 1rem;
  font-size: 0.8rem;
  max-width: 360px;
  height: 80px;
`;
const HeaderContent = styled.div`
  color: whitesmoke;
`;
const HeaderButton = styled.button``;

// React
function Banner() {
  const [movie, setMovie] = useState([]);

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
        <HeaderDescription>{truncate(movie?.overview, 500)}</HeaderDescription>
        <HeaderButton>Play</HeaderButton>
        <HeaderButton>My List</HeaderButton>
      </HeaderContent>
    </Header>
  );
}

export default Banner;
