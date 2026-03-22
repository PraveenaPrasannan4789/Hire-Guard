import { useState } from "react";

const UserLogin = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    if (!email) {
      errors.email = "Email is Required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid Email";
    }
    if (!password) {
      errors.password = "Password required";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    onLogin({email,password})
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>User Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
          {validationErrors.email && (
            <p style={{ color: "red" }}>{validationErrors.email}</p>
          )}
      </div>
      <div>
        <label>Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        {validationErrors.password && (
          <p style={{ color: "red" }}>{validationErrors.password}</p>
        )}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default UserLogin;

// import { useState } from "react";

// const LoginForm = ({ onLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let validationErrors = {};

//     if (!email) validationErrors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(email)) validationErrors.email = "Invalid email";

//     if (!password) validationErrors.password = "Password is required";

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     // Call parent login function or API
//     onLogin({ email, password });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Email:</label>
//         <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
//         {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
//       </div>

//       <div>
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
//       </div>

//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;
