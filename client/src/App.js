import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Search from "./Search";



function App() {

  const [user, setUser] = useState([])

  return (
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/Login">
            <Login user={user} setUser={setUser}/>
          </Route>
          <Route exact path="/Signup">
            <Signup />
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
