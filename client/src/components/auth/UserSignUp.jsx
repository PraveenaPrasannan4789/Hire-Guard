import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/usersignup.css";

const Signup = ({ onSignup }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    let validationErrors = {};
    e.preventDefault();
    if (!form.name) {
      validationErrors.name = "name is required";
    }
    if (!form.email) {
      validationErrors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      validationErrors.email = "invalid email";
    }

    if (!form.password) validationErrors.password = "Password is required";
    else if (form.password.length < 6)
      validationErrors.password = "Password must be 6+ chars";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const res = await fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form }),
      });
      const data = await res.json();
      if (data.success) {
        onSignup(form);
        navigate("/dashboard");
      } else {
        setErrors({ general: data.message || "SignUp failed" });
      }
    } catch (err) {
      setErrors({ general: data.message || "Network Error" });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlelogOut = () => {
    console.log("am here");
    navigate("/");
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h1>Create Account</h1>
        <p className="signup-subtitle">
          Start tracking your job applications today.
        </p>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create a password"
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          {errors.general && (
            <p className="error general-error">{errors.general}</p>
          )}

          <button type="submit" className="signup-btn">
            Create Account
          </button>
        </form>

        <button type="button" className="back-btn" onClick={handlelogOut}>
          ← Go Back
        </button>
      </div>
    </div>
  );
};

export default Signup;
