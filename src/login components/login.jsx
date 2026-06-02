import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // login success
    navigate("/dashboard");
  };

  return (
    <div className="login-container">

      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>

      <div className="login-box">

        <div className="icon">👤</div>

        <h1>Welcome to</h1>
        <h2>Employee Management System</h2>

        <p>Login to access your account</p>

        <form onSubmit={handleLogin}>

          <label>Employee Name</label>
          <input type="text" placeholder="Enter employee name" />

          <label>Password</label>
          <input type="password" placeholder="Enter password" />

          <div className="options">
            <span>
              <input type="checkbox" /> Remember me
            </span>

            <a href="/">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>

        </form>
      </div>
    </div>
  );
}

export default Login;