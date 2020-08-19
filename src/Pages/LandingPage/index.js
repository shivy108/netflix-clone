import {React,useState} from "react";

import Row from '../../Components/Rows';
import requests from '../../axios/requests';
import axios from '../../axios';


const LandingPage = () => {
    const [popular,setPopular]=useState(axios.get(requests.getPopular));


  return (
      <>
      <Row title='Netflix Originals' fetch={popular}></Row>
      <Row title='Trending Now'></Row>
      </>
  )
};

export default LandingPage;
