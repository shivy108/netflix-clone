import React from "react";

import LandingPage from "../Pages/LandingPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
// import {Provider} from 'react-redux';
// import store from

const GlobalStyle = styled.div`
  background-color: #111;
  margin: 0;
  padding:0;
`;

const Routes = () => {
  return (
    // <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <GlobalStyle>
          <Route exact path="/" component={LandingPage} />
        </GlobalStyle>
      </Switch>
    </BrowserRouter>
    // </Provider>
  );
};

export default Routes;
