import React from "react";

import LandingPage from "../Pages/LandingPage";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import {Provider} from 'react-redux';
// import store from 


const Routes = () => {
  return (
    // <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component={LandingPage}/>
        </Switch>
      </BrowserRouter>
    // </Provider>
  );
};

export default Routes;
