import UserSignUp from "../components/auth/UserSignUp";
import "../styles/signup.css";

const Login = ({ onSignup }) => {
  return (
    <div className="login-page">
      {/* LEFT SIDE */}
      <div className="left-panel">
        <div className="overlay" />

        <div className="left-content">
          <h1>Create your account</h1>
          <p>
            Manage your tasks, track applications, and collaborate efficiently.
          </p>

          <div className="features">
            <div>✔ Organize everything in one place</div>
            <div>✔ Work seamlessly with your team</div>
            <div>✔ Track progress in real time</div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-panel">
        <UserSignUp onSignup={onSignup} />
      </div>
    </div>
  );
};

export default Login;
