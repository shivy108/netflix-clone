import React from "react";
import ReactDOM from "react-dom";

import Routes from "./Routes";
import * as serviceWorker from "./serviceWorker";
import styled from "styled-components";

const GlobalStyle = styled.div`
  display:flex;
  flex-direction:column;
  background-color: #111;
  scroll-behavior: smooth;
  margin:0;
  padding:0;
  
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle>
      <Routes />
    </GlobalStyle>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
