import React from "react";

import Row from "../../Components/Rows";
import requests from "../../axios/requests";
import Banner from '../../Components/Banner';



const LandingPage = () => {
  return (
    <>
      <Banner></Banner>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.getNetflixOriginals}
        isLargeRow
      ></Row>
      <Row title="Trending Now" fetchUrl={requests.getPopular}></Row>
      <Row title="Top Rated" fetchUrl={requests.getTopRated}></Row>
      <Row title="Upcoming" fetchUrl={requests.getUpcoming}></Row>
      <Row title="Action" fetchUrl={requests.getAction}></Row>
      <Row title="Comedy" fetchUrl={requests.getComedy}></Row>
      <Row title="Romance" fetchUrl={requests.getRomance}></Row>
      <Row title="Documentaries" fetchUrl={requests.getDocumentary}></Row>
    </>
  );
};

export default LandingPage;
