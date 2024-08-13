import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    username: "mohammad",
  });
  const [clicked, setClicked] = useState(false);

  function handleChange(e) {
    setUser({ ...user, username: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setClicked(!clicked);
    console.log(user.username);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>{clicked ? user.username : ""}</div>
        <div className="inputDiv">
          <label className="labelStyle" htmlFor="name">
            username:
          </label>
          <input
            className="inputStyle"
            type="text"
            id="name"
            value={user.username}
            onChange={handleChange}
            placeholder="username"
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
