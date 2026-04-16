import { useNavigate } from "react-router-dom";

import "../../styles/managejob.css";
import img from "../../assets/dashboard.png";

const ManageJob = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="manage-section">
        {/* left section */}
        <div className="left">
          <h1 className="manage-heading">
            {" "}
            Manage Your Job Applications Effortlessly
          </h1>
          <p className="manage-paragraph">
            Track, organize, and land your dream job faster with smart insights.
          </p>
          <div className="btn-group">
            <button className="primary-btn" onClick={() => navigate("/login")}>
              Get Started
            </button>
            <button className="secondary-btn">View Demo</button>
          </div>
        </div>

        <div className="right">
          <div className="card">
            {/* right section */}
            <img className="card-img" src={img} alt="img"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageJob;
