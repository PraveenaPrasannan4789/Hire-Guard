import "../../styles/landjob.css";

const Landjob = () => {
  return (
    <>
      <section className="landjob-banner">
        {/* Small Badge */}
        <div className="landjob-badge">✨ Your career, organized</div>

        {/* Heading */}
        <h1 className="landjob-title">
          Land your next job <br />
          faster with <span>HireGuard</span>
        </h1>

        {/* Subtitle */}
        <p className="landjob-subtitle">
          Personalized AI tools, track and manage your job applications, and
          more.
        </p>

        {/* Users + Ratings */}
        <div className="landjob-social-proof">
          {/* Avatars */}
          <div className="avatar-group">
            <img src="https://i.pravatar.cc/100?img=1" alt="user" />
            <img src="https://i.pravatar.cc/100?img=2" alt="user" />
            <img src="https://i.pravatar.cc/100?img=3" alt="user" />
            <img src="https://i.pravatar.cc/100?img=4" alt="user" />
            <img src="https://i.pravatar.cc/100?img=5" alt="user" />
          </div>

          {/* Ratings */}
          <div className="ratings">
            <div className="stars">★★★★★</div>
            <p>1,000,000+ jobs tracked</p>
          </div>

          {/* Heart */}
          <div className="heart">💚</div>
        </div>

        {/* Buttons */}
        <div className="landjob-buttons">
          <button className="primary-btn">Sign up for free →</button>

          <button className="secondary-btn">Learn more</button>
        </div>
      </section>
    </>
  );
};

export default Landjob;
