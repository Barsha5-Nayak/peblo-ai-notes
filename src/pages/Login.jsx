import { useNavigate } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="auth-container">
      <div className="auth-left">
        <h1>Peblo AI Notes</h1>
        <p>
          Create, organize and summarize your notes with AI-powered tools.
        </p>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <h2>Welcome Back</h2>

          <form onSubmit={(e) => {
              e.preventDefault();
              navigate("/dashboard");
            }}>
            <input type="email" placeholder="Enter your email" />

            <input type="password" placeholder="Enter your password" />

            <button type="submit">
           Login
           </button>
          </form>
          

          <p className="bottom-text">
            Don’t have an account?
            <Link to="/register"> Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;