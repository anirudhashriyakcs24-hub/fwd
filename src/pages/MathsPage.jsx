// src/pages/MathsPage.jsx
import React from "react";
import videos from "../data/videos";
import "../pages.css"; // use your existing pages.css name if different

export default function MathsPage() {
  const chapters = [
    "Limits & Continuity",
    "Derivatives & Applications",
    "Integral Calculus",
    "Coordinate Geometry"
  ];

  return (
    <div className="subject-page">
      <h1>Mathematics — Key JEE Topics</h1>

      <div className="chapter-grid">
        {chapters.map((ch, i) => (
          <div key={i} className="chapter-card">
            <div className="chapter-card-head">
              <h3>{ch}</h3>
              <p className="muted">Important problems and concept videos</p>
            </div>

            <div className="videos-preview">
              {(videos.maths[ch] || []).slice(0,3).map((v, idx) => (
                <div key={idx} style={{width:160}}>
                  <iframe
                    className="video-thumb"
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    frameBorder="0"
                    allowFullScreen
                  />
                  <a href={v.url} target="_blank" rel="noopener noreferrer" style={{display:"block", marginTop:6, fontSize:13, color:"#0b82a8", textDecoration:"none"}}>{v.channel}</a>
                </div>
              ))}
            </div>

            <div className="chapter-actions">
              <a className="btn small" href={ (videos.maths[ch] && videos.maths[ch][0]) ? videos.maths[ch][0].url : "#"} target="_blank" rel="noopener noreferrer">Open playlist</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
