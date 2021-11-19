import { useState } from 'react'

function Login({setUser}) {
  // function handleSubmit(event) {
  //     event.preventDefault();
  //     fetch("http://localhost:8000/jokes", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         setup: formData.setup,
  //         delivery: formData.delivery,
  //         category: formData.category,
  //       }),
  //     })
  //       .then((response) => response.json())

  //       .then((newJoke) => sendNewJoke(newJoke));
  //     setFormData({
  //       category: "",
  //       setup: "",
  //       delivery: "",
  //     });
  //   }

  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])

  function toggleShowPassword() {
    const password = document.querySelector("#password_id");
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
          minlength="5"
          maxlength="15"
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
  );
}

export default Login;
