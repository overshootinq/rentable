import { useState } from "react";
import { NavLink } from "react-router-dom";

function Login({ setUser }) {

  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);

  function toggleShowPassword() {
    const password = document.querySelector("#password");
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div>
      <h1>Login</h1>
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        />
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            minLength="5"
            maxLength="15"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <i
            className="far fa-eye"
            id="togglePassword"
            onClick={toggleShowPassword}
            style={{ marginLeft: "-25px", cursor: "pointer" }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="nav-bar">
        <NavLink
          to="/Signup"
          exact
          className="nav-bar-route"
          activeStyle={{
            background: "#235789",
          }}
        >
          Signup
        </NavLink>
      </div>
    </div>
  );
}

export default Login;
