import UserSignUp from "../components/auth/UserSignUp";
import "../styles/signup.css";

const Login = ({ onSignup }) => {
  return (
    <div className="login">
      <div className="left">
        <div className="bg-circle one"></div>
        <div className="bg-circle two"></div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="signup"
          className="hero-image"
        />

        <h1>Create your account 🚀</h1>

        <p>
          Join our platform to manage tasks, track progress, and collaborate
          efficiently with your team.
        </p>

        <div className="highlight">
          💡 Tip: Use a strong password with at least 6 characters for better
          security.
        </div>
      </div>
      <div className="right">
        <div className="right-box">
          {" "}
          <UserSignUp onSignup={onSignup} />
        </div>
      </div>
    </div>
  );
};

export default Login;
