import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../../axios";

// Style
const RowTitle = styled.h2``;

const RowContainer=styled.div``;
const RowPosters=styled.div``
// React


// API
const base_url= "htttps://image.tmbd.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(fetchUrl)
      .then((response) => {
          setMovies(response.data.results)

      });
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <RowContainer>
      <RowTitle>{title}</RowTitle>
      <RowPosters>
          {movies.map((movie,id)=>{ return(
              <img key={id} src={`${base_url}${movie.poster_path}`} alt={movie.name}/>

          )
              
          })}
      </RowPosters>
    </RowContainer>
  );
}

export default Row;
