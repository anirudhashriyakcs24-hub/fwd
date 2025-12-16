// src/data/videos.js
// Moderate upgrade: up to 3 high-value videos per chapter.
// Video IDs are YouTube IDs for embedding: https://www.youtube.com/watch?v=VIDEO_ID

const videos = {
  maths: {
    "Limits & Continuity": [
      { id: "81v0t4OG6Wc", title: "LIMIT, CONTINUITY & DIFFERENTIABILITY - One Shot", channel: "Physics Wallah (PW)", url: "https://www.youtube.com/watch?v=81v0t4OG6Wc" },
      { id: "dNKdnDZmh4I", title: "Limits - One Shot (Arvind Kalia)", channel: "Arvind Kalia", url: "https://www.youtube.com/watch?v=dNKdnDZmh4I" }
    ],
    "Derivatives & Applications": [
      { id: "ayePGxbHjus", title: "APPLICATION OF DERIVATIVES - One Shot", channel: "Various / JEE Wallah style", url: "https://www.youtube.com/watch?v=ayePGxbHjus" },
      { id: "6T5Bm_TtYdw", title: "Application of Derivatives - Arvind Kalia (Part)", channel: "Arvind Kalia", url: "https://www.youtube.com/watch?v=6T5Bm_TtYdw" }
    ],
    "Integral Calculus": [
      { id: "dKecT2jZkxI", title: "Definite & Indefinite Integration - JEE", channel: "Arvind Kalia / JEE", url: "https://www.youtube.com/watch?v=dKecT2jZkxI" },
      { id: "ISth4dTVbWY", title: "INDEFINITE/DEFINITE INTEGRATION - One Shot", channel: "Physics Wallah (PW)", url: "https://www.youtube.com/watch?v=ISth4dTVbWY" }
    ],
    "Coordinate Geometry": [
      { id: "K_a09clEnlA", title: "Coordinate Geometry / Kinematics style - full concept video", channel: "Top JEE channels", url: "https://www.youtube.com/watch?v=K_a09clEnlA" }
    ]
  },

  physics: {
    "Kinematics": [
      { id: "K_a09clEnlA", title: "Kinematics - Full Chapter (One Shot)", channel: "Physics Wallah / JEE Wallah", url: "https://www.youtube.com/watch?v=K_a09clEnlA" },
      { id: "hY9zZrYuDVk", title: "Kinematics - One Shot (Revision)", channel: "JEE Wallah", url: "https://www.youtube.com/watch?v=hY9zZrYuDVk" }
    ],
    "Laws of Motion": [
      { id: "aPwqkZCBouU", title: "NEWTON LAWS - One Shot", channel: "Top JEE channels (revision)", url: "https://www.youtube.com/watch?v=aPwqkZCBouU" },
      { id: "YzxUZzMrlfQ", title: "Newton Laws - Class lectures (popular)", channel: "Various", url: "https://www.youtube.com/watch?v=YzxUZzMrlfQ" }
    ],
    "Electrostatics": [
      { id: "le2vYj0EaZ0", title: "Electrostatics - One Shot (PW style)", channel: "Physics Wallah / JEE revision", url: "https://www.youtube.com/watch?v=le2vYj0EaZ0" },
      { id: "KfdyRjtqTJU", title: "Electrostatics - All Concepts (Revision)", channel: "Recent JEE revision videos", url: "https://www.youtube.com/watch?v=KfdyRjtqTJU" }
    ]
  },

  chemistry: {
    "Atomic Structure": [
      { id: "uMWwASLGsPs", title: "ATOMIC STRUCTURE - Full Chapter Revision", channel: "JEE Wallah / High view", url: "https://www.youtube.com/watch?v=uMWwASLGsPs" },
      { id: "uDYcGr7JEwE", title: "Atomic Structure - Class Lecture", channel: "Mohit / VJEE", url: "https://www.youtube.com/watch?v=uDYcGr7JEwE" }
    ],
    "Chemical Bonding": [
      { id: "daPAcFFSFdY", title: "Chemical Bonding - PW Class (high views)", channel: "Physics Wallah", url: "https://www.youtube.com/watch?v=daPAcFFSFdY" },
      { id: "F3ZSvrLBeik", title: "Chemical Bonding - One Shot", channel: "Various/Revision", url: "https://www.youtube.com/watch?v=F3ZSvrLBeik" }
    ],
    "Stoichiometry & Solutions": [
      { id: "cLZWMhZqb9w", title: "Complete Chemistry Revision / Stoichiometry", channel: "Revision playlists", url: "https://www.youtube.com/watch?v=cLZWMhZqb9w" }
    ]
  }
};

export default videos;
