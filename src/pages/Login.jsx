import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

          <form
            onSubmit={(e) => {
            e.preventDefault();

            if (!email || !password) {
            alert("Please fill all fields");
            return;
           }

           const savedUser = JSON.parse(localStorage.getItem("user"));

           if (
           savedUser &&
           savedUser.email === email &&
           savedUser.password === password
           ) {
           alert("Login Successful 🚀");
           navigate("/dashboard");
           } else {
           alert("Invalid Email or Password");
           }
           }}
           >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
           />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
           />
            

            <p
             className="forgot-password"
             onClick={() =>
             alert(
             "Reset password functionality will be added with backend integration 🚀"
             )
             }
             >
              Forgot Password?
           </p>


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