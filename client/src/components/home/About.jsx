import { useNavigate } from "react-router-dom";
import Faq from "./Faq";
import "../../styles/about.css";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-wrapper">
      {/* HERO */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About HireGuard</h1>
          <p>
            A smart job application tracker that helps you manage applications,
            interviews, and career progress in one clean dashboard.
          </p>

          <button onClick={() => navigate("/login")}>Get Started</button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="career"
          />
        </div>
      </section>

      {/* WHAT IS */}
      <section className="about-card">
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
            alt="dashboard"
          />
        </div>

        <div className="card-content">
          <h2>What is HireGuard?</h2>
          <p>
            HireGuard helps job seekers track applications, interviews, and
            progress analytics in a simple and powerful dashboard.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="about-features">
        <h2>Why Choose HireGuard?</h2>

        <div className="feature-grid">
          <div className="feature-box">
            <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f" />
            <h3>Tracking</h3>
            <p>Manage all job applications easily.</p>
          </div>

          <div className="feature-box">
            <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe" />
            <h3>Scheduling</h3>
            <p>Never miss interviews or deadlines.</p>
          </div>

          <div className="feature-box">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" />
            <h3>Insights</h3>
            <p>Understand your job search progress.</p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="about-mission">
        <h2>Our Mission</h2>

        <div className="mission-grid">
          <div className="mission-box">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" />
            <h4>Faster Applications</h4>
            <p>Apply in seconds with smart workflow.</p>
          </div>

          <div className="mission-box">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" />
            <h4>Smart Matching</h4>
            <p>Find jobs that match your profile.</p>
          </div>

          <div className="mission-box">
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" />
            <h4>Secure Platform</h4>
            <p>Your data is always protected.</p>
          </div>

          <div className="mission-box">
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72" />
            <h4>Track Progress</h4>
            <p>Monitor everything in one place.</p>
          </div>
        </div>
      </section>
      <Faq />

      {/* CTA */}
      <section className="about-cta">
        <h2>Start Your Journey Today</h2>
        <button onClick={() => navigate("/login")}>Get Started</button>
      </section>
    </div>
  );
};

export default About;
