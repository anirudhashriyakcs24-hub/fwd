import React, { useState } from "react";
import "./Carousel.css";

export default function Carousel() {
  const cards = [
    { title: "Card Title 1", desc: "Card description 1", tag: "Tag" },
    { title: "Card Title 2", desc: "Card description 2", tag: "Tag" },
    { title: "Card Title 3", desc: "Card description 3", tag: "Tag" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1)
      setCurrentIndex(currentIndex + 1);
  };

  return (
    <section className="hero">
     
      {/* LEFT SIDE */}
      <div className="hero-left">
        <h1>Your Title Here</h1>
        <p>Your subtitle / description here.</p>

        <div className="hero-buttons">
          <button className="primary-btn">Button 1</button>
          <button className="outline-btn">Button 2</button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right">
        <div className="carousel-container">

          <button className="carousel-btn prev" onClick={handlePrev}>
            &#10094;
          </button>

          <div
            className="carousel"
            style={{
              transform: `translateX(-${currentIndex * 360}px)`
            }}
          >
            {cards.map((c, i) => (
              <div key={i} className="card">
                <div className="card-img-placeholder"></div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <span className="tag">{c.tag}</span>
              </div>
            ))}
          </div>

          <button className="carousel-btn next" onClick={handleNext}>
            &#10095;
          </button>
        </div>

        <div className="dots">
          {cards.map((_, i) => (
            <div
              key={i}
              className={`dot ${currentIndex === i ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
            ></div>
          ))}
        </div>
      </div>

    </section>
  );
}