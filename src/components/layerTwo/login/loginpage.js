import React from "react";
function LoginPage({ nnnn }) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        console.log(e.target.username.value);
      }}
    >
      <label>
        <b>Username</b>
      </label>
      <input
        type="text"
        placeholder="Enter Username"
        name="username"
        required
      />
      <label>
        <b>Password</b>
      </label>
      <input type="password" placeholder="Enter Password" name="psw" required />
      <button type="submit">Login</button>
      <button type="button">Cancel</button>
      <span>
        <a href={"/"}>Forgotten password?</a>
      </span>
    </form>
  );
}
export default LoginPage;
