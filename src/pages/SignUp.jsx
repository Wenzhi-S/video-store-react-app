import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Account.css";

function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [signUpMessage, setSignUpMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (user.password !== user.confirmPassword) {
      setSignUpMessage("Passwords don't match!");
      setTimeout(() => setSignUpMessage(""), 5000);
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/customers/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: user.password,
        }),
      });

      if (response.ok) {
        setSignUpMessage("Sign-up successful! Redirecting...");
        setTimeout(() => navigate("/login"), 3000);
      } else {
        setSignUpMessage("Sign-up failed. Please try again.");
        setTimeout(() => setSignUpMessage(""), 5000);
      }
    } catch (error) {
      console.error("Error:", error);
      setSignUpMessage("An error occurred during sign-up. Please try again.");
      setTimeout(() => setSignUpMessage(""), 5000);
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
        />
        <button type="submit" className="signup-btn">
          Sign Up
        </button>
        {signUpMessage && <div className="signup-message">{signUpMessage}</div>}
      </form>
    </div>
  );
}

export default SignUp;
