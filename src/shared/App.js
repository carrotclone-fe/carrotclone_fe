// import logo from './logo.svg';
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import "./App.css";
import { history } from "../redux/configStore";

import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Signup from "../pages/Signup";
import Start from "../pages/Start";
import Write from "../pages/Write";
import React from "react";
import Permit from "./Permit";
import Test from "../pages/Test";

function App() {
  // Permit();

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Start} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/main" exact component={Main} />
        <Route path="/write" exact component={Write} />
        <Route path="/test" exact component={Test} />
        <Route path="/write/:postid" exact component={Write} />
        <Route path="/detail/:postid" exact component={Detail} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
