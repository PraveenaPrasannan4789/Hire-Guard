import { useNavigate } from "react-router-dom";
import "../../styles/about.css";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about-wrapper">
      {/* Hero */}
      <section className="about-hero">
        <h1>About HireGuard</h1>
        <p>
          Your smart job application tracker to manage interviews, applications,
          and career progress in one place.
        </p>
      </section>

      {/* What is HireGuard */}
      <section className="about-card">
        <h2>What is HireGuard?</h2>
        <p>
          HireGuard helps job seekers stay organized by tracking applications,
          interview stages, and progress analytics — all in a simple dashboard.
        </p>
      </section>

      {/* Features */}
      <section className="about-features">
        <h2>Why Choose HireGuard?</h2>

        <div className="feature-grid">
          <div className="feature-box">
            <h3>📊 Tracking</h3>
            <p>Track all your job applications easily.</p>
          </div>

          <div className="feature-box">
            <h3>🗓 Scheduling</h3>
            <p>Never miss interviews or deadlines.</p>
          </div>

          <div className="feature-box">
            <h3>📈 Insights</h3>
            <p>Understand your job search progress.</p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To simplify job hunting and help candidates stay organized, confident,
          and successful in their career journey.
        </p>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Start Your Journey Today</h2>
        <button onClick={() => navigate("/login")}>Get Started</button>
      </section>
    </div>
  );
};

export default About;
