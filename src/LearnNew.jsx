import "./LearnNew.css"; // <-- make sure to import your CSS

export default function LearnNew() {
  return (
    <section className="stats-section">
      <h1>Learn something new with edX</h1>

      <p className="subtitle">
        edX helps learners around the world grow their skills and careers.
        Join our learning community today!
      </p>

      <div className="stats-container">

        <div className="stat-box">
          <h2>86M</h2>
          <p>global learners, in nearly every industry, are upskilling with edX.</p>
        </div>

        <div className="divider"></div>

        <div className="stat-box">
          <h2>84%</h2>
          <p>of edX learners have seen professional growth after earning a certificate.</p>
        </div>

        <div className="divider"></div>

        <div className="stat-box">
          <h2>140K</h2>
          <p>professionals have had their lives changed through Executive Education.</p>
        </div>

        <div className="divider"></div>

        <div className="stat-box">
          <h2>42K</h2>
          <p>edX learners have already found their degree program this year.</p>
        </div>
      </div>

      <a href="/" className="explore-link">
        Explore courses and degrees today
      </a>
    </section>
  );
}
