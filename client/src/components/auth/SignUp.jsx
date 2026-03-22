import { useState } from "react";

const SignupForm = ({ onSignup }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!form.name) validationErrors.name = "Name is required";
    if (!form.email) validationErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) validationErrors.email = "Invalid email";

    if (!form.password) validationErrors.password = "Password is required";
    else if (form.password.length < 6) validationErrors.password = "Password must be 6+ chars";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSignup(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input name="name" value={form.name} onChange={handleChange} />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input name="email" value={form.email} onChange={handleChange} />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <label>Password:</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;