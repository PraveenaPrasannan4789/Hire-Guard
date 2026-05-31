import UserLogin from "../components/auth/UserLogin";
import "../styles/login.css";

const Login = ({ onLogin }) => {
  return (
    <div className="login">
      {/* LEFT SIDE */}
      <div className="left">
        <div className="left-content">
          <h1>Welcome Back 👋</h1>

          <p>
            Sign in to manage your job applications, track interviews, and
            continue your career journey with HireGuard.
          </p>

          {/* Trust Badge */}
          <div className="highlight">
            🔒 Your data is secure with enterprise-grade encryption
          </div>

          {/* Reviews */}
          <div className="reviews">
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>"Helped me land interviews faster!"</p>
              <span>- Sarah J.</span>
            </div>

            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>"Best job tracker I’ve ever used."</p>
              <span>- Alex M.</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <div className="right-box">
          <UserLogin onLogin={onLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
