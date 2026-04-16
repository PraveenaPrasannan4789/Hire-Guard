import { useNavigate } from "react-router-dom";
import "../../styles/review.css";

import { useState } from "react";
import "../../styles/review.css";

const Review = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const reviews = [
    {
      id: 1,
      img: "https://i.pravatar.cc/80?img=12",
      rating: 5,
      text: "I was struggling to manage multiple job applications...",
      name: "Sarah Johnson",
      role: "Software Engineer",
    },
    {
      id: 2,
      img: "https://i.pravatar.cc/80?img=32",
      rating: 4,
      text: "Amazing tool! It changed my job tracking completely.",
      name: "David Miller",
      role: "Frontend Developer",
    },
    {
      id: 3,
      img: "https://i.pravatar.cc/80?img=45",
      rating: 5,
      text: "Very clean and simple to use.",
      name: "Priya Sharma",
      role: "UI/UX Designer",
    },
  ];

  return (
    <section className="review-section">
      <div className="review-container">
        {reviews.map((review) => (
          <div
            className="card"
            key={review.id}
            onClick={() => setSelected(review)}
            style={{ cursor: "pointer" }}
          >
            <img src={review.img} alt="user" className="user-img" />

            <div className="stars">{"⭐".repeat(review.rating)}</div>

            <p>{review.text}</p>
            <h4>{review.name}</h4>
            <span>{review.role}</span>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Ready to Get Started?</h2>
            <p>
              Join thousands of users managing their job applications smartly.
            </p>

            <button className="primary-btn" onClick={() => navigate("/login")}>
              Get Started
            </button>

            <button className="close-btn" onClick={() => setSelected(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Review;
