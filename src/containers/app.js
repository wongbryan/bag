import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./home";
import Budget from "./budget";
import Spending from "./spending";
import Accounts from "./accounts";
import Interest from "./interest";
import NavBar from "../components/NavBar";

const App = () => (
  <BrowserRouter>
    <div className="main-content">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/budget" component={Budget} />
      <Route exact path="/spending" component={Spending} />
      <Route exact path="/accounts" component={Accounts} />
      <Route exact path="/interest" component={Interest} />
    </div>
  </BrowserRouter>
);

export default App;
