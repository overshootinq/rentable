import { useState } from "react";

function Signup({ setUser }) {
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [confPassword, setConfPassword] = useState([]);

  function toggleShowPassword() {
    const password = document.querySelector("#password");
    const type =
    password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
  }

  function toggleShowPassword2() {
    const password = document.querySelector("#password2");
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
      <h1>Sign Up</h1>
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
            style={{ display: 'block' }}
          />
          <label htmlFor="password">Password </label>
          <i
            className="far fa-eye"
            id="togglePassword"
            onClick={toggleShowPassword}
            style={{ cursor: "pointer"}}
          />
          <input
            type="password"
            value={password}
            minLength="5"
            maxLength="15"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            style={{ display: 'block' }}
            required
          />
          <label htmlFor="password">Password </label>
          <i
            className="far fa-eye"
            id="togglePassword2"
            onClick={toggleShowPassword2}
            style={{ cursor: "pointer"}}
          />
          <input
            type="password"
            value={confPassword}
            minLength="5"
            maxLength="15"
            id="password2"
            onChange={(event) => setConfPassword(event.target.value)}
            style={{ display: 'block' }}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
