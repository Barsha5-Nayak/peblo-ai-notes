import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

          
          <form
            onSubmit={(e) => {
            e.preventDefault();

            const user = {
            name,
            email,
            password,
           };

           localStorage.setItem("user", JSON.stringify(user));

           alert("Registration Successful 🚀");

           navigate("/");
           }}
           >

            <input
             type="text"
             placeholder="Enter your name"
             value={name}
             onChange={(e) => setName(e.target.value)}
           />

            <input
             type="email"
             placeholder="Enter your email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
           />

           <input
             type="password"
             placeholder="Create password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
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