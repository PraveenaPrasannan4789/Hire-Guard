import JobList from "../components/jobs/JobList";
import "../styles/dashboard.css";

const DashBoard = ({ handlelogOut }) => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <span className="dashboard-label">JOB TRACKER</span>
          <h1>My Applications</h1>
          <p>Keep track of your job applications and interview progress.</p>
        </div>

        <button className="logout-btn" onClick={handlelogOut}>
          Sign out
        </button>
      </header>

      <section className="stats">
        <div className="stat-card">
          <span className="stat-label">APPLICATIONS</span>
          <strong>0</strong>
          <p>Total applications</p>
        </div>

        <div className="stat-card">
          <span className="stat-label">INTERVIEWS</span>
          <strong>0</strong>
          <p>Upcoming interviews</p>
        </div>

        <div className="stat-card">
          <span className="stat-label">OFFERS</span>
          <strong>0</strong>
          <p>Offers received</p>
        </div>
      </section>

      <section className="jobs-section">
        <div className="section-heading">
          <div>
            <span className="section-label">APPLICATIONS</span>
            <h2>Recent applications</h2>
          </div>

          <button className="add-job-btn">Add application</button>
        </div>

        <JobList />
      </section>
    </div>
  );
};

export default DashBoard;
