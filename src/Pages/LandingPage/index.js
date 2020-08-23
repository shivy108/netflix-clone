import React from "react";

import Row from "../../Components/Rows";
import requests from "../../axios/requests";
import Banner from "../../Components/Banner";
import Nav from "../../Components/Nav";

const LandingPage = () => {
  return (
    <>
      <Nav />
      <Banner></Banner>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.getNetflixOriginals}
        isLargeRow
        id="0"
      ></Row>
      <Row title="Trending Now" fetchUrl={requests.getPopular} id ="1"></Row>
      <Row title="Top Rated" fetchUrl={requests.getTopRated} id="2"></Row>
      <Row title="Upcoming" fetchUrl={requests.getUpcoming} id="3"></Row>
      <Row title="Action" fetchUrl={requests.getAction} id="4"></Row>
      <Row title="Comedy" fetchUrl={requests.getComedy} id="5"></Row>
      <Row title="Romance" fetchUrl={requests.getRomance} id="6"></Row>
      <Row title="Documentaries" fetchUrl={requests.getDocumentary} id="7"></Row>
    </>
  );
};

export default LandingPage;
