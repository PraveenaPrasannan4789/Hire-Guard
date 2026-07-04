import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/usersignup.css";

const UserSignUp = ({ onSignup }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    let validationErrors = {};
    if (!form.name) validationErrors.name = "Name is required";
    if (!form.email) validationErrors.email = "Email is required";
    if (!form.password || form.password.length < 6)
      validationErrors.password = "Min 6 characters required";

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        onSignup(form);
        navigate("/dashboard");
      } else {
        setErrors({ general: data.message || "Signup failed" });
      }
    } catch (err) {
      setErrors({ general: "Network error" });
    }
  };

  const handleBack = () => {
    navigate(-1); // goes back to previous page
    // OR use: navigate("/") if you want fixed route
  };

  return (
    <div className="signup-card">
      <h2>Create Account</h2>
      <p className="subtitle">Start your journey with us</p>

      <form onSubmit={handleSubmit} className="signup-form">
        <input
          name="name"
          placeholder="Full name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          name="email"
          placeholder="Email address"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        {errors.general && <p className="error">{errors.general}</p>}

        <button type="submit">Create Account</button>
      </form>

      {/* BACK BUTTON */}
      <button type="button" className="back-btn" onClick={handleBack}>
        ← Go Back
      </button>
    </div>
  );
};

export default UserSignUp;
