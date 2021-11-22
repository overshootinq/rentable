import { NavLink } from "react-router-dom";

const linkStyles = {
  padding: "10px 20px 10px 20px",
  margin: "10px 10px 10px 10px",
  background: "#f1d302",
  textDecoration: "none",
  color: "white",
  justifyContent: "center",
  textAlign: "center",
  borderRadius: "8px",
};

const isLoggedIn = props.isLoggedIn

function NavBar() {
  return (
    <div className="nav-bar">
      <NavLink
        to="/"
        exact
        style={linkStyles}
        className="nav-bar-route"
        activeStyle={{
          background: "#235789",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/Search"
        exact
        style={linkStyles}
        className="nav-bar-route"
        activeStyle={{
          background: "#235789",
        }}
      >
        Search
      </NavLink>
{/* ternary goes here for login/logout  and username */}
{/* if sessions exists, display logout + username, else login */}
      {(isLoggedIn)
      ?   {<NavLink
        to="/Logout" 
        // ^logout?
        exact
        style={linkStyles}
        className="nav-bar-route"
        activeStyle={{
          background: "#235789",
        }}
      >
        Logout
      </NavLink>}  
      :   {      <NavLink
        to="/Login"
        exact
        style={linkStyles}
        className="nav-bar-route"
        activeStyle={{
          background: "#235789",
        }}
      >
        Login
      </NavLink>
}}
<NavLink
        to="/Logout" 
        // ^logout?
        exact
        style={linkStyles}
        className="nav-bar-route"
        activeStyle={{
          background: "#235789",
        }}
      >
        Logout
      </NavLink>

{/*  */}
      <NavLink
        to="/Login"
        exact
        style={linkStyles}
        className="nav-bar-route"
        activeStyle={{
          background: "#235789",
        }}
      >
        Login
      </NavLink>
      {/* end of ternary */}
    </div>
  );
}

export default NavBar;
