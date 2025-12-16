// src/pages/ChemistryPage.jsx
import React from "react";
import videos from "../data/videos";
import "../pages.css";

export default function ChemistryPage() {
  const chapters = [
    "Atomic Structure",
    "Chemical Bonding",
    "Stoichiometry & Solutions"
  ];

  return (
    <div className="subject-page">
      <h1>Chemistry — Key JEE Topics</h1>

      <div className="chapter-grid">
        {chapters.map((ch, i) => (
          <div key={i} className="chapter-card">
            <div className="chapter-card-head">
              <h3>{ch}</h3>
              <p className="muted">Revision & practice videos</p>
            </div>

            <div className="videos-preview">
              {(videos.chemistry[ch] || []).slice(0,3).map((v, idx) => (
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
              <a className="btn small" href={(videos.chemistry[ch] && videos.chemistry[ch][0]) ? videos.chemistry[ch][0].url : "#"} target="_blank" rel="noopener noreferrer">Open playlist</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
