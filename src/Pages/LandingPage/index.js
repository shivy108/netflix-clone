import React from "react";

import Row from '../../Components/Rows';
import requests from '../../axios/requests';


const LandingPage = () => {
  return (
      <>
      <Row title='Netflix Originals' fetchUrl={requests.getNetflixOriginals}></Row>
      <Row title='Trending Now' fetchUrl={requests.getPopular}></Row>
      <Row title='Top Rated' fetchUrl={requests.getTopRated}></Row>
      <Row title='Upcoming' fetchUrl={requests.getUpcoming}></Row>
      <Row title='Action' fetchUrl={requests.getAction}></Row>
      <Row title='Comedy' fetchUrl={requests.getComedy}></Row>
      <Row title='Romance' fetchUrl={requests.getRomance}></Row>
      <Row title='Documentaries' fetchUrl={requests.getDocumentary}></Row>
     
      </>
  )
};

export default LandingPage;
