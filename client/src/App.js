import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home";
import Login from "./Login";
import Search from "./Search";


function App() {
  return (
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Search">
            <Search />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
