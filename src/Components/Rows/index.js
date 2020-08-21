import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../../axios";

const pixelToRem=(px)=>{
    return `${px/16}rem`
}
// Style
const RowTitle = styled.h2``;
const RowImg=styled.img`
height:12.5rem;
margin-right:0.625rem;
transition: transform 450ms;
&:hover{
    transform: scale(1.08)
};
padding:1.25rem;
`;
const RowContainer=styled.div``;
const RowPosters=styled.div`
display:flex;
overflow-y:hidden;
overflow-x:scroll;
&::-webkit-scrollbar{
    display:none;
}
`
// React


// API
const base_url= "https://image.tmdb.org/t/p/w500/";

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
              <RowImg key={id} src={`${base_url}${movie.poster_path}`} alt={movie.name}/>

          )
              
          })}
      </RowPosters>
    </RowContainer>
  );
}

export default Row;
