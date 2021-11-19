function Login() {
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
  
    function toggleShowPassword(){
      const password = document.querySelector('#password_id');
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
    }
  
    return (
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"/>
        <h3>Username</h3>
        <form>
          <input type="text" />
        </form>
        <h3>Password</h3>
        <form>
          <input type="password" minlength="5" maxlength="15" id="password_id" required />
          <i className="far fa-eye" id="togglePassword" onClick={toggleShowPassword} style={{marginLeft: "-25px", cursor: "pointer"}}/>
        </form>
        <button type="submit">
          Submit
        </button>
      </div>
    );
  }
  
  export default Login;
  