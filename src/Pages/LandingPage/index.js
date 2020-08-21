import React from "react";

import Row from '../../Components/Rows';
import requests from '../../axios/requests';


const LandingPage = () => {
  return (
      <>
      <Row title='Netflix Originals' fetchUrl={requests.getPopular}></Row>
      <Row title='Trending Now'></Row>
      </>
  )
};

export default LandingPage;
