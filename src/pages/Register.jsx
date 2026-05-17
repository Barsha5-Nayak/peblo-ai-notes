import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-left">
        <h1>Peblo AI Notes</h1>

        <p>
          Your collaborative AI-powered workspace for smart productivity.
        </p>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <h2>Create Account</h2>

          <form>
            <input
              type="text"
              placeholder="Enter your name"
            />

            <input
              type="email"
              placeholder="Enter your email"
            />

            <input
              type="password"
              placeholder="Create password"
            />

            <button type="submit">
              Register
            </button>
          </form>

          <p className="bottom-text">
            Already have an account?
            <Link to="/"> Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;